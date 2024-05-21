import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ColumnList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Columns"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="columnName" source="columnName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dataType" source="dataType" />
        <TextField label="ID" source="id" />
        <BooleanField label="isNullable" source="isNullable" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
