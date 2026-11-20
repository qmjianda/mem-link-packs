/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/icns
// 原始 pack：icns · Apple icon image v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 3 项（见文件末尾）
const IcnsElement = struct("IcnsElement", [
  str("type", { size: 4, label: "element type: icon size and encoding, or 'TOC '" }),
  u32("size", { endian: "little", label: "element size in bytes, this 8-byte header included" }),
]);

const Icns = struct("Icns", [
  str("magic", { size: 4, label: "magic 'icns'" }),
  u32("fileSize", { endian: "little", label: "total file size in bytes, this header included" }),
]);

export default definePack({
  name: "ICNS",
  endian: "big",
  pointerSize: 4,
  types: [IcnsElement, Icns],
  nodes: {
    "entry": structNode(Icns, { label: "Icns（入口）" }),
    "IcnsElement": structNode(IcnsElement, { label: "IcnsElement" }),
  },
});


/*
未移植项：
- IcnsElement.dataLen: computed 字段未移植
- IcnsElement.data: 变长字节块未移植
- Icns.elements: repeat 字段未移植，后续布局在此停止
*/
