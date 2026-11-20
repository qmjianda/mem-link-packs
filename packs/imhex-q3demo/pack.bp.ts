/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/q3demo.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
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


/*
未移植项：
- Q3Demo: 位域没有可移植的固定成员
*/
