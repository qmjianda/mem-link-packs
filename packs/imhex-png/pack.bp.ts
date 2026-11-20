/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/png.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 2 项（见文件末尾）
const header_t = struct("header_t", [
  u8("highBitByte", {  }),
  str("signature", { size: 3 }),
  str("dosLineEnding", { size: 2 }),
  char("dosEOF", {  }),
  char("unixLineEnding", {  }),
]);

const actl_t = struct("actl_t", [
  u32("frames", {  }),
  u32("plays", {  }),
]);

const ihdr_t = struct("ihdr_t", [
  u32("width", {  }),
  u32("height", {  }),
  u8("bit_depth", {  }),
  u8("color_type", { values: { "0": "Grayscale", "2": "RGBTriple", "3": "Palette", "4": "GrayscaleAlpha", "6": "RGBA" } }),
  u8("compression_method", {  }),
  u8("filter_method", {  }),
  u8("interlacing", { values: { "0": "None", "1": "Adam7" } }),
]);

const phys_t = struct("phys_t", [
  u32("ppu_x", {  }),
  u32("ppu_y", {  }),
  u8("unit", { values: { "0": "Unknown", "1": "Meter" } }),
]);

const fctl_t = struct("fctl_t", [
  u32("sequence_no", {  }),
  u32("width", {  }),
  u32("height", {  }),
  u32("xoff", {  }),
  u32("yoff", {  }),
  u16("delay_num", {  }),
  u16("delay_den", {  }),
  u8("dispose_op", { values: { "0": "None", "1": "Background", "2": "Previous" } }),
  u8("blend_op", { values: { "0": "Source", "1": "Over" } }),
]);

const fdat_t = struct("fdat_t", [
  u32("sequence_no", {  }),
]);

const chrm_t = struct("chrm_t", [
  u32("white_point_x", {  }),
  u32("white_point_y", {  }),
  u32("red_x", {  }),
  u32("red_y", {  }),
  u32("green_x", {  }),
  u32("green_y", {  }),
  u32("blue_x", {  }),
  u32("blue_y", {  }),
]);

const time_t = struct("time_t", [
  u16("year", {  }),
  u8("month", {  }),
  u8("day", {  }),
  u8("hour", {  }),
  u8("minute", {  }),
  u8("second", {  }),
]);

const chunk_t = struct("chunk_t", [
  u32("length", {  }),
  str("name", { size: 4 }),
]);

const Chunks = struct("Chunks", [
  record("ihdr_chunk", chunk_t),
]);

const Png = struct("Png", [
  record("header", header_t),
  record("chunks", Chunks),
]);

export default definePack({
  name: "PNG image",
  endian: "big",
  pointerSize: 8,
  types: [header_t, actl_t, ihdr_t, phys_t, fctl_t, fdat_t, chrm_t, time_t, chunk_t, Chunks, Png],
  nodes: {
    "entry": structNode(Png, { label: "Png（入口）" }),
    "header_t": structNode(header_t, { label: "header_t" }),
    "actl_t": structNode(actl_t, { label: "actl_t" }),
    "ihdr_t": structNode(ihdr_t, { label: "ihdr_t" }),
    "phys_t": structNode(phys_t, { label: "phys_t" }),
    "fctl_t": structNode(fctl_t, { label: "fctl_t" }),
    "fdat_t": structNode(fdat_t, { label: "fdat_t" }),
    "chrm_t": structNode(chrm_t, { label: "chrm_t" }),
    "time_t": structNode(time_t, { label: "time_t" }),
    "chunk_t": structNode(chunk_t, { label: "chunk_t" }),
    "Chunks": structNode(Chunks, { label: "Chunks" }),
  },
});


/*
未移植项：
- palette_entry_t.color: 类型 u24 不可移植
- Chunks.set: 类型 chunk_set 不可移植
*/
