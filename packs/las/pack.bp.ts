/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/las
// 原始 pack：las · LAS point cloud v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 1 项（见文件末尾）
const LasGlobalEncoding = struct("LasGlobalEncoding", [
  bits("gpsTimeIsAdjustedStandard", 1, { at: 0, bit: 0, unit: 2, label: "gpsTimeIsAdjustedStandard" }),
  bits("waveformDataInternal", 1, { at: 0, bit: 1, unit: 2, label: "waveformDataInternal" }),
  bits("waveformDataExternal", 1, { at: 0, bit: 2, unit: 2, label: "waveformDataExternal" }),
  bits("syntheticReturnNumbers", 1, { at: 0, bit: 3, unit: 2, label: "syntheticReturnNumbers" }),
  bits("wkt", 1, { at: 0, bit: 4, unit: 2, label: "wkt" }),
]);

const Las = struct("Las", [
  str("fileSignature", { size: 4, label: "LASF" }),
  u16("fileSourceId", { endian: "little", label: "flight line number, or 0 when unknown" }),
  record("globalEncoding", LasGlobalEncoding, { label: "how to read the GPS time and waveform fields" }),
  u32("projectIdData1", { endian: "little", label: "project GUID, first component" }),
  u16("projectIdData2", { endian: "little", label: "project GUID, second component" }),
  u16("projectIdData3", { endian: "little", label: "project GUID, third component" }),
  bytes("projectIdData4", { size: 8, label: "project GUID, last eight bytes" }),
  u8("versionMajor", { endian: "little", label: "1" }),
  u8("versionMinor", { endian: "little", label: "0 through 4" }),
  str("systemIdentifier", { size: 32, label: "the hardware or process that produced the file" }),
  str("generatingSoftware", { size: 32, label: "the software that wrote it" }),
  u16("creationDayOfYear", { endian: "little", label: "day of year the file was created, 1 to 366" }),
  u16("creationYear", { endian: "little", label: "year the file was created" }),
  u16("headerSize", { endian: "little", label: "bytes of header: 227 for 1.2, 235 for 1.3, 375 for 1.4" }),
  u32("offsetToPointData", { endian: "little", label: "file offset of the first point record" }),
  u32("numberOfVlrs", { endian: "little", label: "variable length records between this header and the points" }),
  u8("pointDataFormat", { endian: "little", label: "which point record layout is used; see the list above" }),
  u16("pointDataLength", { endian: "little", label: "bytes per point record, including any extra bytes" }),
  u32("legacyPointCount", { endian: "little", label: "point count for readers older than 1.4; 0 in a 1.4 file using formats 6 to 10" }),
  array("legacyPointsByReturn", "u32", 5, { label: "legacy per-return counts" }),
  f64("xScaleFactor", { endian: "little", label: "multiply the stored x by this" }),
  f64("yScaleFactor", { endian: "little", label: "multiply the stored y by this" }),
  f64("zScaleFactor", { endian: "little", label: "multiply the stored z by this" }),
  f64("xOffset", { endian: "little", label: "then add this to get real x" }),
  f64("yOffset", { endian: "little", label: "then add this to get real y" }),
  f64("zOffset", { endian: "little", label: "then add this to get real z" }),
  f64("maxX", { endian: "little", label: "bounding box, in real coordinates" }),
  f64("minX", { endian: "little" }),
  f64("maxY", { endian: "little" }),
  f64("minY", { endian: "little" }),
  f64("maxZ", { endian: "little" }),
  f64("minZ", { endian: "little" }),
]);

export default definePack({
  name: "LAS",
  endian: "little",
  pointerSize: 4,
  types: [LasGlobalEncoding, Las],
  nodes: {
    "entry": structNode(Las, { label: "Las（入口）" }),
    "flags_LasGlobalEncoding": structNode(LasGlobalEncoding, { label: "位域 LasGlobalEncoding" }),
  },
});


/*
未移植项：
- Las.startOfWaveformData: 条件字段未移植，后续布局在此停止
*/
