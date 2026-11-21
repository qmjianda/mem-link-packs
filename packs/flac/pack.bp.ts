/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/flac
// 原始 pack：flac · FLAC audio v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 2 个动态辅助节点；未移植 1 项（见文件末尾）
function __nybblePath(value, keys) {
  let cur = value;
  for (const k of keys) {
    if (cur == null) return undefined;
    cur = cur[k];
  }
  return cur;
}

const FlacBlockHeader = struct("FlacBlockHeader", [
  bits("blockType", 7, { at: 0, bit: 0, unit: 1, label: "blockType" }),
  bits("lastBlock", 1, { at: 0, bit: 7, unit: 1, label: "lastBlock" }),
]);

const FlacBlock = struct("FlacBlock", [
  record("header", FlacBlockHeader, { label: "bit7 = last block, bits0-6 = type (0 = STREAMINFO)" }),
  u8("lenHi", { endian: "big", label: "length byte (high)" }),
  u8("lenMid", { endian: "big", label: "length byte (mid)" }),
  u8("lenLo", { endian: "big", label: "length byte (low)" }),
]);

const Flac = struct("Flac", [
  str("magic", { size: 4, label: "magic 'fLaC'" }),
]);

export default definePack({
  name: "FLAC",
  endian: "big",
  pointerSize: 4,
  types: [FlacBlockHeader, FlacBlock, Flac],
  nodes: {
    "entry": structNode(Flac, { label: "Flac（入口）" }),
    "FlacBlock": structNode(FlacBlock, { label: "FlacBlock" }),
    "flags_FlacBlockHeader": structNode(FlacBlockHeader, { label: "位域 FlacBlockHeader" }),
    "calc_FlacBlock_length": calcNode({
      label: "FlacBlock.length（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "lenHi": "number", "lenMid": "number", "lenLo": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (((Number(inputs["lenHi"] ?? 0) * 65536) + (Number(inputs["lenMid"] ?? 0) * 256)) + Number(inputs["lenLo"] ?? 0)) }),
    }),
    "list_Flac_blocks": listNode(FlacBlock, {
      label: "Flac.blocks（重复元素）",
      description: "Nybble repeat 字段；address 指向第一个元素，next 按元素大小前进",
      next: (e) => { if (Boolean(__nybblePath(e.value["header"], ["lastBlock"]))) return null; return e.addr + FlacBlock.size; },
      max: 4096,
    }),
  },
});


/*
未移植项：
- FlacBlock.data: 变长字节块未移植
*/
