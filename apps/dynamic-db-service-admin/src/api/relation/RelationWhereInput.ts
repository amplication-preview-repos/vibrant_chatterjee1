import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RelationWhereInput = {
  id?: StringFilter;
  relationType?: "Option1";
  sourceTable?: StringNullableFilter;
  targetTable?: StringNullableFilter;
};
