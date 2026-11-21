/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/mp3
// 原始 pack：mp3 · MP3 (ID3v2 tag) v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 52 个动态辅助节点；未移植 6 项（见文件末尾）
const Id3Syncsafe = struct("Id3Syncsafe", [
  u8("b0", { endian: "big" }),
  u8("b1", { endian: "big" }),
  u8("b2", { endian: "big" }),
  u8("b3", { endian: "big" }),
]);

const Id3FrameFlags = struct("Id3FrameFlags", [
  bits("dataLengthIndicator", 1, { at: 0, bit: 0, unit: 2, label: "dataLengthIndicator" }),
  bits("unsynchronised", 1, { at: 0, bit: 1, unit: 2, label: "unsynchronised" }),
  bits("encrypted", 1, { at: 0, bit: 2, unit: 2, label: "encrypted" }),
  bits("compressed", 1, { at: 0, bit: 3, unit: 2, label: "compressed" }),
  bits("groupingIdentity", 1, { at: 0, bit: 6, unit: 2, label: "groupingIdentity" }),
  bits("readOnly", 1, { at: 0, bit: 12, unit: 2, label: "readOnly" }),
  bits("fileAlterPreserve", 1, { at: 0, bit: 13, unit: 2, label: "fileAlterPreserve" }),
  bits("tagAlterPreserve", 1, { at: 0, bit: 14, unit: 2, label: "tagAlterPreserve" }),
]);

const Id3v23Frame = struct("Id3v23Frame", [
  str("id", { size: 4, label: "frame id (TIT2 title, TPE1 artist, TALB album, APIC picture, ...)" }),
  u32("size", { endian: "big", label: "body size, excluding this 10-byte header" }),
  record("flags", Id3FrameFlags, { label: "frame status and format flags" }),
]);

const Id3v24Frame = struct("Id3v24Frame", [
  str("id", { size: 4, label: "frame id (TIT2 title, TPE1 artist, TALB album, TDRC date, APIC picture, ...)" }),
  record("sizeRaw", Id3Syncsafe, { label: "syncsafe body size" }),
  record("flags", Id3FrameFlags, { label: "frame status and format flags" }),
]);

const Id3v22Frame = struct("Id3v22Frame", [
  str("id", { size: 3, label: "frame id (TT2 title, TP1 artist, TAL album, PIC picture, ...)" }),
  u8("s0", { endian: "big" }),
  u8("s1", { endian: "big" }),
  u8("s2", { endian: "big" }),
]);

const Id3Flags = struct("Id3Flags", [
  bits("footer", 1, { at: 0, bit: 4, unit: 1, label: "footer" }),
  bits("experimental", 1, { at: 0, bit: 5, unit: 1, label: "experimental" }),
  bits("extendedHeader", 1, { at: 0, bit: 6, unit: 1, label: "extendedHeader" }),
  bits("unsynchronisation", 1, { at: 0, bit: 7, unit: 1, label: "unsynchronisation" }),
]);

const Id3v2 = struct("Id3v2", [
  str("magic", { size: 3, label: "always ID3" }),
  u8("versionMajor", { endian: "big", label: "ID3v2 version: 2, 3 or 4" }),
  u8("revision", { endian: "big", label: "revision (0)" }),
  record("flags", Id3Flags, { label: "tag-level flags" }),
  record("sizeRaw", Id3Syncsafe, { label: "syncsafe tag size, excluding this header" }),
]);

const Id3Encoding = struct("Id3Encoding", [
  u8('value', { values: { "0": "Latin1", "1": "Utf16", "2": "Utf16BE", "3": "Utf8" } }),
]);

