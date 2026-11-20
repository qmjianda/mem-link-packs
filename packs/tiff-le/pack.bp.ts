/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/tiff
// 原始 pack：tiff · TIFF image v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 2 项（见文件末尾）
const TiffEntry = struct("TiffEntry", [
  u16("tag", { endian: "little", label: "field tag (identifies the metadata field)" }),
  u16("fieldType", { endian: "little", label: "1=byte 2=ascii 3=short 4=long 5=rational" }),
  u32("count", { endian: "little", label: "number of values" }),
  u32("valueOffset", { endian: "little", label: "the value itself, or an offset to it" }),
]);

const TiffIfd = struct("TiffIfd", [
  u16("numEntries", { endian: "little", label: "number of directory entries" }),
]);

const Tiff = struct("Tiff", [
  u16("byteOrder", { endian: "little", label: "0x4949 (II) little-endian or 0x4D4D (MM) big-endian" }),
  u16("magic", { endian: "little", label: "42, the TIFF version answer" }),
  u32("ifdOffset", { endian: "little", label: "offset of the first image file directory" }),
]);

export default definePack({
  name: "TIFF (LE)",
  endian: "little",
  pointerSize: 4,
  types: [TiffEntry, TiffIfd, Tiff],
  nodes: {
    "entry": structNode(Tiff, { label: "Tiff（入口）" }),
    "TiffEntry": structNode(TiffEntry, { label: "TiffEntry" }),
    "TiffIfd": structNode(TiffIfd, { label: "TiffIfd" }),
  },
});


/*
未移植项：
- TiffIfd.entries: 动态数组长度（field）未移植
- Tiff.ifd: 指针字段（at …）未移植
*/
