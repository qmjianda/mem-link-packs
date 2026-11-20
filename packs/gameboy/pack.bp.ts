/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/gameboy
// 原始 pack：gameboy · Game Boy ROM v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：complete
const GameBoy = struct("GameBoy", [
  bytes("vectors", { size: 256, label: "0x00-0xFF: the RST and interrupt vectors" }),
  bytes("entryPoint", { size: 4, label: "usually nop; jp 0x0150, run after the boot ROM" }),
  bytes("logo", { size: 48, label: "Nintendo logo bitmap, compared byte for byte at boot" }),
  str("title", { size: 11, label: "game title, upper case ASCII, NUL padded" }),
  str("manufacturerCode", { size: 4, label: "four-character code, on later cartridges only" }),
  u8("cgbFlag", { endian: "little", label: "0x80 = Color enhanced, 0xC0 = Color only" }),
  str("newLicensee", { size: 2, label: "two-character publisher code, used when oldLicensee is 0x33" }),
  u8("sgbFlag", { endian: "little", label: "0x03 = supports the Super Game Boy commands" }),
  u8("cartridgeType", { values: { "0": "RomOnly", "1": "Mbc1", "2": "Mbc1Ram", "3": "Mbc1RamBattery", "5": "Mbc2", "6": "Mbc2Battery", "8": "RomRam", "9": "RomRamBattery", "11": "Mmm01", "12": "Mmm01Ram", "13": "Mmm01RamBattery", "15": "Mbc3TimerBattery", "16": "Mbc3TimerRamBattery", "17": "Mbc3", "18": "Mbc3Ram", "19": "Mbc3RamBattery", "25": "Mbc5", "26": "Mbc5Ram", "27": "Mbc5RamBattery", "28": "Mbc5Rumble", "29": "Mbc5RumbleRam", "30": "Mbc5RumbleRamBattery", "32": "Mbc6", "34": "Mbc7SensorRumble", "252": "PocketCamera", "253": "BandaiTama5", "254": "Huc3", "255": "Huc1RamBattery" }, label: "the mapper and extras on the cartridge board" }),
  u8("romSize", { values: { "0": "Kib32", "1": "Kib64", "2": "Kib128", "3": "Kib256", "4": "Kib512", "5": "Mib1", "6": "Mib2", "7": "Mib4", "8": "Mib8" }, label: "cartridge ROM size" }),
  u8("ramSize", { values: { "0": "NoRam", "1": "Unused", "2": "Kib8", "3": "Kib32", "4": "Kib128", "5": "Kib64" }, label: "cartridge RAM size; 0 unless the type says RAM" }),
  u8("destination", { values: { "0": "Japan", "1": "Overseas" }, label: "sales region" }),
  u8("oldLicensee", { endian: "little", label: "publisher code; 0x33 means see newLicensee" }),
  u8("romVersion", { endian: "little", label: "revision of this title, usually 0" }),
  u8("headerChecksum", { endian: "little", label: "verified by the boot ROM over 0x134-0x14C" }),
  u16("globalChecksum", { endian: "little", label: "big-endian sum of every byte but these two, never verified" }),
]);

export default definePack({
  name: "GB",
  endian: "little",
  pointerSize: 4,
  types: [GameBoy],
  nodes: {
    "entry": structNode(GameBoy, { label: "GameBoy（入口）" }),
  },
});

