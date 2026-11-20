/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/protobuf.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 4 项（见文件末尾）
const ZigZag32 = struct("ZigZag32", [
  u32("value", {  }),
]);

const ZigZag64 = struct("ZigZag64", [
  u64("value", {  }),
]);

const _64Bit = union("_64Bit", [
  u64("fixed64", {  }),
  record("sfixed64", ZigZag64),
  f64("dbl", {  }),
]);

const _32Bit = union("_32Bit", [
  u32("fixed32", {  }),
  record("sfixed32", ZigZag32),
  f32("flt", {  }),
]);

export default definePack({
  name: "Google Protobuf wire encoding (.pb)",
  endian: "little",
  pointerSize: 8,
  types: [ZigZag32, ZigZag64, _64Bit, _32Bit],
  nodes: {
    "entry": structNode(ZigZag32, { label: "ZigZag32（入口）" }),
    "ZigZag64": structNode(ZigZag64, { label: "ZigZag64" }),
    "_64Bit": structNode(_64Bit, { label: "_64Bit" }),
    "_32Bit": structNode(_32Bit, { label: "_32Bit" }),
  },
});


/*
未移植项：
- Key.keyDec: 类型 type_uLEB128 不可移植
- LengthDelimited.length: 类型 type_uLEB128 不可移植
- _LEB128.uLEB128: 类型 type_uLEB128 不可移植
- Field.key: 类型 Key 不可移植
*/
