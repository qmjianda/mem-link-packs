/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/flac.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 5 项（见文件末尾）
const METADATA_BLOCK_HEADER = struct("METADATA_BLOCK_HEADER", [
  bits("lastMetadataBlock", 1, { at: 0, bit: 0, unit: 4, label: "lastMetadataBlock" }),
  bits("blockType", 7, { at: 0, bit: 1, unit: 4, label: "blockType" }),
  bits("length", 24, { at: 0, bit: 8, unit: 4, label: "length" }),
]);

const STREAMINFO_FLAGS = struct("STREAMINFO_FLAGS", [
  bits("sampleRate", 20, { at: 0, bit: 0, unit: 8, label: "sampleRate" }),
  bits("numChannels", 3, { at: 0, bit: 20, unit: 8, label: "numChannels" }),
  bits("bitsPerSample", 5, { at: 0, bit: 23, unit: 8, label: "bitsPerSample" }),
  bits("numSamplesInStream", 36, { at: 0, bit: 28, unit: 8, label: "numSamplesInStream" }),
]);

const METADATA_BLOCK_STREAMINFO = struct("METADATA_BLOCK_STREAMINFO", [
  u16("minBlockSize", {  }),
  u16("maxBlockSize", {  }),
]);

const METADATA_BLOCK_APPLICATION = struct("METADATA_BLOCK_APPLICATION", [
  str("applicationID", { size: 4 }),
]);

const SEEKPOINT = struct("SEEKPOINT", [
  u64("sampleNumber", {  }),
  u64("byteOffset", {  }),
  u16("numSamples", {  }),
]);

const VORBIS_USER_COMMENT = struct("VORBIS_USER_COMMENT", [
  u32("length", { endian: "little" }),
]);

const METADATA_BLOCK_VORBIS_COMMENT = struct("METADATA_BLOCK_VORBIS_COMMENT", [
  u32("vendorLength", { endian: "little" }),
]);

const TRACK_FLAGS = struct("TRACK_FLAGS", [
  bits("audioTrack", 1, { at: 0, bit: 0, unit: 1, label: "audioTrack" }),
  bits("preEmphasis", 1, { at: 0, bit: 1, unit: 1, label: "preEmphasis" }),
]);

const CUESHEET_TRACK_INDEX = struct("CUESHEET_TRACK_INDEX", [
  u64("sampleOffset", {  }),
  u8("indexPointNumber", {  }),
  pad(3),
]);

const CUESHEET_TRACK = struct("CUESHEET_TRACK", [
  u64("trackOffset", {  }),
  u8("trackNumber", {  }),
  str("trackISRC", { size: 12 }),
  record("flags", TRACK_FLAGS),
  pad(13),
  u8("numTrackIndexPoints", {  }),
]);

const METADATA_BLOCK_CUESHEET = struct("METADATA_BLOCK_CUESHEET", [
  str("mediaCatalogNumber", { size: 128 }),
  u64("numLeadInSamples", {  }),
  bool("isCD", {  }),
  pad(258),
  u8("numTracks", {  }),
]);

const METADATA_BLOCK_PICTURE = struct("METADATA_BLOCK_PICTURE", [
  u32("pictureType", { values: { "0": "Other", "1": "FileIcon", "2": "OtherFileIcon", "3": "CoverFront", "4": "CoverBack", "5": "LeafletPage", "6": "Media", "7": "LeadArtist", "8": "Artist", "9": "Conductor", "10": "Band", "11": "Composer", "12": "Lyricist", "13": "RecordingLocation", "14": "DuringRecording", "15": "DuringPerformance", "16": "MovieScreenCapture", "17": "ABrightColoredFish", "18": "Illustration", "19": "BandLogoType", "20": "PublisherLogoType" } }),
  u32("mimeTypeLength", {  }),
]);

const FRAME_HEADER_FLAGS = struct("FRAME_HEADER_FLAGS", [
  bits("syncCode", 14, { at: 0, bit: 0, unit: 4, label: "syncCode" }),
  bits("blockingStrategy", 1, { at: 0, bit: 15, unit: 4, label: "blockingStrategy" }),
  bits("blockSize", 4, { at: 0, bit: 16, unit: 4, label: "blockSize" }),
  bits("sampleRate", 4, { at: 0, bit: 20, unit: 4, label: "sampleRate" }),
  bits("channelAssignment", 4, { at: 0, bit: 24, unit: 4, label: "channelAssignment" }),
  bits("sampleSize", 3, { at: 0, bit: 28, unit: 4, label: "sampleSize" }),
]);

const FRAME_HEADER = struct("FRAME_HEADER", [
  record("flags", FRAME_HEADER_FLAGS),
]);

const FRAME_FOOTER = struct("FRAME_FOOTER", [
  u16("crc16", {  }),
]);

const SUBFRAME_HEADER = struct("SUBFRAME_HEADER", [
  bits("type", 6, { at: 0, bit: 1, unit: 1, label: "type" }),
  bits("wastedBits", 1, { at: 0, bit: 7, unit: 1, label: "wastedBits" }),
]);

const RESIDUAL_CODING_METHOD_PARTITIONED_RICE = struct("RESIDUAL_CODING_METHOD_PARTITIONED_RICE", [
  bits("partitionOrder", 4, { at: 0, bit: 0, unit: 1, label: "partitionOrder" }),
  bits("riceParameter", 4, { at: 0, bit: 4, unit: 1, label: "riceParameter" }),
]);

