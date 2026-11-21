/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/midi
// 原始 pack：midi · MIDI file v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 1 个动态辅助节点；未移植 1 项（见文件末尾）
const MidiHeader = struct("MidiHeader", [
  str("type", { size: 4, label: "MThd" }),
  u32("length", { endian: "big", label: "bytes of header data; always 6" }),
  u16("format", { values: { "0": "SingleTrack", "1": "SimultaneousTracks", "2": "IndependentTracks" }, label: "how the tracks relate to each other" }),
  u16("ntrks", { endian: "big", label: "number of track chunks (always 1 for format 0)" }),
  i16("division", { endian: "big", label: "ticks per quarter note, or SMPTE when negative" }),
]);

const MidiTrack = struct("MidiTrack", [
  str("type", { size: 4, label: "MTrk" }),
  u32("length", { endian: "big", label: "bytes of event data in this track" }),
]);

const Midi = struct("Midi", [
  record("header", MidiHeader, { label: "the MThd chunk: format, track count, time division" }),
]);

export default definePack({
  name: "MIDI",
  endian: "big",
  pointerSize: 4,
  types: [MidiHeader, MidiTrack, Midi],
  nodes: {
    "entry": structNode(Midi, { label: "Midi（入口）" }),
    "MidiHeader": structNode(MidiHeader, { label: "MidiHeader" }),
    "MidiTrack": structNode(MidiTrack, { label: "MidiTrack" }),
    "list_Midi_tracks": listNode(MidiTrack, {
      label: "Midi.tracks（重复元素）",
      description: "Nybble repeat 字段；address 指向第一个元素，next 按元素大小前进",
      next: (e) => {  return e.addr + MidiTrack.size; },
      max: 4096,
    }),
  },
});


/*
未移植项：
- MidiTrack.events: 变长字节块未移植
*/
