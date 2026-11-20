/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/valve_vpk.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 3 项（见文件末尾）
const header = struct("header", [
  u32("signature", {  }),
  u32("version", {  }),
  u32("tree_size", {  }),
]);

const vpk = struct("vpk", [
  record("header", header),
]);

export default definePack({
  name: "Valve VPK",
  endian: "little",
  pointerSize: 8,
  types: [header, vpk],
  nodes: {
    "entry": structNode(vpk, { label: "vpk（入口）" }),
    "header": structNode(header, { label: "header" }),
  },
});


/*
未移植项：
- entry.name: 类型 string 不可移植
- path.name: 类型 string 不可移植
- extension.name: 类型 string 不可移植
*/
