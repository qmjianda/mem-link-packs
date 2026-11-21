/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/pif.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const PIFFileHeader = struct("PIFFileHeader", [
  str("Signature", { size: 4 }),
  u32("FileSize", {  }),
  u32("ImageOffset", {  }),
]);

const PIFInfoHeader = struct("PIFInfoHeader", [
  u16("ImageType", { values: { "17212": "RGB888", "58821": "RGB565", "7763": "RGB332", "47253": "RGB16C", "32170": "BLWH", "18770": "IND24", "18759": "IND16", "18754": "IND8" } }),
  u16("BitsPerPixel", {  }),
  u16("ImageWidth", {  }),
  u16("ImageHeight", {  }),
  u32("ImageSize", {  }),
  u16("ColorTableSize", {  }),
  u16("Compression", { values: { "0": "NO_COMPRESSION", "32222": "RLE_COMPRESSION" } }),
]);

const PIF = struct("PIF", [
  record("PIF_FileHeader", PIFFileHeader),
  record("PIF_ImageHeader", PIFInfoHeader),
]);

export default definePack({
  name: "PIF Image",
  endian: "little",
  pointerSize: 8,
  types: [PIFFileHeader, PIFInfoHeader, PIF],
  nodes: {
    "entry": structNode(PIF, { label: "PIF（入口）" }),
    "PIFFileHeader": structNode(PIFFileHeader, { label: "PIFFileHeader" }),
    "PIFInfoHeader": structNode(PIFInfoHeader, { label: "PIFInfoHeader" }),
  },
});

