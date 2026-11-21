/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/jpeg.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Pixel = struct("Pixel", [
  u8("r", {  }),
  u8("g", {  }),
  u8("b", {  }),
]);

const SOF0Component = struct("SOF0Component", [
  u8("componentId", { values: { "1": "Y", "2": "CB", "3": "CR", "4": "I", "5": "Q", "66": "B", "71": "G", "82": "R" } }),
  u8("samplingFactors", {  }),
  u8("quantizationTableId", {  }),
]);

const SOF0 = struct("SOF0", [
  u8("bitsPerSample", {  }),
  u16("imageHeight", {  }),
  u16("imageWidth", {  }),
  u8("numComponents", {  }),
]);

const SOSComponent = struct("SOSComponent", [
  u8("componentId", { values: { "1": "Y", "2": "CB", "3": "CR", "4": "I", "5": "Q", "66": "B", "71": "G", "82": "R" } }),
  u8("huffmanTable", {  }),
]);

const SOS = struct("SOS", [
  u8("numComponents", {  }),
]);

export default definePack({
  name: "JPEG Image",
  endian: "big",
  pointerSize: 8,
  types: [Pixel, SOF0Component, SOF0, SOSComponent, SOS],
  nodes: {
    "entry": structNode(Pixel, { label: "Pixel（入口）" }),
    "SOF0Component": structNode(SOF0Component, { label: "SOF0Component" }),
    "SOF0": structNode(SOF0, { label: "SOF0" }),
    "SOSComponent": structNode(SOSComponent, { label: "SOSComponent" }),
    "SOS": structNode(SOS, { label: "SOS" }),
  },
});

