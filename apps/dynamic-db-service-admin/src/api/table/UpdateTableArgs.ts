import { TableWhereUniqueInput } from "./TableWhereUniqueInput";
import { TableUpdateInput } from "./TableUpdateInput";

export type UpdateTableArgs = {
  where: TableWhereUniqueInput;
  data: TableUpdateInput;
};
