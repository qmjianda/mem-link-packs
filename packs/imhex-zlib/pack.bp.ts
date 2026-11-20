/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/zlib.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Header = struct("Header", [
  bits("method", 4, { at: 0, bit: 0, unit: 2, label: "method" }),
  bits("info", 4, { at: 0, bit: 4, unit: 2, label: "info" }),
  bits("fcheck", 5, { at: 0, bit: 8, unit: 2, label: "fcheck" }),
  bits("fdict", 1, { at: 0, bit: 13, unit: 2, label: "fdict" }),
  bits("flevel", 2, { at: 0, bit: 14, unit: 2, label: "flevel" }),
]);

const Zlib = struct("Zlib", [
  record("header", Header),
]);

export default definePack({
  name: "ZLIB compressed data",
  endian: "little",
  pointerSize: 8,
  types: [Header, Zlib],
  nodes: {
    "entry": structNode(Zlib, { label: "Zlib（入口）" }),
    "Header": structNode(Header, { label: "Header" }),
  },
});

