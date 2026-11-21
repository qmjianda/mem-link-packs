/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/lcesave.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const LCEHeader = struct("LCEHeader", [
  u32("offset", {  }),
  u32("count", {  }),
  u16("minVersion", {  }),
  u16("curVersion", {  }),
]);

const CompressedSave = struct("CompressedSave", [
  u64("zlibSize", { endian: "big" }),
]);

export default definePack({
  name: "Minecraft LCE Save File",
  endian: "little",
  pointerSize: 8,
  types: [LCEHeader, CompressedSave],
  nodes: {
    "entry": structNode(LCEHeader, { label: "LCEHeader（入口）" }),
    "CompressedSave": structNode(CompressedSave, { label: "CompressedSave" }),
  },
});


/*
未移植项：
- LCEIndex.filename: 类型 char16 不可移植
*/
