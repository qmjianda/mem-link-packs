/// <reference path="../../../types/memlink-bp.d.ts" />

/**
 * RIFF / WAVE 音频。
 *
 * WAV 使用**小端**。文件 = RIFF 头 + fmt 块 + data 块（块顺序理论上可变）。
 * 标准 PCM 的 fmt 块为 16 字节数据，加上 8 字节块头共 24 字节；
 * 完整标准文件头为 44 字节。
 */

const RiffHeader = struct('RiffHeader', [
  str('chunkId', { at: 0, size: 4, label: 'RIFF' }),
  u32('chunkSize', { at: 4, label: '后续数据大小（文件大小 - 8）' }),
  str('format', { at: 8, size: 4, label: 'WAVE' }),
]);

const WaveFormat = struct('WaveFormat', [
  str('chunkId', { at: 0, size: 4, label: 'fmt ' }),
  u32('chunkSize', { at: 4, label: 'fmt 块大小（通常 16/18/40）' }),
  u16('audioFormat', {
    at: 8,
    values: {
      1: 'PCM',
      2: 'Microsoft ADPCM',
      3: 'IEEE float',
      6: 'A-law',
      7: 'mu-law',
      0xfffe: 'WAVE_FORMAT_EXTENSIBLE',
    },
    label: '编码格式',
  }),
  u16('channels', { at: 10, label: '声道数' }),
  u32('sampleRate', { at: 12, label: '采样率（Hz）' }),
  u32('byteRate', { at: 16, label: '字节率' }),
  u16('blockAlign', { at: 20, label: '块对齐' }),
  u16('bitsPerSample', { at: 22, label: '位深' }),
]);

const DataChunk = struct('DataChunk', [
  str('chunkId', { at: 0, size: 4, label: 'data' }),
  u32('chunkSize', { at: 4, label: '音频数据大小' }),
]);

const WaveHeader = struct('WaveHeader', [
  record('riff', RiffHeader, { at: 0 }),
  record('fmt', WaveFormat, { at: 12 }),
  record('data', DataChunk, { at: 36 }),
]);

const duration = calcNode({
  label: 'WAV 时长',
  description: 'dataSize / byteRate，输出秒与毫秒。',
  inputs: { dataSize: 'number', byteRate: 'number' },
  outputs: { seconds: 'number', milliseconds: 'number' },
  run: ({ dataSize, byteRate }) => {
    const rate = Number(byteRate);
    const seconds = rate > 0 ? Number(dataSize) / rate : 0;
    return { seconds, milliseconds: seconds * 1000 };
  },
});

export default definePack({
  name: 'WAV',
  endian: 'little',
  pointerSize: 4,
  constants: {
    RIFF_HEADER_SIZE: 12,
    FMT_HEADER_SIZE: 8,
    STANDARD_HEADER_SIZE: 44,
  },
  types: [RiffHeader, WaveFormat, DataChunk, WaveHeader],
  nodes: {
    header: structNode(WaveHeader, { label: 'WAV 标准头（44 B）' }),
    riff: structNode(RiffHeader, { label: 'RIFF 头（12 B）' }),
    fmt: structNode(WaveFormat, { label: 'fmt 块（24 B）' }),
    data: structNode(DataChunk, { label: 'data 块头（8 B）' }),
    duration,
  },
});
