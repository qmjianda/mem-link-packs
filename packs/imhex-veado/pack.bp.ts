/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/veado.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const varint = struct("varint", [
  u8("value", {  }),
]);

const String = struct("String", [
  record("length", varint),
]);

const Header = struct("Header", [
  str("magic", { size: 9 }),
]);

const Meta = struct("Meta", [
  record("software", String),
  record("credits", String),
  record("description", String),
]);

const Effect = struct("Effect", [
  record("effect_id", String),
  u8("flag", { values: { "1": "Active", "2": "UsePreset", "4": "UsePresetChunk" } }),
]);

const Effects = struct("Effects", [
  record("num_effects", varint),
]);

const Signal = struct("Signal", [
  record("source", String),
  record("name", String),
]);

const Msta = struct("Msta", [
  record("name", String),
  u32("state", { values: { "1": "Pixelated", "2": "Blink", "4": "Start" } }),
  u32("thumbnail_closed_mouth", {  }),
  u32("thumbnail_open_mouth", {  }),
  u32("thumbnail_blinking_closed_mouth", {  }),
  u32("thumbnail_blinking_open_mouth", {  }),
  u32("closed_mouth", {  }),
  u32("open_mouth", {  }),
  u32("blinking_closed_mouth", {  }),
  u32("blinking_open_mouth", {  }),
  f64("blink_duration", {  }),
  f64("min_blink_interval", {  }),
  f64("max_blink_interval", {  }),
  record("closed_mouth_effects", Effects),
  record("open_mouth_effects", Effects),
  record("on_open_mouth_effects", Effects),
  record("on_close_mouth_effects", Effects),
  record("num_signals", varint),
]);

const AsfdMetadata = struct("AsfdMetadata", [
  str("type", { size: 4 }),
  record("num_metadata", varint),
]);

const AsfdEntry = struct("AsfdEntry", [
  record("entry_name", String),
  u32("chunk_id", {  }),
  record("num_metadata", varint),
]);

const Asfd = struct("Asfd", [
  str("root_code", { size: 4 }),
]);

const AimgFrame = struct("AimgFrame", [
  u32("chunk_id", {  }),
  i32("offset_x", {  }),
  i32("offset_y", {  }),
  f64("duration", {  }),
]);

const Aimg = struct("Aimg", [
  u32("width", {  }),
  u32("height", {  }),
  record("num_frames", varint),
]);

const Abmp = struct("Abmp", [
  u32("width", {  }),
  u32("height", {  }),
  str("format", { size: 4 }),
  u32("num_as", {  }),
  u32("num_rs", {  }),
  u32("num_gs", {  }),
  u32("num_bs", {  }),
]);

const Chunk = struct("Chunk", [
  u32("id", {  }),
  str("type", { size: 4 }),
  u32("length", {  }),
]);

export default definePack({
  name: "Veadotube Mini Avatar File",
  endian: "little",
  pointerSize: 8,
  types: [varint, String, Header, Meta, Effect, Effects, Signal, Msta, AsfdMetadata, AsfdEntry, Asfd, AimgFrame, Aimg, Abmp, Chunk],
  nodes: {
    "entry": structNode(Header, { label: "Header（入口）" }),
    "varint": structNode(varint, { label: "varint" }),
    "String": structNode(String, { label: "String" }),
    "Meta": structNode(Meta, { label: "Meta" }),
    "Effect": structNode(Effect, { label: "Effect" }),
    "Effects": structNode(Effects, { label: "Effects" }),
    "Signal": structNode(Signal, { label: "Signal" }),
    "Msta": structNode(Msta, { label: "Msta" }),
    "AsfdMetadata": structNode(AsfdMetadata, { label: "AsfdMetadata" }),
    "AsfdEntry": structNode(AsfdEntry, { label: "AsfdEntry" }),
    "Asfd": structNode(Asfd, { label: "Asfd" }),
    "AimgFrame": structNode(AimgFrame, { label: "AimgFrame" }),
    "Aimg": structNode(Aimg, { label: "Aimg" }),
    "Abmp": structNode(Abmp, { label: "Abmp" }),
    "Chunk": structNode(Chunk, { label: "Chunk" }),
  },
});

