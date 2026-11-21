/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/bmp.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const BitmapFileHeader = struct("BitmapFileHeader", [
  bytes("bfType", { size: 2 }),
  u32("bfSize", {  }),
  u16("bfReserved1", {  }),
  u16("bfReserved2", {  }),
  u32("bfOffBits", {  }),
]);

const CIEXYZ = struct("CIEXYZ", [
  u32("ciexyzX", {  }),
  u32("ciexyzY", {  }),
  u32("ciexyzZ", {  }),
]);

const CIEXYZTRIPLE = struct("CIEXYZTRIPLE", [
  record("ciexyzRed", CIEXYZ),
  record("ciexyzGreen", CIEXYZ),
  record("ciexyzBlue", CIEXYZ),
]);

const BitmapInfoHeaderV1 = struct("BitmapInfoHeaderV1", [
  u32("biSize", {  }),
  i32("biWidth", {  }),
  i32("biHeight", {  }),
  u16("biPlanes", {  }),
  u16("biBitCount", {  }),
  u32("biCompression", { values: { "0": "BI_RGB", "1": "BI_RLE8", "2": "BI_RLE4", "3": "BI_BITFIELDS", "4": "BI_JPEG", "5": "BI_PNG", "6": "BI_ALPHABITFIELDS", "7": "BI_CMYK", "8": "BI_CMYKRLE8", "9": "BI_CMYKRLE4" } }),
  u32("biSizeImage", {  }),
  i32("biXPelsPerMeter", {  }),
  i32("biYPelsPerMeter", {  }),
  u32("biClrUsed", {  }),
  u32("biClrImportant", {  }),
]);

const BitmapInfoHeaderV2 = struct("BitmapInfoHeaderV2", [
  u32("biSize", {  }),
  i32("biWidth", {  }),
  i32("biHeight", {  }),
  u16("biPlanes", {  }),
  u16("biBitCount", {  }),
  u32("biCompression", { values: { "0": "BI_RGB", "1": "BI_RLE8", "2": "BI_RLE4", "3": "BI_BITFIELDS", "4": "BI_JPEG", "5": "BI_PNG", "6": "BI_ALPHABITFIELDS", "7": "BI_CMYK", "8": "BI_CMYKRLE8", "9": "BI_CMYKRLE4" } }),
  u32("biSizeImage", {  }),
  i32("biXPelsPerMeter", {  }),
  i32("biYPelsPerMeter", {  }),
  u32("biClrUsed", {  }),
  u32("biClrImportant", {  }),
  u32("biRedMask", {  }),
  u32("biGreenMask", {  }),
  u32("biBlueMask", {  }),
]);

const BitmapInfoHeaderV3 = struct("BitmapInfoHeaderV3", [
  u32("biSize", {  }),
  i32("biWidth", {  }),
  i32("biHeight", {  }),
  u16("biPlanes", {  }),
  u16("biBitCount", {  }),
  u32("biCompression", { values: { "0": "BI_RGB", "1": "BI_RLE8", "2": "BI_RLE4", "3": "BI_BITFIELDS", "4": "BI_JPEG", "5": "BI_PNG", "6": "BI_ALPHABITFIELDS", "7": "BI_CMYK", "8": "BI_CMYKRLE8", "9": "BI_CMYKRLE4" } }),
  u32("biSizeImage", {  }),
  i32("biXPelsPerMeter", {  }),
  i32("biYPelsPerMeter", {  }),
  u32("biClrUsed", {  }),
  u32("biClrImportant", {  }),
  u32("biRedMask", {  }),
  u32("biGreenMask", {  }),
  u32("biBlueMask", {  }),
  u32("biAlphaMask", {  }),
]);

