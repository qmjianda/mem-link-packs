/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/fdt.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const FDTReserveEntry = struct("FDTReserveEntry", [
  u64("address", {  }),
]);

const FDTProp = struct("FDTProp", [
  u32("tok", { values: { "1": "FDT_BEGIN_NODE", "2": "FDT_END_NODE", "3": "FDT_PROP", "4": "FDT_NOP", "9": "FDT_END" } }),
  u32("len", {  }),
  u32("nameoff", {  }),
]);

export default definePack({
  name: "Flat Linux Device Tree blob",
  endian: "big",
  pointerSize: 8,
  types: [FDTReserveEntry, FDTProp],
  nodes: {
    "entry": structNode(FDTReserveEntry, { label: "FDTReserveEntry（入口）" }),
    "FDTProp": structNode(FDTProp, { label: "FDTProp" }),
  },
});


/*
未移植项：
- FDT.header: 类型 FDTHeader 不可移植
*/
