import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TableWhereInput = {
  id?: StringFilter;
  schema?: StringNullableFilter;
  tableName?: StringNullableFilter;
};
