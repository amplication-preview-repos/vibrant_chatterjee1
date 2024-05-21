import { ColumnWhereInput } from "./ColumnWhereInput";
import { ColumnOrderByInput } from "./ColumnOrderByInput";

export type ColumnFindManyArgs = {
  where?: ColumnWhereInput;
  orderBy?: Array<ColumnOrderByInput>;
  skip?: number;
  take?: number;
};
