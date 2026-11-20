/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/fs/mbr.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const MbrPartitionAttributes = struct("MbrPartitionAttributes", [
  bits("Reserved", 7, { at: 0, bit: 0, unit: 1, label: "Reserved" }),
  bits("IsActiveOrBootable", 1, { at: 0, bit: 7, unit: 1, label: "IsActiveOrBootable" }),
]);

const MbrPartitionTableEntry = struct("MbrPartitionTableEntry", [
  record("Attributes", MbrPartitionAttributes),
  u8("PartitionStartCylinder", {  }),
  u8("PartitionStartHead", {  }),
  u8("PartitionStartSector", {  }),
  u8("PartitionType", {  }),
  u8("PartitionEndCylinder", {  }),
  u8("PartitionEndHead", {  }),
  u8("PartitionEndSector", {  }),
  u32("PartitionStartLba", {  }),
  u32("PartitionSectorQty", {  }),
]);

const MBR = struct("MBR", [
  bytes("Bootstrap", { size: 440 }),
  u32("UniqueDiskId", {  }),
  u16("Reserved", {  }),
]);

export default definePack({
  name: "Master boot record - IBM",
  endian: "little",
  pointerSize: 8,
  types: [MbrPartitionAttributes, MbrPartitionTableEntry, MBR],
  nodes: {
    "entry": structNode(MBR, { label: "MBR（入口）" }),
    "MbrPartitionAttributes": structNode(MbrPartitionAttributes, { label: "MbrPartitionAttributes" }),
    "MbrPartitionTableEntry": structNode(MbrPartitionTableEntry, { label: "MbrPartitionTableEntry" }),
  },
});

