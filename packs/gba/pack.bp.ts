/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/gba
// 原始 pack：gba · Game Boy Advance ROM v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：complete
const GbaRom = struct("GbaRom", [
  u32("entryPoint", { endian: "little", label: "an ARM branch instruction to the real entry point, not an address" }),
  bytes("nintendoLogo", { size: 156, label: "the compressed Nintendo logo; the BIOS refuses to boot if a byte differs" }),
  str("gameTitle", { size: 12, label: "game title, uppercase ASCII, NUL-padded" }),
  str("gameCode", { size: 4, label: "type, two title characters, then the region letter" }),
  str("makerCode", { size: 2, label: "publisher code; 01 is Nintendo" }),
  u8("fixed", { endian: "little", label: "must be 0x96" }),
  u8("mainUnitCode", { endian: "little", label: "hardware the cartridge is for; 0 is a retail GBA" }),
  u8("deviceType", { endian: "little", label: "0 normally, 0x80 for a debugging cartridge with more RAM" }),
  bytes("reserved", { size: 7, label: "reserved, zero" }),
  u8("softwareVersion", { endian: "little", label: "game version, counting from 0" }),
  u8("headerChecksum", { endian: "little", label: "8-bit checksum over the bytes from gameTitle to reserved2" }),
  bytes("reserved2", { size: 2, label: "reserved, zero" }),
]);

export default definePack({
  name: "GBA",
  endian: "little",
  pointerSize: 4,
  types: [GbaRom],
  nodes: {
    "entry": structNode(GbaRom, { label: "GbaRom（入口）" }),
  },
});

