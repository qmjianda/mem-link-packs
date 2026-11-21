/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/csnap.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const ClipboardEntry = struct("ClipboardEntry", [
  u32("format", {  }),
  u32("length", {  }),
]);

const ClipboardSnapshot = struct("ClipboardSnapshot", [
  u32("magic", {  }),
  u32("version", {  }),
  u32("count", {  }),
]);

export default definePack({
  name: "ClipboardEdit Clipboard Snapshot format",
  endian: "little",
  pointerSize: 8,
  types: [ClipboardEntry, ClipboardSnapshot],
  nodes: {
    "entry": structNode(ClipboardSnapshot, { label: "ClipboardSnapshot（入口）" }),
    "ClipboardEntry": structNode(ClipboardEntry, { label: "ClipboardEntry" }),
  },
});

