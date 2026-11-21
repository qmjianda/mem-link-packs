/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/gzip.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const Flags = struct("Flags", [
  bits("FTEXT", 1, { at: 0, bit: 0, unit: 1, label: "FTEXT" }),
  bits("FHCRC", 1, { at: 0, bit: 1, unit: 1, label: "FHCRC" }),
  bits("FEXTRA", 1, { at: 0, bit: 2, unit: 1, label: "FEXTRA" }),
  bits("FNAME", 1, { at: 0, bit: 3, unit: 1, label: "FNAME" }),
  bits("FCOMMENT", 1, { at: 0, bit: 4, unit: 1, label: "FCOMMENT" }),
]);

const ExtraFlags = struct("ExtraFlags", [
  bits("maximumCompression", 1, { at: 0, bit: 1, unit: 1, label: "maximumCompression" }),
  bits("fastestCompression", 1, { at: 0, bit: 2, unit: 1, label: "fastestCompression" }),
]);

const GZip = struct("GZip", [
  u16("signature", {  }),
  u8("compressionMethod", { values: { "0": "Reserved", "8": "Deflate" } }),
  record("flags", Flags),
]);

export default definePack({
  name: "GZip compressed data",
  endian: "little",
  pointerSize: 8,
  types: [Flags, ExtraFlags, GZip],
  nodes: {
    "entry": structNode(GZip, { label: "GZip（入口）" }),
    "Flags": structNode(Flags, { label: "Flags" }),
    "ExtraFlags": structNode(ExtraFlags, { label: "ExtraFlags" }),
  },
});


/*
未移植项：
- GZip.modificationTime: 类型 type_time32_t 不可移植
*/
