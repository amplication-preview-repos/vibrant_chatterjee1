import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

export const ColumnEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="columnName" source="columnName" />
        <SelectInput
          source="dataType"
          label="dataType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput label="isNullable" source="isNullable" />
      </SimpleForm>
    </Edit>
  );
};
