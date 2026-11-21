/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/iso9660
// 原始 pack：iso9660 · ISO 9660 image v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 1 个动态辅助节点
const IsoFileFlags = struct("IsoFileFlags", [
  bits("hidden", 1, { at: 0, bit: 0, unit: 1, label: "hidden" }),
  bits("directory", 1, { at: 0, bit: 1, unit: 1, label: "directory" }),
  bits("associated", 1, { at: 0, bit: 2, unit: 1, label: "associated" }),
  bits("record", 1, { at: 0, bit: 3, unit: 1, label: "record" }),
  bits("protection", 1, { at: 0, bit: 4, unit: 1, label: "protection" }),
  bits("multiExtent", 1, { at: 0, bit: 7, unit: 1, label: "multiExtent" }),
]);

const IsoDirectoryRecord = struct("IsoDirectoryRecord", [
  u8("length", { endian: "little", label: "length of this record, name and padding included" }),
  u8("extAttrLength", { endian: "little", label: "length of the extended attribute record, in sectors" }),
  u32("extentLe", { endian: "little", label: "first sector of the file contents" }),
  u32("extentBe", { endian: "little", label: "the same, big-endian" }),
  u32("dataLengthLe", { endian: "little", label: "size of the file in bytes" }),
  u32("dataLengthBe", { endian: "little", label: "the same, big-endian" }),
  bytes("recordingDate", { size: 7, label: "year since 1900, month, day, hour, minute, second, GMT offset" }),
  record("flags", IsoFileFlags, { label: "directory, hidden, multi-extent, ..." }),
  u8("fileUnitSize", { endian: "little", label: "file unit size, for interleaved files" }),
  u8("interleaveGap", { endian: "little", label: "interleave gap size" }),
  u16("volumeSeqLe", { endian: "little", label: "volume in the set holding this file" }),
  u16("volumeSeqBe", { endian: "little", label: "the same, big-endian" }),
  u8("nameLength", { endian: "little", label: "length of the identifier that follows" }),
]);

const IsoPrimaryVolumeDescriptor = struct("IsoPrimaryVolumeDescriptor", [
  u8("type", { endian: "little", label: "1 for the primary volume descriptor" }),
  str("identifier", { size: 5, label: "CD001" }),
  u8("version", { endian: "little", label: "1" }),
  u8("unused", { endian: "little", label: "zero" }),
  str("systemId", { size: 32, label: "system that can act on the first 16 sectors" }),
  str("volumeId", { size: 32, label: "volume label" }),
  bytes("unused2", { size: 8, label: "zero" }),
  u32("volumeSpaceSizeLe", { endian: "little", label: "sectors on the volume" }),
  u32("volumeSpaceSizeBe", { endian: "little", label: "the same, big-endian" }),
  bytes("unused3", { size: 32, label: "zero" }),
  u16("volumeSetSizeLe", { endian: "little", label: "discs in the set" }),
  u16("volumeSetSizeBe", { endian: "little", label: "the same, big-endian" }),
  u16("volumeSeqLe", { endian: "little", label: "position of this disc in the set" }),
  u16("volumeSeqBe", { endian: "little", label: "the same, big-endian" }),
  u16("logicalBlockSizeLe", { endian: "little", label: "sector size, effectively always 2048" }),
  u16("logicalBlockSizeBe", { endian: "little", label: "the same, big-endian" }),
  u32("pathTableSizeLe", { endian: "little", label: "size of the path table in bytes" }),
  u32("pathTableSizeBe", { endian: "little", label: "the same, big-endian" }),
  u32("typeLPathTable", { endian: "little", label: "sector of the little-endian path table" }),
  u32("optTypeLPathTable", { endian: "little", label: "sector of its optional copy, 0 if there is none" }),
  u32("typeMPathTable", { endian: "little", label: "sector of the big-endian path table (a big-endian value)" }),
  u32("optTypeMPathTable", { endian: "little", label: "sector of its optional copy" }),
  record("rootDirectory", IsoDirectoryRecord, { label: "the root directory record, always 34 bytes here" }),
  str("volumeSetId", { size: 128, label: "name of the multi-disc set" }),
  str("publisherId", { size: 128, label: "publisher" }),
  str("dataPreparerId", { size: 128, label: "who prepared the data" }),
  str("applicationId", { size: 128, label: "application that wrote the disc" }),
  str("copyrightFileId", { size: 37, label: "file in the root holding the copyright notice" }),
  str("abstractFileId", { size: 37, label: "file in the root holding the abstract" }),
  str("bibliographicFileId", { size: 37, label: "file in the root holding the bibliography" }),
  str("creationDate", { size: 17, label: "YYYYMMDDHHMMSSCC plus a GMT offset byte" }),
  str("modificationDate", { size: 17, label: "last modification" }),
  str("expirationDate", { size: 17, label: "after which the volume is obsolete" }),
  str("effectiveDate", { size: 17, label: "before which the volume should not be used" }),
  u8("fileStructureVersion", { endian: "little", label: "1" }),
  u8("unused4", { endian: "little", label: "zero" }),
  bytes("applicationUse", { size: 512, label: "free for the application that wrote the disc" }),
  bytes("reserved", { size: 653, label: "reserved, zero" }),
]);

const Iso9660 = struct("Iso9660", [
  bytes("systemArea", { size: 32768, label: "sectors 0-15: boot sectors and partition maps, not ISO 9660" }),
  record("pvd", IsoPrimaryVolumeDescriptor, { label: "the primary volume descriptor, at sector 16" }),
]);

const Elem_char = struct("charValue", [
  char('value', { endian: "little" }),
]);

export default definePack({
  name: "ISO9660",
  endian: "little",
  pointerSize: 4,
  types: [IsoFileFlags, IsoDirectoryRecord, IsoPrimaryVolumeDescriptor, Iso9660, Elem_char],
  nodes: {
    "entry": structNode(Iso9660, { label: "Iso9660（入口）" }),
    "IsoDirectoryRecord": structNode(IsoDirectoryRecord, { label: "IsoDirectoryRecord" }),
    "IsoPrimaryVolumeDescriptor": structNode(IsoPrimaryVolumeDescriptor, { label: "IsoPrimaryVolumeDescriptor" }),
    "flags_IsoFileFlags": structNode(IsoFileFlags, { label: "位域 IsoFileFlags" }),
    "array_IsoDirectoryRecord_name": arrayNode(Elem_char, {
      label: "IsoDirectoryRecord.name（动态数组）",
      description: "count 来自 IsoDirectoryRecord.nameLength；address 指向数组首元素",
    }),
  },
});

