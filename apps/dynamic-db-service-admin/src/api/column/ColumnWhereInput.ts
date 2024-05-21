import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ColumnWhereInput = {
  columnName?: StringNullableFilter;
  dataType?: "Option1";
  id?: StringFilter;
  isNullable?: BooleanNullableFilter;
};
