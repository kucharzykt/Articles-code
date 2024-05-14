-- Procedure: p_parse_and_insert_json_to_table
-- Description: This procedure parses a JSON string and inserts the data into corresponding tables in the database.
-- Parameters:
--   p_json (IN): The JSON string to be parsed and inserted.
-- Author: Tomáš Kucharzyk
-- Date: May 2024
create or replace procedure p_parse_and_insert_json_to_table(p_json in clob) 
is
  l_table varchar2(45 char);
  l_json_query clob;
  l_json clob := p_json;
begin

  -- Step 1: Get the structure from JSON and populate the json_structure_to_process table

  -- Clear the existing data in json_structure_to_process table
  delete from json_structure_to_process;

  -- Insert the structure information into json_structure_to_process table
  insert into json_structure_to_process (c_path, path_name, c_type, c_length, object_type, c_level, table_exists, parent_path)
  select 
        c_path,
        SUBSTR(c_path, INSTR(c_path, '.', -1) + 1) as path_name,
        c_type,
        c_length + 10 as c_length,
        -- Assume that the object type is a table if it's an array
        case when c_type = 'array' then 'table'
            when REGEXP_COUNT(c_path, '\.') > 1 then 'column'
            else null
        end as object_type,
        REGEXP_COUNT(c_path, '\.') as c_level,
        -- Check if table esxists
        case when c_type = 'array' then (SELECT COUNT(TABLE_NAME) FROM all_tables WHERE TABLE_NAME = upper(SUBSTR(c_path, INSTR(c_path, '.', -1) + 1)))
            else null
        end as table_exists,
        -- Get the parent path for the column
        case when REGEXP_COUNT(c_path, '\.') > 1 then SUBSTR(
          c_path, 
          INSTR(c_path, '.', 1, REGEXP_COUNT(c_path, '\.') - 1) + 1,
          INSTR(c_path, '.', -1) - INSTR(c_path, '.', 1, REGEXP_COUNT(c_path, '\.') - 1) - 1
        ) else null 
        end as parent_path
    from 
      -- Extract the table name and columns from the JSON
        json_table((select json_dataguide(l_json) from dual), '$[*]' 
        COLUMNS (
          c_path VARCHAR2(100) PATH '$."o:path"',
          c_type VARCHAR2(100) PATH '$.type',
          c_length NUMBER PATH '$."o:length"'
        )
    )
    where REGEXP_COUNT(c_path, '\.') > 0;

  -- Step 2: Create insert statements and insert the values into the tables

  -- Loop through the json_structure_to_process table to process each table
  for json_table_row in (
    select c_path, path_name, c_level
    from json_structure_to_process
    where object_type = 'table'
    and nvl(table_exists,0) = 1
    order by c_level asc
  )
  loop
    dbms_output.put_line('Processing table: ' || json_table_row.path_name);
    -- Inside Table Loop
    -- Start building the insert statement
    l_json_query := 'insert into ' || json_table_row.path_name || ' (';

    -- Loop through the json_structure_to_process table to process each column of the current table
    for json_row in (
      select 
          c_path,
          path_name,
          c_type,
          c_length,
          object_type
      from json_structure_to_process
      where parent_path = json_table_row.path_name
      and object_type = 'column'
      -- Confirm that the column exists in the table
      and upper(path_name) in (select column_name from all_tab_columns where table_name = upper(json_table_row.path_name))
    ) loop
      -- Append the column name to the insert statement
      l_json_query := l_json_query || json_row.path_name || ',';
    end loop;

    -- Start the JSON_TABLE function in the insert statement
    l_json_query := rtrim(l_json_query,',') || ') select * from json_table('''||l_json||''','''||json_table_row.c_path||'[*]'' columns (';

    -- Loop through the json_structure_to_process table again to get the columns for the JSON_TABLE function
    for json_row in (
       select 
          c_path,
          path_name,
          c_type,
          c_length,
          object_type
      from json_structure_to_process
      where parent_path = json_table_row.path_name
      and object_type = 'column'
      -- Confirm that the column exists in the table
      and upper(path_name) in (select column_name from all_tab_columns where table_name = upper(json_table_row.path_name))
    )
    LOOP
    dbms_output.put_line('Processing column: ' || json_row.path_name);
      -- Add columns into the JSON_TABLE function
      l_json_query := l_json_query || json_row.path_name || ' ' || 
      case when json_row.c_type = 'string' and upper(json_row.path_name) not like '%DATE%' then 'VARCHAR2('||json_row.c_length||')'
          when json_row.c_type = 'number' then 'NUMBER'
          when json_row.c_type = 'date' or upper(json_row.path_name) like '%DATE%' then 'DATE'
          else null
      end || ' PATH ''$.'||json_row.path_name||''',';
    end loop;

    -- Complete the insert statement
    l_json_query := rtrim(l_json_query,',') || '))';

    -- Execute the insert statement dynamically
    dbms_output.put_line(l_json_query);
    EXECUTE IMMEDIATE l_json_query;

  end loop;

end;