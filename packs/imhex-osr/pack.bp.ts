/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/osr.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const ModsUsed = struct("ModsUsed", [
  bits("NoFail", 1, { at: 0, bit: 0, unit: 4, label: "NoFail" }),
  bits("Easy", 1, { at: 0, bit: 1, unit: 4, label: "Easy" }),
  bits("TouchDevice", 1, { at: 0, bit: 2, unit: 4, label: "TouchDevice" }),
  bits("Hidden", 1, { at: 0, bit: 3, unit: 4, label: "Hidden" }),
  bits("HardRock", 1, { at: 0, bit: 4, unit: 4, label: "HardRock" }),
  bits("SuddenDeath", 1, { at: 0, bit: 5, unit: 4, label: "SuddenDeath" }),
  bits("DoubleTime", 1, { at: 0, bit: 6, unit: 4, label: "DoubleTime" }),
  bits("Relax", 1, { at: 0, bit: 7, unit: 4, label: "Relax" }),
  bits("HalfTime", 1, { at: 0, bit: 8, unit: 4, label: "HalfTime" }),
  bits("Nightcore", 1, { at: 0, bit: 9, unit: 4, label: "Nightcore" }),
  bits("Flashlight", 1, { at: 0, bit: 10, unit: 4, label: "Flashlight" }),
  bits("Autoplay", 1, { at: 0, bit: 11, unit: 4, label: "Autoplay" }),
  bits("SpunOut", 1, { at: 0, bit: 12, unit: 4, label: "SpunOut" }),
  bits("Relax2", 1, { at: 0, bit: 13, unit: 4, label: "Relax2" }),
  bits("Perfect", 1, { at: 0, bit: 14, unit: 4, label: "Perfect" }),
  bits("Key4", 1, { at: 0, bit: 15, unit: 4, label: "Key4" }),
  bits("Key5", 1, { at: 0, bit: 16, unit: 4, label: "Key5" }),
  bits("Key6", 1, { at: 0, bit: 17, unit: 4, label: "Key6" }),
  bits("Key7", 1, { at: 0, bit: 18, unit: 4, label: "Key7" }),
  bits("Key8", 1, { at: 0, bit: 19, unit: 4, label: "Key8" }),
  bits("FadeIn", 1, { at: 0, bit: 20, unit: 4, label: "FadeIn" }),
  bits("Random", 1, { at: 0, bit: 21, unit: 4, label: "Random" }),
  bits("Cinema", 1, { at: 0, bit: 22, unit: 4, label: "Cinema" }),
  bits("TargetPractice", 1, { at: 0, bit: 23, unit: 4, label: "TargetPractice" }),
  bits("Key9", 1, { at: 0, bit: 24, unit: 4, label: "Key9" }),
  bits("Coop", 1, { at: 0, bit: 25, unit: 4, label: "Coop" }),
  bits("Key1", 1, { at: 0, bit: 26, unit: 4, label: "Key1" }),
  bits("Key3", 1, { at: 0, bit: 27, unit: 4, label: "Key3" }),
  bits("Key2", 1, { at: 0, bit: 28, unit: 4, label: "Key2" }),
  bits("ScoreV2", 1, { at: 0, bit: 29, unit: 4, label: "ScoreV2" }),
  bits("Mirror", 1, { at: 0, bit: 30, unit: 4, label: "Mirror" }),
]);

const OSUString = struct("OSUString", [
  u8("indicator", { values: { "0": "si_absent", "11": "si_present" } }),
]);

const Hits = struct("Hits", [
  u16("great", {  }),
  u16("ok", {  }),
  u16("meh", {  }),
  u16("gekis", {  }),
  u16("katus", {  }),
  u16("misses", {  }),
]);

const OSRPattern = struct("OSRPattern", [
  u8("gameMode", { values: { "0": "gm_osu", "1": "gm_taiko", "2": "gm_catch", "3": "gm_mania" } }),
  u32("gameVersion", {  }),
  record("beatmapHashMd5", OSUString),
  record("username", OSUString),
  record("replayHashMd5", OSUString),
  record("hits", Hits),
  u32("totalScore", {  }),
  u16("greatestCombo", {  }),
  bool("fullCombo", {  }),
  record("modsUsed", ModsUsed),
  record("lifeBarGraph", OSUString),
  u64("timeStampInTicks", {  }),
  u32("replayDataLength", {  }),
]);

export default definePack({
  name: "osu! replay file",
  endian: "little",
  pointerSize: 8,
  types: [ModsUsed, OSUString, Hits, OSRPattern],
  nodes: {
    "entry": structNode(OSRPattern, { label: "OSRPattern（入口）" }),
    "ModsUsed": structNode(ModsUsed, { label: "ModsUsed" }),
    "OSUString": structNode(OSUString, { label: "OSUString" }),
    "Hits": structNode(Hits, { label: "Hits" }),
  },
});

