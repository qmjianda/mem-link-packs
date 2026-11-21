/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/sqlite3.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const SQLiteVersion = struct("SQLiteVersion", [
  u32("rawValue", {  }),
]);

const Page = struct("Page", [
  u8("pageType", { values: { "2": "InteriorIndexBTreePage", "5": "InteriorTableBTreePage", "10": "LeafIndexBTreePage", "13": "LeafTableBTreePage" } }),
  u16("freeBlockStart", {  }),
  u16("numCells", {  }),
  u16("cellContentAreaStart", {  }),
  u8("fragmentedFreeBytesCount", {  }),
]);

export default definePack({
  name: "SQLite 3 database",
  endian: "little",
  pointerSize: 8,
  types: [SQLiteVersion, Page],
  nodes: {
    "entry": structNode(SQLiteVersion, { label: "SQLiteVersion（入口）" }),
    "Page": structNode(Page, { label: "Page" }),
  },
});


/*
未移植项：
- SQLite3.header: 类型 DatabaseHeader 不可移植
*/
