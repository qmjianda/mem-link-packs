/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/AC Unity/acu_forge.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Forge_Header = struct("Forge_Header", [
  str("MAGIC", { size: 8 }),
  pad(1),
  u32("Version", {  }),
  u32("File_Data_Header_Offset", {  }),
]);

const File_Data_Header = struct("File_Data_Header", [
  u32("File_Count", {  }),
  pad(32),
  u64("File_Data_Header2_Offset", {  }),
]);

const File_Data_Header2 = struct("File_Data_Header2", [
  u32("File_Count2", {  }),
  pad(4),
  u64("File_Table_Offset", {  }),
  pad(12),
  u32("File_Count3", {  }),
  u64("File_Name_Table_Offset", {  }),
  pad(8),
]);

const File_Table = struct("File_Table", [
  u64("Raw_Data_Offset", {  }),
  u64("File_ID", {  }),
  u32("Raw_Data_Size", {  }),
]);

const File_Name_Table = struct("File_Name_Table", [
  u32("Raw_Data_Size", {  }),
  pad(40),
  str("Filename", { size: 128 }),
  pad(20),
]);

export default definePack({
  name: "Assassin's Creed: Unity's .forge archive file",
  endian: "little",
  pointerSize: 8,
  types: [Forge_Header, File_Data_Header, File_Data_Header2, File_Table, File_Name_Table],
  nodes: {
    "entry": structNode(Forge_Header, { label: "Forge_Header（入口）" }),
    "File_Data_Header": structNode(File_Data_Header, { label: "File_Data_Header" }),
    "File_Data_Header2": structNode(File_Data_Header2, { label: "File_Data_Header2" }),
    "File_Table": structNode(File_Table, { label: "File_Table" }),
    "File_Name_Table": structNode(File_Name_Table, { label: "File_Name_Table" }),
  },
});

