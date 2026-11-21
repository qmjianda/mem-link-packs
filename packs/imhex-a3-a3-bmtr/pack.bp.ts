/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/a3/a3_bmtr.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const s16float = struct("s16float", [
  i16("data", {  }),
]);

const Property = struct("Property", [
  pad(4),
]);

const Quaternion = struct("Quaternion", [
  record("x", s16float),
  record("y", s16float),
  record("z", s16float),
  record("w", s16float),
]);

const Transform = struct("Transform", [
  record("orientation", Quaternion),
]);

const Frame = struct("Frame", [
  u32("count_bones", {  }),
]);

const BMTR = struct("BMTR", [
  str("signature", { size: 4 }),
  u32("version", {  }),
  pad(1),
]);

export default definePack({
  name: "Arma 3 RTM animation format (binarized)",
  endian: "little",
  pointerSize: 8,
  types: [s16float, Property, Quaternion, Transform, Frame, BMTR],
  nodes: {
    "entry": structNode(BMTR, { label: "BMTR（入口）" }),
    "s16float": structNode(s16float, { label: "s16float" }),
    "Property": structNode(Property, { label: "Property" }),
    "Quaternion": structNode(Quaternion, { label: "Quaternion" }),
    "Transform": structNode(Transform, { label: "Transform" }),
    "Frame": structNode(Frame, { label: "Frame" }),
  },
});


/*
未移植项：
- Property.name: 类型 std_string_NullString 不可移植
*/
