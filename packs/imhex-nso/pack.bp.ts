/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/nso.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const MOD0 = struct("MOD0", [
  pad(4),
  u32("offset", {  }),
]);

const Flags = struct("Flags", [
  bits("TextCompress", 1, { at: 0, bit: 0, unit: 4, label: "TextCompress" }),
  bits("RoCompress", 1, { at: 0, bit: 1, unit: 4, label: "RoCompress" }),
  bits("DataCompress", 1, { at: 0, bit: 2, unit: 4, label: "DataCompress" }),
  bits("TextHash", 1, { at: 0, bit: 3, unit: 4, label: "TextHash" }),
  bits("RoHash", 1, { at: 0, bit: 4, unit: 4, label: "RoHash" }),
  bits("DataHash", 1, { at: 0, bit: 5, unit: 4, label: "DataHash" }),
  bits("ExecuteOnlyMemory", 1, { at: 0, bit: 6, unit: 4, label: "ExecuteOnlyMemory" }),
  bits("UseZbicCompression", 1, { at: 0, bit: 7, unit: 4, label: "UseZbicCompression" }),
]);

export default definePack({
  name: "Nintendo Switch NSO",
  endian: "little",
  pointerSize: 8,
  types: [MOD0, Flags],
  nodes: {
    "entry": structNode(MOD0, { label: "MOD0（入口）" }),
    "Flags": structNode(Flags, { label: "Flags" }),
  },
});

