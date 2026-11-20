/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/cpio_portable_ascii.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const portable_ascii_Cpio = struct("portable_ascii_Cpio", [
  str("c_magic", { size: 6 }),
]);

export default definePack({
  name: "Portable ASCII CPIO",
  endian: "little",
  pointerSize: 8,
  types: [portable_ascii_Cpio],
  nodes: {
    "entry": structNode(portable_ascii_Cpio, { label: "portable_ascii_Cpio（入口）" }),
  },
});

