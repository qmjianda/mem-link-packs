/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/popcap_luc.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const PLStr = struct("PLStr", [
  u32("len", {  }),
]);

const PLHeader = struct("PLHeader", [
  str("magic", { size: 5 }),
  pad(18),
  record("filename", PLStr),
]);

const PLLocal = struct("PLLocal", [
  u32("nameLength", {  }),
]);

const PLConst = struct("PLConst", [
  u8("type", { values: { "0": "Nil", "3": "Float", "4": "Int", "5": "Str" } }),
]);

const PLChunk = struct("PLChunk", [
  str("intro", { size: 12 }),
  u32("sizecode", {  }),
]);

const PLPrototype = struct("PLPrototype", [
  pad(4),
  record("chunk", PLChunk),
]);

const PLUpvalue = struct("PLUpvalue", [
  u32("len", {  }),
]);

const PLOp = struct("PLOp", [
  u32("raw", {  }),
]);

export default definePack({
  name: "PopCap's proprietary Lua bytecode (.luc)",
  endian: "little",
  pointerSize: 8,
  types: [PLStr, PLHeader, PLLocal, PLConst, PLChunk, PLPrototype, PLUpvalue, PLOp],
  nodes: {
    "entry": structNode(PLHeader, { label: "PLHeader（入口）" }),
    "PLStr": structNode(PLStr, { label: "PLStr" }),
    "PLLocal": structNode(PLLocal, { label: "PLLocal" }),
    "PLConst": structNode(PLConst, { label: "PLConst" }),
    "PLChunk": structNode(PLChunk, { label: "PLChunk" }),
    "PLPrototype": structNode(PLPrototype, { label: "PLPrototype" }),
    "PLUpvalue": structNode(PLUpvalue, { label: "PLUpvalue" }),
    "PLOp": structNode(PLOp, { label: "PLOp" }),
  },
});

