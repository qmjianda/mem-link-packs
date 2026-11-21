/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/rgbds.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 5 项（见文件末尾）
const fstack_Node = struct("fstack_Node", [
  u32("parentID", {  }),
  u32("parentLineNo", {  }),
]);

const sect_Patch = struct("sect_Patch", [
  u32("nodeID", {  }),
  u32("lineNo", {  }),
  u32("ofs", {  }),
  u32("pcSectID", {  }),
  u32("pcOfs", {  }),
]);

const sect_Attrs = struct("sect_Attrs", [
  bits("type", 6, { at: 0, bit: 0, unit: 1, label: "type" }),
  bits("isFragment", 1, { at: 0, bit: 6, unit: 1, label: "isFragment" }),
  bits("isUnion", 1, { at: 0, bit: 7, unit: 1, label: "isUnion" }),
]);

const assert_Assertion = struct("assert_Assertion", [
  u32("nodeID", {  }),
  u32("lineNo", {  }),
  u32("ofs", {  }),
  u32("pcSectID", {  }),
  u32("pcOfs", {  }),
]);

export default definePack({
  name: "Object files for the RGBDS Game Boy assembly toolchain",
  endian: "little",
  pointerSize: 8,
  types: [fstack_Node, sect_Patch, sect_Attrs, assert_Assertion],
  nodes: {
    "entry": structNode(fstack_Node, { label: "fstack_Node（入口）" }),
    "sect_Patch": structNode(sect_Patch, { label: "sect_Patch" }),
    "sect_Attrs": structNode(sect_Attrs, { label: "sect_Attrs" }),
    "assert_Assertion": structNode(assert_Assertion, { label: "assert_Assertion" }),
  },
});


/*
未移植项：
- fstack_Node.type: 类型 Type 不可移植
- sym_Symbol.name: 类型 std_string_NullString 不可移植
- sect_Patch.type: 类型 PatchType 不可移植
- sect_Section.name: 类型 std_string_NullString 不可移植
- assert_Assertion.type: 类型 Type 不可移植
*/
