/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/a3/a3_rap.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 3 项（见文件末尾）
const ArrayItem = struct("ArrayItem", [
  u8("type", { values: { "0": "STRING", "1": "FLOAT", "2": "INTEGER", "3": "ARRAY", "4": "VARIABLE" } }),
]);

const Member = struct("Member", [
  u8("type", { values: { "0": "CLASS", "1": "LITERAL", "2": "ARRAY", "3": "EXTERNAL", "4": "DELETE", "5": "ARRAY_EXTENSION" } }),
]);

const Enums = struct("Enums", [
  u32("count_items", {  }),
]);

const RAP = struct("RAP", [
  str("signature", { size: 4 }),
]);

export default definePack({
  name: "Arma 3 binary configuration format",
  endian: "little",
  pointerSize: 8,
  types: [ArrayItem, Member, Enums, RAP],
  nodes: {
    "entry": structNode(RAP, { label: "RAP（入口）" }),
    "ArrayItem": structNode(ArrayItem, { label: "ArrayItem" }),
    "Member": structNode(Member, { label: "Member" }),
    "Enums": structNode(Enums, { label: "Enums" }),
  },
});


/*
未移植项：
- Array.count_items: 类型 CompressedUint 不可移植
- ClassBody.parent_name: 类型 std_string_NullString 不可移植
- EnumItem.name: 类型 std_string_NullString 不可移植
*/
