import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TableEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="schema" multiline source="schema" />
        <TextInput label="tableName" source="tableName" />
      </SimpleForm>
    </Edit>
  );
};
