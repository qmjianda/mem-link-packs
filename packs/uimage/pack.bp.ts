/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/uimage
// 原始 pack：uimage · U-Boot uImage v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：complete
const UImage = struct("UImage", [
  u32("magic", { endian: "big", label: "0x27051956" }),
  u32("headerCrc", { endian: "big", label: "CRC32 of the header with this field zeroed" }),
  u32("time", { endian: "big", label: "creation timestamp (unix seconds)" }),
  u32("size", { endian: "big", label: "size of the payload that follows this header" }),
  u32("loadAddr", { endian: "big", label: "address the payload is loaded to" }),
  u32("entryPoint", { endian: "big", label: "address execution starts at" }),
  u32("dataCrc", { endian: "big", label: "CRC32 of the payload" }),
  u8("os", { values: { "0": "Invalid", "1": "OpenBsd", "2": "NetBsd", "3": "FreeBsd", "4": "Bsd44", "5": "Linux", "6": "Svr4", "7": "Esix", "8": "Solaris", "9": "Irix", "10": "Sco", "11": "Dell", "12": "Ncr", "13": "LynxOs", "14": "VxWorks", "15": "PsOs", "16": "Qnx", "17": "UBoot", "18": "Rtems" }, label: "operating system" }),
  u8("arch", { values: { "0": "Invalid", "1": "Alpha", "2": "Arm", "3": "I386", "4": "Ia64", "5": "Mips", "6": "Mips64", "7": "Ppc", "8": "S390", "9": "Sh", "10": "Sparc", "11": "Sparc64", "12": "M68k", "13": "Nios", "14": "MicroBlaze", "15": "Nios2", "16": "Blackfin", "17": "Avr32", "18": "St200", "19": "Sandbox", "20": "Nds32", "21": "OpenRisc", "22": "Arm64", "23": "Arc", "24": "X86_64", "25": "Xtensa", "26": "RiscV" }, label: "CPU architecture" }),
  u8("imageType", { values: { "0": "Invalid", "1": "Standalone", "2": "Kernel", "3": "Ramdisk", "4": "Multi", "5": "Firmware", "6": "Script", "7": "Filesystem", "8": "FlatDt", "9": "KwbImage", "10": "ImxImage" }, label: "what the payload is" }),
  u8("compression", { values: { "0": "None", "1": "Gzip", "2": "Bzip2", "3": "Lzma", "4": "Lzo", "5": "Lz4", "6": "Zstd" }, label: "how the payload is compressed" }),
  str("name", { size: 32, label: "image name (NUL-padded)" }),
]);

export default definePack({
  name: "UIMAGE",
  endian: "big",
  pointerSize: 4,
  types: [UImage],
  nodes: {
    "entry": structNode(UImage, { label: "UImage（入口）" }),
  },
});

