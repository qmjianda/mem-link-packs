/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/evtx
// 原始 pack：evtx · Windows event log v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 1 个动态辅助节点
const EvtxChunk = struct("EvtxChunk", [
  str("magic", { size: 8, label: "ElfChnk, NUL-terminated" }),
  u64("firstEventRecordNumber", { endian: "little", label: "logical number of the first record in this chunk" }),
  u64("lastEventRecordNumber", { endian: "little", label: "logical number of the last record" }),
  u64("firstEventRecordId", { endian: "little", label: "file-wide identifier of the first record" }),
  u64("lastEventRecordId", { endian: "little", label: "file-wide identifier of the last record" }),
  u32("headerSize", { endian: "little", label: "128" }),
  u32("lastRecordOffset", { endian: "little", label: "offset of the last record, from the chunk start" }),
  u32("freeSpaceOffset", { endian: "little", label: "offset of the free space after the last record" }),
  u32("eventRecordsChecksum", { endian: "little", label: "CRC-32 over the records area" }),
  bytes("unused", { size: 64, label: "zero" }),
  u32("unknown", { endian: "little", label: "flags, in practice zero" }),
  u32("checksum", { endian: "little", label: "CRC-32 of the first 120 bytes and the tables below" }),
  array("commonStringOffsets", "u32", 64, { label: "hash buckets into the per-chunk string table" }),
  array("templatePointers", "u32", 32, { label: "hash buckets into the per-chunk template table" }),
  bytes("records", { size: 65024, label: "the BinXML event records filling the rest of the chunk" }),
]);

const EvtxFileFlags = struct("EvtxFileFlags", [
  bits("dirty", 1, { at: 0, bit: 0, unit: 4, label: "dirty" }),
  bits("full", 1, { at: 0, bit: 1, unit: 4, label: "full" }),
]);

const Evtx = struct("Evtx", [
  str("magic", { size: 8, label: "ElfFile, NUL-terminated" }),
  u64("firstChunkNumber", { endian: "little", label: "first chunk still in use, after any rollover" }),
  u64("lastChunkNumber", { endian: "little", label: "last chunk in use" }),
  u64("nextRecordId", { endian: "little", label: "identifier the next record written will get" }),
  u32("headerSize", { endian: "little", label: "128" }),
  u16("minorVersion", { endian: "little", label: "1" }),
  u16("majorVersion", { endian: "little", label: "3" }),
  u16("headerBlockSize", { endian: "little", label: "4096: the header occupies a full block" }),
  u16("chunkCount", { endian: "little", label: "chunks in the file" }),
  bytes("unused", { size: 76, label: "zero" }),
  record("fileFlags", EvtxFileFlags, { label: "dirty and wrapped flags" }),
  u32("checksum", { endian: "little", label: "CRC-32 of the first 120 bytes" }),
  bytes("padding", { size: 3968, label: "zero, to the end of the 4 KiB header block" }),
]);

export default definePack({
  name: "EVTX",
  endian: "little",
  pointerSize: 4,
  types: [EvtxChunk, EvtxFileFlags, Evtx],
  nodes: {
    "entry": structNode(Evtx, { label: "Evtx（入口）" }),
    "EvtxChunk": structNode(EvtxChunk, { label: "EvtxChunk" }),
    "flags_EvtxFileFlags": structNode(EvtxFileFlags, { label: "位域 EvtxFileFlags" }),
    "list_Evtx_chunks": listNode(EvtxChunk, {
      label: "Evtx.chunks（重复元素）",
      description: "Nybble repeat 字段；address 指向第一个元素，next 按元素大小前进",
      next: (e) => {  return e.addr + EvtxChunk.size; },
      max: 4096,
    }),
  },
});

