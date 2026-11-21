/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/xz
// 原始 pack：xz · XZ compressed v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 5 个动态辅助节点；未移植 2 项（见文件末尾）
const XzStreamHeader = struct("XzStreamHeader", [
  bytes("magic", { size: 6, label: "FD 37 7A 58 5A 00" }),
  u8("flagsHigh", { endian: "little", label: "stream flags high byte (always 0)" }),
  u8("check", { values: { "0": "None", "1": "Crc32", "4": "Crc64", "10": "Sha256" }, label: "integrity check type used by every block" }),
  u32("crc32", { endian: "little", label: "CRC-32 of the two stream flag bytes" }),
]);

const XzBlockFlags = struct("XzBlockFlags", [
  bits("numFiltersMinus1", 2, { at: 0, bit: 0, unit: 1, label: "numFiltersMinus1" }),
  bits("reserved", 4, { at: 0, bit: 2, unit: 1, label: "reserved" }),
  bits("compressedSizePresent", 1, { at: 0, bit: 6, unit: 1, label: "compressedSizePresent" }),
  bits("uncompressedSizePresent", 1, { at: 0, bit: 7, unit: 1, label: "uncompressedSizePresent" }),
]);

const XzBlockHeader = struct("XzBlockHeader", [
  u8("sizeByte", { endian: "little", label: "block header size = (this + 1) * 4; 0x00 would mean the index instead" }),
  record("flags", XzBlockFlags, { label: "filter count and which sizes are present" }),
]);

const Xz = struct("Xz", [
  record("streamHeader", XzStreamHeader, { label: "stream header" }),
  record("firstBlock", XzBlockHeader, { label: "first block header; its compressed data follows" }),
]);

export default definePack({
  name: "XZ",
  endian: "little",
  pointerSize: 4,
  types: [XzStreamHeader, XzBlockFlags, XzBlockHeader, Xz],
  nodes: {
    "entry": structNode(Xz, { label: "Xz（入口）" }),
    "XzStreamHeader": structNode(XzStreamHeader, { label: "XzStreamHeader" }),
    "XzBlockHeader": structNode(XzBlockHeader, { label: "XzBlockHeader" }),
    "flags_XzBlockFlags": structNode(XzBlockFlags, { label: "位域 XzBlockFlags" }),
    "calc_XzBlockHeader_headerSize": calcNode({
      label: "XzBlockHeader.headerSize（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "sizeByte": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: ((Number(inputs["sizeByte"] ?? 0) + 1) * 4) }),
    }),
    "read_varint": calcNode({
      label: '读 Varint',
      description: '按地址解码 1–9 字节 varint（LEB128）',
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
    "calc_XzBlockHeader_crcPos": calcNode({
      label: "XzBlockHeader.crcPos（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "headerSize": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (Number(inputs["headerSize"] ?? 0) - 4) }),
    }),
    "ptr_XzBlockHeader_crc32": calcNode({
      label: "XzBlockHeader.crc32（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "crcPos": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs.base ?? 0) + Number(inputs["crcPos"] ?? 0) }),
    }),
    "ptr_XzBlockHeader_raw": calcNode({
      label: "XzBlockHeader.raw（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs.base ?? 0) + 0 }),
    }),
  },
});


/*
未移植项：
- XzFilterFlags: 没有可移植的固定前缀字段
- XzBlockHeader.compressedSize: 条件字段未移植，后续布局在此停止
*/
