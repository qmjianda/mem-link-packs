/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/lua51.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 2 项（见文件末尾）
const Version = struct("Version", [
  bits("minor", 4, { at: 0, bit: 0, unit: 1, label: "minor" }),
  bits("major", 4, { at: 0, bit: 4, unit: 1, label: "major" }),
]);

const LuaBinaryHeader = struct("LuaBinaryHeader", [
  str("magic", { size: 4 }),
  record("version_number", Version),
  u8("format_version", {  }),
  u8("endianness", {  }),
  u8("size_of_int", {  }),
  u8("size_of_size_t", {  }),
  u8("size_of_Instruction", {  }),
  u8("lua_Number", {  }),
  u8("is_lua_Number_integral", {  }),
]);

const LuaConstant = struct("LuaConstant", [
  u8("type", {  }),
]);

export default definePack({
  name: "Lua 5.1 bytecode",
  endian: "little",
  pointerSize: 8,
  types: [Version, LuaBinaryHeader, LuaConstant],
  nodes: {
    "entry": structNode(LuaBinaryHeader, { label: "LuaBinaryHeader（入口）" }),
    "Version": structNode(Version, { label: "Version" }),
    "LuaConstant": structNode(LuaConstant, { label: "LuaConstant" }),
  },
});


/*
未移植项：
- LocalVar.varname: 类型 LuaString 不可移植
- LuaFunction.source: 类型 LuaString 不可移植
*/
