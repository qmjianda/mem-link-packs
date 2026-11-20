/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/terminfo.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const boolean_capability = struct("boolean_capability", [
  i8("value", {  }),
]);

const string_table_value_offset = struct("string_table_value_offset", [
  i16("value", {  }),
]);

const string_table_name_offset = struct("string_table_name_offset", [
  i16("value", {  }),
]);

const legacy_header = struct("legacy_header", [
  i16("format", { values: { "282": "legacy", "542": "extended" } }),
  i16("name_size", {  }),
  i16("boolean_count", {  }),
  i16("numerical_count", {  }),
  i16("string_count", {  }),
  i16("string_table_size", {  }),
]);

const extended_header = struct("extended_header", [
  i16("boolean_count", {  }),
  i16("numerical_count", {  }),
  i16("string_count", {  }),
  i16("table_item_count", {  }),
  i16("string_table_size", {  }),
]);

const extended_data = struct("extended_data", [
  record("header", extended_header),
]);

const file = struct("file", [
  record("header", legacy_header),
]);

export default definePack({
  name: "Compiled term info entry",
  endian: "little",
  pointerSize: 8,
  types: [boolean_capability, string_table_value_offset, string_table_name_offset, legacy_header, extended_header, extended_data, file],
  nodes: {
    "entry": structNode(file, { label: "file（入口）" }),
    "boolean_capability": structNode(boolean_capability, { label: "boolean_capability" }),
    "string_table_value_offset": structNode(string_table_value_offset, { label: "string_table_value_offset" }),
    "string_table_name_offset": structNode(string_table_name_offset, { label: "string_table_name_offset" }),
    "legacy_header": structNode(legacy_header, { label: "legacy_header" }),
    "extended_header": structNode(extended_header, { label: "extended_header" }),
    "extended_data": structNode(extended_data, { label: "extended_data" }),
  },
});


/*
未移植项：
- file.terminal_names: 类型 terminal_name 不可移植
*/
