/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/btrfs_send_stream.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const TimeSpec = struct("TimeSpec", [
  u64("seconds", {  }),
  u32("nanoseconds", {  }),
]);

export default definePack({
  name: "BTRFS Send Stream format - see https://btrfs.readthedocs.io/en/latest/dev/dev-send-stream.html. Currently supports versions 1 and 2.",
  endian: "little",
  pointerSize: 8,
  types: [TimeSpec],
  nodes: {
    "entry": structNode(TimeSpec, { label: "TimeSpec（入口）" }),
  },
});

