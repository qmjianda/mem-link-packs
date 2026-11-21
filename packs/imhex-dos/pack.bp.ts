/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/dos.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const Relocation = struct("Relocation", [
  u16("offset", {  }),
  u16("segment", {  }),
]);

const RelocationAnnotated = struct("RelocationAnnotated", [
  u16("offset", {  }),
  u16("segment", {  }),
]);

const NEDOSHeaderExt = struct("NEDOSHeaderExt", [
  array("reservedWords", "u16", 4),
  u16("oemIdentifier", {  }),
  u16("oemInformation", {  }),
  array("otherReservedWords", "u16", 10),
  u32("newHeaderPointer", {  }),
]);

const NEDOSHeaderExtAnnotated = struct("NEDOSHeaderExtAnnotated", [
  array("reservedWords", "u16", 4),
  u16("oemIdentifier", {  }),
  u16("oemInformation", {  }),
  array("otherReservedWords", "u16", 10),
  u32("newHeaderPointer", {  }),
]);

export default definePack({
  name: "MSDOS executable file",
  endian: "little",
  pointerSize: 8,
  types: [Relocation, RelocationAnnotated, NEDOSHeaderExt, NEDOSHeaderExtAnnotated],
  nodes: {
    "entry": structNode(Relocation, { label: "Relocation（入口）" }),
    "RelocationAnnotated": structNode(RelocationAnnotated, { label: "RelocationAnnotated" }),
    "NEDOSHeaderExt": structNode(NEDOSHeaderExt, { label: "NEDOSHeaderExt" }),
    "NEDOSHeaderExtAnnotated": structNode(NEDOSHeaderExtAnnotated, { label: "NEDOSHeaderExtAnnotated" }),
  },
});


/*
未移植项：
- Header.dosHeader: 类型 DOSHeader 不可移植
*/
