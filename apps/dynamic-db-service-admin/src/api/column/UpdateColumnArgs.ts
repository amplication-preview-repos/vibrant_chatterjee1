import { ColumnWhereUniqueInput } from "./ColumnWhereUniqueInput";
import { ColumnUpdateInput } from "./ColumnUpdateInput";

export type UpdateColumnArgs = {
  where: ColumnWhereUniqueInput;
  data: ColumnUpdateInput;
};
