/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/dted.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 4 项（见文件末尾）
const UHL = struct("UHL", [
  bytes("magic", { size: 3 }),
  char("one", {  }),
  str("lon", { size: 8 }),
  str("lat", { size: 8 }),
  str("lon_data_interval", { size: 4 }),
  str("lat_data_interval", { size: 4 }),
  str("accuracy", { size: 4 }),
  str("security_code", { size: 3 }),
  str("uniq_ref", { size: 12 }),
  str("lon_lines", { size: 4 }),
  str("lat_points", { size: 4 }),
  char("multi_accuracy", {  }),
  str("reserved", { size: 24 }),
]);

const DSI = struct("DSI", [
  bytes("magic", { size: 3 }),
  char("classification", {  }),
  str("stuff1", { size: 29 }),
  str("stuff2", { size: 26 }),
  str("product_level", { size: 5 }),
  str("uniq_ref", { size: 15 }),
  str("reserved", { size: 8 }),
  str("data_edition", { size: 2 }),
  char("match_version", {  }),
  str("maint_date", { size: 4 }),
  str("match_date", { size: 4 }),
  str("main_desc_code", { size: 4 }),
  str("producer_code", { size: 8 }),
  str("reserved2", { size: 16 }),
  str("product_spec", { size: 9 }),
  str("numbers", { size: 2 }),
  str("product_spec_date", { size: 4 }),
  str("vertical_datum", { size: 3 }),
  str("horizontal_datum", { size: 5 }),
  str("digitizing_system", { size: 10 }),
  str("compilation_date", { size: 4 }),
  str("reserved3", { size: 22 }),
  str("lat_origin", { size: 9 }),
  str("lon_origin", { size: 10 }),
  str("lat_sw_corner", { size: 7 }),
  str("lon_sw_corner", { size: 8 }),
  str("lat_nw_corner", { size: 7 }),
  str("lon_nw_corner", { size: 8 }),
  str("lat_ne_corner", { size: 7 }),
  str("lon_ne_corner", { size: 8 }),
  str("lat_se_corner", { size: 7 }),
  str("lon_se_corner", { size: 8 }),
  str("clockwise_orientation", { size: 9 }),
  str("lat_interval", { size: 4 }),
  str("lon_interval", { size: 4 }),
  str("lat_lines", { size: 4 }),
  str("lon_lines", { size: 4 }),
  str("partial_cell", { size: 2 }),
  str("reserved4", { size: 101 }),
  str("reserved5", { size: 100 }),
  str("reserved6", { size: 156 }),
]);

const ACCSub = struct("ACCSub", [
  str("abs_vertical_accuracy", { size: 4 }),
  str("abs_horizontal_accuracy", { size: 4 }),
  str("rel_vertical_accuracy", { size: 4 }),
  str("rel_horizontal_accuracy", { size: 4 }),
  str("num_coords", { size: 2 }),
  str("pairs", { size: 266 }),
]);

const ACC = struct("ACC", [
  bytes("magic", { size: 3 }),
  str("abs_horizontal_accuracy", { size: 4 }),
  str("abs_vertical_accuracy", { size: 4 }),
  str("rel_horizontal_accuracy", { size: 4 }),
  str("rel_vertical_accuracy", { size: 4 }),
  str("reserved1", { size: 4 }),
  str("reserved2", { size: 1 }),
  str("reserved3", { size: 31 }),
  str("multi_accuracy_outline", { size: 2 }),
  array("subs", ACCSub, 9),
  str("reserved4", { size: 18 }),
  str("reserved5", { size: 69 }),
]);

const DataRecords = struct("DataRecords", [
  char("magic", {  }),
]);

const DTED = struct("DTED", [
  record("uhl", UHL),
  record("dsi", DSI),
  record("acc", ACC),
]);

export default definePack({
  name: "Digital Terrain Elevation Data",
  endian: "big",
  pointerSize: 8,
  types: [UHL, DSI, ACCSub, ACC, DataRecords, DTED],
  nodes: {
    "entry": structNode(DTED, { label: "DTED（入口）" }),
    "UHL": structNode(UHL, { label: "UHL" }),
    "DSI": structNode(DSI, { label: "DSI" }),
    "ACCSub": structNode(ACCSub, { label: "ACCSub" }),
    "ACC": structNode(ACC, { label: "ACC" }),
    "DataRecords": structNode(DataRecords, { label: "DataRecords" }),
  },
});


/*
未移植项：
- UHL.magic: 枚举底层 u24 按 3 字节原始值读取，数值映射不可用
- DSI.magic: 枚举底层 u24 按 3 字节原始值读取，数值映射不可用
- ACC.magic: 枚举底层 u24 按 3 字节原始值读取，数值映射不可用
- DataRecords.data_block_count: 类型 s24 不可移植
*/
