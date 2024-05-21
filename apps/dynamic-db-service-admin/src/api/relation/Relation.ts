export type Relation = {
  createdAt: Date;
  id: string;
  relationType?: "Option1" | null;
  sourceTable: string | null;
  targetTable: string | null;
  updatedAt: Date;
};
