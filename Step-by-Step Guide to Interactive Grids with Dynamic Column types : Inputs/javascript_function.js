/**
 * Sets column visibility in an Oracle APEX Interactive Grid based on the COLUMN_TYPE value for each row.
 * 
 * @param {string} pi_grid - Static ID of the Interactive Grid region
 * 
 * This function dynamically shows or hides cells in each row based on the value stored in the "COLUMN_TYPE" column.
 * For each row, it shows only cells with a CSS class matching the COLUMN_TYPE value ('dropdown', 'date', 'varchar', 'number'),
 * plus any cells with the 'donothide' or 'has-button' class. All other cells are hidden.
 * 
 * The function optimizes performance by:
 * - Using a reusable filter function to avoid repetitive code
 * - Processing all records in a single model traversal
 * - Skipping invalid column types
 */
function setcolumns(pi_grid) {
  const region = apex.region(pi_grid);
  const grid = region.widget().interactiveGrid("getViews", "grid");
  const model = grid.model;
  const gridElement = region.element;
  
  // Create a reusable filterAndShow function outside the loop
  const filterAndShow = (row$, columnType) => {
    // If there is a - in the columnType, take only the part after it
    if (columnType.includes('-')) {
      columnType = columnType.split('-')[1];
    }
    const td = row$.find("td");
    // Hide all cells that don't match the column type and don't have the donothide class
    td.each(function() {
      const cell = $(this);
      const shouldShow = cell.hasClass(columnType) || cell.hasClass('donothide') || cell.hasClass('has-button');
      cell.toggle(shouldShow);
    });
  };

  // Define valid column types to avoid repetitive if/else statements
  const validTypes = ['dropdown', 'date', 'varchar', 'number'];

  // Process all records in one go
  model.forEach(function(record) {
    const rowId = model.getRecordId(record);
    var columnType = model.getValue(record, "COLUMN_TYPE");
    console.log(columnType);
    console.log(`Row ID: ${rowId}, Column Type: ${columnType}`);
    // If the column type is object take a v value
    if (typeof columnType === 'object' && columnType !== null) {
      columnType = columnType.v;
    }
    // If columnType is not valid, default to varchar
    if (!columnType || !validTypes.some(type => columnType.includes(type))) {
      columnType = 'varchar';
      console.log(`Row ID: ${rowId} has invalid column type, defaulting to varchar`);
    }
    
    const row$ = gridElement.find(`tr[data-id='${rowId}']`);
    filterAndShow(row$, columnType);
  });
}