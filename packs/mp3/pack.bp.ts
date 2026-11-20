/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/mp3
// 原始 pack：mp3 · MP3 (ID3v2 tag) v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 9 项（见文件末尾）
const Id3Syncsafe = struct("Id3Syncsafe", [
  u8("b0", { endian: "big" }),
  u8("b1", { endian: "big" }),
  u8("b2", { endian: "big" }),
  u8("b3", { endian: "big" }),
]);

const Id3FrameFlags = struct("Id3FrameFlags", [
  bits("dataLengthIndicator", 1, { at: 0, bit: 0, unit: 2, label: "dataLengthIndicator" }),
  bits("unsynchronised", 1, { at: 0, bit: 1, unit: 2, label: "unsynchronised" }),
  bits("encrypted", 1, { at: 0, bit: 2, unit: 2, label: "encrypted" }),
  bits("compressed", 1, { at: 0, bit: 3, unit: 2, label: "compressed" }),
  bits("groupingIdentity", 1, { at: 0, bit: 6, unit: 2, label: "groupingIdentity" }),
  bits("readOnly", 1, { at: 0, bit: 12, unit: 2, label: "readOnly" }),
  bits("fileAlterPreserve", 1, { at: 0, bit: 13, unit: 2, label: "fileAlterPreserve" }),
  bits("tagAlterPreserve", 1, { at: 0, bit: 14, unit: 2, label: "tagAlterPreserve" }),
]);

const Id3v23Frame = struct("Id3v23Frame", [
  str("id", { size: 4, label: "frame id (TIT2 title, TPE1 artist, TALB album, APIC picture, ...)" }),
  u32("size", { endian: "big", label: "body size, excluding this 10-byte header" }),
  record("flags", Id3FrameFlags, { label: "frame status and format flags" }),
]);

const Id3v24Frame = struct("Id3v24Frame", [
  str("id", { size: 4, label: "frame id (TIT2 title, TPE1 artist, TALB album, TDRC date, APIC picture, ...)" }),
  record("sizeRaw", Id3Syncsafe, { label: "syncsafe body size" }),
  record("flags", Id3FrameFlags, { label: "frame status and format flags" }),
]);

const Id3v22Frame = struct("Id3v22Frame", [
  str("id", { size: 3, label: "frame id (TT2 title, TP1 artist, TAL album, PIC picture, ...)" }),
  u8("s0", { endian: "big" }),
  u8("s1", { endian: "big" }),
  u8("s2", { endian: "big" }),
]);

const Id3Flags = struct("Id3Flags", [
  bits("footer", 1, { at: 0, bit: 4, unit: 1, label: "footer" }),
  bits("experimental", 1, { at: 0, bit: 5, unit: 1, label: "experimental" }),
  bits("extendedHeader", 1, { at: 0, bit: 6, unit: 1, label: "extendedHeader" }),
  bits("unsynchronisation", 1, { at: 0, bit: 7, unit: 1, label: "unsynchronisation" }),
]);

const Id3v2 = struct("Id3v2", [
  str("magic", { size: 3, label: "always ID3" }),
  u8("versionMajor", { endian: "big", label: "ID3v2 version: 2, 3 or 4" }),
  u8("revision", { endian: "big", label: "revision (0)" }),
  record("flags", Id3Flags, { label: "tag-level flags" }),
  record("sizeRaw", Id3Syncsafe, { label: "syncsafe tag size, excluding this header" }),
]);

export default definePack({
  name: "MP3",
  endian: "big",
  pointerSize: 4,
  types: [Id3Syncsafe, Id3FrameFlags, Id3v23Frame, Id3v24Frame, Id3v22Frame, Id3Flags, Id3v2],
  nodes: {
    "entry": structNode(Id3v2, { label: "Id3v2（入口）" }),
    "Id3Syncsafe": structNode(Id3Syncsafe, { label: "Id3Syncsafe" }),
    "Id3v23Frame": structNode(Id3v23Frame, { label: "Id3v23Frame" }),
    "Id3v24Frame": structNode(Id3v24Frame, { label: "Id3v24Frame" }),
    "Id3v22Frame": structNode(Id3v22Frame, { label: "Id3v22Frame" }),
    "flags_Id3Flags": structNode(Id3Flags, { label: "位域 Id3Flags" }),
    "flags_Id3FrameFlags": structNode(Id3FrameFlags, { label: "位域 Id3FrameFlags" }),
  },
});


/*
未移植项：
- Id3Syncsafe.value: computed 字段未移植
- Id3v23Frame.body: 变长字节块未移植
- Id3v24Frame.size: computed 字段未移植
- Id3v24Frame.body: 变长字节块未移植
- Id3v22Frame.size: computed 字段未移植
- Id3v22Frame.body: 变长字节块未移植
- Id3v2.tagSize: computed 字段未移植
- Id3v2.audioOffset: computed 字段未移植
- Id3v2.extendedSize: 条件字段未移植，后续布局在此停止
*/
