/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/sit5.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 3 项（见文件末尾）
const v5_Flags1 = struct("v5_Flags1", [
  bits("folder", 1, { at: 0, bit: 1, unit: 1, label: "folder" }),
  bits("encrypted", 1, { at: 0, bit: 2, unit: 1, label: "encrypted" }),
]);

const v5_Flags2 = struct("v5_Flags2", [
  bits("resource_fork", 1, { at: 0, bit: 7, unit: 2, label: "resource_fork" }),
]);

const v5_Header = struct("v5_Header", [
  str("magic", { size: 80 }),
  u32("unknown1", {  }),
  u32("archiveSize", {  }),
  u32("entriesOffset", {  }),
  u32("unknown2", {  }),
]);

const v5_EntryHeader = struct("v5_EntryHeader", [
  u32("magic", {  }),
  u8("version", {  }),
  u8("unknown1", {  }),
  u16("headerSize", {  }),
  u8("unknown2", {  }),
]);

export default definePack({
  name: "StuffIt V5 archive",
  endian: "big",
  pointerSize: 8,
  types: [v5_Flags1, v5_Flags2, v5_Header, v5_EntryHeader],
  nodes: {
    "entry": structNode(v5_Flags1, { label: "v5_Flags1（入口）" }),
    "v5_Flags2": structNode(v5_Flags2, { label: "v5_Flags2" }),
    "v5_Header": structNode(v5_Header, { label: "v5_Header" }),
    "v5_EntryHeader": structNode(v5_EntryHeader, { label: "v5_EntryHeader" }),
  },
});


/*
未移植项：
- v5_EntryHeader.flags: 类型 Flags1 不可移植
- v5_Entry.header: 类型 EntryHeader 不可移植
- v5_StuffIt.header: 类型 Header 不可移植
*/
