/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/usdc
// 原始 pack：usdc · USD crate file v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：complete
const Usdc = struct("Usdc", [
  str("ident", { size: 8, label: "PXR-USDC" }),
  bytes("version", { size: 8, label: "major, minor and patch in the first three bytes; the rest reserved" }),
  i64("tocOffset", { endian: "little", label: "offset of the table of contents, near the end of the file" }),
  array("reserved", "i64", 8, { label: "reserved, zero" }),
]);

export default definePack({
  name: "USDC",
  endian: "little",
  pointerSize: 4,
  types: [Usdc],
  nodes: {
    "entry": structNode(Usdc, { label: "Usdc（入口）" }),
  },
});

