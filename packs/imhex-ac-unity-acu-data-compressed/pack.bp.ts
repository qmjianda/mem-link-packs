/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/AC Unity/acu_data_compressed.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const CHUNK = struct("CHUNK", [
  u16("Uncompressed_Size", {  }),
  u16("Compressed_Size", {  }),
]);

const CHUNK_Data = struct("CHUNK_Data", [
  u32("Hash", {  }),
]);

const PACK = struct("PACK", [
  u64("ID", {  }),
  pad(2),
  u8("Compression_Type", { values: { "0": "LZO1X_", "1": "LZO1X", "2": "LZO2A", "3": "xmemdecompress", "5": "LZO1C" } }),
  pad(3),
  u8("Version", {  }),
  u16("CHUNK_Count", {  }),
]);

export default definePack({
  name: "Assassin's Creed: Unity's Compressed .data file",
  endian: "little",
  pointerSize: 8,
  types: [CHUNK, CHUNK_Data, PACK],
  nodes: {
    "entry": structNode(PACK, { label: "PACK（入口）" }),
    "CHUNK": structNode(CHUNK, { label: "CHUNK" }),
    "CHUNK_Data": structNode(CHUNK_Data, { label: "CHUNK_Data" }),
  },
});

