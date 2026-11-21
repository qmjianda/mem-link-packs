/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/dds.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const HeaderFlags = struct("HeaderFlags", [
  bits("caps", 1, { at: 0, bit: 0, unit: 4, label: "caps" }),
  bits("height", 1, { at: 0, bit: 1, unit: 4, label: "height" }),
  bits("width", 1, { at: 0, bit: 2, unit: 4, label: "width" }),
  bits("pitch", 1, { at: 0, bit: 3, unit: 4, label: "pitch" }),
  bits("pixelFormat", 1, { at: 0, bit: 12, unit: 4, label: "pixelFormat" }),
  bits("mipMapCount", 1, { at: 0, bit: 17, unit: 4, label: "mipMapCount" }),
  bits("linearSize", 1, { at: 0, bit: 19, unit: 4, label: "linearSize" }),
  bits("depth", 1, { at: 0, bit: 23, unit: 4, label: "depth" }),
]);

const CapsFlags = struct("CapsFlags", [
  bits("complex", 1, { at: 0, bit: 3, unit: 4, label: "complex" }),
  bits("texture", 1, { at: 0, bit: 12, unit: 4, label: "texture" }),
  bits("mipmap", 1, { at: 0, bit: 22, unit: 4, label: "mipmap" }),
]);

const Caps2Flags = struct("Caps2Flags", [
  bits("cubemap", 1, { at: 0, bit: 9, unit: 4, label: "cubemap" }),
  bits("cubemap_plusX", 1, { at: 0, bit: 10, unit: 4, label: "cubemap_plusX" }),
  bits("cubemap_minusX", 1, { at: 0, bit: 11, unit: 4, label: "cubemap_minusX" }),
  bits("cubemap_plusY", 1, { at: 0, bit: 12, unit: 4, label: "cubemap_plusY" }),
  bits("cubemap_minusY", 1, { at: 0, bit: 13, unit: 4, label: "cubemap_minusY" }),
  bits("cubemap_plusZ", 1, { at: 0, bit: 14, unit: 4, label: "cubemap_plusZ" }),
  bits("cubemap_minusZ", 1, { at: 0, bit: 15, unit: 4, label: "cubemap_minusZ" }),
  bits("volume", 1, { at: 0, bit: 21, unit: 4, label: "volume" }),
]);

const PixelFormatFlags = struct("PixelFormatFlags", [
  bits("alphaPixels", 1, { at: 0, bit: 0, unit: 4, label: "alphaPixels" }),
  bits("alpha", 1, { at: 0, bit: 1, unit: 4, label: "alpha" }),
  bits("fourCC", 1, { at: 0, bit: 2, unit: 4, label: "fourCC" }),
  bits("paletteIndexed4", 1, { at: 0, bit: 3, unit: 4, label: "paletteIndexed4" }),
  bits("paletteIndexedTo8", 1, { at: 0, bit: 4, unit: 4, label: "paletteIndexedTo8" }),
  bits("paletteIndexed8", 1, { at: 0, bit: 5, unit: 4, label: "paletteIndexed8" }),
  bits("rgb", 1, { at: 0, bit: 6, unit: 4, label: "rgb" }),
  bits("compressed", 1, { at: 0, bit: 7, unit: 4, label: "compressed" }),
  bits("rgbToYuv", 1, { at: 0, bit: 8, unit: 4, label: "rgbToYuv" }),
  bits("yuv", 1, { at: 0, bit: 9, unit: 4, label: "yuv" }),
  bits("zBuffer", 1, { at: 0, bit: 10, unit: 4, label: "zBuffer" }),
  bits("paletteIndexed1", 1, { at: 0, bit: 11, unit: 4, label: "paletteIndexed1" }),
  bits("paletteIndexed2", 1, { at: 0, bit: 12, unit: 4, label: "paletteIndexed2" }),
  bits("zPixels", 1, { at: 0, bit: 13, unit: 4, label: "zPixels" }),
  bits("stencilBuffer", 1, { at: 0, bit: 14, unit: 4, label: "stencilBuffer" }),
  bits("alphaResult", 1, { at: 0, bit: 15, unit: 4, label: "alphaResult" }),
  bits("luminance", 1, { at: 0, bit: 16, unit: 4, label: "luminance" }),
  bits("bumpLuminance", 1, { at: 0, bit: 17, unit: 4, label: "bumpLuminance" }),
  bits("bumpDudv", 1, { at: 0, bit: 18, unit: 4, label: "bumpDudv" }),
]);

const DX10MiscFlags = struct("DX10MiscFlags", [
  bits("generateMips", 1, { at: 0, bit: 0, unit: 4, label: "generateMips" }),
  bits("shared", 1, { at: 0, bit: 1, unit: 4, label: "shared" }),
  bits("textureCube", 1, { at: 0, bit: 2, unit: 4, label: "textureCube" }),
  bits("reserved", 29, { at: 0, bit: 3, unit: 4, label: "reserved" }),
]);

