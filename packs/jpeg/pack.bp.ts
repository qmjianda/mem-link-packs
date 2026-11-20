/// <reference path="../../../types/memlink-bp.d.ts" />

/**
 * JPEG / JFIF 图像。
 *
 * JPEG 是标记流：每个段以 0xFF + marker 开始，除 SOI/EOI/RST 外都带 2 字节
 * **大端**长度（含长度字段自身）。这里提供 SOI、通用段头、JFIF APP0、
 * SOF0 和 SOS 的常见布局。
 */

const JpegMarker = struct('JpegMarker', [
  u16('marker', {
    at: 0,
    format: 'hex',
    values: {
      0xffd8: 'SOI（图像开始）',
      0xffd9: 'EOI（图像结束）',
      0xffda: 'SOS（扫描开始）',
      0xffc0: 'SOF0（基线）',
      0xffc2: 'SOF2（渐进）',
      0xffe0: 'APP0（JFIF）',
      0xffe1: 'APP1（Exif）',
      0xffdb: 'DQT（量化表）',
      0xffc4: 'DHT（Huffman 表）',
      0xffdd: 'DRI（重启间隔）',
    },
    label: '标记',
  }),
]);

const SegmentHeader = struct('SegmentHeader', [
  u16('marker', { at: 0, format: 'hex', label: '标记' }),
  u16('length', { at: 2, label: '段长度（含本字段）' }),
]);

const JfifSegment = struct('JfifSegment', [
  u16('marker', { at: 0, format: 'hex', values: { 0xffe0: 'APP0' }, label: '标记' }),
  u16('length', { at: 2, label: '段长度' }),
  str('identifier', { at: 4, size: 5, label: '标识符 JFIF\\0' }),
  u8('majorVersion', { at: 9, label: 'JFIF 主版本' }),
  u8('minorVersion', { at: 10, label: 'JFIF 次版本' }),
  u8('densityUnits', {
    at: 11,
    values: { 0: '无单位', 1: '每英寸', 2: '每厘米' },
    label: '密度单位',
  }),
  u16('xDensity', { at: 12, label: '水平密度' }),
  u16('yDensity', { at: 14, label: '垂直密度' }),
  u8('thumbnailWidth', { at: 16, label: '缩略图宽度' }),
  u8('thumbnailHeight', { at: 17, label: '缩略图高度' }),
]);

const SofComponent = struct('SofComponent', [
  u8('id', { at: 0, label: '分量 ID' }),
  bits('horizontalSampling', 4, { at: 1, label: '水平采样因子' }),
  bits('verticalSampling', 4, { label: '垂直采样因子' }),
  u8('quantTable', { at: 2, label: '量化表编号' }),
]);

const Sof0Segment = struct('Sof0Segment', [
  u16('marker', { at: 0, format: 'hex', values: { 0xffc0: 'SOF0 基线' }, label: '标记' }),
  u16('length', { at: 2, label: '段长度' }),
  u8('precision', { at: 4, label: '样本精度（通常 8）' }),
  u16('height', { at: 5, label: '图像高度' }),
  u16('width', { at: 7, label: '图像宽度' }),
  u8('componentCount', { at: 9, label: '分量数量（常见 1/3/4）' }),
  array('components', SofComponent, 3, { at: 10, label: '分量（按常见 3 分量布局）' }),
]);

const SosComponent = struct('SosComponent', [
  u8('id', { at: 0, label: '分量 ID' }),
  u8('tableSelector', { at: 1, label: 'DC/AC 表选择' }),
]);

const SosSegment = struct('SosSegment', [
  u16('marker', { at: 0, format: 'hex', values: { 0xffda: 'SOS' }, label: '标记' }),
  u16('length', { at: 2, label: '段长度' }),
  u8('componentCount', { at: 4, label: '扫描分量数量' }),
  array('components', SosComponent, 3, { at: 5, label: '扫描分量（按常见 3 分量布局）' }),
  u8('spectralStart', { at: 11, label: '谱选择开始' }),
  u8('spectralEnd', { at: 12, label: '谱选择结束' }),
  u8('approxHigh', { at: 13, label: '逐次逼近高位' }),
  u8('approxLow', { at: 14, label: '逐次逼近低位' }),
]);

export default definePack({
  name: 'JPEG',
  endian: 'big',
  pointerSize: 4,
  constants: {
    SOI: 0xffd8,
    EOI: 0xffd9,
    APP0: 0xffe0,
    SOF0: 0xffc0,
  },
  types: [JpegMarker, SegmentHeader, JfifSegment, SofComponent, Sof0Segment, SosComponent, SosSegment],
  nodes: {
    marker: structNode(JpegMarker, { label: 'JPEG 标记（2 B）' }),
    segment: structNode(SegmentHeader, { label: 'JPEG 段头（4 B）' }),
    jfif: structNode(JfifSegment, { label: 'JFIF APP0 段（18 B）' }),
    sof0: structNode(Sof0Segment, { label: 'SOF0 帧头（19 B，3 分量）' }),
    sos: structNode(SosSegment, { label: 'SOS 扫描头（15 B，3 分量）' }),
  },
});
