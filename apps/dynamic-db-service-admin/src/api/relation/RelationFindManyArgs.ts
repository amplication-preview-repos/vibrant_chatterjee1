import { RelationWhereInput } from "./RelationWhereInput";
import { RelationOrderByInput } from "./RelationOrderByInput";

export type RelationFindManyArgs = {
  where?: RelationWhereInput;
  orderBy?: Array<RelationOrderByInput>;
  skip?: number;
  take?: number;
};
