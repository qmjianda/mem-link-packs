/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/ccpal.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Color = struct("Color", [
  u8("r", {  }),
  u8("g", {  }),
  u8("b", {  }),
]);

const Palette = struct("Palette", [
  array("colors", Color, 256),
]);

export default definePack({
  name: "Command and Conquer Voxel Palette",
  endian: "little",
  pointerSize: 8,
  types: [Color, Palette],
  nodes: {
    "entry": structNode(Palette, { label: "Palette（入口）" }),
    "Color": structNode(Color, { label: "Color" }),
  },
});

