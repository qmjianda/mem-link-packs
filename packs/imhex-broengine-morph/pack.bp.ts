/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/BroEngine/morph.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 4 项（见文件末尾）
const MorphTarget = struct("MorphTarget", [
  u32("vertex_start", {  }),
  u32("vertex_count", {  }),
  u32("unknown", {  }),
]);

const MorphVertex = struct("MorphVertex", [
  u32("target_vertex", {  }),
]);

const MorpherLimit = struct("MorpherLimit", [
  f32("min", {  }),
  f32("max", {  }),
]);

const MorpherExtent = struct("MorpherExtent", [
  f32("extent", {  }),
  f32("amount", {  }),
  u32("flags", {  }),
]);

const MorphAnimation = struct("MorphAnimation", [
  u32("count", {  }),
]);

export default definePack({
  name: "BroEngine Morph",
  endian: "little",
  pointerSize: 8,
  types: [MorphTarget, MorphVertex, MorpherLimit, MorpherExtent, MorphAnimation],
  nodes: {
    "entry": structNode(MorphAnimation, { label: "MorphAnimation（入口）" }),
    "MorphTarget": structNode(MorphTarget, { label: "MorphTarget" }),
    "MorphVertex": structNode(MorphVertex, { label: "MorphVertex" }),
    "MorpherLimit": structNode(MorpherLimit, { label: "MorpherLimit" }),
    "MorpherExtent": structNode(MorpherExtent, { label: "MorpherExtent" }),
  },
});


/*
未移植项：
- MorphTarget.name: 类型 PString32 不可移植
- MorphVertex.position: 类型 Vector3F 不可移植
- MorpherTarget.name: 类型 PString32 不可移植
- Morpher.name: 类型 PString32 不可移植
*/
