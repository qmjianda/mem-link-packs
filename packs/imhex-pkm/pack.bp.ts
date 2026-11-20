/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/pkm.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const PKMHeader = struct("PKMHeader", [
  str("id", { size: 4 }),
  str("version", { size: 2 }),
  u16("pkm_format", { values: { "0": "ETC1_RGB_NO_MIPMAPS", "1": "ETC2PACKAGE_RGB_NO_MIPMAPS", "2": "ETC2PACKAGE_RGBA_NO_MIPMAPS_OLD", "3": "ETC2PACKAGE_RGBA_NO_MIPMAPS", "4": "ETC2PACKAGE_RGBA1_NO_MIPMAPS", "5": "ETC2PACKAGE_R_NO_MIPMAPS", "6": "ETC2PACKAGE_RG_NO_MIPMAPS", "7": "ETC2PACKAGE_R_SIGNED_NO_MIPMAPS", "8": "ETC2PACKAGE_RG_SIGNED_NO_MIPMAPS" } }),
  u16("width", {  }),
  u16("height", {  }),
  u16("original_width", {  }),
  u16("original_height", {  }),
]);

export default definePack({
  name: "PKM (PacKMan) files containing ETC (Ericsson Texture Compression)",
  endian: "big",
  pointerSize: 8,
  types: [PKMHeader],
  nodes: {
    "entry": structNode(PKMHeader, { label: "PKMHeader（入口）" }),
  },
});

