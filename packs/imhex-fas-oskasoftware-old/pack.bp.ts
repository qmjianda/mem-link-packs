/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/fas_oskasoftware_old.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Colors = struct("Colors", [
  u8("blue", {  }),
  u8("green", {  }),
  u8("red", {  }),
  u8("reserved", {  }),
]);

const FASHeader = struct("FASHeader", [
  i32("width", {  }),
  i32("height", {  }),
  u16("reserved1", {  }),
  u16("reserved2", {  }),
  u16("frameSizeCombined", {  }),
  u16("frameSizeColor", {  }),
  u16("frameSizeMask", {  }),
  u16("headerCount", {  }),
]);

const BitmapInfoHeader = struct("BitmapInfoHeader", [
  u32("biSize", {  }),
  i32("biWidth", {  }),
  i32("biHeight", {  }),
  u16("biPlanes", {  }),
  u16("biBitCount", {  }),
  u32("compression", { values: { "0": "BI_RGB", "1": "BI_RLE8", "2": "BI_RLE4", "3": "BI_BITFIELDS", "4": "BI_JPEG", "5": "BI_PNG", "6": "BI_ALPHABITFIELDS", "7": "BI_CMYK", "8": "BI_CMYKRLE8", "9": "BI_CMYKRLE4" } }),
  u32("biSizeImage", {  }),
  i32("biXPelsPerMeter", {  }),
  i32("biYPelsPerMeter", {  }),
  u32("biClrUsed", {  }),
  u32("biClrImportant", {  }),
]);

const BitmapInfo = struct("BitmapInfo", [
  record("header", BitmapInfoHeader),
]);

const SeqHeader = struct("SeqHeader", [
  u32("size", { endian: "little" }),
  u32("count", { endian: "little" }),
]);

const FramesHeader = struct("FramesHeader", [
  u32("count", { endian: "little" }),
]);

const FAS = struct("FAS", [
  record("fasHeader", FASHeader),
]);

export default definePack({
  name: "Oska Software DeskMates FAS (Frames and Sequences) (Oska DeskMate 1.03 and 2.06)",
  endian: "little",
  pointerSize: 8,
  types: [Colors, FASHeader, BitmapInfoHeader, BitmapInfo, SeqHeader, FramesHeader, FAS],
  nodes: {
    "entry": structNode(FAS, { label: "FAS（入口）" }),
    "Colors": structNode(Colors, { label: "Colors" }),
    "FASHeader": structNode(FASHeader, { label: "FASHeader" }),
    "BitmapInfoHeader": structNode(BitmapInfoHeader, { label: "BitmapInfoHeader" }),
    "BitmapInfo": structNode(BitmapInfo, { label: "BitmapInfo" }),
    "SeqHeader": structNode(SeqHeader, { label: "SeqHeader" }),
    "FramesHeader": structNode(FramesHeader, { label: "FramesHeader" }),
  },
});

