/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/pbz.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Chunk = struct("Chunk", [
  u64("uncompressed_size", {  }),
  u64("compressed_size", {  }),
]);

export default definePack({
  name: "Apple pbz",
  endian: "big",
  pointerSize: 8,
  types: [Chunk],
  nodes: {
    "entry": structNode(Chunk, { label: "Chunk（入口）" }),
  },
});

