/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/woff2
// 原始 pack：woff2 · WOFF2 font v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：complete
const Woff2 = struct("Woff2", [
  str("signature", { size: 4, label: "wOF2" }),
  u32("flavor", { endian: "big", label: "sfnt version of the font inside: 0x00010000 for TrueType, OTTO for CFF" }),
  u32("length", { endian: "big", label: "total size of this file in bytes" }),
  u16("numTables", { endian: "big", label: "tables in the directory that follows" }),
  u16("reserved", { endian: "big", label: "reserved, zero" }),
  u32("totalSfntSize", { endian: "big", label: "size of the rebuilt, uncompressed font" }),
  u32("totalCompressedSize", { endian: "big", label: "size of the Brotli stream holding every table" }),
  u16("majorVersion", { endian: "big", label: "font revision, major" }),
  u16("minorVersion", { endian: "big", label: "font revision, minor" }),
  u32("metaOffset", { endian: "big", label: "offset of the compressed XML metadata block, 0 if absent" }),
  u32("metaLength", { endian: "big", label: "compressed length of that block" }),
  u32("metaOrigLength", { endian: "big", label: "length of the metadata once decompressed" }),
  u32("privOffset", { endian: "big", label: "offset of the private data block, 0 if absent" }),
  u32("privLength", { endian: "big", label: "length of the private data block" }),
]);

export default definePack({
  name: "WOFF2",
  endian: "big",
  pointerSize: 4,
  types: [Woff2],
  nodes: {
    "entry": structNode(Woff2, { label: "Woff2（入口）" }),
  },
});

