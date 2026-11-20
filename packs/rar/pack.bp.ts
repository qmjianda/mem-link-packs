/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/rar
// 原始 pack：rar · RAR archive v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 4 项（见文件末尾）
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
  },
});


/*
未移植项：
- Rar5MainHeader.headerSize: varint 变长字段未移植，后续布局在此停止
- Rar5FileHeader.headerSize: varint 变长字段未移植，后续布局在此停止
- Rar5.firstFilePos: computed 字段未移植
- Rar5.firstFile: 指针字段（at …）未移植
*/
