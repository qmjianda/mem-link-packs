/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/ogg
// 原始 pack：ogg · Ogg container v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 9 个动态辅助节点
const VorbisBlocksizes = struct("VorbisBlocksizes", [
  bits("blocksize0", 4, { at: 0, bit: 0, unit: 1, label: "blocksize0" }),
  bits("blocksize1", 4, { at: 0, bit: 4, unit: 1, label: "blocksize1" }),
]);

const VorbisIdentification = struct("VorbisIdentification", [
  u8("packetType", { endian: "little", label: "1 = identification header" }),
  str("codec", { size: 6, label: "always vorbis" }),
  u32("version", { endian: "little", label: "Vorbis version (0)" }),
  u8("channels", { endian: "little", label: "audio channels" }),
  u32("sampleRate", { endian: "little", label: "sample rate (Hz)" }),
  i32("bitrateMaximum", { endian: "little", label: "maximum bitrate hint (0 = unset)" }),
  i32("bitrateNominal", { endian: "little", label: "nominal bitrate (0 = unset)" }),
  i32("bitrateMinimum", { endian: "little", label: "minimum bitrate hint (0 = unset)" }),
  record("blocksizes", VorbisBlocksizes, { label: "log2 short/long block sizes" }),
  u8("framing", { endian: "little", label: "framing bit (must be 1)" }),
]);

const OpusHead = struct("OpusHead", [
  str("magic", { size: 8, label: "always OpusHead" }),
  u8("version", { endian: "little", label: "encapsulation version (1)" }),
  u8("channels", { endian: "little", label: "output channel count" }),
  u16("preSkip", { endian: "little", label: "samples to discard at 48 kHz" }),
  u32("inputSampleRate", { endian: "little", label: "original input sample rate (Hz), informational" }),
  i16("outputGain", { endian: "little", label: "output gain in Q7.8 dB" }),
  u8("mappingFamily", { endian: "little", label: "channel mapping family (0 = mono/stereo)" }),
]);

const OggFlacIdentification = struct("OggFlacIdentification", [
  u8("packetType", { endian: "little", label: "0x7F" }),
  str("signature", { size: 4, label: "always FLAC" }),
  u8("majorVersion", { endian: "little", label: "Ogg FLAC mapping major version (1)" }),
  u8("minorVersion", { endian: "little", label: "Ogg FLAC mapping minor version (0)" }),
  bytes("headerPackets", { size: 2, label: "big-endian count of header packets that follow (0 = unknown)" }),
  str("nativeMarker", { size: 4, label: "fLaC: a native FLAC stream begins here" }),
]);

const TheoraIdentification = struct("TheoraIdentification", [
  u8("packetType", { endian: "little", label: "0x80 = identification header" }),
  str("codec", { size: 6, label: "always theora" }),
  u8("versionMajor", { endian: "little", label: "bitstream version major (3)" }),
  u8("versionMinor", { endian: "little", label: "bitstream version minor (2)" }),
  u8("versionRev", { endian: "little", label: "bitstream version revision" }),
]);

const SpeexHeader = struct("SpeexHeader", [
  str("magic", { size: 8, label: "always Speex   " }),
  str("version", { size: 20, label: "encoder version string" }),
  i32("versionId", { endian: "little", label: "Speex version id (1)" }),
  i32("headerSize", { endian: "little", label: "size of this header (80)" }),
  i32("rate", { endian: "little", label: "sample rate (Hz)" }),
  i32("mode", { endian: "little", label: "0 = narrowband, 1 = wideband, 2 = ultra-wideband" }),
  i32("modeBitstreamVersion", { endian: "little", label: "mode bitstream version" }),
  i32("channels", { endian: "little", label: "channel count" }),
  i32("bitrate", { endian: "little", label: "bitrate (-1 = unknown)" }),
  i32("frameSize", { endian: "little", label: "samples per frame" }),
  i32("vbr", { endian: "little", label: "1 = variable bitrate" }),
  i32("framesPerPacket", { endian: "little", label: "frames per Ogg packet" }),
  i32("extraHeaders", { endian: "little", label: "additional header packets" }),
  i32("reserved1", { endian: "little" }),
  i32("reserved2", { endian: "little" }),
]);

