import { SortOrder } from "../../util/SortOrder";

export type RelationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  relationType?: SortOrder;
  sourceTable?: SortOrder;
  targetTable?: SortOrder;
  updatedAt?: SortOrder;
};
