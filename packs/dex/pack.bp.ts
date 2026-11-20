/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/dex
// 原始 pack：dex · Dalvik DEX v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：complete
const DexHeader = struct("DexHeader", [
  bytes("magic", { size: 8, label: "magic: dex, LF, 3-digit version, NUL" }),
  u32("checksum", { endian: "little", label: "adler32 checksum of the rest of the file" }),
  bytes("signature", { size: 20, label: "SHA-1 signature of the rest of the file" }),
  u32("fileSize", { endian: "little", label: "size of the entire file" }),
  u32("headerSize", { endian: "little", label: "size of this header (0x70)" }),
  u32("endianTag", { endian: "little", label: "0x12345678 for little-endian" }),
  u32("linkSize", { endian: "little", label: "size of the link section" }),
  u32("linkOff", { endian: "little", label: "offset of the link section" }),
  u32("mapOff", { endian: "little", label: "offset of the map list" }),
  u32("stringIdsSize", { endian: "little", label: "count of entries in the string id list" }),
  u32("stringIdsOff", { endian: "little", label: "offset of the string id list" }),
  u32("typeIdsSize", { endian: "little", label: "count of entries in the type id list" }),
  u32("typeIdsOff", { endian: "little", label: "offset of the type id list" }),
  u32("protoIdsSize", { endian: "little", label: "count of entries in the proto id list" }),
  u32("protoIdsOff", { endian: "little", label: "offset of the proto id list" }),
  u32("fieldIdsSize", { endian: "little", label: "count of entries in the field id list" }),
  u32("fieldIdsOff", { endian: "little", label: "offset of the field id list" }),
  u32("methodIdsSize", { endian: "little", label: "count of entries in the method id list" }),
  u32("methodIdsOff", { endian: "little", label: "offset of the method id list" }),
  u32("classDefsSize", { endian: "little", label: "count of entries in the class def list" }),
  u32("classDefsOff", { endian: "little", label: "offset of the class def list" }),
  u32("dataSize", { endian: "little", label: "size of the data section" }),
  u32("dataOff", { endian: "little", label: "offset of the data section" }),
]);

export default definePack({
  name: "DEX",
  endian: "little",
  pointerSize: 4,
  types: [DexHeader],
  nodes: {
    "entry": structNode(DexHeader, { label: "DexHeader（入口）" }),
  },
});

