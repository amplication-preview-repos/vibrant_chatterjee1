import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TableCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="schema" multiline source="schema" />
        <TextInput label="tableName" source="tableName" />
      </SimpleForm>
    </Create>
  );
};
