/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/bcss.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const BCSSEntry = struct("BCSSEntry", [
  u8("type", { values: { "1": "DIRECTORY", "2": "FILE", "3": "SYMLINK", "255": "DIR_END" } }),
]);

export default definePack({
  name: "BeyondCompare Snapshot (BCSS) file",
  endian: "little",
  pointerSize: 8,
  types: [BCSSEntry],
  nodes: {
    "entry": structNode(BCSSEntry, { label: "BCSSEntry（入口）" }),
  },
});