const RESIDUAL_CODING_METHOD_PARTITIONED_RICE2 = struct("RESIDUAL_CODING_METHOD_PARTITIONED_RICE2", [
  bits("partitionOrder", 4, { at: 0, bit: 0, unit: 2, label: "partitionOrder" }),
  bits("riceParameter", 5, { at: 0, bit: 4, unit: 2, label: "riceParameter" }),
]);

const SUBFRAME = struct("SUBFRAME", [
  record("header", SUBFRAME_HEADER),
]);

const FRAME = struct("FRAME", [
  record("header", FRAME_HEADER),
]);

const METADATA_BLOCK = struct("METADATA_BLOCK", [
  record("header", METADATA_BLOCK_HEADER),
]);

const STREAM = struct("STREAM", [
  str("magic", { size: 4 }),
]);

export default definePack({
  name: "Free Lossless Audio Codec, FLAC Audio Format",
  endian: "big",
  pointerSize: 8,
  types: [METADATA_BLOCK_HEADER, STREAMINFO_FLAGS, METADATA_BLOCK_STREAMINFO, METADATA_BLOCK_APPLICATION, SEEKPOINT, VORBIS_USER_COMMENT, METADATA_BLOCK_VORBIS_COMMENT, TRACK_FLAGS, CUESHEET_TRACK_INDEX, CUESHEET_TRACK, METADATA_BLOCK_CUESHEET, METADATA_BLOCK_PICTURE, FRAME_HEADER_FLAGS, FRAME_HEADER, FRAME_FOOTER, SUBFRAME_HEADER, RESIDUAL_CODING_METHOD_PARTITIONED_RICE, RESIDUAL_CODING_METHOD_PARTITIONED_RICE2, SUBFRAME, FRAME, METADATA_BLOCK, STREAM],
  nodes: {
    "entry": structNode(STREAM, { label: "STREAM（入口）" }),
    "METADATA_BLOCK_HEADER": structNode(METADATA_BLOCK_HEADER, { label: "METADATA_BLOCK_HEADER" }),
    "STREAMINFO_FLAGS": structNode(STREAMINFO_FLAGS, { label: "STREAMINFO_FLAGS" }),
    "METADATA_BLOCK_STREAMINFO": structNode(METADATA_BLOCK_STREAMINFO, { label: "METADATA_BLOCK_STREAMINFO" }),
    "METADATA_BLOCK_APPLICATION": structNode(METADATA_BLOCK_APPLICATION, { label: "METADATA_BLOCK_APPLICATION" }),
    "SEEKPOINT": structNode(SEEKPOINT, { label: "SEEKPOINT" }),
    "VORBIS_USER_COMMENT": structNode(VORBIS_USER_COMMENT, { label: "VORBIS_USER_COMMENT" }),
    "METADATA_BLOCK_VORBIS_COMMENT": structNode(METADATA_BLOCK_VORBIS_COMMENT, { label: "METADATA_BLOCK_VORBIS_COMMENT" }),
    "TRACK_FLAGS": structNode(TRACK_FLAGS, { label: "TRACK_FLAGS" }),
    "CUESHEET_TRACK_INDEX": structNode(CUESHEET_TRACK_INDEX, { label: "CUESHEET_TRACK_INDEX" }),
    "CUESHEET_TRACK": structNode(CUESHEET_TRACK, { label: "CUESHEET_TRACK" }),
    "METADATA_BLOCK_CUESHEET": structNode(METADATA_BLOCK_CUESHEET, { label: "METADATA_BLOCK_CUESHEET" }),
    "METADATA_BLOCK_PICTURE": structNode(METADATA_BLOCK_PICTURE, { label: "METADATA_BLOCK_PICTURE" }),
    "FRAME_HEADER_FLAGS": structNode(FRAME_HEADER_FLAGS, { label: "FRAME_HEADER_FLAGS" }),
    "FRAME_HEADER": structNode(FRAME_HEADER, { label: "FRAME_HEADER" }),
    "FRAME_FOOTER": structNode(FRAME_FOOTER, { label: "FRAME_FOOTER" }),
    "SUBFRAME_HEADER": structNode(SUBFRAME_HEADER, { label: "SUBFRAME_HEADER" }),
    "RESIDUAL_CODING_METHOD_PARTITIONED_RICE": structNode(RESIDUAL_CODING_METHOD_PARTITIONED_RICE, { label: "RESIDUAL_CODING_METHOD_PARTITIONED_RICE" }),
    "RESIDUAL_CODING_METHOD_PARTITIONED_RICE2": structNode(RESIDUAL_CODING_METHOD_PARTITIONED_RICE2, { label: "RESIDUAL_CODING_METHOD_PARTITIONED_RICE2" }),
    "SUBFRAME": structNode(SUBFRAME, { label: "SUBFRAME" }),
    "FRAME": structNode(FRAME, { label: "FRAME" }),
    "METADATA_BLOCK": structNode(METADATA_BLOCK, { label: "METADATA_BLOCK" }),
  },
});


/*
未移植项：
- METADATA_BLOCK_STREAMINFO.minFrameSize: 类型 u24 不可移植
- SUBFRAME_CONSTANT: 位域没有可移植的固定成员
- SUBFRAME_VERBATIM: 位域没有可移植的固定成员
- SUBFRAME_FIXED_VALUE: 位域没有可移植的固定成员
- SUBFRAME_LPC_VALUE: 位域没有可移植的固定成员
*/
