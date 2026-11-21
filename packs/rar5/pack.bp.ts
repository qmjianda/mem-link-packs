/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/rar
// 原始 pack：rar · RAR archive v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 3 个动态辅助节点；未移植 1 项（见文件末尾）
const Rar5HeaderFlags = struct("Rar5HeaderFlags", [
  bits("extraArea", 1, { at: 0, bit: 0, unit: 1, label: "extraArea" }),
  bits("dataArea", 1, { at: 0, bit: 1, unit: 1, label: "dataArea" }),
  bits("skipIfUnknown", 1, { at: 0, bit: 2, unit: 1, label: "skipIfUnknown" }),
  bits("dataContinues", 1, { at: 0, bit: 3, unit: 1, label: "dataContinues" }),
  bits("dataContinuesNext", 1, { at: 0, bit: 4, unit: 1, label: "dataContinuesNext" }),
  bits("dependsOnPrev", 1, { at: 0, bit: 5, unit: 1, label: "dependsOnPrev" }),
  bits("preserveChild", 1, { at: 0, bit: 6, unit: 1, label: "preserveChild" }),
]);

const Rar5ArchiveFlags = struct("Rar5ArchiveFlags", [
  bits("volume", 1, { at: 0, bit: 0, unit: 1, label: "volume" }),
  bits("volumeNumber", 1, { at: 0, bit: 1, unit: 1, label: "volumeNumber" }),
  bits("solid", 1, { at: 0, bit: 2, unit: 1, label: "solid" }),
  bits("recovery", 1, { at: 0, bit: 3, unit: 1, label: "recovery" }),
  bits("locked", 1, { at: 0, bit: 4, unit: 1, label: "locked" }),
]);

const Rar5MainHeader = struct("Rar5MainHeader", [
  u32("crc", { endian: "little", label: "CRC-32 of the header (size field onwards)" }),
]);

const Rar5FileFlags = struct("Rar5FileFlags", [
  bits("directory", 1, { at: 0, bit: 0, unit: 1, label: "directory" }),
  bits("timePresent", 1, { at: 0, bit: 1, unit: 1, label: "timePresent" }),
  bits("crcPresent", 1, { at: 0, bit: 2, unit: 1, label: "crcPresent" }),
  bits("unpackedUnknown", 1, { at: 0, bit: 3, unit: 1, label: "unpackedUnknown" }),
]);

const Rar5FileHeader = struct("Rar5FileHeader", [
  u32("crc", { endian: "little", label: "CRC-32 of the header (size field onwards)" }),
]);

const Rar5 = struct("Rar5", [
  bytes("signature", { size: 8, label: "52 61 72 21 1A 07 01 00" }),
  record("main", Rar5MainHeader, { label: "main archive header" }),
]);

export default definePack({
  name: "RAR5",
  endian: "little",
  pointerSize: 4,
  types: [Rar5HeaderFlags, Rar5ArchiveFlags, Rar5MainHeader, Rar5FileFlags, Rar5FileHeader, Rar5],
  nodes: {
    "entry": structNode(Rar5, { label: "Rar5（入口）" }),
    "Rar5MainHeader": structNode(Rar5MainHeader, { label: "Rar5MainHeader" }),
    "Rar5FileHeader": structNode(Rar5FileHeader, { label: "Rar5FileHeader" }),
    "flags_Rar5HeaderFlags": structNode(Rar5HeaderFlags, { label: "位域 Rar5HeaderFlags" }),
    "flags_Rar5ArchiveFlags": structNode(Rar5ArchiveFlags, { label: "位域 Rar5ArchiveFlags" }),
    "flags_Rar5FileFlags": structNode(Rar5FileFlags, { label: "位域 Rar5FileFlags" }),
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
    "ptr_Rar5_firstFile": calcNode({
      label: "Rar5.firstFile（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "firstFilePos": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["firstFilePos"] ?? 0) }),
    }),
    "ptrtarget_Rar5_firstFile": structNode(Rar5FileHeader, { label: "指针目标 · Rar5.firstFile" }),
  },
});


/*
未移植项：
- Rar5.firstFilePos: computed 表达式依赖非标量字段，未生成 calc 辅助节点
*/
