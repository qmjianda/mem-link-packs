/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/msf
// 原始 pack：msf · PDB debug database v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：complete
const MsfSuperBlock = struct("MsfSuperBlock", [
  bytes("magic", { size: 32, label: "Microsoft C/C++ MSF 7.00, CR LF, 1A, DS, then three zero bytes" }),
  u32("blockSize", { endian: "little", label: "bytes per block: 512, 1024, 2048 or 4096" }),
  u32("freeBlockMapBlock", { endian: "little", label: "which of blocks 1 and 2 holds the live allocation bitmap" }),
  u32("numBlocks", { endian: "little", label: "blocks in the file; blockSize times this is the file length" }),
  u32("numDirectoryBytes", { endian: "little", label: "length of the stream directory in bytes" }),
  u32("unknown", { endian: "little", label: "unused, zero" }),
  u32("blockMapAddr", { endian: "little", label: "block holding the list of blocks that make up the stream directory" }),
]);

export default definePack({
  name: "PDB",
  endian: "little",
  pointerSize: 4,
  types: [MsfSuperBlock],
  nodes: {
    "entry": structNode(MsfSuperBlock, { label: "MsfSuperBlock（入口）" }),
  },
});

