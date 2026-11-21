/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/sup.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const CompositionObject = struct("CompositionObject", [
  u16("objectID", {  }),
  u8("windowID", {  }),
  u8("objectCroppedFlag", { values: { "64": "True", "0": "False" } }),
  u16("objectHorizontalPosition", {  }),
  u16("objectVerticalPosition", {  }),
]);

const PresentationCompositionSegment = struct("PresentationCompositionSegment", [
  u16("width", {  }),
  u16("height", {  }),
  u8("framerate", {  }),
  u16("compositionNumber", {  }),
  u8("compositionState", { values: { "0": "Normal", "64": "AcquisitionPoint", "128": "EpochStart" } }),
  u8("paletteUpdateFlag", { values: { "0": "False", "128": "True" } }),
  u8("paletteID", {  }),
  u8("numberOfCompositionObjects", {  }),
]);

const WindowDefinitionSegment = struct("WindowDefinitionSegment", [
  u8("numberOfWindows", {  }),
  u8("windowID", {  }),
  u16("windowHorizontalPosition", {  }),
  u16("windowVerticalPosition", {  }),
  u16("windowWidth", {  }),
  u16("windowHeight", {  }),
]);

const PaletteEntry = struct("PaletteEntry", [
  u8("paletteEntryID", {  }),
  u8("luminance", {  }),
  u8("colorDifferenceRed", {  }),
  u8("colorDifferenceBlue", {  }),
  u8("Transparency", {  }),
]);

const PaletteDefinitionSegment = struct("PaletteDefinitionSegment", [
  u8("paletteID", {  }),
  u8("paletteVersionNumber", {  }),
]);

const ObjectDefinitionSegment = struct("ObjectDefinitionSegment", [
  u16("objectID", {  }),
  u8("objectVersionNumber", {  }),
  u8("lastInSequenceFlag", { values: { "64": "LastInSequence", "128": "FirstInSequence", "192": "FirstAndLastsInSequence" } }),
]);

const PGSHeader = struct("PGSHeader", [
  str("magicNumber", { size: 2 }),
  u32("presentationTimeStamp", {  }),
  u32("decodingTimeStamp", {  }),
  u8("segmentType", { values: { "20": "PaletteDefinitionSegment", "21": "ObjectDefinitionSegment", "22": "PresentationCompositionSegment", "23": "WindowDefinitionSegment", "128": "END" } }),
  u16("segmentSize", {  }),
]);

const PGSSegment = struct("PGSSegment", [
  record("header", PGSHeader),
]);

export default definePack({
  name: "SUP Bluray Subtitle",
  endian: "big",
  pointerSize: 8,
  types: [CompositionObject, PresentationCompositionSegment, WindowDefinitionSegment, PaletteEntry, PaletteDefinitionSegment, ObjectDefinitionSegment, PGSHeader, PGSSegment],
  nodes: {
    "entry": structNode(PGSSegment, { label: "PGSSegment（入口）" }),
    "CompositionObject": structNode(CompositionObject, { label: "CompositionObject" }),
    "PresentationCompositionSegment": structNode(PresentationCompositionSegment, { label: "PresentationCompositionSegment" }),
    "WindowDefinitionSegment": structNode(WindowDefinitionSegment, { label: "WindowDefinitionSegment" }),
    "PaletteEntry": structNode(PaletteEntry, { label: "PaletteEntry" }),
    "PaletteDefinitionSegment": structNode(PaletteDefinitionSegment, { label: "PaletteDefinitionSegment" }),
    "ObjectDefinitionSegment": structNode(ObjectDefinitionSegment, { label: "ObjectDefinitionSegment" }),
    "PGSHeader": structNode(PGSHeader, { label: "PGSHeader" }),
  },
});


/*
未移植项：
- ObjectDefinitionSegment.objectDataLength: 类型 u24 不可移植
*/
