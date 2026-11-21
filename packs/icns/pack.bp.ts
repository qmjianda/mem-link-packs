/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/icns
// 原始 pack：icns · Apple icon image v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 2 个动态辅助节点；未移植 1 项（见文件末尾）
const IcnsElement = struct("IcnsElement", [
  str("type", { size: 4, label: "element type: icon size and encoding, or 'TOC '" }),
  u32("size", { endian: "big", label: "element size in bytes, this 8-byte header included" }),
]);

const Icns = struct("Icns", [
  str("magic", { size: 4, label: "magic 'icns'" }),
  u32("fileSize", { endian: "big", label: "total file size in bytes, this header included" }),
]);

export default definePack({
  name: "ICNS",
  endian: "big",
  pointerSize: 4,
  types: [IcnsElement, Icns],
  nodes: {
    "entry": structNode(Icns, { label: "Icns（入口）" }),
    "IcnsElement": structNode(IcnsElement, { label: "IcnsElement" }),
    "calc_IcnsElement_dataLen": calcNode({
      label: "IcnsElement.dataLen（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "size": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (Number(inputs["size"] ?? 0) - 8) }),
    }),
    "list_Icns_elements": listNode(IcnsElement, {
      label: "Icns.elements（重复元素）",
      description: "Nybble repeat 字段；address 指向第一个元素，next 按元素大小前进",
      next: (e) => {  return e.addr + IcnsElement.size; },
      max: 4096,
    }),
  },
});


/*
未移植项：
- IcnsElement.data: 变长字节块未移植
*/
