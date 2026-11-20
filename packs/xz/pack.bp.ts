/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/xz
// 原始 pack：xz · XZ compressed v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 4 项（见文件末尾）
const XzStreamHeader = struct("XzStreamHeader", [
  bytes("magic", { size: 6, label: "FD 37 7A 58 5A 00" }),
  u8("flagsHigh", { endian: "little", label: "stream flags high byte (always 0)" }),
  u8("check", { values: { "0": "None", "1": "Crc32", "4": "Crc64", "10": "Sha256" }, label: "integrity check type used by every block" }),
  u32("crc32", { endian: "little", label: "CRC-32 of the two stream flag bytes" }),
]);

const XzBlockFlags = struct("XzBlockFlags", [
  bits("numFiltersMinus1", 2, { at: 0, bit: 0, unit: 1, label: "numFiltersMinus1" }),
  bits("reserved", 4, { at: 0, bit: 2, unit: 1, label: "reserved" }),
  bits("compressedSizePresent", 1, { at: 0, bit: 6, unit: 1, label: "compressedSizePresent" }),
  bits("uncompressedSizePresent", 1, { at: 0, bit: 7, unit: 1, label: "uncompressedSizePresent" }),
]);

const XzBlockHeader = struct("XzBlockHeader", [
  u8("sizeByte", { endian: "little", label: "block header size = (this + 1) * 4; 0x00 would mean the index instead" }),
  record("flags", XzBlockFlags, { label: "filter count and which sizes are present" }),
]);

const Xz = struct("Xz", [
  record("streamHeader", XzStreamHeader, { label: "stream header" }),
  record("firstBlock", XzBlockHeader, { label: "first block header; its compressed data follows" }),
]);

export default definePack({
  name: "XZ",
  endian: "little",
  pointerSize: 4,
  types: [XzStreamHeader, XzBlockFlags, XzBlockHeader, Xz],
  nodes: {
    "entry": structNode(Xz, { label: "Xz（入口）" }),
    "XzStreamHeader": structNode(XzStreamHeader, { label: "XzStreamHeader" }),
    "XzBlockHeader": structNode(XzBlockHeader, { label: "XzBlockHeader" }),
    "flags_XzBlockFlags": structNode(XzBlockFlags, { label: "位域 XzBlockFlags" }),
  },
});


/*
未移植项：
- XzFilterFlags.filterId: varint 变长字段未移植，后续布局在此停止
- XzFilterFlags: 没有可移植的固定前缀字段
- XzBlockHeader.headerSize: computed 字段未移植
- XzBlockHeader.compressedSize: 条件字段未移植，后续布局在此停止
*/
