insert into projects (id,name,owner,created_by) 
select * 
from json_table('input_json','$.projects[*]' 
    columns (
        id         VARCHAR2(11) PATH '$.id',
        name       VARCHAR2(26) PATH '$.name',
        owner      VARCHAR2(18) PATH '$.owner',
        created_by VARCHAR2(12) PATH '$.created_by'
    )
);

insert into links (url,name) 
select * 
from json_table('input_json','$.projects.links[*]' 
    columns (
        url  VARCHAR2(42) PATH '$.url',
        name VARCHAR2(26) PATH '$.name'
    )
);

insert into action_items (owner,action,status,the_desc,project_id) 
select * 
from json_table('input_json','$.projects.action_items[*]' 
    columns (
        owner      VARCHAR2(14) PATH '$.owner',
        action     VARCHAR2(18) PATH '$.action',
        status     VARCHAR2(26) PATH '$.status',
        the_desc   VARCHAR2(14) PATH '$.the_desc',
        project_id VARCHAR2(11) PATH '$.project_id'
    )
);

insert into milestones (name,owner,status,project_id,closed_date,started_date)
select * 
from json_table('input_json','$.projects.milestones[*]' 
    columns (
        name         VARCHAR2(26) PATH '$.name',
        owner        VARCHAR2(14) PATH '$.owner',
        status       VARCHAR2(26) PATH '$.status',
        project_id   VARCHAR2(11) PATH '$.project_id',
        closed_date  DATE         PATH '$.closed_date',
        started_date DATE         PATH '$.started_date'
    )
);

insert into attachments (project_id,contributed_by) 
select * 
from json_table('input_json','$.projects.attachments[*]' 
    columns (
        project_id     VARCHAR2(11) PATH '$.project_id',
        contributed_by VARCHAR2(12) PATH '$.contributed_by'
    )
);