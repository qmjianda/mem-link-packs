/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/protobuf.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；含 1 个动态辅助节点；未移植 5 项（见文件末尾）
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
- Key.keyDec: 变长 type_uLEB128 已生成 read_varint 辅助节点，静态布局在此停止
- LengthDelimited.length: 变长 type_uLEB128 已生成 read_varint 辅助节点，静态布局在此停止
- _LEB128.uLEB128: 变长 type_uLEB128 已生成 read_varint 辅助节点，静态布局在此停止
- Field.key: 类型 Key 不可移植
*/
