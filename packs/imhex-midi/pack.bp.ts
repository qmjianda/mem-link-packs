/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/midi.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const HeaderChunk = struct("HeaderChunk", [
  u32("flag", { values: { "1297377380": "MThd" } }),
  u32("length", {  }),
  u16("mode", {  }),
  u16("num_tracks", {  }),
  u16("ticks_per_quarter", {  }),
]);

const TrackChunk = struct("TrackChunk", [
  u32("flag", { values: { "1297379947": "MTrk" } }),
  u32("length", {  }),
]);

const MidiFile = struct("MidiFile", [
  record("header", HeaderChunk),
]);

export default definePack({
  name: "MIDI Musical Instrument Digital Interface",
  endian: "big",
  pointerSize: 8,
  types: [HeaderChunk, TrackChunk, MidiFile],
  nodes: {
    "entry": structNode(MidiFile, { label: "MidiFile（入口）" }),
    "HeaderChunk": structNode(HeaderChunk, { label: "HeaderChunk" }),
    "TrackChunk": structNode(TrackChunk, { label: "TrackChunk" }),
  },
});

