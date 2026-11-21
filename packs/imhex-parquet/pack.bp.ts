/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/parquet.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；含 1 个动态辅助节点；未移植 7 项（见文件末尾）
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
    "read_varint": calcNode({
      label: '读 Varint / LEB128',
      description: '按地址解码 1–9 字节无符号 LEB128；有符号字段请用 sLEB128 变体',
      inputs: { address: 'number' },
      outputs: { value: 'number', bytes: 'number' },
      run: ({ address }, ctx) => {
        let value = 0;
        for (let i = 0; i < 9; i += 1) {
          const b = ctx.mem.u8(Number(address) + i);
          if (i === 8) return { value: value * 256 + b, bytes: 9 };
          value = value * 128 + (b & 0x7f);
          if ((b & 0x80) === 0) return { value, bytes: i + 1 };
        }
        return { value, bytes: 9 };
      },
    }),
  },
});


/*
未移植项：
- varint/LEB128: 已生成 read_varint 辅助节点
- CompactBinary.length: 变长 type_LEB128 已生成 read_varint 辅助节点，静态布局在此停止
- CompactI32.raw_varint: 变长 type_LEB128 已生成 read_varint 辅助节点，静态布局在此停止
- CompactI64.raw_varint: 变长 type_LEB128 已生成 read_varint 辅助节点，静态布局在此停止
- CompactI16.raw_varint: 变长 type_LEB128 已生成 read_varint 辅助节点，静态布局在此停止
- FileMetadata: 基类 ThriftStruct 不可移植
- DataPage.page_header: 类型 ThriftStruct 不可移植
*/
