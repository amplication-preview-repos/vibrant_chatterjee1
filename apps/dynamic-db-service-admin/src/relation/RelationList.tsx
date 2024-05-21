import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RelationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Relations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="relationType" source="relationType" />
        <TextField label="sourceTable" source="sourceTable" />
        <TextField label="targetTable" source="targetTable" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
