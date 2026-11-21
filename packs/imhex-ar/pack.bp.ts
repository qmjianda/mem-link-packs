/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/ar.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const ARFile = struct("ARFile", [
  str("file_name", { size: 16 }),
  str("modification_timestamp", { size: 12 }),
  str("owner_id", { size: 6 }),
  str("group_id", { size: 6 }),
  str("file_mode", { size: 8 }),
  str("file_size", { size: 10 }),
  u16("end_marker", {  }),
]);

export default definePack({
  name: "GNU Static library archive",
  endian: "little",
  pointerSize: 8,
  types: [ARFile],
  nodes: {
    "entry": structNode(ARFile, { label: "ARFile（入口）" }),
  },
});

