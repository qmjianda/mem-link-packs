/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/ffx/all/takara.bin.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Treasure = struct("Treasure", [
  u8("type", {  }),
  u8("amount", {  }),
  u16("item_id", {  }),
]);

export default definePack({
  name: "Takara.Bin",
  endian: "little",
  pointerSize: 8,
  types: [Treasure],
  nodes: {
    "entry": structNode(Treasure, { label: "Treasure（入口）" }),
  },
});

