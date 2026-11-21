/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/lua52.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
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
  str("LUAC_TAIL", { size: 6 }),
]);

const LuaString = struct("LuaString", [
  u64("size", {  }),
]);

const LuaConstant = struct("LuaConstant", [
  u8("type", {  }),
]);

const LuaUpvalue = struct("LuaUpvalue", [
  u8("instack", {  }),
  u8("idx", {  }),
]);

const LocalVar = struct("LocalVar", [
  record("varname", LuaString),
  u32("startpc", {  }),
  u32("endpc", {  }),
]);

const LuaDebugInfo = struct("LuaDebugInfo", [
  record("source", LuaString),
]);

const LuaFunction = struct("LuaFunction", [
  u32("line_defined", {  }),
  u32("last_line_defined", {  }),
  u8("number_of_parameters", {  }),
  u8("is_vararg", {  }),
  u8("maxstacksize", {  }),
]);

const LuaFile = struct("LuaFile", [
  record("header", LuaBinaryHeader),
  record("func", LuaFunction),
]);

export default definePack({
  name: "Lua 5.2 bytecode",
  endian: "little",
  pointerSize: 8,
  types: [Version, LuaBinaryHeader, LuaString, LuaConstant, LuaUpvalue, LocalVar, LuaDebugInfo, LuaFunction, LuaFile],
  nodes: {
    "entry": structNode(LuaFile, { label: "LuaFile（入口）" }),
    "Version": structNode(Version, { label: "Version" }),
    "LuaBinaryHeader": structNode(LuaBinaryHeader, { label: "LuaBinaryHeader" }),
    "LuaString": structNode(LuaString, { label: "LuaString" }),
    "LuaConstant": structNode(LuaConstant, { label: "LuaConstant" }),
    "LuaUpvalue": structNode(LuaUpvalue, { label: "LuaUpvalue" }),
    "LocalVar": structNode(LocalVar, { label: "LocalVar" }),
    "LuaDebugInfo": structNode(LuaDebugInfo, { label: "LuaDebugInfo" }),
    "LuaFunction": structNode(LuaFunction, { label: "LuaFunction" }),
  },
});

