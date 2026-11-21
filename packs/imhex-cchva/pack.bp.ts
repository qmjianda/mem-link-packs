/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/cchva.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const vec4_s = struct("vec4_s", [
  f32("x", {  }),
  f32("y", {  }),
  f32("z", {  }),
  f32("w", {  }),
]);

const mat3x4_s = struct("mat3x4_s", [
  array("row", vec4_s, 3),
]);

const name_s = struct("name_s", [
  str("buffer", { size: 16 }),
]);

const hva_s = struct("hva_s", [
  record("name", name_s),
  u32("numFrames", {  }),
  u32("numNodes", {  }),
]);

export default definePack({
  name: "Command and Conquer Voxel Animation",
  endian: "little",
  pointerSize: 8,
  types: [vec4_s, mat3x4_s, name_s, hva_s],
  nodes: {
    "entry": structNode(hva_s, { label: "hva_s（入口）" }),
    "vec4_s": structNode(vec4_s, { label: "vec4_s" }),
    "mat3x4_s": structNode(mat3x4_s, { label: "mat3x4_s" }),
    "name_s": structNode(name_s, { label: "name_s" }),
  },
});

