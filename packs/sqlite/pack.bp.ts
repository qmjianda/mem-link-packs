/// <reference path="../../../types/memlink-bp.d.ts" />

/**
 * SQLite 3 数据库文件。
 *
 * 数据库头固定 100 字节，所有多字节整数都是**大端**。B-tree 页从第 1 页
 * （文件偏移 0）开始；页头中的 cell pointer 数组是 u16 偏移，指向页内单元。
 * SQLite 的 varint 长度可变，这里用计算节点按地址解码。
 */

function readVarint(mem: any, addr: number): { value: number; len: number } {
  let value = 0;
  for (let i = 0; i < 9; i += 1) {
    const b = mem.u8(addr + i) as number;
    if (i === 8) {
      // 第 9 字节使用全部 8 位；超出 2^53 的值会损失精度。
      return { value: value * 256 + b, len: 9 };
    }
    value = value * 128 + (b & 0x7f);
    if ((b & 0x80) === 0) return { value, len: i + 1 };
  }
  return { value, len: 9 };
}

const SqliteHeader = struct('SqliteHeader', [
  str('magic', { at: 0, size: 16, label: 'SQLite format 3\\0' }),
  u16('pageSize', {
    at: 16,
    label: '页大小',
    transform: (v) => (Number(v) === 1 ? 65536 : Number(v)),
  }),
  u8('writeVersion', {
    at: 18,
    values: { 1: 'Legacy（回滚日志）', 2: 'WAL' },
    label: '写格式版本',
  }),
  u8('readVersion', {
    at: 19,
    values: { 1: 'Legacy（回滚日志）', 2: 'WAL' },
    label: '读格式版本',
  }),
  u8('reservedPerPage', { at: 20, label: '每页保留字节数' }),
  u8('maxPayloadFraction', { at: 21, label: '最大 payload 比例' }),
  u8('minPayloadFraction', { at: 22, label: '最小 payload 比例' }),
  u8('leafPayloadFraction', { at: 23, label: '叶子 payload 比例' }),
  u32('fileChangeCounter', { at: 24, label: '文件变更计数器' }),
  u32('databasePages', { at: 28, label: '数据库总页数' }),
  u32('firstFreelistTrunk', { at: 32, label: '第一个 freelist trunk 页' }),
  u32('freelistPages', { at: 36, label: 'freelist 页总数' }),
  u32('schemaCookie', { at: 40, label: 'schema cookie' }),
  u32('schemaFormat', { at: 44, label: 'schema 格式号' }),
  u32('defaultCacheSize', { at: 48, label: '默认页缓存大小' }),
  u32('largestRootPage', { at: 52, label: '最大根 B-tree 页号' }),
  u32('textEncoding', {
    at: 56,
    values: { 1: 'UTF-8', 2: 'UTF-16le', 3: 'UTF-16be' },
    label: '文本编码',
  }),
  u32('userVersion', { at: 60, label: 'user_version' }),
  u32('incrementalVacuum', { at: 64, label: 'incremental vacuum' }),
  u32('applicationId', { at: 68, format: 'hex', label: 'application_id' }),
  bytes('reserved', { at: 72, size: 20, label: '保留（必须为 0）' }),
  u32('versionValidFor', { at: 92, label: 'version-valid-for' }),
  u32('sqliteVersion', { at: 96, label: 'SQLite 版本号' }),
]);

/** 叶子页头：cell pointer 数组紧跟在 8 字节头之后。 */
const LeafPageHeader = struct('LeafPageHeader', [
  u8('pageType', {
    at: 0,
    values: { 2: '内部索引页', 5: '内部表页', 10: '叶子索引页', 13: '叶子表页' },
    label: '页类型',
  }),
  u16('firstFreeblock', { at: 1, label: '第一个空闲块偏移' }),
  u16('cellCount', { at: 3, label: '单元数量' }),
  u16('cellContentStart', { at: 5, label: '单元内容起始偏移' }),
  u8('fragmentedFreeBytes', { at: 7, label: '碎片空闲字节' }),
]);

