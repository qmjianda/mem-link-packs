/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/n64
// 原始 pack：n64 · Nintendo 64 ROM v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：complete
const N64Rom = struct("N64Rom", [
  bytes("endianness", { size: 4, label: "80 37 12 40 in a native big-endian dump" }),
  u32("clockRate", { endian: "big", label: "clock rate override for the PI bus; 0 means use the default" }),
  u32("bootAddress", { endian: "big", label: "virtual address IPL3 loads the game to, usually 0x80000400" }),
  u32("libultraVersion", { endian: "big", label: "release and revision of the libultra SDK the game was built with" }),
  u32("crc1", { endian: "big", label: "first CIC check code over the first megabyte" }),
  u32("crc2", { endian: "big", label: "second CIC check code" }),
  bytes("unused1", { size: 8, label: "unused, zero" }),
  str("imageName", { size: 20, label: "internal game title, uppercase ASCII, space padded" }),
  bytes("unused2", { size: 7, label: "unused, zero" }),
  char("mediaFormat", { endian: "big", label: "N for a cartridge, D for 64DD disk, C for a cartridge part of a disk pair" }),
  str("cartridgeId", { size: 2, label: "two-character game id, as a ROM database lists it" }),
  char("countryCode", { endian: "big", label: "region the cartridge was sold in: E, J or P" }),
  u8("version", { endian: "big", label: "revision of the game, counting from 0" }),
]);

export default definePack({
  name: "N64",
  endian: "big",
  pointerSize: 4,
  types: [N64Rom],
  nodes: {
    "entry": structNode(N64Rom, { label: "N64Rom（入口）" }),
  },
});

