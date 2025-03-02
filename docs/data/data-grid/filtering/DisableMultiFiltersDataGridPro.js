import * as React from 'react';
import { DataGridPro, GridToolbar } from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

export default function DisableMultiFiltersDataGridPro() {
  const { data } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });

  const filterColumns = ({ field, columns, currentFilters }) => {
    // remove already filtered fields from list of columns
    const filteredFields = currentFilters?.map((item) => item.columnField);
    return columns
      .filter(
        (colDef) =>
          colDef.filterable &&
          (colDef.field === field || !filteredFields.includes(colDef.field)),
      )
      .map((column) => column.field);
  };

  const getColumnForNewFilter = ({ currentFilters, columns }) => {
    const filteredFields = currentFilters?.map(({ columnField }) => columnField);
    const columnForNewFilter = columns
      .filter(
        (colDef) => colDef.filterable && !filteredFields.includes(colDef.field),
      )
      .find((colDef) => colDef.filterOperators?.length);
    return columnForNewFilter?.field;
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGridPro
        {...data}
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          filterPanel: {
            filterFormProps: {
              filterColumns,
            },
            getColumnForNewFilter,
          },
        }}
      />
    </div>
  );
}
