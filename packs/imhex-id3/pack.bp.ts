/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/id3.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 6 项（见文件末尾）
const v1_Tag = struct("v1_Tag", [
  str("header", { size: 3 }),
  str("title", { size: 30 }),
  str("artist", { size: 30 }),
  str("album", { size: 30 }),
  str("year", { size: 4 }),
  str("comment", { size: 30 }),
  u8("zero", {  }),
  u8("track", {  }),
  u8("genre", {  }),
]);

const v2_SyncSafeInt = struct("v2_SyncSafeInt", [
  bytes("bytes", { size: 4 }),
]);

const v2_TagVersion = struct("v2_TagVersion", [
  u8("major", {  }),
  u8("revision", {  }),
]);

const v2_TagHeaderFlags = struct("v2_TagHeaderFlags", [
  bits("unsynchronized", 1, { at: 0, bit: 0, unit: 1, label: "unsynchronized" }),
  bits("extended", 1, { at: 0, bit: 1, unit: 1, label: "extended" }),
  bits("experimental", 1, { at: 0, bit: 2, unit: 1, label: "experimental" }),
  bits("footer", 1, { at: 0, bit: 3, unit: 1, label: "footer" }),
]);

const v2_TagHeader = struct("v2_TagHeader", [
  str("identifier", { size: 3 }),
]);

const v2_ExtendedFlag = struct("v2_ExtendedFlag", [
  bits("update", 1, { at: 0, bit: 1, unit: 1, label: "update" }),
  bits("crcpresent", 1, { at: 0, bit: 2, unit: 1, label: "crcpresent" }),
  bits("restrictions", 1, { at: 0, bit: 3, unit: 1, label: "restrictions" }),
]);

const v2_TagFooter = struct("v2_TagFooter", [
  str("identifier", { size: 3 }),
]);

const v2_FrameFlags = struct("v2_FrameFlags", [
  bits("tagalterpreservation", 1, { at: 0, bit: 1, unit: 2, label: "tagalterpreservation" }),
  bits("filealterpreservation", 1, { at: 0, bit: 2, unit: 2, label: "filealterpreservation" }),
  bits("readonly", 1, { at: 0, bit: 3, unit: 2, label: "readonly" }),
  bits("groupid", 1, { at: 0, bit: 9, unit: 2, label: "groupid" }),
  bits("compressed", 1, { at: 0, bit: 12, unit: 2, label: "compressed" }),
  bits("encrypted", 1, { at: 0, bit: 13, unit: 2, label: "encrypted" }),
  bits("unzynchronized", 1, { at: 0, bit: 14, unit: 2, label: "unzynchronized" }),
  bits("datalengthindicator", 1, { at: 0, bit: 15, unit: 2, label: "datalengthindicator" }),
]);

const v2_FrameId = union("v2_FrameId", [
  str("cdata", { size: 4 }),
  bytes("ndata", { size: 4 }),
]);

export default definePack({
  name: "MP3 ID3 tags",
  endian: "little",
  pointerSize: 8,
  types: [v1_Tag, v2_SyncSafeInt, v2_TagVersion, v2_TagHeaderFlags, v2_TagHeader, v2_ExtendedFlag, v2_TagFooter, v2_FrameFlags, v2_FrameId],
  nodes: {
    "entry": structNode(v1_Tag, { label: "v1_Tag（入口）" }),
    "v2_SyncSafeInt": structNode(v2_SyncSafeInt, { label: "v2_SyncSafeInt" }),
    "v2_TagVersion": structNode(v2_TagVersion, { label: "v2_TagVersion" }),
    "v2_TagHeaderFlags": structNode(v2_TagHeaderFlags, { label: "v2_TagHeaderFlags" }),
    "v2_TagHeader": structNode(v2_TagHeader, { label: "v2_TagHeader" }),
    "v2_ExtendedFlag": structNode(v2_ExtendedFlag, { label: "v2_ExtendedFlag" }),
    "v2_TagFooter": structNode(v2_TagFooter, { label: "v2_TagFooter" }),
    "v2_FrameFlags": structNode(v2_FrameFlags, { label: "v2_FrameFlags" }),
    "v2_FrameId": structNode(v2_FrameId, { label: "v2_FrameId" }),
  },
});


/*
未移植项：
- v2_TagHeader.version: 类型 TagVersion 不可移植
- v2_TagExtendedHeader.size: 类型 SyncSafeInt 不可移植
- v2_TagFooter.version: 类型 TagVersion 不可移植
- v2_StringData.encoding: 类型 TextEncoding 不可移植
- v2_Frame.id: 类型 FrameId 不可移植
- v2_Tag.header: 类型 TagHeader 不可移植
*/