const OggHeaderType = struct("OggHeaderType", [
  bits("continued", 1, { at: 0, bit: 0, unit: 1, label: "continued" }),
  bits("bos", 1, { at: 0, bit: 1, unit: 1, label: "bos" }),
  bits("eos", 1, { at: 0, bit: 2, unit: 1, label: "eos" }),
]);

const OggPage = struct("OggPage", [
  str("capturePattern", { size: 4, label: "always OggS" }),
  u8("version", { endian: "little", label: "stream structure version (0)" }),
  record("headerType", OggHeaderType, { label: "page flags" }),
  i64("granulePosition", { endian: "little", label: "codec-defined position (samples/frames) at page end" }),
  u32("serialNumber", { endian: "little", label: "logical bitstream serial number" }),
  u32("pageSequence", { endian: "little", label: "page sequence number (0 for the first page)" }),
  u32("checksum", { endian: "little", label: "CRC-32 of the page with this field zeroed" }),
  u8("pageSegments", { endian: "little", label: "number of segment table entries" }),
]);

const Elem_u8 = struct("u8Value", [
  u8('value', { endian: "little" }),
]);

export default definePack({
  name: "OGG",
  endian: "little",
  pointerSize: 4,
  types: [VorbisBlocksizes, VorbisIdentification, OpusHead, OggFlacIdentification, TheoraIdentification, SpeexHeader, OggHeaderType, OggPage, Elem_u8],
  nodes: {
    "entry": structNode(OggPage, { label: "OggPage（入口）" }),
    "VorbisIdentification": structNode(VorbisIdentification, { label: "VorbisIdentification" }),
    "OpusHead": structNode(OpusHead, { label: "OpusHead" }),
    "OggFlacIdentification": structNode(OggFlacIdentification, { label: "OggFlacIdentification" }),
    "TheoraIdentification": structNode(TheoraIdentification, { label: "TheoraIdentification" }),
    "SpeexHeader": structNode(SpeexHeader, { label: "SpeexHeader" }),
    "flags_OggHeaderType": structNode(OggHeaderType, { label: "位域 OggHeaderType" }),
    "flags_VorbisBlocksizes": structNode(VorbisBlocksizes, { label: "位域 VorbisBlocksizes" }),
    "array_OggPage_segmentTable": arrayNode(Elem_u8, {
      label: "OggPage.segmentTable（动态数组）",
      description: "count 来自 OggPage.pageSegments；address 指向数组首元素",
    }),
    "calc_OggPage_payloadOffset": calcNode({
      label: "OggPage.payloadOffset（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "pageSegments": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (27 + Number(inputs["pageSegments"] ?? 0)) }),
    }),
    "ptr_OggPage_packetType": calcNode({
      label: "OggPage.packetType（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "payloadOffset": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs.base ?? 0) + Number(inputs["payloadOffset"] ?? 0) }),
    }),
    "ptr_OggPage_identification": calcNode({
      label: "OggPage.identification（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number", "payloadOffset": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs.base ?? 0) + Number(inputs["payloadOffset"] ?? 0) }),
    }),
    "match_OggPage_identification_1": structNode(VorbisIdentification, { label: "OggPage.identification · match 1" }),
    "match_OggPage_identification_79": structNode(OpusHead, { label: "OggPage.identification · match 79" }),
    "match_OggPage_identification_127": structNode(OggFlacIdentification, { label: "OggPage.identification · match 127" }),
    "match_OggPage_identification_128": structNode(TheoraIdentification, { label: "OggPage.identification · match 128" }),
    "match_OggPage_identification_83": structNode(SpeexHeader, { label: "OggPage.identification · match 83" }),
  },
});

