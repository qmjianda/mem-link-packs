/// <reference path="../../../types/memlink-bp.d.ts" />

/**
 * PNG 图像文件。
 *
 * PNG 使用**大端**；所有整数、块长度和 CRC 都是大端。文件 = 8 字节签名 +
 * 若干块。每个块是 length(4) + type(4) + data + crc(4)，length 不含自身和 type/crc。
 * IHDR 必须是第一个块，数据从文件偏移 16 开始。
 */

const PngSignature = struct('PngSignature', [
  bytes('signature', { at: 0, size: 8, label: 'PNG 签名 89 50 4E 47 0D 0A 1A 0A' }),
]);

const ChunkHeader = struct('ChunkHeader', [
  u32('length', { at: 0, label: '数据长度（不含 length/type/crc）' }),
  str('type', { at: 4, size: 4, label: '块类型（IHDR/IDAT/IEND…）' }),
]);

const Ihdr = struct('Ihdr', [
  u32('width', { at: 0, label: '宽度（像素）' }),
  u32('height', { at: 4, label: '高度（像素）' }),
  u8('bitDepth', {
    at: 8,
    values: { 1: '1 bit', 2: '2 bit', 4: '4 bit', 8: '8 bit', 16: '16 bit' },
    label: '位深',
  }),
  u8('colorType', {
    at: 9,
    values: { 0: '灰度', 2: '真彩色', 3: '索引色', 4: '灰度 + Alpha', 6: '真彩色 + Alpha' },
    label: '颜色类型',
  }),
  u8('compression', { at: 10, values: { 0: 'deflate' }, label: '压缩方法' }),
  u8('filter', { at: 11, values: { 0: '自适应' }, label: '滤波方法' }),
  u8('interlace', { at: 12, values: { 0: '无隔行', 1: 'Adam7 隔行' }, label: '隔行方式' }),
]);

const IhdrChunk = struct('IhdrChunk', [
  record('chunk', ChunkHeader, { at: 0 }),
  record('ihdr', Ihdr, { at: 8 }),
  u32('crc', { at: 21, format: 'hex', label: 'CRC-32' }),
]);

const PngFileHeader = struct('PngFileHeader', [
  record('signature', PngSignature, { at: 0 }),
  record('ihdrChunk', IhdrChunk, { at: 8 }),
]);

export default definePack({
  name: 'PNG',
  endian: 'big',
  pointerSize: 4,
  constants: {
    SIGNATURE_SIZE: 8,
    IHDR_DATA_OFFSET: 16,
    CHUNK_HEADER_SIZE: 8,
  },
  types: [PngSignature, ChunkHeader, Ihdr, IhdrChunk, PngFileHeader],
  nodes: {
    fileHeader: structNode(PngFileHeader, { label: 'PNG 签名 + IHDR（33 B）' }),
    signature: structNode(PngSignature, { label: 'PNG 签名（8 B）' }),
    chunk: structNode(ChunkHeader, { label: 'PNG 块头（8 B）' }),
    ihdr: structNode(Ihdr, { label: 'IHDR 数据（13 B）' }),
    ihdrChunk: structNode(IhdrChunk, { label: 'IHDR 块（25 B）' }),
  },
});
