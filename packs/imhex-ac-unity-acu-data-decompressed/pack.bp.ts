/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/AC Unity/acu_data_decompressed.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Block_Allocator_Type0 = struct("Block_Allocator_Type0", [
  pad(4),
  u32("Class_ID", {  }),
  u32("Size", {  }),
]);

const Block_Allocator_Type1 = struct("Block_Allocator_Type1", [
  pad(4),
  u32("Type_ID", {  }),
  u32("Size", {  }),
]);

const Block_Allocator = struct("Block_Allocator", [
  u16("Version", {  }),
]);

const File = struct("File", [
  u32("Object_Hash", {  }),
  u32("File_Size", {  }),
  u32("Filename_Length", {  }),
]);

export default definePack({
  name: "Assassin's Creed: Unity's Decompressed .data file",
  endian: "little",
  pointerSize: 8,
  types: [Block_Allocator_Type0, Block_Allocator_Type1, Block_Allocator, File],
  nodes: {
    "entry": structNode(File, { label: "File（入口）" }),
    "Block_Allocator_Type0": structNode(Block_Allocator_Type0, { label: "Block_Allocator_Type0" }),
    "Block_Allocator_Type1": structNode(Block_Allocator_Type1, { label: "Block_Allocator_Type1" }),
    "Block_Allocator": structNode(Block_Allocator, { label: "Block_Allocator" }),
  },
});

