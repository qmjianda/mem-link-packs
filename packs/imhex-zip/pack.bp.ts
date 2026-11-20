/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/zip.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 3 项（见文件末尾）
const EOCD64Locator = struct("EOCD64Locator", [
  u32("headerSignature", {  }),
  u32("cdrDisk", {  }),
  u64("eocdOffset", {  }),
  u32("totalDisks", {  }),
]);

const EndOfCentralDirectory = struct("EndOfCentralDirectory", [
  u32("magic", {  }),
]);

const extra_UTFlags = struct("extra_UTFlags", [
  bits("modification_time_set", 1, { at: 0, bit: 0, unit: 1, label: "modification_time_set" }),
  bits("access_time_set", 1, { at: 0, bit: 1, unit: 1, label: "access_time_set" }),
  bits("creation_time_set", 1, { at: 0, bit: 2, unit: 1, label: "creation_time_set" }),
  bits("reserved", 5, { at: 0, bit: 3, unit: 1, label: "reserved" }),
]);

const extra_X000A_NTFS = struct("extra_X000A_NTFS", [
  u32("reserved", {  }),
  u16("tag", {  }),
  u16("TSize", {  }),
]);

const extra_X7875_NewUnix = struct("extra_X7875_NewUnix", [
  u16("tag", {  }),
  u16("TSize", {  }),
  u8("version", {  }),
  u8("UIDSize", {  }),
]);

const extra_X5855_InfoZipUnix = struct("extra_X5855_InfoZipUnix", [
  u32("AcTime", {  }),
  u32("ModTime", {  }),
]);

const extra_ZIP64_SizeInfo = struct("extra_ZIP64_SizeInfo", [
  u64("uncompressedSize", {  }),
  u64("compressedSize", {  }),
]);

const extra_ExtraField = struct("extra_ExtraField", [
  u16("tag", {  }),
  u16("TSize", {  }),
]);

const GeneralPurposeBitFlags = struct("GeneralPurposeBitFlags", [
  bits("encrypted", 1, { at: 0, bit: 0, unit: 2, label: "encrypted" }),
  bits("compressionOptions", 2, { at: 0, bit: 1, unit: 2, label: "compressionOptions" }),
  bits("crcAndSizesInCDAndDataDescriptor", 1, { at: 0, bit: 3, unit: 2, label: "crcAndSizesInCDAndDataDescriptor" }),
  bits("enhancedDeflating", 1, { at: 0, bit: 4, unit: 2, label: "enhancedDeflating" }),
  bits("patchedData", 1, { at: 0, bit: 5, unit: 2, label: "patchedData" }),
  bits("strongEncryption", 1, { at: 0, bit: 6, unit: 2, label: "strongEncryption" }),
  bits("unused", 4, { at: 0, bit: 7, unit: 2, label: "unused" }),
  bits("filenameAndCommentAreUtf8", 1, { at: 0, bit: 11, unit: 2, label: "filenameAndCommentAreUtf8" }),
  bits("reservedPKWARE_0", 1, { at: 0, bit: 12, unit: 2, label: "reservedPKWARE_0" }),
  bits("centralDirectoryEncrypted", 1, { at: 0, bit: 13, unit: 2, label: "centralDirectoryEncrypted" }),
  bits("reservedPKWARE_1", 2, { at: 0, bit: 14, unit: 2, label: "reservedPKWARE_1" }),
]);

const LocalFileHeader = struct("LocalFileHeader", [
  u32("headerSignature", {  }),
  u16("version", {  }),
  record("generalPurposeBitFlags", GeneralPurposeBitFlags),
  u16("compressionMethod", { values: { "0": "None", "1": "Shrunk", "2": "Factor1", "3": "Factor2", "4": "Factor3", "5": "Factor4", "6": "Implode", "8": "Deflate", "9": "Deflate64", "10": "PKWARE", "12": "BZIP2", "14": "LZMA", "16": "CMPSC", "18": "IBMTERSE", "19": "LZ77", "20": "_ZSTD", "93": "ZSTD", "94": "MP3", "95": "XZ", "96": "JPEG", "97": "WavPack", "98": "PPMd", "99": "AE_x" } }),
]);

const CentralDirectoryFileHeader = struct("CentralDirectoryFileHeader", [
  u32("headerSignature", {  }),
  u16("versionMade", {  }),
  u16("versionExtract", {  }),
  record("generalPurposeBitFlags", GeneralPurposeBitFlags),
  u16("compressionMethod", { values: { "0": "None", "1": "Shrunk", "2": "Factor1", "3": "Factor2", "4": "Factor3", "5": "Factor4", "6": "Implode", "8": "Deflate", "9": "Deflate64", "10": "PKWARE", "12": "BZIP2", "14": "LZMA", "16": "CMPSC", "18": "IBMTERSE", "19": "LZ77", "20": "_ZSTD", "93": "ZSTD", "94": "MP3", "95": "XZ", "96": "JPEG", "97": "WavPack", "98": "PPMd", "99": "AE_x" } }),
]);

export default definePack({
  name: "ZIP compression archive",
  endian: "little",
  pointerSize: 8,
  types: [EOCD64Locator, EndOfCentralDirectory, extra_UTFlags, extra_X000A_NTFS, extra_X7875_NewUnix, extra_X5855_InfoZipUnix, extra_ZIP64_SizeInfo, extra_ExtraField, GeneralPurposeBitFlags, LocalFileHeader, CentralDirectoryFileHeader],
  nodes: {
    "entry": structNode(EndOfCentralDirectory, { label: "EndOfCentralDirectory（入口）" }),
    "EOCD64Locator": structNode(EOCD64Locator, { label: "EOCD64Locator" }),
    "extra_UTFlags": structNode(extra_UTFlags, { label: "extra_UTFlags" }),
    "extra_X000A_NTFS": structNode(extra_X000A_NTFS, { label: "extra_X000A_NTFS" }),
    "extra_X7875_NewUnix": structNode(extra_X7875_NewUnix, { label: "extra_X7875_NewUnix" }),
    "extra_X5855_InfoZipUnix": structNode(extra_X5855_InfoZipUnix, { label: "extra_X5855_InfoZipUnix" }),
    "extra_ZIP64_SizeInfo": structNode(extra_ZIP64_SizeInfo, { label: "extra_ZIP64_SizeInfo" }),
    "extra_ExtraField": structNode(extra_ExtraField, { label: "extra_ExtraField" }),
    "GeneralPurposeBitFlags": structNode(GeneralPurposeBitFlags, { label: "GeneralPurposeBitFlags" }),
    "LocalFileHeader": structNode(LocalFileHeader, { label: "LocalFileHeader" }),
    "CentralDirectoryFileHeader": structNode(CentralDirectoryFileHeader, { label: "CentralDirectoryFileHeader" }),
  },
});


/*
未移植项：
- extra_X000A_NTFS.ModTime: 类型 type_FILETIME 不可移植
- LocalFileHeader.lastModifyTime: 类型 type_DOSTime 不可移植
- CentralDirectoryFileHeader.fileLastModifyTime: 类型 type_DOSTime 不可移植
*/
