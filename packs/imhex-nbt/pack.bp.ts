/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/nbt.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Element = struct("Element", [
  u8("tag", { values: { "0": "End", "1": "Byte", "2": "Short", "3": "Int", "4": "Long", "5": "Float", "6": "Double", "7": "ByteArray", "8": "String", "9": "List", "10": "Compound", "11": "IntArray", "12": "LongArray" } }),
]);

export default definePack({
  name: "Minecraft NBT",
  endian: "big",
  pointerSize: 8,
  types: [Element],
  nodes: {
    "entry": structNode(Element, { label: "Element（入口）" }),
  },
});