const DDS_HEADER_DX10 = struct("DDS_HEADER_DX10", [
  u32("dxgiFormat", { values: { "0": "DXGI_FORMAT_UNKNOWN", "1": "DXGI_FORMAT_R32G32B32A32_TYPELESS", "2": "DXGI_FORMAT_R32G32B32A32_FLOAT", "3": "DXGI_FORMAT_R32G32B32A32_UINT", "4": "DXGI_FORMAT_R32G32B32A32_SINT", "5": "DXGI_FORMAT_R32G32B32_TYPELESS", "6": "DXGI_FORMAT_R32G32B32_FLOAT", "7": "DXGI_FORMAT_R32G32B32_UINT", "8": "DXGI_FORMAT_R32G32B32_SINT", "9": "DXGI_FORMAT_R16G16B16A16_TYPELESS", "10": "DXGI_FORMAT_R16G16B16A16_FLOAT", "11": "DXGI_FORMAT_R16G16B16A16_UNORM", "12": "DXGI_FORMAT_R16G16B16A16_UINT", "13": "DXGI_FORMAT_R16G16B16A16_SNORM", "14": "DXGI_FORMAT_R16G16B16A16_SINT", "15": "DXGI_FORMAT_R32G32_TYPELESS", "16": "DXGI_FORMAT_R32G32_FLOAT", "17": "DXGI_FORMAT_R32G32_UINT", "18": "DXGI_FORMAT_R32G32_SINT", "19": "DXGI_FORMAT_R32G8X24_TYPELESS", "20": "DXGI_FORMAT_D32_FLOAT_S8X24_UINT", "21": "DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS", "22": "DXGI_FORMAT_X32_TYPELESS_G8X24_UINT", "23": "DXGI_FORMAT_R10G10B10A2_TYPELESS", "24": "DXGI_FORMAT_R10G10B10A2_UNORM", "25": "DXGI_FORMAT_R10G10B10A2_UINT", "26": "DXGI_FORMAT_R11G11B10_FLOAT", "27": "DXGI_FORMAT_R8G8B8A8_TYPELESS", "28": "DXGI_FORMAT_R8G8B8A8_UNORM", "29": "DXGI_FORMAT_R8G8B8A8_UNORM_SRGB", "30": "DXGI_FORMAT_R8G8B8A8_UINT", "31": "DXGI_FORMAT_R8G8B8A8_SNORM", "32": "DXGI_FORMAT_R8G8B8A8_SINT", "33": "DXGI_FORMAT_R16G16_TYPELESS", "34": "DXGI_FORMAT_R16G16_FLOAT", "35": "DXGI_FORMAT_R16G16_UNORM", "36": "DXGI_FORMAT_R16G16_UINT", "37": "DXGI_FORMAT_R16G16_SNORM", "38": "DXGI_FORMAT_R16G16_SINT", "39": "DXGI_FORMAT_R32_TYPELESS", "40": "DXGI_FORMAT_D32_FLOAT", "41": "DXGI_FORMAT_R32_FLOAT", "42": "DXGI_FORMAT_R32_UINT", "43": "DXGI_FORMAT_R32_SINT", "44": "DXGI_FORMAT_R24G8_TYPELESS", "45": "DXGI_FORMAT_D24_UNORM_S8_UINT", "46": "DXGI_FORMAT_R24_UNORM_X8_TYPELESS", "47": "DXGI_FORMAT_X24_TYPELESS_G8_UINT", "48": "DXGI_FORMAT_R8G8_TYPELESS", "49": "DXGI_FORMAT_R8G8_UNORM", "50": "DXGI_FORMAT_R8G8_UINT", "51": "DXGI_FORMAT_R8G8_SNORM", "52": "DXGI_FORMAT_R8G8_SINT", "53": "DXGI_FORMAT_R16_TYPELESS", "54": "DXGI_FORMAT_R16_FLOAT", "55": "DXGI_FORMAT_D16_UNORM", "56": "DXGI_FORMAT_R16_UNORM", "57": "DXGI_FORMAT_R16_UINT", "58": "DXGI_FORMAT_R16_SNORM", "59": "DXGI_FORMAT_R16_SINT", "60": "DXGI_FORMAT_R8_TYPELESS", "61": "DXGI_FORMAT_R8_UNORM", "62": "DXGI_FORMAT_R8_UINT", "63": "DXGI_FORMAT_R8_SNORM", "64": "DXGI_FORMAT_R8_SINT", "65": "DXGI_FORMAT_A8_UNORM", "66": "DXGI_FORMAT_R1_UNORM", "67": "DXGI_FORMAT_R9G9B9E5_SHAREDEXP", "68": "DXGI_FORMAT_R8G8_B8G8_UNORM", "69": "DXGI_FORMAT_G8R8_G8B8_UNORM", "70": "DXGI_FORMAT_BC1_TYPELESS", "71": "DXGI_FORMAT_BC1_UNORM", "72": "DXGI_FORMAT_BC1_UNORM_SRGB", "73": "DXGI_FORMAT_BC2_TYPELESS", "74": "DXGI_FORMAT_BC2_UNORM", "75": "DXGI_FORMAT_BC2_UNORM_SRGB", "76": "DXGI_FORMAT_BC3_TYPELESS", "77": "DXGI_FORMAT_BC3_UNORM", "78": "DXGI_FORMAT_BC3_UNORM_SRGB", "79": "DXGI_FORMAT_BC4_TYPELESS", "80": "DXGI_FORMAT_BC4_UNORM", "81": "DXGI_FORMAT_BC4_SNORM", "82": "DXGI_FORMAT_BC5_TYPELESS", "83": "DXGI_FORMAT_BC5_UNORM", "84": "DXGI_FORMAT_BC5_SNORM", "85": "DXGI_FORMAT_B5G6R5_UNORM", "86": "DXGI_FORMAT_B5G5R5A1_UNORM", "87": "DXGI_FORMAT_B8G8R8A8_UNORM", "88": "DXGI_FORMAT_B8G8R8X8_UNORM", "89": "DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM", "90": "DXGI_FORMAT_B8G8R8A8_TYPELESS", "91": "DXGI_FORMAT_B8G8R8A8_UNORM_SRGB", "92": "DXGI_FORMAT_B8G8R8X8_TYPELESS", "93": "DXGI_FORMAT_B8G8R8X8_UNORM_SRGB", "94": "DXGI_FORMAT_BC6H_TYPELESS", "95": "DXGI_FORMAT_BC6H_UF16", "96": "DXGI_FORMAT_BC6H_SF16", "97": "DXGI_FORMAT_BC7_TYPELESS", "98": "DXGI_FORMAT_BC7_UNORM", "99": "DXGI_FORMAT_BC7_UNORM_SRGB", "100": "DXGI_FORMAT_AYUV", "101": "DXGI_FORMAT_Y410", "102": "DXGI_FORMAT_Y416", "103": "DXGI_FORMAT_NV12", "104": "DXGI_FORMAT_P010", "105": "DXGI_FORMAT_P016", "106": "DXGI_FORMAT_420_OPAQUE", "107": "DXGI_FORMAT_YUY2", "108": "DXGI_FORMAT_Y210", "109": "DXGI_FORMAT_Y216", "110": "DXGI_FORMAT_NV11", "111": "DXGI_FORMAT_AI44", "112": "DXGI_FORMAT_IA44", "113": "DXGI_FORMAT_P8", "114": "DXGI_FORMAT_A8P8", "115": "DXGI_FORMAT_B4G4R4A4_UNORM", "116": "DXGI_FORMAT_P208", "117": "DXGI_FORMAT_V208", "118": "DXGI_FORMAT_V408", "119": "DXGI_FORMAT_FORCE_UINT" } }),
  u32("resourceDimension", { values: { "0": "Unknown", "1": "Buffer", "2": "Texture1D", "3": "Texture2D", "4": "Texture3D" } }),
  record("miscFlags", DX10MiscFlags),
  u32("arraySize", {  }),
  u32("miscFlags2", { values: { "0": "Unknown", "1": "Straight", "2": "PreMultiplied", "3": "Opaque", "4": "Custom" } }),
]);

