/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/notepad-state.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 4 项（见文件末尾）
const MoreOptionsBlock = struct("MoreOptionsBlock", [
  u8("unknown_spell_1", {  }),
  u8("unknown_spell_2", {  }),
  u8("formatting_type", {  }),
]);

const ConfigBlock = struct("ConfigBlock", [
  bool("word_wrap", {  }),
  bool("rtl", {  }),
  bool("show_unicode", {  }),
]);

export default definePack({
  name: "Windows Notepad State Files",
  endian: "little",
  pointerSize: 8,
  types: [MoreOptionsBlock, ConfigBlock],
  nodes: {
    "entry": structNode(MoreOptionsBlock, { label: "MoreOptionsBlock（入口）" }),
    "ConfigBlock": structNode(ConfigBlock, { label: "ConfigBlock" }),
  },
});


/*
未移植项：
- ConfigBlock.more_options_number: 类型 type_uLEB128 不可移植
- UnsavedChunk.cursor_position: 类型 type_uLEB128 不可移植
- std_mem_Section: 位域没有可移植的固定成员
- Notepad_File: 位域没有可移植的固定成员
*/