/** 内部页头：在 8 字节公共头之后多一个右子页号。 */
const BtreePageHeader = struct('BtreePageHeader', [
  u8('pageType', {
    at: 0,
    values: { 2: '内部索引页', 5: '内部表页', 10: '叶子索引页', 13: '叶子表页' },
    label: '页类型',
  }),
  u16('firstFreeblock', { at: 1, label: '第一个空闲块偏移' }),
  u16('cellCount', { at: 3, label: '单元数量' }),
  u16('cellContentStart', { at: 5, label: '单元内容起始偏移' }),
  u8('fragmentedFreeBytes', { at: 7, label: '碎片空闲字节' }),
  u32('rightMostPointer', { at: 8, label: '最右子页号（仅内部页）' }),
]);

/** freelist trunk 页；后面的 leafPages 数量 = leafCount，用「展开数组」读取。 */
const FreelistTrunk = struct('FreelistTrunk', [
  u32('nextTrunk', { at: 0, label: '下一个 trunk 页号' }),
  u32('leafCount', { at: 4, label: '本 trunk 的 leaf 页数量' }),
]);

const WalHeader = struct('WalHeader', [
  u32('magic', {
    at: 0,
    format: 'hex',
    values: { 0x377f0682: '校验和按小端', 0x377f0683: '校验和按大端' },
    label: 'WAL 魔数',
  }),
  u32('version', { at: 4, label: 'WAL 格式版本（3007000）' }),
  u32('pageSize', { at: 8, label: '页大小' }),
  u32('checkpointSequence', { at: 12, label: 'checkpoint 序号' }),
  u32('salt1', { at: 16, format: 'hex', label: 'salt-1' }),
  u32('salt2', { at: 20, format: 'hex', label: 'salt-2' }),
  u32('checksum1', { at: 24, format: 'hex', label: 'checksum-1' }),
  u32('checksum2', { at: 28, format: 'hex', label: 'checksum-2' }),
]);

const varint = calcNode({
  label: '读 SQLite Varint',
  description: '按地址解码 1–9 字节 varint，输出数值和实际字节数。',
  inputs: { address: 'number' },
  outputs: { value: 'number', bytes: 'number' },
  run: ({ address }, ctx) => {
    const r = readVarint(ctx.mem, Number(address));
    return { value: r.value, bytes: r.len };
  },
});

const pageAddress = calcNode({
  label: '页号 → 文件地址',
  description: 'address = base + (pageNumber - 1) × pageSize；第 1 页从文件偏移 0 开始。',
  inputs: { pageNumber: 'number', pageSize: 'number', base: 'number' },
  outputs: { address: 'number', offset: 'number' },
  run: ({ pageNumber, pageSize, base }) => {
    const offset = (Number(pageNumber) - 1) * Number(pageSize);
    return { address: Number(base) + offset, offset };
  },
});

export default definePack({
  name: 'SQLite 3',
  endian: 'big',
  pointerSize: 4,
  constants: {
    HEADER_SIZE: 100,
    PAGE_TYPE_INDEX_INTERIOR: 2,
    PAGE_TYPE_TABLE_INTERIOR: 5,
    PAGE_TYPE_INDEX_LEAF: 10,
    PAGE_TYPE_TABLE_LEAF: 13,
  },
  types: [SqliteHeader, LeafPageHeader, BtreePageHeader, FreelistTrunk, WalHeader],
  nodes: {
    dbHeader: structNode(SqliteHeader, { label: 'SQLite 数据库头（100 B）' }),
    leafPage: structNode(LeafPageHeader, { label: 'B-tree 叶子页头（8 B）' }),
    btreePage: structNode(BtreePageHeader, { label: 'B-tree 内部页头（12 B）' }),
    freelistTrunk: structNode(FreelistTrunk, { label: 'freelist trunk 页头' }),
    walHeader: structNode(WalHeader, { label: 'WAL 文件头（32 B）' }),
    varint,
    pageAddress,
  },
});
