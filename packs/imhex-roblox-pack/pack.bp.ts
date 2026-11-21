/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/roblox_pack.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 2 项（见文件末尾）
const FileIndex = struct("FileIndex", [
  str("name", { size: 64 }),
]);

export default definePack({
  name: "Roblox .pack shader archive format",
  endian: "little",
  pointerSize: 8,
  types: [FileIndex],
  nodes: {
    "entry": structNode(FileIndex, { label: "FileIndex（入口）" }),
  },
});


/*
未移植项：
- FileIndex.md5Hash: 类型 u128 不可移植
- RBXPack.header: 类型 Header 不可移植
*/
