/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/fbx.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const PropertyRecord = struct("PropertyRecord", [
  char("typeCode", { values: { "0": "BYTE", "1": "SHORT", "2": "BOOL", "3": "CHAR", "4": "INT", "5": "FLOAT", "6": "DOUBLE", "7": "LONG", "8": "BINARY", "9": "STRING", "10": "ARRAY_BOOL", "11": "ARRAY_UBYTE", "12": "ARRAY_INT", "13": "ARRAY_LONG", "14": "ARRAY_FLOAT", "15": "ARRAY_DOUBLE" } }),
]);

const NodeRecord32 = struct("NodeRecord32", [
  u32("endOffset", {  }),
  u32("numProperties", {  }),
  u32("propertyListLen", {  }),
  u8("nameLen", {  }),
]);

const NodeRecord64 = struct("NodeRecord64", [
  u64("endOffset", {  }),
  u64("numProperties", {  }),
  u64("propertyListLen", {  }),
  u8("nameLen", {  }),
]);

export default definePack({
  name: "Kaydara FBX Binary",
  endian: "little",
  pointerSize: 8,
  types: [PropertyRecord, NodeRecord32, NodeRecord64],
  nodes: {
    "entry": structNode(PropertyRecord, { label: "PropertyRecord（入口）" }),
    "NodeRecord32": structNode(NodeRecord32, { label: "NodeRecord32" }),
    "NodeRecord64": structNode(NodeRecord64, { label: "NodeRecord64" }),
  },
});


/*
未移植项：
- FBX.header: 类型 Header 不可移植
*/
