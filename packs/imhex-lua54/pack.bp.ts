/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/lua54.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 5 项（见文件末尾）
const Version = struct("Version", [
  bits("minor", 4, { at: 0, bit: 0, unit: 1, label: "minor" }),
  bits("major", 4, { at: 0, bit: 4, unit: 1, label: "major" }),
]);

const LuaBinaryHeader = struct("LuaBinaryHeader", [
  u32("magic", {  }),
  record("version_number", Version),
  u8("format_version", {  }),
  bytes("error_detection_data", { size: 6 }),
  u8("size_of_int", {  }),
  u8("size_of_size_t", {  }),
  u8("size_of_number", {  }),
  u64("luac_int", {  }),
  f64("luac_num", {  }),
]);

const LuaConstant = struct("LuaConstant", [
  u8("type", {  }),
]);

const LuaUpvalue = struct("LuaUpvalue", [
  u8("instack", {  }),
  u8("idx", {  }),
  u8("kind", {  }),
]);

const LuaFile = struct("LuaFile", [
  record("header", LuaBinaryHeader),
  u8("size_of_upvalues", {  }),
]);

export default definePack({
  name: "Lua 5.4 bytecode",
  endian: "little",
  pointerSize: 8,
  types: [Version, LuaBinaryHeader, LuaConstant, LuaUpvalue, LuaFile],
  nodes: {
    "entry": structNode(LuaFile, { label: "LuaFile（入口）" }),
    "Version": structNode(Version, { label: "Version" }),
    "LuaBinaryHeader": structNode(LuaBinaryHeader, { label: "LuaBinaryHeader" }),
    "LuaConstant": structNode(LuaConstant, { label: "LuaConstant" }),
    "LuaUpvalue": structNode(LuaUpvalue, { label: "LuaUpvalue" }),
  },
});


/*
未移植项：
- LuaString.size: 类型 Size 不可移植
- AbsLineInfo.pc: 类型 Size 不可移植
- LocalVar.varname: 类型 LuaString 不可移植
- LuaFunction.source: 类型 LuaString 不可移植
- LuaFile.func: 类型 LuaFunction 不可移植
*/
