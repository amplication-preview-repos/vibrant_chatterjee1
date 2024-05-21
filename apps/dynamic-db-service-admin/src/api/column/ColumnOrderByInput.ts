import { SortOrder } from "../../util/SortOrder";

export type ColumnOrderByInput = {
  columnName?: SortOrder;
  createdAt?: SortOrder;
  dataType?: SortOrder;
  id?: SortOrder;
  isNullable?: SortOrder;
  updatedAt?: SortOrder;
};
