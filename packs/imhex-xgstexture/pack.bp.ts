/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/xgstexture.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const XGSTextureFlags = struct("XGSTextureFlags", [
  bits("Mips", 2, { at: 0, bit: 0, unit: 4, label: "Mips" }),
  bits("Twiddle", 2, { at: 0, bit: 2, unit: 4, label: "Twiddle" }),
  bits("Normal", 2, { at: 0, bit: 4, unit: 4, label: "Normal" }),
  bits("Border", 2, { at: 0, bit: 6, unit: 4, label: "Border" }),
  bits("CubeMap", 2, { at: 0, bit: 8, unit: 4, label: "CubeMap" }),
  bits("MipMapDebugColoring", 2, { at: 0, bit: 10, unit: 4, label: "MipMapDebugColoring" }),
  bits("Volume3D", 2, { at: 0, bit: 12, unit: 4, label: "Volume3D" }),
  bits("AlphaChannelPresent", 2, { at: 0, bit: 14, unit: 4, label: "AlphaChannelPresent" }),
  bits("VFlip", 2, { at: 0, bit: 16, unit: 4, label: "VFlip" }),
]);

export default definePack({
  name: "Exient XGS Engine Texture",
  endian: "little",
  pointerSize: 8,
  types: [XGSTextureFlags],
  nodes: {
    "entry": structNode(XGSTextureFlags, { label: "XGSTextureFlags（入口）" }),
  },
});

