import { Column as TColumn } from "../api/column/Column";

export const COLUMN_TITLE_FIELD = "columnName";

export const ColumnTitle = (record: TColumn): string => {
  return record.columnName?.toString() || String(record.id);
};
