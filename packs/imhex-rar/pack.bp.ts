/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/rar.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；含 1 个动态辅助节点；未移植 10 项（见文件末尾）
const LocatorRecordFlags = struct("LocatorRecordFlags", [
  bits("quickOpenRecordOffsetIsPresent", 1, { at: 0, bit: 0, unit: 1, label: "quickOpenRecordOffsetIsPresent" }),
  bits("recoveryRecordOffsetIsPresent", 1, { at: 0, bit: 1, unit: 1, label: "recoveryRecordOffsetIsPresent" }),
]);

const LocatorRecord = struct("LocatorRecord", [
  record("flags", LocatorRecordFlags),
]);

const MetadataRecordFlags = struct("MetadataRecordFlags", [
  bits("archiveNameIsPresent", 1, { at: 0, bit: 0, unit: 1, label: "archiveNameIsPresent" }),
  bits("archiveOriginalCreationTimeIsPresent", 1, { at: 0, bit: 1, unit: 1, label: "archiveOriginalCreationTimeIsPresent" }),
  bits("timeIsUnixTime", 1, { at: 0, bit: 2, unit: 1, label: "timeIsUnixTime" }),
  bits("unixTimeIsNanosecondPrecision", 1, { at: 0, bit: 3, unit: 1, label: "unixTimeIsNanosecondPrecision" }),
]);

const MetadataRecord = struct("MetadataRecord", [
  record("flags", MetadataRecordFlags),
]);

const HeaderFlags = struct("HeaderFlags", [
  bits("extraAreaIsPresent", 1, { at: 0, bit: 0, unit: 1, label: "extraAreaIsPresent" }),
  bits("dataAreaIsPresent", 1, { at: 0, bit: 1, unit: 1, label: "dataAreaIsPresent" }),
]);

const ArchiveFlags = struct("ArchiveFlags", [
  bits("archiveIsPartOfMultiVolumeSet", 1, { at: 0, bit: 0, unit: 1, label: "archiveIsPartOfMultiVolumeSet" }),
  bits("volumeNumberFieldIsPresent", 1, { at: 0, bit: 1, unit: 1, label: "volumeNumberFieldIsPresent" }),
  bits("isSolidArchive", 1, { at: 0, bit: 2, unit: 1, label: "isSolidArchive" }),
  bits("recoveryRecordIsPresent", 1, { at: 0, bit: 3, unit: 1, label: "recoveryRecordIsPresent" }),
  bits("isLockedArchive", 1, { at: 0, bit: 4, unit: 1, label: "isLockedArchive" }),
]);

const MainArchiveHeader = struct("MainArchiveHeader", [
  record("flags", HeaderFlags),
]);

const EncryptionHeaderFlags = struct("EncryptionHeaderFlags", [
  bits("passwordCheckDataIsPresent", 1, { at: 0, bit: 0, unit: 1, label: "passwordCheckDataIsPresent" }),
]);

const EncryptionHeader = struct("EncryptionHeader", [
  record("flags", HeaderFlags),
]);

const FileAndServiceHeaderFlags = struct("FileAndServiceHeaderFlags", [
  bits("isDirectory", 1, { at: 0, bit: 0, unit: 1, label: "isDirectory" }),
  bits("timeFieldIsPresent", 1, { at: 0, bit: 1, unit: 1, label: "timeFieldIsPresent" }),
  bits("crc32FieldIsPresent", 1, { at: 0, bit: 2, unit: 1, label: "crc32FieldIsPresent" }),
  bits("unpackedSizeIsUnknown", 1, { at: 0, bit: 3, unit: 1, label: "unpackedSizeIsUnknown" }),
]);

const FileEncryptionFlags = struct("FileEncryptionFlags", [
  bits("passwordCheckDataIsPresent", 1, { at: 0, bit: 0, unit: 1, label: "passwordCheckDataIsPresent" }),
  bits("useTweakedChecksums", 1, { at: 0, bit: 1, unit: 1, label: "useTweakedChecksums" }),
]);

const FileTimeFlags = struct("FileTimeFlags", [
  bits("timeIsStoredInUnixTime", 1, { at: 0, bit: 0, unit: 1, label: "timeIsStoredInUnixTime" }),
  bits("mtimeIsPresent", 1, { at: 0, bit: 1, unit: 1, label: "mtimeIsPresent" }),
  bits("ctimeIsPresent", 1, { at: 0, bit: 2, unit: 1, label: "ctimeIsPresent" }),
  bits("atimeIsPresent", 1, { at: 0, bit: 3, unit: 1, label: "atimeIsPresent" }),
  bits("unixTimeIsNanosecondPrecision", 1, { at: 0, bit: 4, unit: 1, label: "unixTimeIsNanosecondPrecision" }),
]);

const FileTimeRecord = struct("FileTimeRecord", [
  record("flags", FileTimeFlags),
]);

const UnixOwnerFlags = struct("UnixOwnerFlags", [
  bits("userNameStringIsPresent", 1, { at: 0, bit: 0, unit: 1, label: "userNameStringIsPresent" }),
  bits("groupNameStringIsPresent", 1, { at: 0, bit: 1, unit: 1, label: "groupNameStringIsPresent" }),
  bits("numericUserIDIsPresent", 1, { at: 0, bit: 2, unit: 1, label: "numericUserIDIsPresent" }),
  bits("numericGroupIDIsPresent", 1, { at: 0, bit: 3, unit: 1, label: "numericGroupIDIsPresent" }),
]);

