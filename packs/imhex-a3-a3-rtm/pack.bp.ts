/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/a3/a3_rtm.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const Property = struct("Property", [
  f32("phase", {  }),
]);

const Bone = struct("Bone", [
  str("name", { size: 32 }),
]);

const Transform = struct("Transform", [
  record("bone", Bone),
  array("matrix", "f32", 12),
]);

const Frame = struct("Frame", [
  f32("phase", {  }),
]);

const Vector = struct("Vector", [
  f32("x", {  }),
  f32("y", {  }),
  f32("z", {  }),
]);

export default definePack({
  name: "Arma 3 RTM animation format (plain)",
  endian: "little",
  pointerSize: 8,
  types: [Property, Bone, Transform, Frame, Vector],
  nodes: {
    "entry": structNode(Property, { label: "Property（入口）" }),
    "Bone": structNode(Bone, { label: "Bone" }),
    "Transform": structNode(Transform, { label: "Transform" }),
    "Frame": structNode(Frame, { label: "Frame" }),
    "Vector": structNode(Vector, { label: "Vector" }),
  },
});


/*
未移植项：
- Property.name: 类型 std_string_SizedString 不可移植
*/
