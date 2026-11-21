/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/dsstore.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const RecordEntry = struct("RecordEntry", [
  u32("length", {  }),
]);

const TreeBlock = struct("TreeBlock", [
  u32("mode", {  }),
  u32("count", {  }),
]);

const BuddyRootBlockOffsets = struct("BuddyRootBlockOffsets", [
  u32("count", {  }),
  bytes("reserved", { size: 4 }),
]);

const BuddyTableOfContentEntry = struct("BuddyTableOfContentEntry", [
  u8("count", {  }),
]);

const BuddyTableOfContents = struct("BuddyTableOfContents", [
  u32("count", {  }),
]);

const BuddyFreeList = struct("BuddyFreeList", [
  u32("count", {  }),
]);

const BuddyRootBlock = struct("BuddyRootBlock", [
  record("offsets", BuddyRootBlockOffsets),
  record("toc", BuddyTableOfContents),
  array("freelists", BuddyFreeList, 32),
]);

const BuddyBlock = struct("BuddyBlock", [
  u32("blockCount", {  }),
  bytes("reserved", { size: 4 }),
]);

const BlocksList = struct("BlocksList", [
  u32("blockId", {  }),
  u32("internalBlocks", {  }),
  u32("countRecords", {  }),
  u32("countBlocks", {  }),
  u32("reserved", {  }),
]);

const BuddyAllocator = struct("BuddyAllocator", [
  str("header", { size: 4 }),
  u32("offsetBookkeeping", {  }),
  u32("sizeBookkeeping", {  }),
  u32("offsetBookkeeping2", {  }),
  u32("offsetData", {  }),
  bytes("reserved", { size: 12 }),
]);

export default definePack({
  name: "macOS .DS_Store",
  endian: "big",
  pointerSize: 8,
  types: [RecordEntry, TreeBlock, BuddyRootBlockOffsets, BuddyTableOfContentEntry, BuddyTableOfContents, BuddyFreeList, BuddyRootBlock, BuddyBlock, BlocksList, BuddyAllocator],
  nodes: {
    "entry": structNode(BuddyAllocator, { label: "BuddyAllocator（入口）" }),
    "RecordEntry": structNode(RecordEntry, { label: "RecordEntry" }),
    "TreeBlock": structNode(TreeBlock, { label: "TreeBlock" }),
    "BuddyRootBlockOffsets": structNode(BuddyRootBlockOffsets, { label: "BuddyRootBlockOffsets" }),
    "BuddyTableOfContentEntry": structNode(BuddyTableOfContentEntry, { label: "BuddyTableOfContentEntry" }),
    "BuddyTableOfContents": structNode(BuddyTableOfContents, { label: "BuddyTableOfContents" }),
    "BuddyFreeList": structNode(BuddyFreeList, { label: "BuddyFreeList" }),
    "BuddyRootBlock": structNode(BuddyRootBlock, { label: "BuddyRootBlock" }),
    "BuddyBlock": structNode(BuddyBlock, { label: "BuddyBlock" }),
    "BlocksList": structNode(BlocksList, { label: "BlocksList" }),
  },
});

