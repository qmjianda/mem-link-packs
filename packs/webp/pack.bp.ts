/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/webp
// 原始 pack：webp · WebP image v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：complete
const WebP = struct("WebP", [
  str("riff", { size: 4, label: "RIFF container tag" }),
  u32("fileSize", { endian: "little", label: "file size minus 8 bytes" }),
  str("webp", { size: 4, label: "WEBP form type" }),
  str("chunkType", { size: 4, label: "first chunk: VP8 (lossy), VP8L (lossless), or VP8X" }),
  u32("chunkSize", { endian: "little", label: "size of the first chunk in bytes" }),
]);

export default definePack({
  name: "WebP",
  endian: "little",
  pointerSize: 4,
  types: [WebP],
  nodes: {
    "entry": structNode(WebP, { label: "WebP（入口）" }),
  },
});

