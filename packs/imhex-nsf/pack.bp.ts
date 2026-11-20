/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/nsf.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const ChunkMetadata = struct("ChunkMetadata", [
  u32("length", {  }),
  str("ID", { size: 4 }),
]);

const Chunk = struct("Chunk", [
  record("metadata", ChunkMetadata),
]);

const NSF2Flags = struct("NSF2Flags", [
  bits("irq", 1, { at: 0, bit: 4, unit: 1, label: "irq" }),
  bits("nonReturningInitNotUsed", 1, { at: 0, bit: 5, unit: 1, label: "nonReturningInitNotUsed" }),
  bits("playSubroutineNotUsed", 1, { at: 0, bit: 6, unit: 1, label: "playSubroutineNotUsed" }),
  bits("playbackNSFeChunk", 1, { at: 0, bit: 7, unit: 1, label: "playbackNSFeChunk" }),
]);

const Region = struct("Region", [
  bits("isPAL", 1, { at: 0, bit: 0, unit: 1, label: "isPAL" }),
  bits("palNTSCDual", 1, { at: 0, bit: 1, unit: 1, label: "palNTSCDual" }),
]);

const Header = struct("Header", [
  str("signature", { size: 5 }),
  u8("version", {  }),
  u8("songAmount", {  }),
  u8("startingSong", {  }),
  u16("dataLoadAddress", {  }),
  u16("dataInitAddress", {  }),
  u16("dataPlayAddress", {  }),
  str("gameName", { size: 32 }),
  str("songwriting", { size: 32 }),
  str("copyrightHolder", { size: 32 }),
  u16("ntscPlaySpeed", {  }),
  bytes("bankswitchInitValues", { size: 8 }),
  u16("palPlaySpeed", {  }),
  record("region", Region),
  u8("extraSoundChipSupport", { values: { "0": "None", "1": "VRC6", "2": "VRC7", "4": "FDS", "8": "MMC5", "16": "Namco163", "32": "Sunsoft5B", "64": "VTxx" } }),
  record("nsf2flags", NSF2Flags),
]);

export default definePack({
  name: "NES Sound Format file",
  endian: "little",
  pointerSize: 8,
  types: [ChunkMetadata, Chunk, NSF2Flags, Region, Header],
  nodes: {
    "entry": structNode(Header, { label: "Header（入口）" }),
    "ChunkMetadata": structNode(ChunkMetadata, { label: "ChunkMetadata" }),
    "Chunk": structNode(Chunk, { label: "Chunk" }),
    "NSF2Flags": structNode(NSF2Flags, { label: "NSF2Flags" }),
    "Region": structNode(Region, { label: "Region" }),
  },
});


/*
未移植项：
- Header.dataLength: 类型 u24 不可移植
*/
