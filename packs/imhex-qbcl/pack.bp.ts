/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/qbcl.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const String = struct("String", [
  u32("len", {  }),
]);

const Matrix = struct("Matrix", [
  u32("sizex", {  }),
  u32("sizey", {  }),
  u32("sizez", {  }),
  i32("tx", {  }),
  i32("ty", {  }),
  i32("tz", {  }),
  f32("pivotx", {  }),
  f32("pivoty", {  }),
  f32("pivotz", {  }),
  u32("compressedDataSize", {  }),
]);

const Matrices = struct("Matrices", [
  array("row1", "f32", 3),
  array("row2", "f32", 3),
  array("row3", "f32", 3),
]);

const Model = struct("Model", [
  record("rotation", Matrices),
  u32("childCount", {  }),
]);

const Compound = struct("Compound", [
  record("matrix", Matrix),
  u32("childCount", {  }),
]);

const Node = struct("Node", [
  u32("type", {  }),
  u32("unknown", {  }),
  record("name", String),
  u8("visible", {  }),
  u8("unknown2", {  }),
  u8("locked", {  }),
]);

const Header = struct("Header", [
  u32("magic", {  }),
  u32("version", {  }),
  u32("fileversion", {  }),
  u32("thumbwidth", {  }),
  u32("thumbheight", {  }),
]);

export default definePack({
  name: "Qubicle voxel scene project",
  endian: "little",
  pointerSize: 8,
  types: [String, Matrix, Matrices, Model, Compound, Node, Header],
  nodes: {
    "entry": structNode(Header, { label: "Header（入口）" }),
    "String": structNode(String, { label: "String" }),
    "Matrix": structNode(Matrix, { label: "Matrix" }),
    "Matrices": structNode(Matrices, { label: "Matrices" }),
    "Model": structNode(Model, { label: "Model" }),
    "Compound": structNode(Compound, { label: "Compound" }),
    "Node": structNode(Node, { label: "Node" }),
  },
});

