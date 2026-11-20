/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/wintec_tes.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const WBTFlags = struct("WBTFlags", [
  bits("split", 1, { at: 0, bit: 0, unit: 2, label: "split" }),
  bits("waypoint", 1, { at: 0, bit: 1, unit: 2, label: "waypoint" }),
]);

const WBTTimestamp = struct("WBTTimestamp", [
  bits("seconds", 6, { at: 0, bit: 0, unit: 4, label: "seconds" }),
  bits("minutes", 6, { at: 0, bit: 6, unit: 4, label: "minutes" }),
  bits("hours", 5, { at: 0, bit: 12, unit: 4, label: "hours" }),
  bits("day", 5, { at: 0, bit: 17, unit: 4, label: "day" }),
  bits("month", 4, { at: 0, bit: 22, unit: 4, label: "month" }),
  bits("year", 6, { at: 0, bit: 26, unit: 4, label: "year" }),
]);

const WBTLine = struct("WBTLine", [
  record("flags", WBTFlags),
  record("timestamp", WBTTimestamp),
  i32("lat", {  }),
  i32("lon", {  }),
  i16("alt", {  }),
]);

export default definePack({
  name: "Wintec TES GPS log",
  endian: "little",
  pointerSize: 8,
  types: [WBTFlags, WBTTimestamp, WBTLine],
  nodes: {
    "entry": structNode(WBTLine, { label: "WBTLine（入口）" }),
    "WBTFlags": structNode(WBTFlags, { label: "WBTFlags" }),
    "WBTTimestamp": structNode(WBTTimestamp, { label: "WBTTimestamp" }),
  },
});

