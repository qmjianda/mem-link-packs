/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/mp4
// 原始 pack：mp4 · MP4 / ISO base media v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 12 项（见文件末尾）
const Ftyp = struct("Ftyp", [
  str("majorBrand", { size: 4, label: "brand best describing the file (isom, mp42, qt  , M4A , heic, avif)" }),
  u32("minorVersion", { endian: "little", label: "minor version of the major brand" }),
]);

const Mvhd = struct("Mvhd", [
  u8("version", { endian: "little", label: "0 = 32-bit times, 1 = 64-bit times" }),
  bytes("flags", { size: 3 }),
]);

const Tkhd = struct("Tkhd", [
  u8("version", { endian: "little", label: "0 = 32-bit times, 1 = 64-bit times" }),
  bytes("flags", { size: 3, label: "0x000001 enabled, 0x000002 in movie, 0x000004 in preview" }),
]);

const Mdhd = struct("Mdhd", [
  u8("version", { endian: "little", label: "0 = 32-bit times, 1 = 64-bit times" }),
  bytes("flags", { size: 3 }),
]);

const Hdlr = struct("Hdlr", [
  u8("version", { endian: "little" }),
  bytes("flags", { size: 3 }),
  u32("preDefined", { endian: "little" }),
  str("handlerType", { size: 4, label: "vide video, soun audio, hint, meta, text, subt subtitles" }),
  array("reserved", "u32", 3),
]);

const LargeBox = struct("LargeBox", [
  u64("largesize", { endian: "little", label: "64-bit box size, header included" }),
]);

const Box = struct("Box", [
  u32("size", { endian: "little", label: "box size including this header; 1 = 64-bit size follows, 0 = to end of file" }),
  str("type", { size: 4, label: "four-character box type" }),
]);

const Container = struct("Container", [
  record("first", Box, { label: "first child box" }),
]);

const Container2 = struct("Container2", [
  record("first", Box, { label: "first child box" }),
]);

const FullContainer = struct("FullContainer", [
  u8("version", { endian: "little" }),
  bytes("flags", { size: 3 }),
  record("first", Box, { label: "first child box" }),
]);

export default definePack({
  name: "MP4",
  endian: "big",
  pointerSize: 4,
  types: [Ftyp, Mvhd, Tkhd, Mdhd, Hdlr, LargeBox, Box, Container, Container2, FullContainer],
  nodes: {
    "entry": structNode(Ftyp, { label: "Ftyp（入口）" }),
    "Mvhd": structNode(Mvhd, { label: "Mvhd" }),
    "Tkhd": structNode(Tkhd, { label: "Tkhd" }),
    "Mdhd": structNode(Mdhd, { label: "Mdhd" }),
    "Hdlr": structNode(Hdlr, { label: "Hdlr" }),
    "LargeBox": structNode(LargeBox, { label: "LargeBox" }),
    "Container": structNode(Container, { label: "Container" }),
    "Container2": structNode(Container2, { label: "Container2" }),
    "FullContainer": structNode(FullContainer, { label: "FullContainer" }),
    "Box": structNode(Box, { label: "Box" }),
  },
});


/*
未移植项：
- Mvhd.creationTime: 条件字段未移植，后续布局在此停止
- Tkhd.creationTime: 条件字段未移植，后续布局在此停止
- Mdhd.creationTime: 条件字段未移植，后续布局在此停止
- Hdlr.name: cstring 变长字段未移植，后续布局在此停止
- LargeBox.bodyLen: computed 字段未移植
- LargeBox.body: 变长字节块未移植
- Box.large: 条件字段未移植，后续布局在此停止
- Container2.secondPos: computed 字段未移植
- Container2.second: 指针字段（at +…）未移植
- IsoMedia.boxes: repeat 字段未移植，后续布局在此停止
- IsoMedia: 没有可移植的固定前缀字段
- 入口 struct IsoMedia 没有可移植字段，改用 Ftyp
*/
