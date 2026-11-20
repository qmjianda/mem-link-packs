/// <reference path="../../../types/memlink-bp.d.ts" />

/**
 * NES / Famicom ROM（iNES 与 NES 2.0 共用的 16 字节文件头）。
 *
 * 文件偏移 0 就是 iNES 头；PRG ROM 从 16（有 trainer 时从 528）开始。
 * NES 2.0 只是把 iNES 里保留的字节重新定义成扩展字段，前 8 字节布局不变。
 */

const INesHeader = struct('INesHeader', [
  bytes('magic', { at: 0, size: 4, label: '魔数 NES\\x1A' }),
  u8('prgBanks', { at: 4, label: 'PRG ROM 16 KB 页数' }),
  u8('chrBanks', { at: 5, label: 'CHR ROM 8 KB 页数' }),

  // flags6
  bits('mirroring', 1, {
    at: 6,
    values: { 0: '水平（horizontal）', 1: '垂直（vertical）' },
  }),
  bits('battery', 1, { values: { 0: '无', 1: '有电池存档' } }),
  bits('trainer', 1, { values: { 0: '无', 1: '有 512 B trainer' } }),
  bits('fourScreen', 1, { values: { 0: '否', 1: '四屏 VRAM' } }),
  bits('mapperLow', 4, { format: 'hex', label: 'Mapper 低 4 位' }),

  // flags7
  bits('consoleType', 2, {
    at: 7,
    values: { 0: 'NES / Famicom', 1: 'Vs. System', 2: 'PlayChoice-10', 3: '扩展控制台' },
  }),
  bits('nes2', 2, {
    values: { 0: 'iNES', 1: 'iNES（保留值）', 2: 'NES 2.0', 3: 'iNES（保留值）' },
    label: '格式标识',
  }),
  bits('mapperHigh', 4, { format: 'hex', label: 'Mapper 高 4 位' }),

  // NES 2.0 byte 8
  bits('mapperUpper', 4, { at: 8, format: 'hex', label: 'Mapper 高 8–11 位' }),
  bits('submapper', 4, { format: 'hex', label: 'Submapper' }),

  // NES 2.0 byte 9
  bits('prgSizeHigh', 4, { at: 9, format: 'hex', label: 'PRG 大小高位' }),
  bits('chrSizeHigh', 4, { format: 'hex', label: 'CHR 大小高位' }),

  // NES 2.0 byte 10
  bits('prgRamShift', 4, { at: 10, label: 'PRG-RAM 大小（2^n 字节）' }),
  bits('prgNvramShift', 4, { label: 'PRG-NVRAM 大小（2^n 字节）' }),

  // NES 2.0 byte 11
  bits('chrRamShift', 4, { at: 11, label: 'CHR-RAM 大小（2^n 字节）' }),
  bits('chrNvramShift', 4, { label: 'CHR-NVRAM 大小（2^n 字节）' }),

  // NES 2.0 byte 12
  bits('cpuTiming', 2, {
    at: 12,
    values: { 0: 'RP2C02 (NTSC)', 1: 'RP2C07 (PAL)', 2: '多种', 3: 'UA6527P / 兼容' },
    label: 'CPU/PPU 时序',
  }),
  bits('reserved12', 6, { label: '保留' }),

  // NES 2.0 byte 13（Vs. System）
  bits('vsPpuType', 4, { at: 13, values: { 0: 'RP2C03B', 1: 'RP2C03G', 2: 'RP2C04-0001', 3: 'RP2C04-0002', 4: 'RP2C04-0003', 5: 'RP2C04-0004', 6: 'RC2C03B', 7: 'RC2C03C', 8: 'RC2C05-01', 9: 'RC2C05-02', 10: 'RC2C05-03', 11: 'RC2C05-04', 12: 'RC2C05-05', 15: '自定义' }, label: 'Vs. PPU 类型' }),
  bits('vsHardware', 4, { label: 'Vs. 硬件类型' }),

  bytes('reserved', { at: 14, size: 2, label: '保留 / 填充' }),
]);

/** 从三个半字节拼出 12 位 mapper 编号（iNES 只用低 8 位）。 */
const mapperNumber = calcNode({
  label: 'NES Mapper 编号',
  description: 'mapperLow | mapperHigh << 4 | mapperUpper << 8',
  inputs: { low: 'number', high: 'number', upper: 'number' },
  outputs: { mapper: 'number' },
  run: ({ low, high, upper }) => ({
    mapper: (Number(low) & 0x0f) | ((Number(high) & 0x0f) << 4) | ((Number(upper) & 0x0f) << 8),
  }),
});

const prgSize = calcNode({
  label: 'PRG ROM 字节数',
  description: 'iNES 规则：16 KB × prgBanks。NES 2.0 指数表示法见 README。',
  inputs: { banks: 'number' },
  outputs: { bytes: 'number', kib: 'number' },
  run: ({ banks }) => {
    const b = Number(banks);
    return { bytes: b * 16384, kib: b * 16 };
  },
});

const chrSize = calcNode({
  label: 'CHR ROM 字节数',
  description: 'iNES 规则：8 KB × chrBanks。',
  inputs: { banks: 'number' },
  outputs: { bytes: 'number', kib: 'number' },
  run: ({ banks }) => {
    const b = Number(banks);
    return { bytes: b * 8192, kib: b * 8 };
  },
});

export default definePack({
  name: 'NES ROM',
  endian: 'little',
  pointerSize: 4,
  constants: {
    HEADER_SIZE: 16,
    TRAINER_SIZE: 512,
    PRG_BANK: 16384,
    CHR_BANK: 8192,
  },
  types: [INesHeader],
  nodes: {
    header: structNode(INesHeader, { label: 'NES 文件头（16 B）' }),
    mapper: mapperNumber,
    prgSize,
    chrSize,
  },
});
