/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/BroEngine/mesh.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const UVBuffer = struct("UVBuffer", [
  u8("uv_type", {  }),
]);

const BoneIndirection = struct("BoneIndirection", [
  bits("index", 24, { at: 0, bit: 0, unit: 4, label: "index" }),
  bits("count", 8, { at: 0, bit: 24, unit: 4, label: "count" }),
]);

const Mesh = struct("Mesh", [
  u32("version", {  }),
]);

export default definePack({
  name: "BroEngine Mesh",
  endian: "little",
  pointerSize: 8,
  types: [UVBuffer, BoneIndirection, Mesh],
  nodes: {
    "entry": structNode(Mesh, { label: "Mesh（入口）" }),
    "UVBuffer": structNode(UVBuffer, { label: "UVBuffer" }),
    "BoneIndirection": structNode(BoneIndirection, { label: "BoneIndirection" }),
  },
});


/*
未移植项：
- BoneWeight.weight: 类型 half 不可移植
*/
