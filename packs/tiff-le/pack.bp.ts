/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/tiff
// 原始 pack：tiff · TIFF image v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 3 个动态辅助节点
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
    "array_TiffIfd_entries": arrayNode(TiffEntry, {
      label: "TiffIfd.entries（动态数组）",
      description: "count 来自 TiffIfd.numEntries；address 指向数组首元素",
    }),
    "ptr_Tiff_ifd": calcNode({
      label: "Tiff.ifd（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "ifdOffset": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["ifdOffset"] ?? 0) }),
    }),
    "ptrtarget_Tiff_ifd": structNode(TiffIfd, { label: "指针目标 · Tiff.ifd" }),
  },
});