const UnixOwnerRecord = struct("UnixOwnerRecord", [
  record("flags", UnixOwnerFlags),
]);

const _CompressionInformation = struct("_CompressionInformation", [
  bits("version", 6, { at: 0, bit: 0, unit: 4, label: "version" }),
  bits("isSolid", 1, { at: 0, bit: 6, unit: 4, label: "isSolid" }),
  bits("method", 3, { at: 0, bit: 7, unit: 4, label: "method" }),
  bits("minDictionarySizeExponent", 5, { at: 0, bit: 10, unit: 4, label: "minDictionarySizeExponent" }),
  bits("additionalDictionarySize", 5, { at: 0, bit: 15, unit: 4, label: "additionalDictionarySize" }),
  bits("compressionAlgorithmIsZeroButSizeIsV1", 1, { at: 0, bit: 20, unit: 4, label: "compressionAlgorithmIsZeroButSizeIsV1" }),
]);

const FileOrServiceHeader = struct("FileOrServiceHeader", [
  record("flags", HeaderFlags),
]);

const EOAHeaderFlags = struct("EOAHeaderFlags", [
  bits("archiveIsVolumeAndNotLastInVolumeSet", 1, { at: 0, bit: 0, unit: 1, label: "archiveIsVolumeAndNotLastInVolumeSet" }),
]);

const EndOfArchiveHeader = struct("EndOfArchiveHeader", [
  record("flags", HeaderFlags),
  record("eoaFlags", EOAHeaderFlags),
]);

const Header = struct("Header", [
  u32("crc32", {  }),
]);

export default definePack({
  name: "RAR archive file format",
  endian: "little",
  pointerSize: 8,
  types: [LocatorRecordFlags, LocatorRecord, MetadataRecordFlags, MetadataRecord, HeaderFlags, ArchiveFlags, MainArchiveHeader, EncryptionHeaderFlags, EncryptionHeader, FileAndServiceHeaderFlags, FileEncryptionFlags, FileTimeFlags, FileTimeRecord, UnixOwnerFlags, UnixOwnerRecord, _CompressionInformation, FileOrServiceHeader, EOAHeaderFlags, EndOfArchiveHeader, Header],
  nodes: {
    "entry": structNode(LocatorRecordFlags, { label: "LocatorRecordFlags（入口）" }),
    "LocatorRecord": structNode(LocatorRecord, { label: "LocatorRecord" }),
    "MetadataRecordFlags": structNode(MetadataRecordFlags, { label: "MetadataRecordFlags" }),
    "MetadataRecord": structNode(MetadataRecord, { label: "MetadataRecord" }),
    "HeaderFlags": structNode(HeaderFlags, { label: "HeaderFlags" }),
    "ArchiveFlags": structNode(ArchiveFlags, { label: "ArchiveFlags" }),
    "MainArchiveHeader": structNode(MainArchiveHeader, { label: "MainArchiveHeader" }),
    "EncryptionHeaderFlags": structNode(EncryptionHeaderFlags, { label: "EncryptionHeaderFlags" }),
    "EncryptionHeader": structNode(EncryptionHeader, { label: "EncryptionHeader" }),
    "FileAndServiceHeaderFlags": structNode(FileAndServiceHeaderFlags, { label: "FileAndServiceHeaderFlags" }),
    "FileEncryptionFlags": structNode(FileEncryptionFlags, { label: "FileEncryptionFlags" }),
    "FileTimeFlags": structNode(FileTimeFlags, { label: "FileTimeFlags" }),
    "FileTimeRecord": structNode(FileTimeRecord, { label: "FileTimeRecord" }),
    "UnixOwnerFlags": structNode(UnixOwnerFlags, { label: "UnixOwnerFlags" }),
    "UnixOwnerRecord": structNode(UnixOwnerRecord, { label: "UnixOwnerRecord" }),
    "_CompressionInformation": structNode(_CompressionInformation, { label: "_CompressionInformation" }),
    "FileOrServiceHeader": structNode(FileOrServiceHeader, { label: "FileOrServiceHeader" }),
    "EOAHeaderFlags": structNode(EOAHeaderFlags, { label: "EOAHeaderFlags" }),
    "EndOfArchiveHeader": structNode(EndOfArchiveHeader, { label: "EndOfArchiveHeader" }),
    "Header": structNode(Header, { label: "Header" }),
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
- MainHeaderExtraRecord.size: 变长 vint 已生成 read_varint 辅助节点，静态布局在此停止
- EncryptionHeader.encryptionVersion: 变长 vint 已生成 read_varint 辅助节点，静态布局在此停止
- FileEncryptionRecord.encryptionVersion: 变长 vint 已生成 read_varint 辅助节点，静态布局在此停止
- FileHashRecord.hashType: 变长 vint 已生成 read_varint 辅助节点，静态布局在此停止
- FileVersionRecord.flags: 变长 vint 已生成 read_varint 辅助节点，静态布局在此停止
- RedirectionRecord.type: 枚举底层类型 vint 不支持
- FSHeaderExtraRecord.size: 变长 vint 已生成 read_varint 辅助节点，静态布局在此停止
- CompressionInformation.value: 变长 vint 已生成 read_varint 辅助节点，静态布局在此停止
- Header.headerSize: 变长 vint 已生成 read_varint 辅助节点，静态布局在此停止
*/
