/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/squashfs
// 原始 pack：squashfs · SquashFS superblock v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：complete
const SquashfsFlags = struct("SquashfsFlags", [
  bits("uncompressedInodes", 1, { at: 0, bit: 0, unit: 2, label: "uncompressedInodes" }),
  bits("uncompressedData", 1, { at: 0, bit: 1, unit: 2, label: "uncompressedData" }),
  bits("check", 1, { at: 0, bit: 2, unit: 2, label: "check" }),
  bits("uncompressedFragments", 1, { at: 0, bit: 3, unit: 2, label: "uncompressedFragments" }),
  bits("noFragments", 1, { at: 0, bit: 4, unit: 2, label: "noFragments" }),
  bits("alwaysFragments", 1, { at: 0, bit: 5, unit: 2, label: "alwaysFragments" }),
  bits("duplicates", 1, { at: 0, bit: 6, unit: 2, label: "duplicates" }),
  bits("exportable", 1, { at: 0, bit: 7, unit: 2, label: "exportable" }),
  bits("uncompressedXattrs", 1, { at: 0, bit: 8, unit: 2, label: "uncompressedXattrs" }),
  bits("noXattrs", 1, { at: 0, bit: 9, unit: 2, label: "noXattrs" }),
  bits("compressorOptions", 1, { at: 0, bit: 10, unit: 2, label: "compressorOptions" }),
  bits("uncompressedIds", 1, { at: 0, bit: 11, unit: 2, label: "uncompressedIds" }),
]);

const SquashFs = struct("SquashFs", [
  u32("magic", { endian: "little", label: "hsqs (little-endian image)" }),
  u32("inodeCount", { endian: "little", label: "number of inodes in the filesystem" }),
  u32("modificationTime", { endian: "little", label: "creation or last append time (unix)" }),
  u32("blockSize", { endian: "little", label: "data block size in bytes" }),
  u32("fragmentEntryCount", { endian: "little", label: "number of fragment entries" }),
  u16("compressionId", { values: { "1": "Gzip", "2": "Lzma", "3": "Lzo", "4": "Xz", "5": "Lz4", "6": "Zstd" }, label: "compressor used for data and metadata" }),
  u16("blockLog", { endian: "little", label: "log2 of blockSize" }),
  record("flags", SquashfsFlags, { label: "what is compressed and what is present" }),
  u16("idCount", { endian: "little", label: "number of entries in the uid/gid table" }),
  u16("versionMajor", { endian: "little", label: "4 for modern images" }),
  u16("versionMinor", { endian: "little" }),
  u64("rootInode", { endian: "little", label: "reference to the root directory inode" }),
  u64("bytesUsed", { endian: "little", label: "bytes of the archive actually used" }),
  u64("idTableStart", { endian: "little", label: "offset of the uid/gid lookup table" }),
  u64("xattrIdTableStart", { endian: "little", label: "offset of the xattr id table (-1 if none)" }),
  u64("inodeTableStart", { endian: "little", label: "offset of the inode table" }),
  u64("directoryTableStart", { endian: "little", label: "offset of the directory table" }),
  u64("fragmentTableStart", { endian: "little", label: "offset of the fragment table" }),
  u64("exportTableStart", { endian: "little", label: "offset of the 导出 (NFS) table" }),
]);

export default definePack({
  name: "SQUASHFS",
  endian: "little",
  pointerSize: 4,
  types: [SquashfsFlags, SquashFs],
  nodes: {
    "entry": structNode(SquashFs, { label: "SquashFs（入口）" }),
    "flags_SquashfsFlags": structNode(SquashfsFlags, { label: "位域 SquashfsFlags" }),
  },
});

