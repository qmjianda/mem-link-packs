/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/rsc.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const RSCEntry = struct("RSCEntry", [
  u32("byteLength", {  }),
  u8("used", {  }),
]);

export default definePack({
  name: "BYOND Resource Cache file",
  endian: "little",
  pointerSize: 8,
  types: [RSCEntry],
  nodes: {
    "entry": structNode(RSCEntry, { label: "RSCEntry（入口）" }),
  },
});

