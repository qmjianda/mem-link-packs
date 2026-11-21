/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/vgm.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 2 项（见文件末尾）
const VGMVersion = struct("VGMVersion", [
  bits("bugfix", 4, { at: 0, bit: 0, unit: 4, label: "bugfix" }),
  bits("minor", 4, { at: 0, bit: 4, unit: 4, label: "minor" }),
  bits("major", 24, { at: 0, bit: 8, unit: 4, label: "major" }),
]);

const SN76489Flags = struct("SN76489Flags", [
  bits("frequency", 1, { at: 0, bit: 0, unit: 1, label: "frequency" }),
  bits("negateOutput", 1, { at: 0, bit: 1, unit: 1, label: "negateOutput" }),
  bits("GameGearStereo", 1, { at: 0, bit: 2, unit: 1, label: "GameGearStereo" }),
  bits("clockDiv", 1, { at: 0, bit: 3, unit: 1, label: "clockDiv" }),
  bits("XNORNoiseMode", 1, { at: 0, bit: 4, unit: 1, label: "XNORNoiseMode" }),
]);

const AY8910Flags = struct("AY8910Flags", [
  bits("legacyOutput", 1, { at: 0, bit: 0, unit: 1, label: "legacyOutput" }),
  bits("singleOutput", 1, { at: 0, bit: 1, unit: 1, label: "singleOutput" }),
  bits("discreteOutput", 1, { at: 0, bit: 2, unit: 1, label: "discreteOutput" }),
  bits("RAWOutput", 1, { at: 0, bit: 3, unit: 1, label: "RAWOutput" }),
  bits("YMclockDivLow", 1, { at: 0, bit: 4, unit: 1, label: "YMclockDivLow" }),
]);

const OKIM6258Flags = struct("OKIM6258Flags", [
  bits("clockDiv", 2, { at: 0, bit: 0, unit: 1, label: "clockDiv" }),
  bits("ADPCMsel", 1, { at: 0, bit: 2, unit: 1, label: "ADPCMsel" }),
  bits("outputBitDepth", 1, { at: 0, bit: 3, unit: 1, label: "outputBitDepth" }),
]);

const K054539Flags = struct("K054539Flags", [
  bits("reverseStereo", 1, { at: 0, bit: 0, unit: 1, label: "reverseStereo" }),
  bits("disableReverb", 1, { at: 0, bit: 1, unit: 1, label: "disableReverb" }),
  bits("KeyOnUpdate", 1, { at: 0, bit: 2, unit: 1, label: "KeyOnUpdate" }),
]);

const chpClkEntry = struct("chpClkEntry", [
  u8("chpID", {  }),
  u32("chpClk", {  }),
]);

const chpClkHeader = struct("chpClkHeader", [
  u8("entryCount", {  }),
]);

const chpVolume = struct("chpVolume", [
  bits("volume", 15, { at: 0, bit: 0, unit: 2, label: "volume" }),
  bits("absoluteRelative", 1, { at: 0, bit: 15, unit: 2, label: "absoluteRelative" }),
]);

const chpVolEntry = struct("chpVolEntry", [
  u8("chpID", {  }),
  u8("flags", {  }),
  record("chpVol", chpVolume),
]);

const chpVolHeader = struct("chpVolHeader", [
  u8("entryCount", {  }),
]);

const ExtraHeader = struct("ExtraHeader", [
  u32("headerSize", {  }),
]);

export default definePack({
  name: "VGM (Video Game Music) sound log",
  endian: "little",
  pointerSize: 8,
  types: [VGMVersion, SN76489Flags, AY8910Flags, OKIM6258Flags, K054539Flags, chpClkEntry, chpClkHeader, chpVolume, chpVolEntry, chpVolHeader, ExtraHeader],
  nodes: {
    "entry": structNode(VGMVersion, { label: "VGMVersion（入口）" }),
    "SN76489Flags": structNode(SN76489Flags, { label: "SN76489Flags" }),
    "AY8910Flags": structNode(AY8910Flags, { label: "AY8910Flags" }),
    "OKIM6258Flags": structNode(OKIM6258Flags, { label: "OKIM6258Flags" }),
    "K054539Flags": structNode(K054539Flags, { label: "K054539Flags" }),
    "chpClkEntry": structNode(chpClkEntry, { label: "chpClkEntry" }),
    "chpClkHeader": structNode(chpClkHeader, { label: "chpClkHeader" }),
    "chpVolume": structNode(chpVolume, { label: "chpVolume" }),
    "chpVolEntry": structNode(chpVolEntry, { label: "chpVolEntry" }),
    "chpVolHeader": structNode(chpVolHeader, { label: "chpVolHeader" }),
    "ExtraHeader": structNode(ExtraHeader, { label: "ExtraHeader" }),
  },
});


/*
未移植项：
- Header: 基类 baseHeader 不可移植
- VGM.header: 类型 Header 不可移植
*/
