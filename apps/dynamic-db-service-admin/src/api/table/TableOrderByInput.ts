import { SortOrder } from "../../util/SortOrder";

export type TableOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  schema?: SortOrder;
  tableName?: SortOrder;
  updatedAt?: SortOrder;
};
