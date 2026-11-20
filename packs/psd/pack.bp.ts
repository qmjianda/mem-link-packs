/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/psd
// 原始 pack：psd · Photoshop document v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 1 项（见文件末尾）
const Psd = struct("Psd", [
  str("signature", { size: 4, label: "8BPS" }),
  u16("version", { endian: "big", label: "1 = PSD, 2 = PSB with 64-bit section lengths" }),
  bytes("reserved", { size: 6, label: "zero" }),
  u16("channels", { endian: "big", label: "colour channels including alpha, 1 to 56" }),
  u32("height", { endian: "big", label: "image height in pixels" }),
  u32("width", { endian: "big", label: "image width in pixels" }),
  u16("depth", { endian: "big", label: "bits per channel: 1, 8, 16 or 32" }),
  u16("colorMode", { values: { "0": "Bitmap", "1": "Grayscale", "2": "Indexed", "3": "Rgb", "4": "Cmyk", "7": "Multichannel", "8": "Duotone", "9": "Lab" }, label: "how the channels are interpreted" }),
  u32("colorDataLength", { endian: "big", label: "bytes of colour mode data; 0 unless indexed or duotone" }),
]);

export default definePack({
  name: "PSD",
  endian: "big",
  pointerSize: 4,
  types: [Psd],
  nodes: {
    "entry": structNode(Psd, { label: "Psd（入口）" }),
  },
});


/*
未移植项：
- Psd.colorData: 变长字节块未移植
*/