const BitmapInfoHeaderV4 = struct("BitmapInfoHeaderV4", [
  u32("biSize", {  }),
  i32("biWidth", {  }),
  i32("biHeight", {  }),
  u16("biPlanes", {  }),
  u16("biBitCount", {  }),
  u32("biCompression", { values: { "0": "BI_RGB", "1": "BI_RLE8", "2": "BI_RLE4", "3": "BI_BITFIELDS", "4": "BI_JPEG", "5": "BI_PNG", "6": "BI_ALPHABITFIELDS", "7": "BI_CMYK", "8": "BI_CMYKRLE8", "9": "BI_CMYKRLE4" } }),
  u32("biSizeImage", {  }),
  i32("biXPelsPerMeter", {  }),
  i32("biYPelsPerMeter", {  }),
  u32("biClrUsed", {  }),
  u32("biClrImportant", {  }),
  u32("biRedMask", {  }),
  u32("biGreenMask", {  }),
  u32("biBlueMask", {  }),
  u32("biAlphaMask", {  }),
  u32("biCSType", {  }),
  record("biEndpoints", CIEXYZTRIPLE),
  u32("biGammaRed", {  }),
  u32("biGammaGreen", {  }),
  u32("biGammaBlue", {  }),
]);

const BitmapInfoHeaderV5 = struct("BitmapInfoHeaderV5", [
  u32("biSize", {  }),
  i32("biWidth", {  }),
  i32("biHeight", {  }),
  u16("biPlanes", {  }),
  u16("biBitCount", {  }),
  u32("biCompression", { values: { "0": "BI_RGB", "1": "BI_RLE8", "2": "BI_RLE4", "3": "BI_BITFIELDS", "4": "BI_JPEG", "5": "BI_PNG", "6": "BI_ALPHABITFIELDS", "7": "BI_CMYK", "8": "BI_CMYKRLE8", "9": "BI_CMYKRLE4" } }),
  u32("biSizeImage", {  }),
  i32("biXPelsPerMeter", {  }),
  i32("biYPelsPerMeter", {  }),
  u32("biClrUsed", {  }),
  u32("biClrImportant", {  }),
  u32("biRedMask", {  }),
  u32("biGreenMask", {  }),
  u32("biBlueMask", {  }),
  u32("biAlphaMask", {  }),
  u32("biCSType", {  }),
  record("biEndpoints", CIEXYZTRIPLE),
  u32("biGammaRed", {  }),
  u32("biGammaGreen", {  }),
  u32("biGammaBlue", {  }),
  u32("biIntent", {  }),
  u32("biProfileData", {  }),
  u32("biProfileSize", {  }),
  u32("biReserved", {  }),
]);

const Colors = struct("Colors", [
  u8("blue", {  }),
  u8("green", {  }),
  u8("red", {  }),
  u8("reserved", {  }),
]);

export default definePack({
  name: "OS2/Windows Bitmap",
  endian: "little",
  pointerSize: 8,
  types: [BitmapFileHeader, CIEXYZ, CIEXYZTRIPLE, BitmapInfoHeaderV1, BitmapInfoHeaderV2, BitmapInfoHeaderV3, BitmapInfoHeaderV4, BitmapInfoHeaderV5, Colors],
  nodes: {
    "entry": structNode(BitmapFileHeader, { label: "BitmapFileHeader（入口）" }),
    "CIEXYZ": structNode(CIEXYZ, { label: "CIEXYZ" }),
    "CIEXYZTRIPLE": structNode(CIEXYZTRIPLE, { label: "CIEXYZTRIPLE" }),
    "BitmapInfoHeaderV1": structNode(BitmapInfoHeaderV1, { label: "BitmapInfoHeaderV1" }),
    "BitmapInfoHeaderV2": structNode(BitmapInfoHeaderV2, { label: "BitmapInfoHeaderV2" }),
    "BitmapInfoHeaderV3": structNode(BitmapInfoHeaderV3, { label: "BitmapInfoHeaderV3" }),
    "BitmapInfoHeaderV4": structNode(BitmapInfoHeaderV4, { label: "BitmapInfoHeaderV4" }),
    "BitmapInfoHeaderV5": structNode(BitmapInfoHeaderV5, { label: "BitmapInfoHeaderV5" }),
    "Colors": structNode(Colors, { label: "Colors" }),
  },
});

