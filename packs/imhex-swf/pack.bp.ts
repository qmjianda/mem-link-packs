/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/swf.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Rect = struct("Rect", [
  bits("nSize", 5, { at: 0, bit: 0, unit: 8, label: "nSize" }),
  bits("xMin", 15, { at: 0, bit: 5, unit: 8, label: "xMin" }),
  bits("xMax", 15, { at: 0, bit: 20, unit: 8, label: "xMax" }),
  bits("yMin", 15, { at: 0, bit: 35, unit: 8, label: "yMin" }),
]);

const Header = struct("Header", [
  char("compressionSignature", {  }),
]);

export default definePack({
  name: "Shockwave Flash Movie (SWF)",
  endian: "little",
  pointerSize: 8,
  types: [Rect, Header],
  nodes: {
    "entry": structNode(Header, { label: "Header（入口）" }),
    "Rect": structNode(Rect, { label: "Rect" }),
  },
});

