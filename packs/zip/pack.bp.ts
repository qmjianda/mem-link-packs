/// <reference path="../../../types/memlink-bp.d.ts" />

/**
 * ZIP 归档。
 *
 * ZIP 使用**小端**。解析通常从文件末尾的 EOCD（End of Central Directory）
 * 开始，再跳转到 central directory，最后按 local header offset 定位每个条目。
 * ZIP64 使用额外的扩展记录，未在此 pack 中展开。
 */

/** 通用标志位（16 位）复用：local header 与 central directory 的布局相同。 */
function generalPurposeFlags(at: number) {
  return [
    bits('encrypted', 1, { at, bit: 0, values: { 0: '否', 1: '是' }, label: '加密' }),
    bits('compressionOption', 2, {
      bit: 1,
      values: { 0: 'normal', 1: 'maximum', 2: 'fast', 3: 'super fast' },
      label: '压缩级别',
    }),
    bits('dataDescriptor', 1, { bit: 3, values: { 0: '无', 1: '有' }, label: '数据描述符' }),
    bits('enhancedDeflate', 1, { bit: 4, label: '增强 deflate' }),
    bits('patched', 1, { bit: 5, label: '压缩后修补' }),
    bits('strongEncryption', 1, { bit: 6, label: '强加密' }),
    bits('reserved7', 1, { bit: 7, label: '保留' }),
    bits('maskedHeader', 1, { bit: 8, label: '掩码头部值' }),
    bits('reserved9', 2, { bit: 9, label: '保留' }),
    bits('utf8', 1, { bit: 11, values: { 0: '否', 1: '是' }, label: 'UTF-8 文件名' }),
    bits('reserved12', 1, { bit: 12, label: '保留' }),
    bits('maskLocalHeader', 1, { bit: 13, label: '掩码 local header' }),
    bits('reserved14', 2, { bit: 14, label: '保留' }),
  ];
}

const LocalFileHeader = struct('LocalFileHeader', [
  u32('signature', { at: 0, format: 'hex', values: { 0x04034b50: 'PK\\x03\\x04' }, label: '签名' }),
  u16('versionNeeded', { at: 4, label: '解压所需版本' }),
  ...generalPurposeFlags(6),
  u16('method', {
    at: 8,
    values: { 0: 'Stored', 8: 'Deflate', 9: 'Deflate64', 12: 'BZip2', 14: 'LZMA', 93: 'Zstandard', 95: 'XZ', 98: 'PPMd' },
    label: '压缩方法',
  }),
  u16('modTime', { at: 10, format: 'hex', label: 'DOS 修改时间' }),
  u16('modDate', { at: 12, format: 'hex', label: 'DOS 修改日期' }),
  u32('crc32', { at: 14, format: 'hex', label: 'CRC-32' }),
  u32('compressedSize', { at: 18, label: '压缩后大小' }),
  u32('uncompressedSize', { at: 22, label: '原始大小' }),
  u16('nameLength', { at: 26, label: '文件名长度' }),
  u16('extraLength', { at: 28, label: '扩展字段长度' }),
]);

const CentralDirectoryHeader = struct('CentralDirectoryHeader', [
  u32('signature', { at: 0, format: 'hex', values: { 0x02014b50: 'PK\\x01\\x02' }, label: '签名' }),
  u16('versionMadeBy', { at: 4, label: '创建版本' }),
  u16('versionNeeded', { at: 6, label: '解压所需版本' }),
  ...generalPurposeFlags(8),
  u16('method', {
    at: 10,
    values: { 0: 'Stored', 8: 'Deflate', 9: 'Deflate64', 12: 'BZip2', 14: 'LZMA', 93: 'Zstandard', 95: 'XZ', 98: 'PPMd' },
    label: '压缩方法',
  }),
  u16('modTime', { at: 12, format: 'hex', label: 'DOS 修改时间' }),
  u16('modDate', { at: 14, format: 'hex', label: 'DOS 修改日期' }),
  u32('crc32', { at: 16, format: 'hex', label: 'CRC-32' }),
  u32('compressedSize', { at: 20, label: '压缩后大小' }),
  u32('uncompressedSize', { at: 24, label: '原始大小' }),
  u16('nameLength', { at: 28, label: '文件名长度' }),
  u16('extraLength', { at: 30, label: '扩展字段长度' }),
  u16('commentLength', { at: 32, label: '注释长度' }),
  u16('diskStart', { at: 34, label: '起始磁盘号' }),
  u16('internalAttributes', { at: 36, label: '内部属性' }),
  u32('externalAttributes', { at: 38, format: 'hex', label: '外部属性' }),
  u32('localHeaderOffset', { at: 42, label: '对应 local header 偏移' }),
]);

const EndOfCentralDirectory = struct('EndOfCentralDirectory', [
  u32('signature', { at: 0, format: 'hex', values: { 0x06054b50: 'PK\\x05\\x06' }, label: '签名' }),
  u16('diskNumber', { at: 4, label: '当前磁盘号' }),
  u16('centralDisk', { at: 6, label: 'central directory 所在磁盘' }),
  u16('entriesOnDisk', { at: 8, label: '本磁盘条目数' }),
  u16('totalEntries', { at: 10, label: '总条目数' }),
  u32('centralSize', { at: 12, label: 'central directory 大小' }),
  u32('centralOffset', { at: 16, label: 'central directory 偏移' }),
  u16('commentLength', { at: 20, label: '注释长度' }),
]);

const DataDescriptor = struct('DataDescriptor', [
  u32('signature', { at: 0, format: 'hex', values: { 0x08074b50: 'PK\\x07\\x08（可选）' }, label: '签名（可省略）' }),
  u32('crc32', { at: 4, format: 'hex', label: 'CRC-32' }),
  u32('compressedSize', { at: 8, label: '压缩后大小' }),
  u32('uncompressedSize', { at: 12, label: '原始大小' }),
]);

const eocdOffset = calcNode({
  label: 'EOCD 偏移',
  description: '文件大小 - 22 - commentLength；先读文件末尾 22 字节或从最小值向后搜索。',
  inputs: { fileSize: 'number', commentLength: 'number' },
  outputs: { offset: 'number' },
  run: ({ fileSize, commentLength }) => ({ offset: Number(fileSize) - 22 - Number(commentLength) }),
});

export default definePack({
  name: 'ZIP',
  endian: 'little',
  pointerSize: 4,
  constants: {
    LOCAL_HEADER_SIZE: 30,
    CENTRAL_HEADER_SIZE: 46,
    EOCD_SIZE: 22,
    LOCAL_SIGNATURE: 0x04034b50,
    CENTRAL_SIGNATURE: 0x02014b50,
    EOCD_SIGNATURE: 0x06054b50,
  },
  types: [LocalFileHeader, CentralDirectoryHeader, EndOfCentralDirectory, DataDescriptor],
  nodes: {
    localHeader: structNode(LocalFileHeader, { label: 'ZIP 本地文件头（30 B）' }),
    centralHeader: structNode(CentralDirectoryHeader, { label: 'ZIP 中央目录项（46 B）' }),
    eocd: structNode(EndOfCentralDirectory, { label: 'EOCD（22 B）' }),
    dataDescriptor: structNode(DataDescriptor, { label: '数据描述符（16 B）' }),
    eocdOffset,
  },
});
