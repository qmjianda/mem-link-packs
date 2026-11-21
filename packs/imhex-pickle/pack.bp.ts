/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/pickle.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Opcodes = struct("Opcodes", [
  u8("opcode", { values: { "0": "MARK", "1": "STOP", "2": "POP", "3": "POP_MARK", "4": "DUP", "5": "FLOAT", "6": "INT", "7": "BININT", "8": "BININT1", "9": "LONG", "10": "BININT2", "11": "NONE", "12": "PERSID", "13": "BINPERSID", "14": "REDUCE", "15": "STRING", "16": "BINSTRING", "17": "SHORT_BINSTRING", "18": "UNICODE", "19": "BINUNICODE", "20": "APPEND", "21": "BUILD", "22": "GLOBAL", "23": "DICT", "24": "EMPTY_DICT", "25": "APPENDS", "26": "GET", "27": "BINGET", "28": "INST", "29": "LONG_BINGET", "30": "LIST", "31": "EMPTY_LIST", "32": "OBJ", "33": "PUT", "34": "BINPUT", "35": "LONG_BINPUT", "36": "SETITEM", "37": "TUPLE", "38": "EMPTY_TUPLE", "39": "SETITEMS", "40": "BINFLOAT", "128": "PROTO", "129": "NEWOBJ", "130": "EXT1", "131": "EXT2", "132": "EXT4", "133": "TUPLE1", "134": "TUPLE2", "135": "TUPLE3", "136": "NEWTRUE", "137": "NEWFALSE", "138": "LONG1", "139": "LONG4", "140": "BINBYTES", "141": "SHORT_BINBYTES", "140": "SHORT_BINUNICODE", "141": "BINUNICODE8", "142": "BINBYTES8", "143": "EMPTY_SET", "144": "ADDITEMS", "145": "FROZENSET", "146": "NEWOBJ_EX", "147": "STACK_GLOBAL", "148": "MEMOIZE", "149": "FRAME", "150": "BYTEARRAY8", "151": "NEXT_BUFFER", "152": "READONLY_BUFFER" } }),
]);

export default definePack({
  name: "Python Binary Object Serialization Protocol",
  endian: "little",
  pointerSize: 8,
  types: [Opcodes],
  nodes: {
    "entry": structNode(Opcodes, { label: "Opcodes（入口）" }),
  },
});

