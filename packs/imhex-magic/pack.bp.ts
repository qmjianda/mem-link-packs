/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/magic.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 2 项（见文件末尾）
const StringRange = struct("StringRange", [
  u32("range", {  }),
  u32("flags", {  }),
]);

const MaskRange = union("MaskRange", [
  u64("numMask", {  }),
  record("string", StringRange),
]);

const ValueType = union("ValueType", [
  i8("sb", {  }),
  i16("sh", {  }),
  i32("sl", {  }),
  i64("sq", {  }),
  u8("b", {  }),
  u16("h", {  }),
  u32("l", {  }),
  u64("q", {  }),
  bytes("hs", { size: 2 }),
  bytes("hl", { size: 4 }),
  bytes("hq", { size: 8 }),
  str("s", { size: 128 }),
  bytes("us", { size: 128 }),
]);

const MagicFlags = struct("MagicFlags", [
  bits("indir", 1, { at: 0, bit: 0, unit: 2, label: "indir" }),
  bits("off_add", 1, { at: 0, bit: 1, unit: 2, label: "off_add" }),
  bits("indir_off_add", 1, { at: 0, bit: 2, unit: 2, label: "indir_off_add" }),
  bits("is_unsigned", 1, { at: 0, bit: 3, unit: 2, label: "is_unsigned" }),
  bits("no_space", 1, { at: 0, bit: 4, unit: 2, label: "no_space" }),
  bits("bin_test", 1, { at: 0, bit: 5, unit: 2, label: "bin_test" }),
  bits("text_test", 1, { at: 0, bit: 6, unit: 2, label: "text_test" }),
  bits("off_negative", 1, { at: 0, bit: 7, unit: 2, label: "off_negative" }),
  bits("off_positive", 1, { at: 0, bit: 8, unit: 2, label: "off_positive" }),
]);

const Magic = struct("Magic", [
  record("flag", MagicFlags),
  u8("cont_level", {  }),
  u8("factor", {  }),
  u8("reln", {  }),
  u8("vallen", {  }),
  u8("type", { values: { "0": "INVALID", "1": "BYTE", "2": "SHORT", "3": "DEFAULT", "4": "LONG", "5": "STRING", "6": "DATE", "7": "BESHORT", "8": "BELONG", "9": "BEDATE", "10": "LESHORT", "11": "LELONG", "12": "LEDATE", "13": "PSTRING", "14": "LDATE", "15": "BELDATE", "16": "LELDATE", "17": "REGEX", "18": "BESTRING16", "19": "LESTRING16", "20": "SEARCH", "21": "MEDATE", "22": "MELDATE", "23": "MELONG", "24": "QUAD", "25": "LEQUAD", "26": "BEQUAD", "27": "QDATE", "28": "LEQDATE", "29": "BEQDATE", "30": "QLDATE", "31": "LEQLDATE", "32": "BEQLDATE", "33": "FLOAT", "34": "BEFLOAT", "35": "LEFLOAT", "36": "DOUBLE", "37": "BEDOUBLE", "38": "LEDOUBLE", "39": "BEID3", "40": "LEID3", "41": "INDIRECT", "42": "QWDATE", "43": "LEQWDATE", "44": "BEQWDATE", "45": "NAME", "46": "USE", "47": "CLEAR", "48": "DER", "49": "GUID", "50": "LEGUID", "51": "BEGUID", "52": "OFFSET", "53": "BEVARINT", "54": "LEVARINT", "55": "MSDOSDATE", "56": "LEMSDOSDATE", "57": "BEMSDOSDATE", "58": "MSDOSTIME", "59": "LEMSDOSTIME", "60": "BEMSDOSTIME", "61": "OCTAL" } }),
  u8("inType", { values: { "0": "INVALID", "1": "BYTE", "2": "SHORT", "3": "DEFAULT", "4": "LONG", "5": "STRING", "6": "DATE", "7": "BESHORT", "8": "BELONG", "9": "BEDATE", "10": "LESHORT", "11": "LELONG", "12": "LEDATE", "13": "PSTRING", "14": "LDATE", "15": "BELDATE", "16": "LELDATE", "17": "REGEX", "18": "BESTRING16", "19": "LESTRING16", "20": "SEARCH", "21": "MEDATE", "22": "MELDATE", "23": "MELONG", "24": "QUAD", "25": "LEQUAD", "26": "BEQUAD", "27": "QDATE", "28": "LEQDATE", "29": "BEQDATE", "30": "QLDATE", "31": "LEQLDATE", "32": "BEQLDATE", "33": "FLOAT", "34": "BEFLOAT", "35": "LEFLOAT", "36": "DOUBLE", "37": "BEDOUBLE", "38": "LEDOUBLE", "39": "BEID3", "40": "LEID3", "41": "INDIRECT", "42": "QWDATE", "43": "LEQWDATE", "44": "BEQWDATE", "45": "NAME", "46": "USE", "47": "CLEAR", "48": "DER", "49": "GUID", "50": "LEGUID", "51": "BEGUID", "52": "OFFSET", "53": "BEVARINT", "54": "LEVARINT", "55": "MSDOSDATE", "56": "LEMSDOSDATE", "57": "BEMSDOSDATE", "58": "MSDOSTIME", "59": "LEMSDOSTIME", "60": "BEMSDOSTIME", "61": "OCTAL" } }),
  u8("inOp", { values: { "0": "OPAND", "1": "OPOR", "2": "OPXOR", "3": "OPADD", "4": "OPMINUS", "5": "OPMULTIPLY", "6": "OPDIVIDE", "7": "OPMODULO", "8": "UNUSED_1", "16": "UNUSED_2", "32": "OPSIGNED", "64": "OPINVERSE", "128": "OPINDIRECT" } }),
  u8("maskOp", { values: { "0": "OPAND", "1": "OPOR", "2": "OPXOR", "3": "OPADD", "4": "OPMINUS", "5": "OPMULTIPLY", "6": "OPDIVIDE", "7": "OPMODULO", "8": "UNUSED_1", "16": "UNUSED_2", "32": "OPSIGNED", "64": "OPINVERSE", "128": "OPINDIRECT" } }),
  u8("cond", { values: { "0": "NONE", "1": "IF", "2": "ELIF", "3": "ELSE" } }),
  u8("factorOp", { values: { "0": "PLUS", "1": "MINUS", "2": "TIMES", "3": "DIV", "0": "NONE" } }),
  u32("offset", {  }),
  u32("inOffset", {  }),
  u32("lineNumber", {  }),
  record("maskRange", MaskRange),
  record("value", ValueType),
  str("desc", { size: 64 }),
  str("mimeType", { size: 80 }),
  str("apple", { size: 8 }),
  str("ext", { size: 120 }),
]);

export default definePack({
  name: "file / libmagic Magic Database",
  endian: "little",
  pointerSize: 8,
  types: [StringRange, MaskRange, ValueType, MagicFlags, Magic],
  nodes: {
    "entry": structNode(StringRange, { label: "StringRange（入口）" }),
    "MaskRange": structNode(MaskRange, { label: "MaskRange" }),
    "ValueType": structNode(ValueType, { label: "ValueType" }),
    "MagicFlags": structNode(MagicFlags, { label: "MagicFlags" }),
    "Magic": structNode(Magic, { label: "Magic" }),
  },
});


/*
未移植项：
- ValueType.guid: 类型 type_GUID 不可移植
- MagicDatabase.header: 类型 Header 不可移植
*/
