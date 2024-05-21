import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const ColumnShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="columnName" source="columnName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dataType" source="dataType" />
        <TextField label="ID" source="id" />
        <BooleanField label="isNullable" source="isNullable" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
