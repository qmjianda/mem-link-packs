/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/gb.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const CGB = struct("CGB", [
  bits("PGB_MODE", 2, { at: 0, bit: 2, unit: 1, label: "PGB_MODE" }),
  bits("CGB_ONLY", 1, { at: 0, bit: 6, unit: 1, label: "CGB_ONLY" }),
  bits("CGB_SUPPORT", 1, { at: 0, bit: 7, unit: 1, label: "CGB_SUPPORT" }),
]);

const pixel_packed = struct("pixel_packed", [
  bits("p1", 1, { at: 0, bit: 0, unit: 1, label: "p1" }),
  bits("p2", 1, { at: 0, bit: 1, unit: 1, label: "p2" }),
  bits("p3", 1, { at: 0, bit: 2, unit: 1, label: "p3" }),
  bits("p4", 1, { at: 0, bit: 3, unit: 1, label: "p4" }),
  bits("p5", 1, { at: 0, bit: 4, unit: 1, label: "p5" }),
  bits("p6", 1, { at: 0, bit: 5, unit: 1, label: "p6" }),
  bits("p7", 1, { at: 0, bit: 6, unit: 1, label: "p7" }),
  bits("p8", 1, { at: 0, bit: 7, unit: 1, label: "p8" }),
]);

const CartridgeStart = struct("CartridgeStart", [
  bytes("entryCode", { size: 4 }),
  array("logo", pixel_packed, 48),
]);

const JumpVectors = struct("JumpVectors", [
  bytes("rst1", { size: 8 }),
  bytes("rst2", { size: 8 }),
  bytes("rst3", { size: 8 }),
  bytes("rst4", { size: 8 }),
  bytes("rst5", { size: 8 }),
  bytes("rst6", { size: 8 }),
  bytes("rst7", { size: 8 }),
  bytes("rst8", { size: 8 }),
  bytes("int1", { size: 8 }),
  bytes("int2", { size: 8 }),
  bytes("int3", { size: 8 }),
  bytes("int4", { size: 8 }),
  bytes("int5", { size: 8 }),
]);

export default definePack({
  name: "Gameboy ROM",
  endian: "little",
  pointerSize: 8,
  types: [CGB, pixel_packed, CartridgeStart, JumpVectors],
  nodes: {
    "entry": structNode(JumpVectors, { label: "JumpVectors（入口）" }),
    "CGB": structNode(CGB, { label: "CGB" }),
    "pixel_packed": structNode(pixel_packed, { label: "pixel_packed" }),
    "CartridgeStart": structNode(CartridgeStart, { label: "CartridgeStart" }),
  },
});


/*
未移植项：
- CartridgeStart.header: 类型 Header 不可移植
*/
