/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/dted.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 6 项（见文件末尾）
const ACCSub = struct("ACCSub", [
  str("abs_vertical_accuracy", { size: 4 }),
  str("abs_horizontal_accuracy", { size: 4 }),
  str("rel_vertical_accuracy", { size: 4 }),
  str("rel_horizontal_accuracy", { size: 4 }),
  str("num_coords", { size: 2 }),
  str("pairs", { size: 266 }),
]);

const DataRecords = struct("DataRecords", [
  char("magic", {  }),
]);

export default definePack({
  name: "Digital Terrain Elevation Data",
  endian: "big",
  pointerSize: 8,
  types: [ACCSub, DataRecords],
  nodes: {
    "entry": structNode(ACCSub, { label: "ACCSub（入口）" }),
    "DataRecords": structNode(DataRecords, { label: "DataRecords" }),
  },
});


/*
未移植项：
- UHL.magic: 枚举底层类型 u24 不支持
- DSI.magic: 枚举底层类型 u24 不支持
- ACC.magic: 枚举底层类型 u24 不支持
- DataRecords.data_block_count: 类型 s24 不可移植
- DTED.uhl: 类型 UHL 不可移植
- DTED: 位域没有可移植的固定成员
*/
