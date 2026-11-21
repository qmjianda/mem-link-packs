/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/q3demo.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const returnValue = struct("returnValue", [
  i32("value", {  }),
  i32("bitindex", {  }),
]);

const Message = struct("Message", [
  i32("messageNum", { endian: "little" }),
  i32("len", { endian: "little" }),
]);

export default definePack({
  name: "Quake 3 Engine demo",
  endian: "little",
  pointerSize: 8,
  types: [returnValue, Message],
  nodes: {
    "entry": structNode(returnValue, { label: "returnValue（入口）" }),
    "Message": structNode(Message, { label: "Message" }),
  },
});

