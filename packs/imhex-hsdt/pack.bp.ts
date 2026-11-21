/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/hsdt.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const dt_entry_t = struct("dt_entry_t", [
  bytes("board_id", { size: 4 }),
  u32("undefined0", {  }),
]);

export default definePack({
  name: "HiSilicon HSDT device-tree table",
  endian: "little",
  pointerSize: 8,
  types: [dt_entry_t],
  nodes: {
    "entry": structNode(dt_entry_t, { label: "dt_entry_t（入口）" }),
  },
});

