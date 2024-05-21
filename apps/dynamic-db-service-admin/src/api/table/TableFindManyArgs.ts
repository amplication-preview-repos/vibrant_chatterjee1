import { TableWhereInput } from "./TableWhereInput";
import { TableOrderByInput } from "./TableOrderByInput";

export type TableFindManyArgs = {
  where?: TableWhereInput;
  orderBy?: Array<TableOrderByInput>;
  skip?: number;
  take?: number;
};
