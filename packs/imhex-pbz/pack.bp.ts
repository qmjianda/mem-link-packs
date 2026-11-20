/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/pbz.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
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


/*
未移植项：
- PBZ: 位域没有可移植的固定成员
*/
