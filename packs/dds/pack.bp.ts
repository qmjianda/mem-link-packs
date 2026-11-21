/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/dds
// 原始 pack：dds · DDS texture v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；含 2 个动态辅助节点；未移植 1 项（见文件末尾）
const DdsHeaderDxt10 = struct("DdsHeaderDxt10", [
  u32("dxgiFormat", { values: { "0": "Unknown", "2": "R32G32B32A32Float", "10": "R16G16B16A16Float", "28": "R8G8B8A8Unorm", "29": "R8G8B8A8UnormSrgb", "54": "R16Float", "61": "R8Unorm", "71": "Bc1Unorm", "72": "Bc1UnormSrgb", "74": "Bc2Unorm", "75": "Bc2UnormSrgb", "77": "Bc3Unorm", "78": "Bc3UnormSrgb", "80": "Bc4Unorm", "83": "Bc5Unorm", "87": "B8G8R8A8Unorm", "91": "B8G8R8A8UnormSrgb", "95": "Bc6hUf16", "98": "Bc7Unorm", "99": "Bc7UnormSrgb" }, label: "the surface format, in DXGI terms" }),
  u32("resourceDimension", { values: { "2": "Texture1D", "3": "Texture2D", "4": "Texture3D" }, label: "1D, 2D or 3D resource" }),
  u32("miscFlag", { endian: "little", label: "bit 2 marks a cube map" }),
  u32("arraySize", { endian: "little", label: "number of elements in the texture array" }),
  u32("miscFlags2", { endian: "little", label: "alpha mode: 0 unknown, 1 straight, 2 premultiplied, 3 opaque" }),
]);

const DdsPixelFormatFlags = struct("DdsPixelFormatFlags", [
  bits("alphaPixels", 1, { at: 0, bit: 0, unit: 4, label: "alphaPixels" }),
  bits("alpha", 1, { at: 0, bit: 1, unit: 4, label: "alpha" }),
  bits("fourCC", 1, { at: 0, bit: 2, unit: 4, label: "fourCC" }),
  bits("rgb", 1, { at: 0, bit: 6, unit: 4, label: "rgb" }),
  bits("yuv", 1, { at: 0, bit: 9, unit: 4, label: "yuv" }),
  bits("luminance", 1, { at: 0, bit: 17, unit: 4, label: "luminance" }),
]);

const DdsPixelFormat = struct("DdsPixelFormat", [
  u32("size", { endian: "little", label: "size of this block in bytes, always 32" }),
  record("flags", DdsPixelFormatFlags, { label: "which of the fields below are meaningful" }),
  str("fourCC", { size: 4, label: "compression FourCC (DXT1..DXT5, DX10, ATI2, ...) when the fourCC flag is set" }),
  u32("rgbBitCount", { endian: "little", label: "bits per pixel for an uncompressed surface" }),
  u32("rBitMask", { endian: "little", label: "red channel mask" }),
  u32("gBitMask", { endian: "little", label: "green channel mask" }),
  u32("bBitMask", { endian: "little", label: "blue channel mask" }),
  u32("aBitMask", { endian: "little", label: "alpha channel mask" }),
]);

const DdsHeaderFlags = struct("DdsHeaderFlags", [
  bits("caps", 1, { at: 0, bit: 0, unit: 4, label: "caps" }),
  bits("height", 1, { at: 0, bit: 1, unit: 4, label: "height" }),
  bits("width", 1, { at: 0, bit: 2, unit: 4, label: "width" }),
  bits("pitch", 1, { at: 0, bit: 3, unit: 4, label: "pitch" }),
  bits("pixelFormat", 1, { at: 0, bit: 12, unit: 4, label: "pixelFormat" }),
  bits("mipMapCount", 1, { at: 0, bit: 17, unit: 4, label: "mipMapCount" }),
  bits("linearSize", 1, { at: 0, bit: 19, unit: 4, label: "linearSize" }),
  bits("depth", 1, { at: 0, bit: 23, unit: 4, label: "depth" }),
]);

