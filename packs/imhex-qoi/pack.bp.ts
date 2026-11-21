/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/qoi.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 2 项（见文件末尾）
const qoi_header_t = struct("qoi_header_t", [
  str("magic", { size: 4 }),
  u32("width", {  }),
  u32("height", {  }),
]);

const qoi_op_index = struct("qoi_op_index", [
  bits("tag", 2, { at: 0, bit: 0, unit: 1, label: "tag" }),
  bits("index", 6, { at: 0, bit: 2, unit: 1, label: "index" }),
]);

const qoi_op_diff = struct("qoi_op_diff", [
  bits("tag", 2, { at: 0, bit: 0, unit: 1, label: "tag" }),
  bits("dr", 2, { at: 0, bit: 2, unit: 1, label: "dr" }),
  bits("dg", 2, { at: 0, bit: 4, unit: 1, label: "dg" }),
  bits("db", 2, { at: 0, bit: 6, unit: 1, label: "db" }),
]);

const qoi_op_luma = struct("qoi_op_luma", [
  bits("tag", 2, { at: 0, bit: 0, unit: 2, label: "tag" }),
  bits("diff_green", 6, { at: 0, bit: 2, unit: 2, label: "diff_green" }),
  bits("dr_dg", 4, { at: 0, bit: 8, unit: 2, label: "dr_dg" }),
  bits("db_dg", 4, { at: 0, bit: 12, unit: 2, label: "db_dg" }),
]);

const qoi_op_run = struct("qoi_op_run", [
  bits("tag", 2, { at: 0, bit: 0, unit: 1, label: "tag" }),
  bits("run_length", 6, { at: 0, bit: 2, unit: 1, label: "run_length" }),
]);

const qoi_op_rgb = struct("qoi_op_rgb", [
  u8("tag", {  }),
  u8("red", {  }),
  u8("green", {  }),
  u8("blue", {  }),
]);

const qoi_op_rgba = struct("qoi_op_rgba", [
  u8("tag", {  }),
  u8("red", {  }),
  u8("green", {  }),
  u8("blue", {  }),
  u8("alpha", {  }),
]);

export default definePack({
  name: "QOI image",
  endian: "big",
  pointerSize: 8,
  types: [qoi_header_t, qoi_op_index, qoi_op_diff, qoi_op_luma, qoi_op_run, qoi_op_rgb, qoi_op_rgba],
  nodes: {
    "entry": structNode(qoi_header_t, { label: "qoi_header_t（入口）" }),
    "qoi_op_index": structNode(qoi_op_index, { label: "qoi_op_index" }),
    "qoi_op_diff": structNode(qoi_op_diff, { label: "qoi_op_diff" }),
    "qoi_op_luma": structNode(qoi_op_luma, { label: "qoi_op_luma" }),
    "qoi_op_run": structNode(qoi_op_run, { label: "qoi_op_run" }),
    "qoi_op_rgb": structNode(qoi_op_rgb, { label: "qoi_op_rgb" }),
    "qoi_op_rgba": structNode(qoi_op_rgba, { label: "qoi_op_rgba" }),
  },
});


/*
未移植项：
- qoi_header_t.channels: 类型 channels_t 不可移植
- qoi_file_t.header: 类型 header_t 不可移植
*/
