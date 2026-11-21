/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/BroEngine/skel.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const BoneChild = struct("BoneChild", [
  u32("relPtr", {  }),
  u32("boneId", {  }),
]);

const BoneInfo = struct("BoneInfo", [
  u16("parentIndex", {  }),
  u16("unknown", {  }),
  u32("childCount", {  }),
]);

const Skeleton = struct("Skeleton", [
  u32("version", {  }),
]);

export default definePack({
  name: "BroEngine Skeleton",
  endian: "little",
  pointerSize: 8,
  types: [BoneChild, BoneInfo, Skeleton],
  nodes: {
    "entry": structNode(Skeleton, { label: "Skeleton（入口）" }),
    "BoneChild": structNode(BoneChild, { label: "BoneChild" }),
    "BoneInfo": structNode(BoneInfo, { label: "BoneInfo" }),
  },
});

