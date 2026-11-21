/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/au
// 原始 pack：au · Sun AU audio v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 1 个动态辅助节点；未移植 1 项（见文件末尾）
const Au = struct("Au", [
  bytes("magic", { size: 4, label: "2E 73 6E 64, the ASCII .snd" }),
  u32("dataOffset", { endian: "big", label: "file offset of the audio; also the header length, at least 24" }),
  u32("dataSize", { endian: "big", label: "bytes of audio, or 0xFFFFFFFF when the length was unknown" }),
  u32("encoding", { values: { "1": "Mulaw8", "2": "LinearPcm8", "3": "LinearPcm16", "4": "LinearPcm24", "5": "LinearPcm32", "6": "Float32", "7": "Float64", "8": "Fragmented", "10": "Dsp", "11": "Fixed8", "12": "Fixed16", "13": "Fixed24", "14": "Fixed32", "18": "Emphasis16", "19": "Compressed16", "20": "EmphasisCompressed16", "21": "DspCommands", "23": "G721Adpcm", "24": "G722", "25": "G723_3", "26": "G723_5", "27": "Alaw8" }, label: "how each sample is stored" }),
  u32("sampleRate", { endian: "big", label: "frames per second (8000 for telephony, 44100 for CD audio)" }),
  u32("channels", { endian: "big", label: "interleaved channel count (1 mono, 2 stereo)" }),
]);

export default definePack({
  name: "AU",
  endian: "big",
  pointerSize: 4,
  types: [Au],
  nodes: {
    "entry": structNode(Au, { label: "Au（入口）" }),
    "calc_Au_annotationLen": calcNode({
      label: "Au.annotationLen（计算）",
      description: "Nybble computed 字段；输入来自同一结构体的字段端口",
      inputs: { "dataOffset": "number" },
      outputs: { value: 'number' },
      run: (inputs) => ({ value: (Number(inputs["dataOffset"] ?? 0) - 24) }),
    }),
  },
});


/*
未移植项：
- Au.annotation: 变长字节块未移植
*/
