/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/ogg.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const HeaderType = struct("HeaderType", [
  bits("Continuation", 1, { at: 0, bit: 0, unit: 1, label: "Continuation" }),
  bits("BeginOfStream", 1, { at: 0, bit: 1, unit: 1, label: "BeginOfStream" }),
  bits("EndOfStream", 1, { at: 0, bit: 2, unit: 1, label: "EndOfStream" }),
]);

export default definePack({
  name: "OGG Audio",
  endian: "little",
  pointerSize: 8,
  types: [HeaderType],
  nodes: {
    "entry": structNode(HeaderType, { label: "HeaderType（入口）" }),
  },
});

