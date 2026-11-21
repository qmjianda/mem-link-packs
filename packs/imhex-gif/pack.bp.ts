/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/gif.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 3 项（见文件末尾）
const GCT_Flags = struct("GCT_Flags", [
  bits("size", 3, { at: 0, bit: 0, unit: 1, label: "size" }),
  bits("sort", 1, { at: 0, bit: 3, unit: 1, label: "sort" }),
  bits("colorRes", 3, { at: 0, bit: 4, unit: 1, label: "colorRes" }),
  bits("enabled", 1, { at: 0, bit: 7, unit: 1, label: "enabled" }),
]);

const ImageDescriptorFlags = struct("ImageDescriptorFlags", [
  bits("lctSize", 3, { at: 0, bit: 0, unit: 1, label: "lctSize" }),
  bits("reserved", 2, { at: 0, bit: 3, unit: 1, label: "reserved" }),
  bits("lctSort", 1, { at: 0, bit: 5, unit: 1, label: "lctSort" }),
  bits("interlaceFlag", 1, { at: 0, bit: 6, unit: 1, label: "interlaceFlag" }),
  bits("lctEnable", 1, { at: 0, bit: 7, unit: 1, label: "lctEnable" }),
]);

const GCE_Flags = struct("GCE_Flags", [
  bits("transparent", 1, { at: 0, bit: 0, unit: 1, label: "transparent" }),
  bits("userInput", 1, { at: 0, bit: 1, unit: 1, label: "userInput" }),
  bits("disposalMode", 3, { at: 0, bit: 2, unit: 1, label: "disposalMode" }),
  bits("reserved", 3, { at: 0, bit: 5, unit: 1, label: "reserved" }),
]);

const Color = struct("Color", [
  u8("red", {  }),
  u8("green", {  }),
  u8("blue", {  }),
]);

const _SubBlocks = struct("_SubBlocks", [
  u8("data_size", {  }),
]);

const LogicalScreenDescriptor = struct("LogicalScreenDescriptor", [
  u16("width", {  }),
  u16("height", {  }),
  record("gctFlags", GCT_Flags),
  u8("bgColorIndex", {  }),
  u8("pixelAspect", {  }),
]);

const ImageDescriptor = struct("ImageDescriptor", [
  u16("imageLeftPosition", {  }),
  u16("imageTopPosition", {  }),
  u16("imageWidth", {  }),
  u16("imageHeight", {  }),
  record("flags", ImageDescriptorFlags),
]);

const ApplicationExtension = struct("ApplicationExtension", [
  u8("blockSize", {  }),
  str("identifier", { size: 8 }),
  str("authenticationCode", { size: 3 }),
]);

const PlainTextExtension = struct("PlainTextExtension", [
  u8("blockSize", {  }),
  u16("textGridLeftPos", {  }),
  u16("textGridTopPos", {  }),
  u16("textGridWidth", {  }),
  u16("textGridHeight", {  }),
  u8("charCellWidth", {  }),
  u8("charCellHeight", {  }),
  u8("textForegroundColorIndex", {  }),
  u8("textBackgroundColorIndex", {  }),
]);

const GraphicControlExtension = struct("GraphicControlExtension", [
  u8("blockSize", {  }),
]);

const Extension = struct("Extension", [
  u8("label", {  }),
]);

const Block = struct("Block", [
  u8("identifier", {  }),
]);

export default definePack({
  name: "GIF image",
  endian: "little",
  pointerSize: 8,
  types: [GCT_Flags, ImageDescriptorFlags, GCE_Flags, Color, _SubBlocks, LogicalScreenDescriptor, ImageDescriptor, ApplicationExtension, PlainTextExtension, GraphicControlExtension, Extension, Block],
  nodes: {
    "entry": structNode(GCT_Flags, { label: "GCT_Flags（入口）" }),
    "ImageDescriptorFlags": structNode(ImageDescriptorFlags, { label: "ImageDescriptorFlags" }),
    "GCE_Flags": structNode(GCE_Flags, { label: "GCE_Flags" }),
    "Color": structNode(Color, { label: "Color" }),
    "_SubBlocks": structNode(_SubBlocks, { label: "_SubBlocks" }),
    "LogicalScreenDescriptor": structNode(LogicalScreenDescriptor, { label: "LogicalScreenDescriptor" }),
    "ImageDescriptor": structNode(ImageDescriptor, { label: "ImageDescriptor" }),
    "ApplicationExtension": structNode(ApplicationExtension, { label: "ApplicationExtension" }),
    "PlainTextExtension": structNode(PlainTextExtension, { label: "PlainTextExtension" }),
    "GraphicControlExtension": structNode(GraphicControlExtension, { label: "GraphicControlExtension" }),
    "Extension": structNode(Extension, { label: "Extension" }),
    "Block": structNode(Block, { label: "Block" }),
  },
});


/*
未移植项：
- CommentExtension.commentData: 类型 DataSubBlocks 不可移植
- ApplicationExtension.applicationData: 类型 DataSubBlocks 不可移植
- PlainTextExtension.plainTextData: 类型 DataSubBlocks 不可移植
*/
