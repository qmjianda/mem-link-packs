/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/ape.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 2 项（见文件末尾）
const APE_ItemFlags = struct("APE_ItemFlags", [
  bits("RW", 1, { at: 0, bit: 0, unit: 4, label: "RW" }),
  bits("Type", 2, { at: 0, bit: 1, unit: 4, label: "Type" }),
  bits("Reserved", 25, { at: 0, bit: 3, unit: 4, label: "Reserved" }),
  bits("IsHeader", 1, { at: 0, bit: 28, unit: 4, label: "IsHeader" }),
  bits("HasNoFooter", 1, { at: 0, bit: 29, unit: 4, label: "HasNoFooter" }),
  bits("HasHeader", 1, { at: 0, bit: 30, unit: 4, label: "HasHeader" }),
]);

const APE_TagItem = struct("APE_TagItem", [
  u32("len", {  }),
]);

const APE_Block = struct("APE_Block", [
  str("signature", { size: 8 }),
]);

export default definePack({
  name: "APE audio metadata",
  endian: "little",
  pointerSize: 8,
  types: [APE_ItemFlags, APE_TagItem, APE_Block],
  nodes: {
    "entry": structNode(APE_ItemFlags, { label: "APE_ItemFlags（入口）" }),
    "APE_TagItem": structNode(APE_TagItem, { label: "APE_TagItem" }),
    "APE_Block": structNode(APE_Block, { label: "APE_Block" }),
  },
});


/*
未移植项：
- APE_TagItem.flags: 类型 ItemFlags 不可移植
- APE_File.header: 类型 Block 不可移植
*/
