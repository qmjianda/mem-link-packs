/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/notepad-cache.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 3 项（见文件末尾）
const ConfigBlock = struct("ConfigBlock", [
  bool("word_wrap", {  }),
  bool("rtl", {  }),
  bool("show_unicode", {  }),
]);

export default definePack({
  name: "Windows Notepad Cache Files",
  endian: "little",
  pointerSize: 8,
  types: [ConfigBlock],
  nodes: {
    "entry": structNode(ConfigBlock, { label: "ConfigBlock（入口）" }),
  },
});


/*
未移植项：
- ConfigBlock.version: 类型 type_uLEB128 不可移植
- UnsavedChunk.cursor_position: 类型 type_uLEB128 不可移植
- Notepad_File: 位域没有可移植的固定成员
*/
