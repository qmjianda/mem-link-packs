/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/tarc.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const TARCEntry1 = struct("TARCEntry1", [
  str("fileName", { size: 64 }),
  u64("offset", {  }),
  u32("size", {  }),
  u16("width", {  }),
  u16("height", {  }),
  u16("numMipMaps", {  }),
  u16("pixelFormat", { values: { "14": "DXT1", "16": "DXT5", "33": "BC7" } }),
]);

const TARCEntry2 = struct("TARCEntry2", [
  str("fileName", { size: 64 }),
  u64("offset", {  }),
  u32("size", {  }),
  u16("x", {  }),
  u16("y", {  }),
  u16("width", {  }),
  u16("height", {  }),
  u16("numMipMaps", {  }),
  u16("pixelFormat", { values: { "14": "DXT1", "16": "DXT5", "33": "BC7" } }),
  u16("origWidth", {  }),
  u16("origHeight", {  }),
  i16("offsetX", {  }),
  i16("offsetY", {  }),
]);

const TARC = struct("TARC", [
  str("id", { size: 4 }),
  u32("version", {  }),
  u32("numEntries", {  }),
  u64("pixelDataOffset", {  }),
]);

export default definePack({
  name: "KEX Engine TARC format",
  endian: "little",
  pointerSize: 8,
  types: [TARCEntry1, TARCEntry2, TARC],
  nodes: {
    "entry": structNode(TARC, { label: "TARC（入口）" }),
    "TARCEntry1": structNode(TARCEntry1, { label: "TARCEntry1" }),
    "TARCEntry2": structNode(TARCEntry2, { label: "TARCEntry2" }),
  },
});

