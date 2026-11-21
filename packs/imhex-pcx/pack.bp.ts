/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/pcx.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Header = struct("Header", [
  u8("magic", {  }),
  u8("version", { values: { "0": "V2_5", "2": "V2_8WithPalette", "3": "V2_8_WithoutPalette", "4": "PaintbrushForWindows", "5": "V3_0" } }),
  u8("encoding", { values: { "0": "NoEncoding", "1": "RunLengthEncoding" } }),
  u8("bitsPerPixel", {  }),
  u16("xMin", {  }),
  u16("yMin", {  }),
  u16("xMax", {  }),
  u16("yMax", {  }),
  u16("hdpi", {  }),
  u16("vdpi", {  }),
]);

const RGB8 = struct("RGB8", [
  u8("r", {  }),
  u8("g", {  }),
  u8("b", {  }),
]);

const Palette = struct("Palette", [
  array("color", RGB8, 16),
]);

const PCX = struct("PCX", [
  record("header", Header),
  record("palette", Palette),
  pad(1),
  u8("numPlanes", {  }),
  u16("bytesPerLine", {  }),
  u16("paletteType", { values: { "1": "MonochromeOrColorInformation", "2": "GrayscaleInformation" } }),
  u16("hres", {  }),
  u16("vres", {  }),
  pad(54),
]);

export default definePack({
  name: "PCX Image",
  endian: "little",
  pointerSize: 8,
  types: [Header, RGB8, Palette, PCX],
  nodes: {
    "entry": structNode(PCX, { label: "PCX（入口）" }),
    "Header": structNode(Header, { label: "Header" }),
    "RGB8": structNode(RGB8, { label: "RGB8" }),
    "Palette": structNode(Palette, { label: "Palette" }),
  },
});