const DdsCaps = struct("DdsCaps", [
  bits("complex", 1, { at: 0, bit: 3, unit: 4, label: "complex" }),
  bits("texture", 1, { at: 0, bit: 12, unit: 4, label: "texture" }),
  bits("mipmap", 1, { at: 0, bit: 22, unit: 4, label: "mipmap" }),
]);

const DdsCaps2 = struct("DdsCaps2", [
  bits("cubemap", 1, { at: 0, bit: 9, unit: 4, label: "cubemap" }),
  bits("cubemapPositiveX", 1, { at: 0, bit: 10, unit: 4, label: "cubemapPositiveX" }),
  bits("cubemapNegativeX", 1, { at: 0, bit: 11, unit: 4, label: "cubemapNegativeX" }),
  bits("cubemapPositiveY", 1, { at: 0, bit: 12, unit: 4, label: "cubemapPositiveY" }),
  bits("cubemapNegativeY", 1, { at: 0, bit: 13, unit: 4, label: "cubemapNegativeY" }),
  bits("cubemapPositiveZ", 1, { at: 0, bit: 14, unit: 4, label: "cubemapPositiveZ" }),
  bits("cubemapNegativeZ", 1, { at: 0, bit: 15, unit: 4, label: "cubemapNegativeZ" }),
  bits("volume", 1, { at: 0, bit: 21, unit: 4, label: "volume" }),
]);

const Dds = struct("Dds", [
  str("magic", { size: 4, label: "magic 'DDS '" }),
  u32("size", { endian: "little", label: "size of the header that follows, always 124" }),
  record("flags", DdsHeaderFlags, { label: "which header fields carry a meaningful value" }),
  u32("height", { endian: "little", label: "surface height in pixels" }),
  u32("width", { endian: "little", label: "surface width in pixels" }),
  u32("pitchOrLinearSize", { endian: "little", label: "row pitch, or the total size of the top-level surface" }),
  u32("depth", { endian: "little", label: "depth of a volume texture, in pixels" }),
  u32("mipMapCount", { endian: "little", label: "number of mipmap levels" }),
  bytes("reserved1", { size: 44, label: "reserved; some tools stash a writer signature here" }),
  record("pixelFormat", DdsPixelFormat, { label: "how each pixel is encoded" }),
  record("caps", DdsCaps, { label: "surface complexity flags" }),
  record("caps2", DdsCaps2, { label: "cube map and volume texture flags" }),
  u32("caps3", { endian: "little", label: "unused, zero" }),
  u32("caps4", { endian: "little", label: "unused, zero" }),
  u32("reserved2", { endian: "little", label: "reserved, zero" }),
]);

export default definePack({
  name: "DDS",
  endian: "little",
  pointerSize: 4,
  types: [DdsHeaderDxt10, DdsPixelFormatFlags, DdsPixelFormat, DdsHeaderFlags, DdsCaps, DdsCaps2, Dds],
  nodes: {
    "entry": structNode(Dds, { label: "Dds（入口）" }),
    "DdsHeaderDxt10": structNode(DdsHeaderDxt10, { label: "DdsHeaderDxt10" }),
    "DdsPixelFormat": structNode(DdsPixelFormat, { label: "DdsPixelFormat" }),
    "flags_DdsHeaderFlags": structNode(DdsHeaderFlags, { label: "位域 DdsHeaderFlags" }),
    "flags_DdsPixelFormatFlags": structNode(DdsPixelFormatFlags, { label: "位域 DdsPixelFormatFlags" }),
    "flags_DdsCaps": structNode(DdsCaps, { label: "位域 DdsCaps" }),
    "flags_DdsCaps2": structNode(DdsCaps2, { label: "位域 DdsCaps2" }),
    "ptr_DdsPixelFormat_dx10": calcNode({
      label: "DdsPixelFormat.dx10（指针地址）",
      description: "把结构体基址与指针字段/常量相加，接到目标结构节点的 address",
      inputs: { "base": "number" },
      outputs: { address: 'number' },
      run: (inputs) => ({ address: Number(inputs.base ?? 0) + 52 }),
    }),
    "match_DdsPixelFormat_dx10_DX10": structNode(DdsHeaderDxt10, { label: "DdsPixelFormat.dx10 · match DX10" }),
  },
});


/*
未移植项：
- Dds.surface: 变长字节块未移植
*/
