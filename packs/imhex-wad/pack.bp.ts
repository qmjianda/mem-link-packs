/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/wad.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const FileLump = struct("FileLump", [
  u32("filePos", {  }),
]);

const WAD = struct("WAD", [
  char("type", { values: { "0": "Internal", "1": "Patch" } }),
]);

export default definePack({
  name: "DOOM WAD Archive",
  endian: "little",
  pointerSize: 8,
  types: [FileLump, WAD],
  nodes: {
    "entry": structNode(WAD, { label: "WAD（入口）" }),
    "FileLump": structNode(FileLump, { label: "FileLump" }),
  },
});

