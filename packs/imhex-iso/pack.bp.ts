/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/iso.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const di32 = struct("di32", [
  i32("leValue", {  }),
  i32("beValue", { endian: "big" }),
]);

const di16 = struct("di16", [
  i16("leValue", {  }),
  i16("beValue", { endian: "big" }),
]);

const PathTablePtr = struct("PathTablePtr", [
  i32("leMainOffset", {  }),
  i32("leOptOffset", {  }),
  i32("beMainOffset", { endian: "big" }),
  i32("beOptOffset", { endian: "big" }),
]);

const DateFormat = struct("DateFormat", [
  u8("year", {  }),
  u8("month", {  }),
  u8("day", {  }),
  u8("hour", {  }),
  u8("minute", {  }),
  u8("second", {  }),
  u8("gmtOffset", {  }),
]);

const StrDateFormat = struct("StrDateFormat", [
  str("year", { size: 4 }),
  str("month", { size: 2 }),
  str("day", { size: 2 }),
  str("hour", { size: 2 }),
  str("minute", { size: 2 }),
  str("second", { size: 2 }),
  str("secondFrac", { size: 2 }),
  u8("gmtOffset", {  }),
]);

const FileFlags = struct("FileFlags", [
  bits("hidden", 1, { at: 0, bit: 0, unit: 1, label: "hidden" }),
  bits("directory", 1, { at: 0, bit: 1, unit: 1, label: "directory" }),
  bits("associatedFile", 1, { at: 0, bit: 2, unit: 1, label: "associatedFile" }),
  bits("extendedAttribute", 1, { at: 0, bit: 3, unit: 1, label: "extendedAttribute" }),
  bits("ownerAndGroupInExtendedAttribute", 1, { at: 0, bit: 4, unit: 1, label: "ownerAndGroupInExtendedAttribute" }),
  bits("fileRecordNotFinal", 1, { at: 0, bit: 7, unit: 1, label: "fileRecordNotFinal" }),
]);

const DirectoryRecord = struct("DirectoryRecord", [
  u8("recordSize", {  }),
  u8("extendedRecordSize", {  }),
  record("extentOffset", di32),
  record("dataSize", di32),
  record("recordDate", DateFormat),
  record("fileFlags", FileFlags),
  u8("fileUnitSize", {  }),
  u8("interleaveGapSize", {  }),
  record("volumeSequenceNumber", di16),
  u8("fileNameLen", {  }),
]);

const VolumeDescriptor = struct("VolumeDescriptor", [
  u8("type", { values: { "0": "BootRecord", "1": "PrimaryVolume", "2": "SupplementaryVolume", "3": "VolumePartition", "255": "Terminator" } }),
  str("id", { size: 5 }),
  u8("version", {  }),
]);

export default definePack({
  name: "ISO 9660 file system",
  endian: "little",
  pointerSize: 8,
  types: [di32, di16, PathTablePtr, DateFormat, StrDateFormat, FileFlags, DirectoryRecord, VolumeDescriptor],
  nodes: {
    "entry": structNode(VolumeDescriptor, { label: "VolumeDescriptor（入口）" }),
    "di32": structNode(di32, { label: "di32" }),
    "di16": structNode(di16, { label: "di16" }),
    "PathTablePtr": structNode(PathTablePtr, { label: "PathTablePtr" }),
    "DateFormat": structNode(DateFormat, { label: "DateFormat" }),
    "StrDateFormat": structNode(StrDateFormat, { label: "StrDateFormat" }),
    "FileFlags": structNode(FileFlags, { label: "FileFlags" }),
    "DirectoryRecord": structNode(DirectoryRecord, { label: "DirectoryRecord" }),
  },
});

