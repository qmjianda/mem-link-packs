/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/bzip2
// 原始 pack：bzip2 · bzip2 compressed v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：complete
const Bzip2 = struct("Bzip2", [
  str("magic", { size: 2, label: "always BZ" }),
  char("version", { endian: "big", label: "always h (Huffman)" }),
  char("level", { endian: "big", label: "block size: 1..9, in units of 100 kB" }),
  bytes("blockMagic", { size: 6, label: "31 41 59 26 53 59 (a compressed block follows)" }),
  u32("blockCrc", { endian: "big", label: "CRC-32 of this block's uncompressed data" }),
  u8("randomised", { endian: "big", label: "bit 7: obsolete randomisation flag; the rest is the bit-packed block" }),
]);

export default definePack({
  name: "BZIP2",
  endian: "big",
  pointerSize: 4,
  types: [Bzip2],
  nodes: {
    "entry": structNode(Bzip2, { label: "Bzip2（入口）" }),
  },
});

