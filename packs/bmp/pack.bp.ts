/// <reference path="../../../types/memlink-bp.d.ts" />

/**
 * Windows BMP 位图。
 *
 * BMP 使用**小端**。文件头 14 字节 + 信息头（最常见是 40 字节的
 * BITMAPINFOHEADER）+ 可选调色板 + 像素数据。像素行按 4 字节对齐，
 * 且通常自下而上存储。
 */

const BmpFileHeader = struct('BmpFileHeader', [
  str('magic', { at: 0, size: 2, label: '魔数 BM' }),
  u32('fileSize', { at: 2, label: '文件大小（字节）' }),
  u16('reserved1', { at: 6, label: '保留' }),
  u16('reserved2', { at: 8, label: '保留' }),
  u32('pixelOffset', { at: 10, label: '像素数据偏移' }),
]);

const BitmapInfoHeader = struct('BitmapInfoHeader', [
  u32('headerSize', { at: 0, label: '信息头大小（通常 40）' }),
  i32('width', { at: 4, label: '宽度（像素）' }),
  i32('height', { at: 8, label: '高度（像素；负数表示自上而下）' }),
  u16('planes', { at: 12, label: '颜色平面数（必须为 1）' }),
  u16('bitCount', { at: 14, values: { 1: '1 bpp', 4: '4 bpp', 8: '8 bpp', 16: '16 bpp', 24: '24 bpp', 32: '32 bpp' }, label: '每像素位数' }),
  u32('compression', {
    at: 16,
    values: {
      0: 'BI_RGB（无压缩）',
      1: 'BI_RLE8',
      2: 'BI_RLE4',
      3: 'BI_BITFIELDS',
      4: 'BI_JPEG',
      5: 'BI_PNG',
      6: 'BI_ALPHABITFIELDS',
    },
    label: '压缩方式',
  }),
  u32('imageSize', { at: 20, label: '像素数据大小（BI_RGB 可为 0）' }),
  i32('xPelsPerMeter', { at: 24, label: '水平分辨率（像素/米）' }),
  i32('yPelsPerMeter', { at: 28, label: '垂直分辨率（像素/米）' }),
  u32('colorsUsed', { at: 32, label: '调色板颜色数（0 = 全部）' }),
  u32('colorsImportant', { at: 36, label: '重要颜色数' }),
]);

const BmpHeader = struct('BmpHeader', [
  record('file', BmpFileHeader, { at: 0 }),
  record('info', BitmapInfoHeader, { at: 14 }),
]);

const pixelCount = calcNode({
  label: 'BMP 像素数量',
  description: 'width × abs(height)；行跨度还需按 4 字节对齐，见 README。',
  inputs: { width: 'number', height: 'number' },
  outputs: { pixels: 'number', rows: 'number' },
  run: ({ width, height }) => {
    const w = Math.abs(Number(width));
    const h = Math.abs(Number(height));
    return { pixels: w * h, rows: h };
  },
});

export default definePack({
  name: 'BMP',
  endian: 'little',
  pointerSize: 4,
  constants: {
    FILE_HEADER_SIZE: 14,
    INFO_HEADER_SIZE: 40,
    DEFAULT_HEADER_SIZE: 54,
  },
  types: [BmpFileHeader, BitmapInfoHeader, BmpHeader],
  nodes: {
    header: structNode(BmpHeader, { label: 'BMP 文件头 + 信息头（54 B）' }),
    fileHeader: structNode(BmpFileHeader, { label: 'BMP 文件头（14 B）' }),
    infoHeader: structNode(BitmapInfoHeader, { label: 'BITMAPINFOHEADER（40 B）' }),
    pixels: pixelCount,
  },
});
