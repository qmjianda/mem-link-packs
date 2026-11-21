/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/bson.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 3 项（见文件末尾）
const Binary = struct("Binary", [
  i32("length", {  }),
  u8("subtype", { values: { "0": "GenericBinarySubtype", "1": "Function", "2": "BinaryOld", "3": "UUIDOld", "4": "UUID", "5": "MD5", "6": "EncryptedBSONValue", "7": "CompressedBSONColumn", "128": "UserDefined" } }),
]);

const String = struct("String", [
  u32("length", {  }),
]);

const DBPointer = struct("DBPointer", [
  record("name", String),
]);

const Element = struct("Element", [
  u8("type", { values: { "1": "Double", "2": "String", "3": "EmbeddedDocument", "4": "Array", "5": "Binary", "6": "Undefined", "7": "ObjectId", "8": "Boolean", "9": "UTCDatetime", "10": "Null", "11": "Regex", "12": "DBPointer", "13": "JavaScript", "14": "Symbol", "15": "JavaScriptWithScope", "16": "Int32", "17": "Timestamp", "18": "Int64", "19": "Decimal128", "255": "MinKey", "127": "MaxKey" } }),
]);

const Document = struct("Document", [
  i32("listLength", {  }),
]);

export default definePack({
  name: "BSON (Binary JSON)",
  endian: "little",
  pointerSize: 8,
  types: [Binary, String, DBPointer, Element, Document],
  nodes: {
    "entry": structNode(Document, { label: "Document（入口）" }),
    "Binary": structNode(Binary, { label: "Binary" }),
    "String": structNode(String, { label: "String" }),
    "DBPointer": structNode(DBPointer, { label: "DBPointer" }),
    "Element": structNode(Element, { label: "Element" }),
  },
});


/*
未移植项：
- ObjectId.timestamp: 类型 type_time32_t 不可移植
- DBPointer.value: 类型 ObjectId 不可移植
- Element.name: 类型 CString 不可移植
*/
