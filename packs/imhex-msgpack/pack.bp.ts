/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/msgpack.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const MessagePack = struct("MessagePack", [
  u8("type", { values: { "0": "PositiveFixInt", "128": "FixMap", "144": "FixArray", "160": "FixStr", "192": "Nil", "193": "Unused", "194": "False", "195": "True", "196": "Bin8", "197": "Bin16", "198": "Bin32", "199": "Ext8", "200": "Ext16", "201": "Ext32", "202": "Float32", "203": "Float64", "204": "Uint8", "205": "Uint16", "206": "Uint32", "207": "Uint64", "208": "Int8", "209": "Int16", "210": "Int32", "211": "Int64", "212": "FixExt1", "213": "FixExt2", "214": "FixExt4", "215": "FixExt8", "216": "FixExt16", "217": "Str8", "218": "Str16", "219": "Str32", "220": "Array16", "221": "Array32", "222": "Map16", "223": "Map32", "224": "NegativeFixInt" } }),
]);

const MapEntry = struct("MapEntry", [
  record("key", MessagePack),
  record("value", MessagePack),
]);

export default definePack({
  name: "MessagePack",
  endian: "little",
  pointerSize: 8,
  types: [MessagePack, MapEntry],
  nodes: {
    "entry": structNode(MessagePack, { label: "MessagePack（入口）" }),
    "MapEntry": structNode(MapEntry, { label: "MapEntry" }),
  },
});

