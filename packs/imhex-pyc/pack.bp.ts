/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/pyc.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const MarshalObject = struct("MarshalObject", [
  u8("_type", {  }),
]);

const DictEntry = struct("DictEntry", [
  record("key", MarshalObject),
]);

const LongInt = struct("LongInt", [
  u32("len", {  }),
]);

const LongFloat = struct("LongFloat", [
  u8("len", {  }),
]);

const LongComplex = struct("LongComplex", [
  record("real", LongFloat),
  record("imag", LongFloat),
]);

const PYCHeader = struct("PYCHeader", [
  u32("magic", { values: { "10066178": "MAGIC_1_0", "10066179": "MAGIC_1_1", "168636041": "MAGIC_1_3", "168630020": "MAGIC_1_4", "168644249": "MAGIC_1_5", "168674556": "MAGIC_1_6", "168674951": "MAGIC_2_0", "168684330": "MAGIC_2_1", "168684845": "MAGIC_2_2", "168686139": "MAGIC_2_3", "168686189": "MAGIC_2_4", "168686259": "MAGIC_2_5", "168686289": "MAGIC_2_6", "168686339": "MAGIC_2_7", "168627258": "MAGIC_3_0", "168627278": "MAGIC_3_1", "168627308": "MAGIC_3_2", "168627358": "MAGIC_3_3", "168627438": "MAGIC_3_4", "168627478": "MAGIC_3_5", "168627479": "MAGIC_3_5_3", "168627507": "MAGIC_3_6", "168627522": "MAGIC_3_7", "168627541": "MAGIC_3_8", "168627553": "MAGIC_3_9", "168627567": "MAGIC_3_10", "168627623": "MAGIC_3_11", "168627659": "MAGIC_3_12", "168627699": "MAGIC_3_13", "0": "INVALID" } }),
]);

export default definePack({
  name: "Python bytecode",
  endian: "little",
  pointerSize: 8,
  types: [MarshalObject, DictEntry, LongInt, LongFloat, LongComplex, PYCHeader],
  nodes: {
    "entry": structNode(PYCHeader, { label: "PYCHeader（入口）" }),
    "MarshalObject": structNode(MarshalObject, { label: "MarshalObject" }),
    "DictEntry": structNode(DictEntry, { label: "DictEntry" }),
    "LongInt": structNode(LongInt, { label: "LongInt" }),
    "LongFloat": structNode(LongFloat, { label: "LongFloat" }),
    "LongComplex": structNode(LongComplex, { label: "LongComplex" }),
  },
});

