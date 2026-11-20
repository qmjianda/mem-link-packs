/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/unif.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Header = struct("Header", [
  str("signature", { size: 4 }),
  u32("version", {  }),
]);

const Chunk = struct("Chunk", [
  str("type", { size: 4 }),
  u32("length", {  }),
]);

export default definePack({
  name: "Universal NES Image Format",
  endian: "little",
  pointerSize: 8,
  types: [Header, Chunk],
  nodes: {
    "entry": structNode(Header, { label: "Header（入口）" }),
    "Chunk": structNode(Chunk, { label: "Chunk" }),
  },
});

