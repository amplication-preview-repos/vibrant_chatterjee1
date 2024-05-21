import { Table as TTable } from "../api/table/Table";

export const TABLE_TITLE_FIELD = "tableName";

export const TableTitle = (record: TTable): string => {
  return record.tableName?.toString() || String(record.id);
};
