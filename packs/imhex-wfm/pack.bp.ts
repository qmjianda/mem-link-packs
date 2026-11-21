/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/wfm.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const WaveformStaticFileInformation = struct("WaveformStaticFileInformation", [
  u16("ByteOrderVerification", { values: { "61680": "PPC", "3855": "Intel" } }),
  str("VersionNumber", { size: 8 }),
  u8("NumberOfDigitsInByteCount", {  }),
  i32("NumberOfBytesToTheEndOfFile", {  }),
  u8("NumberOfBytesPerPoint", {  }),
  i32("ByteOffsetToBeginningOfCurveBuffer", {  }),
  i32("HorizontalZoomScaleFactor", {  }),
  f32("HorizontalZoomPosition", {  }),
  f64("VerticalZoomScaleFactor", {  }),
  f32("VerticalZoomPosition", {  }),
  str("WaveformLabel", { size: 32 }),
  u32("N", {  }),
  u16("SizeOfTheWaveformHeader", {  }),
]);

const ReferenceFileData = struct("ReferenceFileData", [
  i32("SetType", { values: { "0": "SingleWaveformSet", "1": "FastFrameSet" } }),
  u32("WfmCnt", {  }),
  u64("AcquisitionCounter", {  }),
  u64("TransactionCounter", {  }),
  i32("SlotID", {  }),
  i32("IsStaticFlag", {  }),
  u32("WfmUpdateSpecificationCount", {  }),
  u32("ImpDimRefCount", {  }),
  u32("ExpDimRefCount", {  }),
  i32("DataType", { values: { "0": "WFMDATA_SCALAR_MEAS", "1": "WFMDATA_SCALAR_CONST", "2": "WFMDATA_VECTOR", "3": "WFMDATA_INVALID", "4": "WFMDATA_WFMDB", "5": "WFMDATA_DIGITAL" } }),
  u64("GenPurposeCounter", {  }),
  u32("AccumulatedWaveformCount", {  }),
  u32("TargetAccumulationCount", {  }),
  u32("CurveRefCount", {  }),
  u32("NumberOfRequestedFastFrames", {  }),
  u32("NumberOfAcquiredFastFrames", {  }),
]);

const ExplicitDimensionDescriptionInfo = struct("ExplicitDimensionDescriptionInfo", [
  f64("DimScale", {  }),
  f64("DimOffset", {  }),
  u32("DimSize", {  }),
  str("Units", { size: 20 }),
  f64("DimExtentMin", {  }),
  f64("DimExtentMax", {  }),
  f64("DimResolution", {  }),
  f64("DimRefPoint", {  }),
  i32("Format", { values: { "0": "EXPLICIT_INT16", "1": "EXPLICIT_INT32", "2": "EXPLICIT_UINT32", "3": "EXPLICIT_UINT64", "4": "EXPLICIT_FP32", "5": "EXPLICIT_FP64", "6": "EXPLICIT_UINT8", "7": "EXPLICIT_INT8", "8": "EXPLICIT_INVALID_FORMAT" } }),
  i32("StorageType", { values: { "0": "EXPLICIT_SAMPLE", "1": "EXPLICIT_MIN_MAX", "2": "EXPLICIT_VERT_HIST", "3": "EXPLICIT_HOR_HIST", "4": "EXPLICIT_ROW_ORDER", "5": "EXPLICIT_COLUMN_ORDER", "6": "EXPLICIT_INVALID_STORAGE" } }),
  u32("NValue", {  }),
  u32("OverRange", {  }),
  u32("UnderRange", {  }),
  i32("HighRange", {  }),
  u32("LowRange", {  }),
]);

const ImplictDimensionDescriptionInfo = struct("ImplictDimensionDescriptionInfo", [
  f64("DimScale", {  }),
  f64("DimOffset", {  }),
  u32("DimSize", {  }),
  str("Units", { size: 20 }),
  f64("DimExtentMin", {  }),
  f64("DimExtentMax", {  }),
  f64("DimResolution", {  }),
  f64("DimRefPoint", {  }),
  u32("Spacing", {  }),
]);

const UserView = struct("UserView", [
  f64("UserScale", {  }),
  str("UserUnits", { size: 20 }),
  f64("UserOffset", {  }),
]);

const ExplicitDimension = struct("ExplicitDimension", [
  record("ExplicitDimensionDescriptionInfo", ExplicitDimensionDescriptionInfo),
  record("UserView", UserView),
]);

const ImplictDimension = struct("ImplictDimension", [
  record("ImplictDimensionDescriptionInfo", ImplictDimensionDescriptionInfo),
  record("UserView", UserView),
]);

const TimeBase = struct("TimeBase", [
  u32("RealPointSpacing", {  }),
  i32("Sweep", { values: { "0": "SWEEP_ROLL", "1": "SWEEP_SAMPLE", "2": "SWEEP_ET", "3": "SWEEP_INVALID" } }),
  i32("TypeOfBase", { values: { "0": "BASE_TIME", "1": "BASE_SPECTRAL_MAG", "2": "BASE_SPECTRAL_PHASE", "3": "BASE_INVALID" } }),
]);

