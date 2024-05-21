import { Relation as TRelation } from "../api/relation/Relation";

export const RELATION_TITLE_FIELD = "sourceTable";

export const RelationTitle = (record: TRelation): string => {
  return record.sourceTable?.toString() || String(record.id);
};
