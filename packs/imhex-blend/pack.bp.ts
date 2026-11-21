/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/blend.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Thumbnail = struct("Thumbnail", [
  u32("width", {  }),
  u32("height", {  }),
]);

const SeekTableFooter = struct("SeekTableFooter", [
  u32("numFrames", {  }),
  char("flag", {  }),
]);

const SeekTableEntry = struct("SeekTableEntry", [
  u32("compressedSize", {  }),
  u32("uncompressedSize", {  }),
]);

export default definePack({
  name: "Blender file",
  endian: "little",
  pointerSize: 8,
  types: [Thumbnail, SeekTableFooter, SeekTableEntry],
  nodes: {
    "entry": structNode(SeekTableFooter, { label: "SeekTableFooter（入口）" }),
    "Thumbnail": structNode(Thumbnail, { label: "Thumbnail" }),
    "SeekTableEntry": structNode(SeekTableEntry, { label: "SeekTableEntry" }),
  },
});

