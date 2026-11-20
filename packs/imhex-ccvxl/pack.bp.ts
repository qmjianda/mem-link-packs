/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/ccvxl.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const vec4_s = struct("vec4_s", [
  f32("x", {  }),
  f32("y", {  }),
  f32("z", {  }),
  f32("w", {  }),
]);

const vec3_s = struct("vec3_s", [
  f32("x", {  }),
  f32("y", {  }),
  f32("z", {  }),
]);

const mat3x4_s = struct("mat3x4_s", [
  array("row", vec4_s, 3),
]);

const name_s = struct("name_s", [
  str("buffer", { size: 16 }),
]);

const color_s = struct("color_s", [
  u8("r", {  }),
  u8("g", {  }),
  u8("b", {  }),
]);

const vxl_limb_header_s = struct("vxl_limb_header_s", [
  record("name", name_s),
  i32("limb_number", {  }),
  u32("_reserved1", {  }),
  u32("_reserved2", {  }),
]);

const vxl_limb_tailer_s = struct("vxl_limb_tailer_s", [
  u32("span_start_offset", {  }),
  u32("span_end_offset", {  }),
  u32("span_data_offset", {  }),
  f32("scale", {  }),
  record("matrix", mat3x4_s),
  record("min_bounds", vec3_s),
  record("max_bounds", vec3_s),
  u8("xsize", {  }),
  u8("ysize", {  }),
  u8("zsize", {  }),
  u8("normal_type", {  }),
]);

const vxl_s = struct("vxl_s", [
  record("name", name_s),
  u32("palette_count", {  }),
  u32("limb_count", {  }),
  u32("tailer_count", {  }),
  u32("body_size", {  }),
  u8("remap_start_index", {  }),
  u8("remap_end_index", {  }),
  array("internal_palette", color_s, 256),
]);

export default definePack({
  name: "Command and Conquer Voxel Model",
  endian: "little",
  pointerSize: 8,
  types: [vec4_s, vec3_s, mat3x4_s, name_s, color_s, vxl_limb_header_s, vxl_limb_tailer_s, vxl_s],
  nodes: {
    "entry": structNode(vxl_s, { label: "vxl_s（入口）" }),
    "vec4_s": structNode(vec4_s, { label: "vec4_s" }),
    "vec3_s": structNode(vec3_s, { label: "vec3_s" }),
    "mat3x4_s": structNode(mat3x4_s, { label: "mat3x4_s" }),
    "name_s": structNode(name_s, { label: "name_s" }),
    "color_s": structNode(color_s, { label: "color_s" }),
    "vxl_limb_header_s": structNode(vxl_limb_header_s, { label: "vxl_limb_header_s" }),
    "vxl_limb_tailer_s": structNode(vxl_limb_tailer_s, { label: "vxl_limb_tailer_s" }),
  },
});

