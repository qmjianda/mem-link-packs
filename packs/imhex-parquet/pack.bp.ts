/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/parquet.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 6 项（见文件末尾）
const ThriftFieldHeader = struct("ThriftFieldHeader", [
  u8("type_and_delta", {  }),
]);

const CompactList = struct("CompactList", [
  u8("size_and_type", {  }),
]);

const ThriftField = struct("ThriftField", [
  record("header", ThriftFieldHeader),
]);

const ParquetFile = struct("ParquetFile", [
  str("header_magic", { size: 4 }),
]);

export default definePack({
  name: "Apache Parquet File Format",
  endian: "little",
  pointerSize: 8,
  types: [ThriftFieldHeader, CompactList, ThriftField, ParquetFile],
  nodes: {
    "entry": structNode(ParquetFile, { label: "ParquetFile（入口）" }),
    "ThriftFieldHeader": structNode(ThriftFieldHeader, { label: "ThriftFieldHeader" }),
    "CompactList": structNode(CompactList, { label: "CompactList" }),
    "ThriftField": structNode(ThriftField, { label: "ThriftField" }),
  },
});


/*
未移植项：
- CompactBinary.length: 类型 type_LEB128 不可移植
- CompactI32.raw_varint: 类型 type_LEB128 不可移植
- CompactI64.raw_varint: 类型 type_LEB128 不可移植
- CompactI16.raw_varint: 类型 type_LEB128 不可移植
- FileMetadata: 基类 ThriftStruct 不可移植
- DataPage.page_header: 类型 ThriftStruct 不可移植
*/
