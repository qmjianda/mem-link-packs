/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/ico
// 原始 pack：ico · Windows icon / cursor v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 1 项（见文件末尾）
const IconDirEntry = struct("IconDirEntry", [
  u8("width", { endian: "little", label: "image width in px (0 means 256)" }),
  u8("height", { endian: "little", label: "image height in px (0 means 256)" }),
  u8("colorCount", { endian: "little", label: "colors in the palette (0 if 256 or more)" }),
  u8("reserved", { endian: "little", label: "reserved (0)" }),
  u16("planes", { endian: "little", label: "color planes (or the cursor hotspot X)" }),
  u16("bitCount", { endian: "little", label: "bits per pixel (or the cursor hotspot Y)" }),
  u32("bytesInRes", { endian: "little", label: "size of the image data in bytes" }),
  u32("imageOffset", { endian: "little", label: "offset of the image data from the file start" }),
]);

const Ico = struct("Ico", [
  u16("reserved", { endian: "little", label: "reserved, always 0" }),
  u16("type", { values: { "1": "Icon", "2": "Cursor" }, label: "resource type: 1 = icon, 2 = cursor" }),
  u16("count", { endian: "little", label: "number of images in the file" }),
]);

export default definePack({
  name: "ICO",
  endian: "little",
  pointerSize: 4,
  types: [IconDirEntry, Ico],
  nodes: {
    "entry": structNode(Ico, { label: "Ico（入口）" }),
    "IconDirEntry": structNode(IconDirEntry, { label: "IconDirEntry" }),
  },
});


/*
未移植项：
- Ico.entries: 动态数组长度（field）未移植
*/
