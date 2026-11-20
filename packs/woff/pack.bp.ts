/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/woff
// 原始 pack：woff · WOFF web font v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：complete
const WoffHeader = struct("WoffHeader", [
  str("signature", { size: 4, label: "wOFF" }),
  u32("flavor", { endian: "big", label: "sfnt version of the wrapped font" }),
  u32("length", { endian: "big", label: "total WOFF file size" }),
  u16("numTables", { endian: "big", label: "number of font tables" }),
  u16("reserved", { endian: "big", label: "reserved (0)" }),
  u32("totalSfntSize", { endian: "big", label: "size of the uncompressed font data" }),
  u16("majorVersion", { endian: "big", label: "WOFF major version" }),
  u16("minorVersion", { endian: "big", label: "WOFF minor version" }),
  u32("metaOffset", { endian: "big", label: "offset to the metadata block" }),
  u32("metaLength", { endian: "big", label: "compressed metadata length" }),
  u32("metaOrigLength", { endian: "big", label: "uncompressed metadata length" }),
  u32("privOffset", { endian: "big", label: "offset to the private data block" }),
  u32("privLength", { endian: "big", label: "private data length" }),
]);

export default definePack({
  name: "WOFF",
  endian: "big",
  pointerSize: 4,
  types: [WoffHeader],
  nodes: {
    "entry": structNode(WoffHeader, { label: "WoffHeader（入口）" }),
  },
});

