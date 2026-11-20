/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/aiff
// 原始 pack：aiff · AIFF audio v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：complete
const Aiff = struct("Aiff", [
  str("form", { size: 4, label: "FORM container tag" }),
  u32("fileSize", { endian: "big", label: "size of everything after this field" }),
  str("formType", { size: 4, label: "AIFF (or AIFC for compressed)" }),
  str("firstCkID", { size: 4, label: "first chunk id (often COMM or FVER)" }),
  u32("firstCkSize", { endian: "big", label: "size of the first chunk" }),
]);

export default definePack({
  name: "AIFF",
  endian: "big",
  pointerSize: 4,
  types: [Aiff],
  nodes: {
    "entry": structNode(Aiff, { label: "Aiff（入口）" }),
  },
});

