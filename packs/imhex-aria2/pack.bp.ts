/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/aria2.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const AriaInFlight = struct("AriaInFlight", [
  u32("index", {  }),
  u32("length", {  }),
  u32("bitfield_piece_length", {  }),
]);

const AriaHeader = struct("AriaHeader", [
  u16("version", {  }),
  u32("extension", {  }),
  u32("infohash_length", {  }),
]);

export default definePack({
  name: "aria2 Control File",
  endian: "big",
  pointerSize: 8,
  types: [AriaInFlight, AriaHeader],
  nodes: {
    "entry": structNode(AriaHeader, { label: "AriaHeader（入口）" }),
    "AriaInFlight": structNode(AriaInFlight, { label: "AriaInFlight" }),
  },
});

