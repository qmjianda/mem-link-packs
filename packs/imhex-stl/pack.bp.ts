/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/stl.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Vector3f = struct("Vector3f", [
  f32("x", {  }),
  f32("y", {  }),
  f32("z", {  }),
]);

const Triangle = struct("Triangle", [
  record("normal", Vector3f),
  array("points", Vector3f, 3),
  u16("flags", {  }),
]);

export default definePack({
  name: "STL 3D Model",
  endian: "little",
  pointerSize: 8,
  types: [Vector3f, Triangle],
  nodes: {
    "entry": structNode(Vector3f, { label: "Vector3f（入口）" }),
    "Triangle": structNode(Triangle, { label: "Triangle" }),
  },
});