export default definePack({
  name: "MP3",
  endian: "big",
  pointerSize: 4,
  types: [Id3Syncsafe, Id3FrameFlags, Id3v23Frame, Id3v24Frame, Id3v22Frame, Id3Flags, Id3v2, Id3Encoding],
  nodes: {
    "entry": structNode(Id3v2, { label: "Id3v2（入口）" }),
    "Id3Syncsafe": structNode(Id3Syncsafe, { label: "Id3Syncsafe" }),
    "Id3v23Frame": structNode(Id3v23Frame, { label: "Id3v23Frame" }),
    "Id3v24Frame": structNode(Id3v24Frame, { label: "Id3v24Frame" }),
    "Id3v22Frame": structNode(Id3v22Frame, { label: "Id3v22Frame" }),
    "flags_Id3Flags": structNode(Id3Flags, { label: "位域 Id3Flags" }),
    "flags_Id3FrameFlags": structNode(Id3FrameFlags, { label: "位域 Id3FrameFlags" }),
    "calc_Id3Syncsafe_value": calcNode({
      label: "Id3Syncsafe.value（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "b0": "number", "b1": "number", "b2": "number", "b3": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: ((((Number(inputs["b0"] ?? 0) * 2097152) + (Number(inputs["b1"] ?? 0) * 16384)) + (Number(inputs["b2"] ?? 0) * 128)) + Number(inputs["b3"] ?? 0)) }),
    }),
    "calc_Id3v23Frame_textLen": calcNode({
      label: "Id3v23Frame.textLen（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "size": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (Number(inputs["size"] ?? 0) - 1) }),
    }),
    "ptr_Id3v23Frame_encoding": calcNode({
      label: "Id3v23Frame.encoding（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs.base ?? 0) + 10 }),
    }),
    "match_Id3v23Frame_encoding_TIT2": structNode(Id3Encoding, { label: "Id3v23Frame.encoding · match TIT2" }),
    "match_Id3v23Frame_encoding_TPE1": structNode(Id3Encoding, { label: "Id3v23Frame.encoding · match TPE1" }),
    "match_Id3v23Frame_encoding_TALB": structNode(Id3Encoding, { label: "Id3v23Frame.encoding · match TALB" }),
    "match_Id3v23Frame_encoding_TYER": structNode(Id3Encoding, { label: "Id3v23Frame.encoding · match TYER" }),
    "match_Id3v23Frame_encoding_TRCK": structNode(Id3Encoding, { label: "Id3v23Frame.encoding · match TRCK" }),
    "match_Id3v23Frame_encoding_TCON": structNode(Id3Encoding, { label: "Id3v23Frame.encoding · match TCON" }),
    "match_Id3v23Frame_encoding_TPE2": structNode(Id3Encoding, { label: "Id3v23Frame.encoding · match TPE2" }),
    "match_Id3v23Frame_encoding_TCOM": structNode(Id3Encoding, { label: "Id3v23Frame.encoding · match TCOM" }),
    "match_Id3v23Frame_encoding_TPOS": structNode(Id3Encoding, { label: "Id3v23Frame.encoding · match TPOS" }),
    "match_Id3v23Frame_encoding_TPUB": structNode(Id3Encoding, { label: "Id3v23Frame.encoding · match TPUB" }),
    "match_Id3v23Frame_encoding_TSSE": structNode(Id3Encoding, { label: "Id3v23Frame.encoding · match TSSE" }),
    "match_Id3v23Frame_encoding_TXXX": structNode(Id3Encoding, { label: "Id3v23Frame.encoding · match TXXX" }),
    "match_Id3v23Frame_encoding_TENC": structNode(Id3Encoding, { label: "Id3v23Frame.encoding · match TENC" }),
    "match_Id3v23Frame_encoding_TCOP": structNode(Id3Encoding, { label: "Id3v23Frame.encoding · match TCOP" }),
    "match_Id3v23Frame_encoding_TDRC": structNode(Id3Encoding, { label: "Id3v23Frame.encoding · match TDRC" }),
    "ptr_Id3v23Frame_text": calcNode({
      label: "Id3v23Frame.text（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs.base ?? 0) + 11 }),
    }),
    "calc_Id3v24Frame_textLen": calcNode({
      label: "Id3v24Frame.textLen（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "size": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (Number(inputs["size"] ?? 0) - 1) }),
    }),
    "ptr_Id3v24Frame_encoding": calcNode({
      label: "Id3v24Frame.encoding（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs.base ?? 0) + 10 }),
    }),
    "match_Id3v24Frame_encoding_TIT2": structNode(Id3Encoding, { label: "Id3v24Frame.encoding · match TIT2" }),
    "match_Id3v24Frame_encoding_TPE1": structNode(Id3Encoding, { label: "Id3v24Frame.encoding · match TPE1" }),
    "match_Id3v24Frame_encoding_TALB": structNode(Id3Encoding, { label: "Id3v24Frame.encoding · match TALB" }),
    "match_Id3v24Frame_encoding_TDRC": structNode(Id3Encoding, { label: "Id3v24Frame.encoding · match TDRC" }),
    "match_Id3v24Frame_encoding_TRCK": structNode(Id3Encoding, { label: "Id3v24Frame.encoding · match TRCK" }),
    "match_Id3v24Frame_encoding_TCON": structNode(Id3Encoding, { label: "Id3v24Frame.encoding · match TCON" }),
    "match_Id3v24Frame_encoding_TPE2": structNode(Id3Encoding, { label: "Id3v24Frame.encoding · match TPE2" }),
    "match_Id3v24Frame_encoding_TCOM": structNode(Id3Encoding, { label: "Id3v24Frame.encoding · match TCOM" }),
    "match_Id3v24Frame_encoding_TPOS": structNode(Id3Encoding, { label: "Id3v24Frame.encoding · match TPOS" }),
    "match_Id3v24Frame_encoding_TPUB": structNode(Id3Encoding, { label: "Id3v24Frame.encoding · match TPUB" }),
    "match_Id3v24Frame_encoding_TSSE": structNode(Id3Encoding, { label: "Id3v24Frame.encoding · match TSSE" }),
    "match_Id3v24Frame_encoding_TXXX": structNode(Id3Encoding, { label: "Id3v24Frame.encoding · match TXXX" }),
    "match_Id3v24Frame_encoding_TENC": structNode(Id3Encoding, { label: "Id3v24Frame.encoding · match TENC" }),
    "match_Id3v24Frame_encoding_TCOP": structNode(Id3Encoding, { label: "Id3v24Frame.encoding · match TCOP" }),
    "match_Id3v24Frame_encoding_TYER": structNode(Id3Encoding, { label: "Id3v24Frame.encoding · match TYER" }),
    "ptr_Id3v24Frame_text": calcNode({
      label: "Id3v24Frame.text（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs.base ?? 0) + 11 }),
    }),
    "calc_Id3v22Frame_size": calcNode({
      label: "Id3v22Frame.size（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "s0": "number", "s1": "number", "s2": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (((Number(inputs["s0"] ?? 0) * 65536) + (Number(inputs["s1"] ?? 0) * 256)) + Number(inputs["s2"] ?? 0)) }),
    }),
    "calc_Id3v22Frame_textLen": calcNode({
      label: "Id3v22Frame.textLen（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "size": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (Number(inputs["size"] ?? 0) - 1) }),
    }),
    "ptr_Id3v22Frame_encoding": calcNode({
      label: "Id3v22Frame.encoding（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs.base ?? 0) + 6 }),
    }),
    "match_Id3v22Frame_encoding_TT2": structNode(Id3Encoding, { label: "Id3v22Frame.encoding · match TT2" }),
    "match_Id3v22Frame_encoding_TP1": structNode(Id3Encoding, { label: "Id3v22Frame.encoding · match TP1" }),
    "match_Id3v22Frame_encoding_TAL": structNode(Id3Encoding, { label: "Id3v22Frame.encoding · match TAL" }),
    "match_Id3v22Frame_encoding_TYE": structNode(Id3Encoding, { label: "Id3v22Frame.encoding · match TYE" }),
    "match_Id3v22Frame_encoding_TRK": structNode(Id3Encoding, { label: "Id3v22Frame.encoding · match TRK" }),
    "match_Id3v22Frame_encoding_TCO": structNode(Id3Encoding, { label: "Id3v22Frame.encoding · match TCO" }),
    "ptr_Id3v22Frame_text": calcNode({
      label: "Id3v22Frame.text（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs.base ?? 0) + 7 }),
    }),
    "calc_Id3v2_audioOffset": calcNode({
      label: "Id3v2.audioOffset（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "tagSize": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (Number(inputs["tagSize"] ?? 0) + 10) }),
    }),
    "list_Id3v2_frames22": listNode(Id3v22Frame, {
      label: "Id3v2.frames22（重复元素）",
      description: "Nybble repeat 字段；address 指向第一个元素，next 按元素大小前进",
      next: (e) => { if ((e.value["id"] == "")) return null; return e.addr + Id3v22Frame.size; },
      max: 4096,
    }),
    "list_Id3v2_frames23": listNode(Id3v23Frame, {
      label: "Id3v2.frames23（重复元素）",
      description: "Nybble repeat 字段；address 指向第一个元素，next 按元素大小前进",
      next: (e) => { if ((e.value["id"] == "")) return null; return e.addr + Id3v23Frame.size; },
      max: 4096,
    }),
    "list_Id3v2_frames24": listNode(Id3v24Frame, {
      label: "Id3v2.frames24（重复元素）",
      description: "Nybble repeat 字段；address 指向第一个元素，next 按元素大小前进",
      next: (e) => { if ((e.value["id"] == "")) return null; return e.addr + Id3v24Frame.size; },
      max: 4096,
    }),
    "ptr_Id3v2_audioSync": calcNode({
      label: "Id3v2.audioSync（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "audioOffset": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs["audioOffset"] ?? 0) }),
    }),
  },
});


/*
未移植项：
- Id3v23Frame.body: 变长字节块未移植
- Id3v24Frame.body: 变长字节块未移植
- Id3v24Frame.size: computed 表达式依赖非标量字段，未生成 calc 辅助节点
- Id3v22Frame.body: 变长字节块未移植
- Id3v2.extendedSize: 条件字段未移植，后续布局在此停止
- Id3v2.tagSize: computed 表达式依赖非标量字段，未生成 calc 辅助节点
*/
