/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/vox.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const VoxHeader = struct("VoxHeader", [
  str("magic", { size: 4 }),
  u32("version", {  }),
]);

const Voxel = struct("Voxel", [
  u8("x", {  }),
  u8("y", {  }),
  u8("z", {  }),
  u8("colorIndex", {  }),
]);

const RGBA8 = struct("RGBA8", [
  u8("r", {  }),
  u8("g", {  }),
  u8("b", {  }),
  u8("a", {  }),
]);

const String = struct("String", [
  u32("sizeBytes", {  }),
]);

const Vec3 = struct("Vec3", [
  array("v", "f32", 3),
]);

const Mat3 = struct("Mat3", [
  record("r0", Vec3),
  record("r1", Vec3),
  record("r2", Vec3),
]);

const Rotation = struct("Rotation", [
  bits("firstRowIndex", 2, { at: 0, bit: 0, unit: 1, label: "firstRowIndex" }),
  bits("secondRowIndex", 2, { at: 0, bit: 2, unit: 1, label: "secondRowIndex" }),
  bits("firstRowSign", 1, { at: 0, bit: 4, unit: 1, label: "firstRowSign" }),
  bits("secondRowSign", 1, { at: 0, bit: 5, unit: 1, label: "secondRowSign" }),
  bits("thirdRowSign", 1, { at: 0, bit: 6, unit: 1, label: "thirdRowSign" }),
]);

const KeyValue = struct("KeyValue", [
  record("key", String),
  record("value", String),
]);

const Dict = struct("Dict", [
  u32("count", {  }),
]);

const Model = struct("Model", [
  i32("modelId", {  }),
  record("attributes", Dict),
]);

const Chunk = struct("Chunk", [
  str("id", { size: 4 }),
  u32("sizeBytes", {  }),
  u32("childrenBytes", {  }),
]);

export default definePack({
  name: "MagicaVoxel scene description format",
  endian: "little",
  pointerSize: 8,
  types: [VoxHeader, Voxel, RGBA8, String, Vec3, Mat3, Rotation, KeyValue, Dict, Model, Chunk],
  nodes: {
    "entry": structNode(VoxHeader, { label: "VoxHeader（入口）" }),
    "Voxel": structNode(Voxel, { label: "Voxel" }),
    "RGBA8": structNode(RGBA8, { label: "RGBA8" }),
    "String": structNode(String, { label: "String" }),
    "Vec3": structNode(Vec3, { label: "Vec3" }),
    "Mat3": structNode(Mat3, { label: "Mat3" }),
    "Rotation": structNode(Rotation, { label: "Rotation" }),
    "KeyValue": structNode(KeyValue, { label: "KeyValue" }),
    "Dict": structNode(Dict, { label: "Dict" }),
    "Model": structNode(Model, { label: "Model" }),
    "Chunk": structNode(Chunk, { label: "Chunk" }),
  },
});

