/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/qoi
// 原始 pack：qoi · QOI image v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 1 项（见文件末尾）
const Qoi = struct("Qoi", [
  str("magic", { size: 4, label: "magic 'qoif'" }),
  u32("width", { endian: "big", label: "image width in pixels (big-endian)" }),
  u32("height", { endian: "big", label: "image height in pixels" }),
  u8("channels", { endian: "big", label: "3 = RGB, 4 = RGBA" }),
  u8("colorspace", { endian: "big", label: "0 = sRGB with linear alpha, 1 = all linear" }),
]);

export default definePack({
  name: "QOI",
  endian: "big",
  pointerSize: 4,
  types: [Qoi],
  nodes: {
    "entry": structNode(Qoi, { label: "Qoi（入口）" }),
  },
});


/*
未移植项：
- Qoi.pixels: 变长字节块未移植
*/
