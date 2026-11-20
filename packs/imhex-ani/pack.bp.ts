/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/ani.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const HeaderFlags = struct("HeaderFlags", [
  bits("icon", 1, { at: 0, bit: 0, unit: 4, label: "icon" }),
  bits("sequence", 1, { at: 0, bit: 1, unit: 4, label: "sequence" }),
]);

const anih = struct("anih", [
  u32("struct_size", {  }),
  u32("stored_frames", {  }),
  u32("animation_steps", {  }),
  u32("w", {  }),
  u32("h", {  }),
  u32("bits", {  }),
  u32("planes", {  }),
  u32("default_jiffies", {  }),
  record("flags", HeaderFlags),
]);

const RiffChunk = struct("RiffChunk", [
  str("signature", { size: 4 }),
  u32("size", {  }),
]);

export default definePack({
  name: "Windows animated cursor",
  endian: "little",
  pointerSize: 8,
  types: [HeaderFlags, anih, RiffChunk],
  nodes: {
    "entry": structNode(RiffChunk, { label: "RiffChunk（入口）" }),
    "HeaderFlags": structNode(HeaderFlags, { label: "HeaderFlags" }),
    "anih": structNode(anih, { label: "anih" }),
  },
});

