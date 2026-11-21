/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/BroEngine/anim.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const SkeletalAnimation = struct("SkeletalAnimation", [
  u16("bone_count", {  }),
  u32("frame_count", {  }),
  f32("duration", {  }),
]);

export default definePack({
  name: "BroEngine Animation",
  endian: "little",
  pointerSize: 8,
  types: [SkeletalAnimation],
  nodes: {
    "entry": structNode(SkeletalAnimation, { label: "SkeletalAnimation（入口）" }),
  },
});


/*
未移植项：
- SkeletalAnimation.prefab: 类型 Track 不可移植
*/
