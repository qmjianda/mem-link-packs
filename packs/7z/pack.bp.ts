/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/7z
// 原始 pack：7z · 7-Zip archive v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 4 个动态辅助节点
const SevenZip = struct("SevenZip", [
  bytes("signature", { size: 6, label: "37 7A BC AF 27 1C" }),
  u8("versionMajor", { endian: "little", label: "format major version (0)" }),
  u8("versionMinor", { endian: "little", label: "format minor version (2..4)" }),
  u32("startHeaderCrc", { endian: "little", label: "CRC-32 of the next 20 bytes" }),
  u64("nextHeaderOffset", { endian: "little", label: "end header position, relative to the end of this 32-byte header" }),
  u64("nextHeaderSize", { endian: "little", label: "end header size in bytes" }),
  u32("nextHeaderCrc", { endian: "little", label: "CRC-32 of the end header" }),
]);

const SevenZipProperty = struct("SevenZipProperty", [
  u8('value', { values: { "0": "End", "1": "Header", "2": "ArchiveProperties", "3": "AdditionalStreamsInfo", "4": "MainStreamsInfo", "5": "FilesInfo", "6": "PackInfo", "7": "UnPackInfo", "8": "SubStreamsInfo", "9": "Size", "10": "Crc", "11": "Folder", "12": "CodersUnPackSize", "13": "NumUnPackStream", "14": "EmptyStream", "15": "EmptyFile", "16": "Anti", "17": "Name", "18": "CTime", "19": "ATime", "20": "MTime", "21": "WinAttributes", "22": "Comment", "23": "EncodedHeader", "24": "StartPos", "25": "Dummy" } }),
]);

export default definePack({
  name: "7Z",
  endian: "little",
  pointerSize: 4,
  types: [SevenZip, SevenZipProperty],
  nodes: {
    "entry": structNode(SevenZip, { label: "SevenZip（入口）" }),
    "calc_SevenZip_nextHeaderPos": calcNode({
      label: "SevenZip.nextHeaderPos（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "nextHeaderOffset": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (Number(inputs["nextHeaderOffset"] ?? 0) + 32) }),
    }),
    "ptr_SevenZip_nextHeaderKind": calcNode({
      label: "SevenZip.nextHeaderKind（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "nextHeaderPos": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["nextHeaderPos"] ?? 0) }),
    }),
    "ptrtarget_SevenZip_nextHeaderKind": structNode(SevenZipProperty, { label: "指针目标 · SevenZip.nextHeaderKind" }),
    "ptr_SevenZip_nextHeader": calcNode({
      label: "SevenZip.nextHeader（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "nextHeaderPos": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["nextHeaderPos"] ?? 0) }),
    }),
  },
});

