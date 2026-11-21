/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/cab
// 原始 pack：cab · Microsoft Cabinet v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 3 个动态辅助节点；未移植 2 项（见文件末尾）
const CabCompression = struct("CabCompression", [
  bits("method", 4, { at: 0, bit: 0, unit: 2, label: "method" }),
  bits("windowBits", 5, { at: 0, bit: 8, unit: 2, label: "windowBits" }),
]);

const CabFolder = struct("CabFolder", [
  u32("coffCabStart", { endian: "little", label: "file offset of the first CFDATA block of this folder" }),
  u16("cCFData", { endian: "little", label: "CFDATA blocks in this folder" }),
  record("typeCompress", CabCompression, { label: "compression used for the whole stream" }),
]);

const CabFile = struct("CabFile", [
  u32("cbFile", { endian: "little", label: "uncompressed size of this file" }),
  u32("uoffFolderStart", { endian: "little", label: "offset of this file in the folder decompressed stream" }),
  u16("iFolder", { endian: "little", label: "folder index; 0xFFFD/0xFFFE/0xFFFF mean it spans cabinets" }),
  u16("date", { endian: "little", label: "last modification date (MS-DOS packed)" }),
  u16("time", { endian: "little", label: "last modification time (MS-DOS packed)" }),
  u16("attribs", { endian: "little", label: "attributes; bit 7 marks the name as UTF-8 rather than CP437" }),
]);

const CabFlags = struct("CabFlags", [
  bits("prevCabinet", 1, { at: 0, bit: 0, unit: 2, label: "prevCabinet" }),
  bits("nextCabinet", 1, { at: 0, bit: 1, unit: 2, label: "nextCabinet" }),
  bits("reservePresent", 1, { at: 0, bit: 2, unit: 2, label: "reservePresent" }),
]);

const Cab = struct("Cab", [
  str("signature", { size: 4, label: "MSCF" }),
  u32("reserved1", { endian: "little", label: "reserved, zero" }),
  u32("cbCabinet", { endian: "little", label: "total size of this cabinet file" }),
  u32("reserved2", { endian: "little", label: "reserved, zero" }),
  u32("coffFiles", { endian: "little", label: "file offset of the first CFFILE entry" }),
  u32("reserved3", { endian: "little", label: "reserved, zero" }),
  u8("versionMinor", { endian: "little", label: "3" }),
  u8("versionMajor", { endian: "little", label: "1" }),
  u16("cFolders", { endian: "little", label: "CFFOLDER entries in this cabinet" }),
  u16("cFiles", { endian: "little", label: "CFFILE entries in this cabinet" }),
  record("flags", CabFlags, { label: "which optional fields follow" }),
  u16("setID", { endian: "little", label: "identifier shared by every cabinet in a set" }),
  u16("iCabinet", { endian: "little", label: "position of this cabinet in the set, from 0" }),
]);

export default definePack({
  name: "CAB",
  endian: "little",
  pointerSize: 4,
  types: [CabCompression, CabFolder, CabFile, CabFlags, Cab],
  nodes: {
    "entry": structNode(Cab, { label: "Cab（入口）" }),
    "CabFolder": structNode(CabFolder, { label: "CabFolder" }),
    "CabFile": structNode(CabFile, { label: "CabFile" }),
    "flags_CabFlags": structNode(CabFlags, { label: "位域 CabFlags" }),
    "flags_CabCompression": structNode(CabCompression, { label: "位域 CabCompression" }),
    "array_Cab_folders": arrayNode(CabFolder, {
      label: "Cab.folders（动态数组）",
      description: "count 来自 Cab.cFolders；address 指向数组首元素",
    }),
    "ptr_Cab_files": calcNode({
      label: "Cab.files（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "coffFiles": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["coffFiles"] ?? 0) }),
    }),
    "array_Cab_files": arrayNode(CabFile, {
      label: "Cab.files（动态数组）",
      description: "count 来自 Cab.cFiles；address 指向数组首元素",
    }),
  },
});


/*
未移植项：
- CabFile.name: cstring 变长字段未移植，后续布局在此停止
- Cab.cbCFHeader: 条件字段未移植，后续布局在此停止
*/
