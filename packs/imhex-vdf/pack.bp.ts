/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/vdf.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Entry = struct("Entry", [
  u8("type", { values: { "0": "Set", "1": "String", "2": "Integer", "8": "EndSet" } }),
]);

const Set = struct("Set", [
  record("entry", Entry),
  u8("endSet", { values: { "0": "Set", "1": "String", "2": "Integer", "8": "EndSet" } }),
]);

export default definePack({
  name: "Valve Binary Value Data Format (.vdf)",
  endian: "little",
  pointerSize: 8,
  types: [Entry, Set],
  nodes: {
    "entry": structNode(Set, { label: "Set（入口）" }),
    "Entry": structNode(Entry, { label: "Entry" }),
  },
});

