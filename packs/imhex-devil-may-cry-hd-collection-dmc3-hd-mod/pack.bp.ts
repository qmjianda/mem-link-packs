/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/Devil May Cry HD Collection/dmc3_hd_mod.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const ModelHeader = struct("ModelHeader", [
  str("ID", { size: 4 }),
  f32("Version", {  }),
  pad(8),
  u8("objectCount", {  }),
  u8("boneCount", {  }),
  u8("numberTextures", {  }),
  u64("skeletonOffset", {  }),
  pad(24),
]);

const ObjectInfo = struct("ObjectInfo", [
  u8("meshCount", {  }),
  u16("numberVertices", {  }),
  pad(4),
  u64("meshOffset", {  }),
  u32("flags", {  }),
  pad(28),
  f32("X", {  }),
  f32("Y", {  }),
  f32("Z", {  }),
  f32("radius", {  }),
]);

const Positions = struct("Positions", [
  array("positions", "f32", 3),
]);

const Normals = struct("Normals", [
  array("normal", "f32", 3),
]);

const UVs = struct("UVs", [
  array("uv", "i16", 2),
]);

const BoneIndices = struct("BoneIndices", [
  bytes("boneindex", { size: 4 }),
]);

const Weights = struct("Weights", [
  array("weight", "u16", 1),
]);

const MeshSCM = struct("MeshSCM", [
  u16("numberVertices", {  }),
  u16("textureIndex", {  }),
  pad(12),
  u64("VerticesPositionsOffset", {  }),
  u64("NormalsPositionsOffset", {  }),
  u64("UVsPositionsOffset", {  }),
  pad(16),
  u64("unknownOffset", {  }),
  pad(8),
]);

const Mesh = struct("Mesh", [
  u16("numberVertices", {  }),
  u16("textureIndex", {  }),
  pad(12),
  u64("VerticesPositionsOffset", {  }),
  u64("NormalsPositionsOffset", {  }),
  u64("UVsPositionsOffset", {  }),
  u64("BoneIndicesOffset", {  }),
  u64("WeightsOffset", {  }),
  pad(8),
  pad(8),
]);

const Hierarchy = struct("Hierarchy", [
  u8("hierarchy", {  }),
]);

const HierarchyOrder = struct("HierarchyOrder", [
  u8("hierarchyorder", {  }),
]);

const Transform = struct("Transform", [
  f32("x", {  }),
  f32("y", {  }),
  f32("z", {  }),
  f32("length", {  }),
  pad(16),
]);

const Skeleton = struct("Skeleton", [
  u32("hierarchyOffset", {  }),
  u32("hierarchyOrderOffset", {  }),
  u32("unknownOffset", {  }),
  u32("transformsOffset", {  }),
]);

export default definePack({
  name: "Devil May Cry 3 HD .mod 3D model file",
  endian: "little",
  pointerSize: 8,
  types: [ModelHeader, ObjectInfo, Positions, Normals, UVs, BoneIndices, Weights, MeshSCM, Mesh, Hierarchy, HierarchyOrder, Transform, Skeleton],
  nodes: {
    "entry": structNode(ModelHeader, { label: "ModelHeader（入口）" }),
    "ObjectInfo": structNode(ObjectInfo, { label: "ObjectInfo" }),
    "Positions": structNode(Positions, { label: "Positions" }),
    "Normals": structNode(Normals, { label: "Normals" }),
    "UVs": structNode(UVs, { label: "UVs" }),
    "BoneIndices": structNode(BoneIndices, { label: "BoneIndices" }),
    "Weights": structNode(Weights, { label: "Weights" }),
    "MeshSCM": structNode(MeshSCM, { label: "MeshSCM" }),
    "Mesh": structNode(Mesh, { label: "Mesh" }),
    "Hierarchy": structNode(Hierarchy, { label: "Hierarchy" }),
    "HierarchyOrder": structNode(HierarchyOrder, { label: "HierarchyOrder" }),
    "Transform": structNode(Transform, { label: "Transform" }),
    "Skeleton": structNode(Skeleton, { label: "Skeleton" }),
  },
});

