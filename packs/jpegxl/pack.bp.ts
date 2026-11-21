/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/jpegxl
// 原始 pack：jpegxl · JPEG XL image v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 6 个动态辅助节点；未移植 3 项（见文件末尾）
const JxlFileType = struct("JxlFileType", [
  str("brand", { size: 4, label: "jxl " }),
  u32("minorVersion", { endian: "big", label: "minor version of the brand" }),
]);

const JxlLevel = struct("JxlLevel", [
  u8("level", { endian: "big", label: "codestream level: 5 baseline, 10 for very large or high bit depth images" }),
]);

const JxlPartialCodestream = struct("JxlPartialCodestream", [
  u32("index", { endian: "big", label: "sequence number of this partial codestream; the high bit marks the last one" }),
]);

const JxlBrotliBox = struct("JxlBrotliBox", [
  str("innerType", { size: 4, label: "the box type this expands to once Brotli-decompressed" }),
]);

const JxlBox = struct("JxlBox", [
  u32("size", { endian: "big", label: "box size including this header; 1 = 64-bit size follows, 0 = to end of file" }),
  str("type", { size: 4, label: "four-character box type" }),
]);

export default definePack({
  name: "JXL",
  endian: "big",
  pointerSize: 4,
  types: [JxlFileType, JxlLevel, JxlPartialCodestream, JxlBrotliBox, JxlBox],
  nodes: {
    "entry": structNode(JxlFileType, { label: "JxlFileType（入口）" }),
    "JxlLevel": structNode(JxlLevel, { label: "JxlLevel" }),
    "JxlPartialCodestream": structNode(JxlPartialCodestream, { label: "JxlPartialCodestream" }),
    "JxlBrotliBox": structNode(JxlBrotliBox, { label: "JxlBrotliBox" }),
    "JxlBox": structNode(JxlBox, { label: "JxlBox" }),
    "calc_JxlBox_bodyLen": calcNode({
      label: "JxlBox.bodyLen（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "size": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (Number(inputs["size"] ?? 0) - 8) }),
    }),
    "ptr_JxlBox_decoded": calcNode({
      label: "JxlBox.decoded（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs.base ?? 0) + 8 }),
    }),
    "match_JxlBox_decoded_ftyp": structNode(JxlFileType, { label: "JxlBox.decoded · match ftyp" }),
    "match_JxlBox_decoded_jxll": structNode(JxlLevel, { label: "JxlBox.decoded · match jxll" }),
    "match_JxlBox_decoded_jxlp": structNode(JxlPartialCodestream, { label: "JxlBox.decoded · match jxlp" }),
    "match_JxlBox_decoded_brob": structNode(JxlBrotliBox, { label: "JxlBox.decoded · match brob" }),
  },
});


/*
未移植项：
- JxlBox.large: 条件字段未移植，后续布局在此停止
- Jxl: 没有可移植的固定前缀字段
- 入口 struct Jxl 没有可移植字段，改用 JxlFileType
*/