const WfmUpdateSpec = struct("WfmUpdateSpec", [
  u32("RealPointOffset", {  }),
  f64("TTOffset", {  }),
  f64("FracSec", {  }),
  u32("GmtSec", {  }),
]);

const StateFlags_t = struct("StateFlags_t", [
  bits("flagOver", 2, { at: 0, bit: 0, unit: 4, label: "flagOver" }),
  bits("flagUnder", 2, { at: 0, bit: 2, unit: 4, label: "flagUnder" }),
  bits("flagValid", 2, { at: 0, bit: 4, unit: 4, label: "flagValid" }),
  bits("flagNulls", 2, { at: 0, bit: 6, unit: 4, label: "flagNulls" }),
]);

const WfmCurveObject = struct("WfmCurveObject", [
  record("StateFlags", StateFlags_t),
  i32("TypeOfCheckSum", { values: { "0": "NO_CHECKSUM", "1": "CTYPE_CRC16", "2": "CTYPE_SUM16", "3": "CTYPE_CRC32", "4": "CTYPE_SUM32" } }),
  u16("CheckSum", {  }),
  u32("PrechargeStartOffset", {  }),
  u32("DataStartOffset", {  }),
  u32("PostchargeStartOffset", {  }),
  u32("PostchargeStopOffset", {  }),
  u32("EndOfCurveBufferOffset", {  }),
]);

const WaveformHeader = struct("WaveformHeader", [
  record("ReferenceFileData", ReferenceFileData),
  record("ExplicitDimension1", ExplicitDimension),
  record("ExplicitDimension2", ExplicitDimension),
  record("ImplictDimension1", ImplictDimension),
  record("ImplictDimension2", ImplictDimension),
  record("Info1", TimeBase),
  record("Info2", TimeBase),
  record("WfmUpdateSpec", WfmUpdateSpec),
  record("WfmCurveObject", WfmCurveObject),
]);

const TekmetaEntry = struct("TekmetaEntry", [
  u32("key_name_len", {  }),
]);

const Tekmeta = struct("Tekmeta", [
  str("magik", { size: 8 }),
  u32("records_count", {  }),
]);

const Mark = struct("Mark", [
  f64("Start", {  }),
  f64("Focus", {  }),
  f64("ZoomFactor", {  }),
  f64("End", {  }),
  str("Label", { size: 33 }),
]);

const Marks = struct("Marks", [
  str("MarkInformationStart", { size: 8 }),
  i32("NumberOfBytesToTheEndOfTheMarkInformation", {  }),
  i32("MarkVersionNumber", {  }),
  i32("NumberOfMmarks", {  }),
]);

const Wfm = struct("Wfm", [
  record("StaticFileInformation", WaveformStaticFileInformation),
  record("Header", WaveformHeader),
]);

export default definePack({
  name: "Tektronix waveform file",
  endian: "little",
  pointerSize: 8,
  types: [WaveformStaticFileInformation, ReferenceFileData, ExplicitDimensionDescriptionInfo, ImplictDimensionDescriptionInfo, UserView, ExplicitDimension, ImplictDimension, TimeBase, WfmUpdateSpec, StateFlags_t, WfmCurveObject, WaveformHeader, TekmetaEntry, Tekmeta, Mark, Marks, Wfm],
  nodes: {
    "entry": structNode(Wfm, { label: "Wfm（入口）" }),
    "WaveformStaticFileInformation": structNode(WaveformStaticFileInformation, { label: "WaveformStaticFileInformation" }),
    "ReferenceFileData": structNode(ReferenceFileData, { label: "ReferenceFileData" }),
    "ExplicitDimensionDescriptionInfo": structNode(ExplicitDimensionDescriptionInfo, { label: "ExplicitDimensionDescriptionInfo" }),
    "ImplictDimensionDescriptionInfo": structNode(ImplictDimensionDescriptionInfo, { label: "ImplictDimensionDescriptionInfo" }),
    "UserView": structNode(UserView, { label: "UserView" }),
    "ExplicitDimension": structNode(ExplicitDimension, { label: "ExplicitDimension" }),
    "ImplictDimension": structNode(ImplictDimension, { label: "ImplictDimension" }),
    "TimeBase": structNode(TimeBase, { label: "TimeBase" }),
    "WfmUpdateSpec": structNode(WfmUpdateSpec, { label: "WfmUpdateSpec" }),
    "StateFlags_t": structNode(StateFlags_t, { label: "StateFlags_t" }),
    "WfmCurveObject": structNode(WfmCurveObject, { label: "WfmCurveObject" }),
    "WaveformHeader": structNode(WaveformHeader, { label: "WaveformHeader" }),
    "TekmetaEntry": structNode(TekmetaEntry, { label: "TekmetaEntry" }),
    "Tekmeta": structNode(Tekmeta, { label: "Tekmeta" }),
    "Mark": structNode(Mark, { label: "Mark" }),
    "Marks": structNode(Marks, { label: "Marks" }),
  },
});

