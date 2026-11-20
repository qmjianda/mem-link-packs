/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/7z
// 原始 pack：7z · 7-Zip archive v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 3 项（见文件末尾）
const SevenZip = struct("SevenZip", [
  bytes("signature", { size: 6, label: "37 7A BC AF 27 1C" }),
  u8("versionMajor", { endian: "little", label: "format major version (0)" }),
  u8("versionMinor", { endian: "little", label: "format minor version (2..4)" }),
  u32("startHeaderCrc", { endian: "little", label: "CRC-32 of the next 20 bytes" }),
  u64("nextHeaderOffset", { endian: "little", label: "end header position, relative to the end of this 32-byte header" }),
  u64("nextHeaderSize", { endian: "little", label: "end header size in bytes" }),
  u32("nextHeaderCrc", { endian: "little", label: "CRC-32 of the end header" }),
]);

export default definePack({
  name: "7Z",
  endian: "little",
  pointerSize: 4,
  types: [SevenZip],
  nodes: {
    "entry": structNode(SevenZip, { label: "SevenZip（入口）" }),
  },
});


/*
未移植项：
- SevenZip.nextHeaderPos: computed 字段未移植
- SevenZip.nextHeaderKind: 指针字段（at …）未移植
- SevenZip.nextHeader: 指针字段（at …）未移植
*/
