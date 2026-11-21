/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/webp.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 3 项（见文件末尾）
const RiffHeader = struct("RiffHeader", [
  str("ckID", { size: 4 }),
  u32("ckSize", {  }),
  str("format", { size: 4 }),
]);

const WebPChunk = struct("WebPChunk", [
  str("chunkId", { size: 4 }),
  u32("chunkSize", {  }),
]);

const VP8XFlags = struct("VP8XFlags", [
  bits("A", 1, { at: 0, bit: 1, unit: 1, label: "A" }),
  bits("X", 1, { at: 0, bit: 2, unit: 1, label: "X" }),
  bits("E", 1, { at: 0, bit: 3, unit: 1, label: "E" }),
  bits("L", 1, { at: 0, bit: 4, unit: 1, label: "L" }),
  bits("I", 1, { at: 0, bit: 5, unit: 1, label: "I" }),
]);

const WebPVP8XData = struct("WebPVP8XData", [
  record("flags", VP8XFlags),
  pad(3),
]);

const WebPANIMData = struct("WebPANIMData", [
  u32("backgroundColor", {  }),
  u16("loopCount", {  }),
]);

const ANMFFlags = struct("ANMFFlags", [
  bits("D", 1, { at: 0, bit: 0, unit: 1, label: "D" }),
  bits("B", 1, { at: 0, bit: 1, unit: 1, label: "B" }),
]);

const WebPVP8LHeader = struct("WebPVP8LHeader", [
  bits("widthMinusOne", 14, { at: 0, bit: 0, unit: 4, label: "widthMinusOne" }),
  bits("heightMinusOne", 14, { at: 0, bit: 14, unit: 4, label: "heightMinusOne" }),
  bits("alphaUsed", 1, { at: 0, bit: 28, unit: 4, label: "alphaUsed" }),
  bits("version", 3, { at: 0, bit: 29, unit: 4, label: "version" }),
]);

const ALPHFlags = struct("ALPHFlags", [
  bits("C", 2, { at: 0, bit: 0, unit: 1, label: "C" }),
  bits("F", 2, { at: 0, bit: 2, unit: 1, label: "F" }),
  bits("P", 2, { at: 0, bit: 4, unit: 1, label: "P" }),
]);

const WebPData = struct("WebPData", [
  record("chunkHeader", WebPChunk),
]);

export default definePack({
  name: "Google WebP",
  endian: "little",
  pointerSize: 8,
  types: [RiffHeader, WebPChunk, VP8XFlags, WebPVP8XData, WebPANIMData, ANMFFlags, WebPVP8LHeader, ALPHFlags, WebPData],
  nodes: {
    "entry": structNode(RiffHeader, { label: "RiffHeader（入口）" }),
    "WebPChunk": structNode(WebPChunk, { label: "WebPChunk" }),
    "VP8XFlags": structNode(VP8XFlags, { label: "VP8XFlags" }),
    "WebPVP8XData": structNode(WebPVP8XData, { label: "WebPVP8XData" }),
    "WebPANIMData": structNode(WebPANIMData, { label: "WebPANIMData" }),
    "ANMFFlags": structNode(ANMFFlags, { label: "ANMFFlags" }),
    "WebPVP8LHeader": structNode(WebPVP8LHeader, { label: "WebPVP8LHeader" }),
    "ALPHFlags": structNode(ALPHFlags, { label: "ALPHFlags" }),
    "WebPData": structNode(WebPData, { label: "WebPData" }),
  },
});


/*
未移植项：
- OneBase.value: 类型 u24 不可移植
- WebPVP8XData.canvasWidth: 类型 OneBase 不可移植
- WebPANMFData.frameX: 类型 u24 不可移植
*/
