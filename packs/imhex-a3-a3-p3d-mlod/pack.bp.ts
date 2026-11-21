/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/a3/a3_p3d_mlod.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 2 项（见文件末尾）
const Vector = struct("Vector", [
  f32("x", {  }),
  f32("y", {  }),
  f32("z", {  }),
]);

const UV = struct("UV", [
  f32("u", {  }),
  f32("v", {  }),
]);

const VertexFlags = struct("VertexFlags", [
  bits("normals", 3, { at: 0, bit: 5, unit: 1, label: "normals" }),
]);

const Vertex = struct("Vertex", [
  record("position", Vector),
  record("flags", VertexFlags),
]);

const FacePoint = struct("FacePoint", [
  u32("vertex_index", {  }),
  u32("normal_index", {  }),
  record("uv", UV),
]);

const FaceFlags = struct("FaceFlags", [
  bits("user", 7, { at: 0, bit: 0, unit: 4, label: "user" }),
  bits("disable_texture_merging", 1, { at: 0, bit: 7, unit: 4, label: "disable_texture_merging" }),
  bits("flat_lighting", 1, { at: 0, bit: 10, unit: 4, label: "flat_lighting" }),
  bits("reversed_face", 1, { at: 0, bit: 11, unit: 4, label: "reversed_face" }),
  bits("zbias", 2, { at: 0, bit: 22, unit: 4, label: "zbias" }),
  bits("position", 1, { at: 0, bit: 24, unit: 4, label: "position" }),
  bits("double_sided_face", 1, { at: 0, bit: 26, unit: 4, label: "double_sided_face" }),
  bits("disable_shadow", 1, { at: 0, bit: 27, unit: 4, label: "disable_shadow" }),
]);

const Face = struct("Face", [
  u32("type", { values: { "3": "TRIANGLE", "4": "QUAD" } }),
  array("points", FacePoint, 4),
  record("flags", FaceFlags),
]);

const Edge = struct("Edge", [
  u32("vertex_1", {  }),
  u32("vertex_2", {  }),
]);

const Property = struct("Property", [
  str("name", { size: 64 }),
  str("value", { size: 64 }),
]);

const Tagg = struct("Tagg", [
  bool("active", {  }),
]);

const P3dmLod = struct("P3dmLod", [
  str("signature", { size: 4 }),
  u32("version_major", {  }),
  u32("version_minor", {  }),
  u32("count_verticies", {  }),
  u32("count_normals", {  }),
  u32("count_faces", {  }),
]);

const P3D = struct("P3D", [
  str("signature", { size: 4 }),
  u32("version", {  }),
  u32("count_lods", {  }),
]);

export default definePack({
  name: "Arma 3 P3D model format (MLOD)",
  endian: "little",
  pointerSize: 8,
  types: [Vector, UV, VertexFlags, Vertex, FacePoint, FaceFlags, Face, Edge, Property, Tagg, P3dmLod, P3D],
  nodes: {
    "entry": structNode(P3D, { label: "P3D（入口）" }),
    "Vector": structNode(Vector, { label: "Vector" }),
    "UV": structNode(UV, { label: "UV" }),
    "VertexFlags": structNode(VertexFlags, { label: "VertexFlags" }),
    "Vertex": structNode(Vertex, { label: "Vertex" }),
    "FacePoint": structNode(FacePoint, { label: "FacePoint" }),
    "FaceFlags": structNode(FaceFlags, { label: "FaceFlags" }),
    "Face": structNode(Face, { label: "Face" }),
    "Edge": structNode(Edge, { label: "Edge" }),
    "Property": structNode(Property, { label: "Property" }),
    "Tagg": structNode(Tagg, { label: "Tagg" }),
    "P3dmLod": structNode(P3dmLod, { label: "P3dmLod" }),
  },
});


/*
未移植项：
- Face.texture: 类型 std_string_NullString 不可移植
- Tagg.name: 类型 std_string_NullString 不可移植
*/
