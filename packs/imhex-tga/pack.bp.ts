/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/tga.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const ColorMapSpec = struct("ColorMapSpec", [
  u16("entryIndex", {  }),
  u16("entryLength", {  }),
  u8("bpp", {  }),
]);

const ImageDesc = struct("ImageDesc", [
  bits("alphaDepth", 4, { at: 0, bit: 0, unit: 1, label: "alphaDepth" }),
  bits("orderRightToLeft", 1, { at: 0, bit: 4, unit: 1, label: "orderRightToLeft" }),
  bits("orderTopToBottom", 1, { at: 0, bit: 5, unit: 1, label: "orderTopToBottom" }),
]);

const ImageSpec = struct("ImageSpec", [
  u16("xOrigin", {  }),
  u16("yOrigin", {  }),
  u16("width", {  }),
  u16("height", {  }),
  u8("depth", {  }),
  record("imageDesc", ImageDesc),
]);

const Header = struct("Header", [
  u8("idLength", {  }),
  u8("colorMapType", { values: { "0": "None", "1": "ColorPalette" } }),
  u8("imageType", { values: { "0": "NoData", "1": "UncompressedColorMapped", "2": "UncompressedRGB", "3": "UncompressedGreyscale", "9": "RLEColorMapped", "10": "RLERGB", "11": "RLEGreyscale", "32": "CompressedColorMapped", "33": "CompressedColorMapped4Pass" } }),
  record("colorMapSpec", ColorMapSpec),
  record("imageSpec", ImageSpec),
]);

const Footer = struct("Footer", [
  u32("extensionOffset", {  }),
  u32("developerDirectoryOffset", {  }),
  str("signature", { size: 16 }),
  char("dot", {  }),
  char("zero", {  }),
]);

export default definePack({
  name: "Truevision TGA/TARGA image",
  endian: "little",
  pointerSize: 8,
  types: [ColorMapSpec, ImageDesc, ImageSpec, Header, Footer],
  nodes: {
    "entry": structNode(Header, { label: "Header（入口）" }),
    "ColorMapSpec": structNode(ColorMapSpec, { label: "ColorMapSpec" }),
    "ImageDesc": structNode(ImageDesc, { label: "ImageDesc" }),
    "ImageSpec": structNode(ImageSpec, { label: "ImageSpec" }),
    "Footer": structNode(Footer, { label: "Footer" }),
  },
});

