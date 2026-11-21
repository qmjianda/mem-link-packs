/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/SHR.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const ShrSCB = struct("ShrSCB", [
  bits("palette", 4, { at: 0, bit: 0, unit: 1, label: "palette" }),
  bits("reserved", 1, { at: 0, bit: 4, unit: 1, label: "reserved" }),
  bits("color_fill", 1, { at: 0, bit: 5, unit: 1, label: "color_fill" }),
  bits("interrupt", 1, { at: 0, bit: 6, unit: 1, label: "interrupt" }),
  bits("mode_640", 1, { at: 0, bit: 7, unit: 1, label: "mode_640" }),
]);

const Colors_gb = struct("Colors_gb", [
  bits("blue", 4, { at: 0, bit: 0, unit: 1, label: "blue" }),
  bits("green", 4, { at: 0, bit: 4, unit: 1, label: "green" }),
]);

const Colors_r0 = struct("Colors_r0", [
  bits("red", 4, { at: 0, bit: 0, unit: 1, label: "red" }),
  bits("unused", 4, { at: 0, bit: 4, unit: 1, label: "unused" }),
]);

const Rgb444_0RGB = struct("Rgb444_0RGB", [
  record("gb", Colors_gb),
  record("r0", Colors_r0),
]);

const AniOp = struct("AniOp", [
  u16("offset", {  }),
  u16("value", {  }),
]);

const AniChunk = struct("AniChunk", [
  u32("chunk_len", {  }),
]);

const AniHeader = struct("AniHeader", [
  u32("anim_data_len", {  }),
  u16("frame_delay_vbl", {  }),
  u16("flag_unknown", {  }),
]);

export default definePack({
  name: "Apple IIgs Super Hi-Res (SHR) + PaintWorks Animation (ANI)",
  endian: "little",
  pointerSize: 8,
  types: [ShrSCB, Colors_gb, Colors_r0, Rgb444_0RGB, AniOp, AniChunk, AniHeader],
  nodes: {
    "entry": structNode(ShrSCB, { label: "ShrSCB（入口）" }),
    "Colors_gb": structNode(Colors_gb, { label: "Colors_gb" }),
    "Colors_r0": structNode(Colors_r0, { label: "Colors_r0" }),
    "Rgb444_0RGB": structNode(Rgb444_0RGB, { label: "Rgb444_0RGB" }),
    "AniOp": structNode(AniOp, { label: "AniOp" }),
    "AniChunk": structNode(AniChunk, { label: "AniChunk" }),
    "AniHeader": structNode(AniHeader, { label: "AniHeader" }),
  },
});

