/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/pfs0.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const FileEntry = struct("FileEntry", [
  u64("dataOffset", {  }),
]);

export default definePack({
  name: "Nintendo Switch PFS0 archive (.nsp)",
  endian: "little",
  pointerSize: 8,
  types: [FileEntry],
  nodes: {
    "entry": structNode(FileEntry, { label: "FileEntry（入口）" }),
  },
});


/*
未移植项：
- PFS0.header: 类型 Header 不可移植
*/
