/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/orp.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Controller = struct("Controller", [
  u32("size", {  }),
  i32("device_type", {  }),
  u16("name_len", {  }),
]);

const Mode = struct("Mode", [
  u16("name_len", {  }),
]);

const Zone = struct("Zone", [
  u16("name_len", {  }),
]);

const led = struct("led", [
  u16("name_len", {  }),
]);

const RGBColor = struct("RGBColor", [
  u8("red", {  }),
  u8("green", {  }),
  u8("blue", {  }),
  u8("alpha", {  }),
]);

const _LedAltName = struct("_LedAltName", [
  u16("name_len", {  }),
]);

const matrix_map_type = struct("matrix_map_type", [
  u32("height", {  }),
  u32("width", {  }),
]);

const segment = struct("segment", [
  u16("name_len", {  }),
]);

export default definePack({
  name: "OpenRGB Profile",
  endian: "little",
  pointerSize: 8,
  types: [Controller, Mode, Zone, led, RGBColor, _LedAltName, matrix_map_type, segment],
  nodes: {
    "entry": structNode(Controller, { label: "Controller（入口）" }),
    "Mode": structNode(Mode, { label: "Mode" }),
    "Zone": structNode(Zone, { label: "Zone" }),
    "led": structNode(led, { label: "led" }),
    "RGBColor": structNode(RGBColor, { label: "RGBColor" }),
    "_LedAltName": structNode(_LedAltName, { label: "_LedAltName" }),
    "matrix_map_type": structNode(matrix_map_type, { label: "matrix_map_type" }),
    "segment": structNode(segment, { label: "segment" }),
  },
});

