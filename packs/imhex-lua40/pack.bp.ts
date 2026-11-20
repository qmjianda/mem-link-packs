/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/lua40.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 3 项（见文件末尾）
const Version = struct("Version", [
  bits("minor", 4, { at: 0, bit: 0, unit: 1, label: "minor" }),
  bits("major", 4, { at: 0, bit: 4, unit: 1, label: "major" }),
]);

const LuaBinaryHeader = struct("LuaBinaryHeader", [
  u8("id_chunk", {  }),
  str("magic", { size: 3 }),
  record("version", Version),
  u8("endianness", {  }),
  u8("size_of_int", {  }),
  u8("size_of_size_t", {  }),
  u8("size_of_instruction", {  }),
  u8("size_INSTRUCTION", {  }),
  u8("size_OP", {  }),
  u8("size_B", {  }),
  u8("size_number", {  }),
]);

export default definePack({
  name: "Lua 4.0 bytecode",
  endian: "little",
  pointerSize: 8,
  types: [Version, LuaBinaryHeader],
  nodes: {
    "entry": structNode(LuaBinaryHeader, { label: "LuaBinaryHeader（入口）" }),
    "Version": structNode(Version, { label: "Version" }),
  },
});


/*
未移植项：
- LocalVar.varname: 类型 LuaString 不可移植
- LuaNumber: 位域没有可移植的固定成员
- LuaFunction.source: 类型 LuaString 不可移植
*/