const DDS_PIXELFORMAT = struct("DDS_PIXELFORMAT", [
  u32("size", {  }),
  record("flags", PixelFormatFlags),
  str("fourCC", { size: 4 }),
  u32("RGBBitCount", {  }),
  u32("rBitMask", {  }),
  u32("gBitMask", {  }),
  u32("bBitMask", {  }),
  u32("aBitMask", {  }),
]);

const DDS_HEADER = struct("DDS_HEADER", [
  u32("size", {  }),
  record("flags", HeaderFlags),
  u32("height", {  }),
  u32("width", {  }),
  u32("pitchOrLinearSize", {  }),
  u32("depth", {  }),
  u32("mipMapCount", {  }),
  array("reserved0", "u32", 11),
  record("ddspf", DDS_PIXELFORMAT),
  record("caps", CapsFlags),
  record("caps2", Caps2Flags),
  u32("caps3", {  }),
  u32("caps4", {  }),
  u32("reserved1", {  }),
]);

export default definePack({
  name: "DirectDraw Surface",
  endian: "little",
  pointerSize: 8,
  types: [HeaderFlags, CapsFlags, Caps2Flags, PixelFormatFlags, DX10MiscFlags, DDS_HEADER_DX10, DDS_PIXELFORMAT, DDS_HEADER],
  nodes: {
    "entry": structNode(DDS_HEADER, { label: "DDS_HEADER（入口）" }),
    "HeaderFlags": structNode(HeaderFlags, { label: "HeaderFlags" }),
    "CapsFlags": structNode(CapsFlags, { label: "CapsFlags" }),
    "Caps2Flags": structNode(Caps2Flags, { label: "Caps2Flags" }),
    "PixelFormatFlags": structNode(PixelFormatFlags, { label: "PixelFormatFlags" }),
    "DX10MiscFlags": structNode(DX10MiscFlags, { label: "DX10MiscFlags" }),
    "DDS_HEADER_DX10": structNode(DDS_HEADER_DX10, { label: "DDS_HEADER_DX10" }),
    "DDS_PIXELFORMAT": structNode(DDS_PIXELFORMAT, { label: "DDS_PIXELFORMAT" }),
  },
});

