/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/nsfe.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const ChunkMetadata = struct("ChunkMetadata", [
  u32("length", {  }),
  str("ID", { size: 4 }),
]);

const Chunk = struct("Chunk", [
  record("metadata", ChunkMetadata),
]);

export default definePack({
  name: "NSFe file format",
  endian: "little",
  pointerSize: 8,
  types: [ChunkMetadata, Chunk],
  nodes: {
    "entry": structNode(Chunk, { label: "Chunk（入口）" }),
    "ChunkMetadata": structNode(ChunkMetadata, { label: "ChunkMetadata" }),
  },
});

