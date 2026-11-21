/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/pex.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const PexVersion = struct("PexVersion", [
  u8("MajorVersion", {  }),
  u8("MinorVersion", {  }),
]);

const StringsTable = struct("StringsTable", [
  u16("count", {  }),
]);

const Time = struct("Time", [
  u64("Time", {  }),
]);

const VariableData = struct("VariableData", [
  u8("varType", {  }),
]);

const VariableType = struct("VariableType", [
  u16("name", {  }),
  u16("varType", {  }),
]);

const VariableTypes = struct("VariableTypes", [
  u16("count", {  }),
]);

const Instruction = struct("Instruction", [
  u8("op", {  }),
]);

const Instructions = struct("Instructions", [
  u16("count", {  }),
]);

const BaseFunction = struct("BaseFunction", [
  u16("returnType", {  }),
  u16("docString", {  }),
  u32("userFlags", {  }),
  u8("flags", {  }),
  record("arguments", VariableTypes),
  record("locals", VariableTypes),
  record("instructions", Instructions),
]);

const NamedFunction = struct("NamedFunction", [
  u16("name", {  }),
  record("function", BaseFunction),
]);

const NamedFunctions = struct("NamedFunctions", [
  u16("count", {  }),
]);

const State = struct("State", [
  u16("name", {  }),
  record("functions", NamedFunctions),
]);

const SyncStates = struct("SyncStates", [
  u16("count", {  }),
]);

const States = struct("States", [
  u16("count", {  }),
]);

const Property = struct("Property", [
  u16("name", {  }),
  u16("typeName", {  }),
  u16("docString", {  }),
  u32("userFlags", {  }),
  u8("flags", {  }),
]);

const Properties = struct("Properties", [
  u16("count", {  }),
]);

const Variable = struct("Variable", [
  u16("name", {  }),
  u16("typeName", {  }),
  u32("userFlags", {  }),
  record("data", VariableData),
]);

const Variables = struct("Variables", [
  u16("count", {  }),
]);

const ObjectStructMember = struct("ObjectStructMember", [
  u16("name", {  }),
  u16("typeName", {  }),
  u32("userFlags", {  }),
  record("data", VariableData),
  u8("constFlag", {  }),
  u16("docString", {  }),
]);

const ObjectStructMembers = struct("ObjectStructMembers", [
  u16("count", {  }),
]);

const ObjectStruct = struct("ObjectStruct", [
  u16("name", {  }),
  record("members", ObjectStructMembers),
]);

const ObjectStructs = struct("ObjectStructs", [
  u16("count", {  }),
]);

const Guards = struct("Guards", [
  u16("count", {  }),
]);

const ScriptObjectData = struct("ScriptObjectData", [
  u16("parentClassName", {  }),
  u16("docString", {  }),
]);

const ScriptObject = struct("ScriptObject", [
  u16("name", {  }),
  u32("length", {  }),
  record("data", ScriptObjectData),
]);

const ScriptObjects = struct("ScriptObjects", [
  u16("count", {  }),
]);

const UserFlag = struct("UserFlag", [
  u16("name", {  }),
  u8("flagIndex", {  }),
]);

const UserFlags = struct("UserFlags", [
  u16("count", {  }),
]);

const StringMembers = struct("StringMembers", [
  u16("count", {  }),
]);

const DebugPropertyGroup = struct("DebugPropertyGroup", [
  u16("objectName", {  }),
  u16("name", {  }),
  u16("docString", {  }),
  u32("userFlags", {  }),
  record("members", StringMembers),
]);

const DebugInstructions = struct("DebugInstructions", [
  u16("count", {  }),
]);

const DebugFunction = struct("DebugFunction", [
  u16("objectName", {  }),
  u16("stateName", {  }),
  u16("name", {  }),
  u8("functionType", {  }),
  record("instructions", DebugInstructions),
]);

const DebugStruct = struct("DebugStruct", [
  u16("parentName", {  }),
  u16("name", {  }),
  record("members", StringMembers),
]);

const DebugFunctions = struct("DebugFunctions", [
  u16("count", {  }),
]);

const DebugPropertyGroups = struct("DebugPropertyGroups", [
  u16("count", {  }),
]);

const DebugStructs = struct("DebugStructs", [
  u16("count", {  }),
]);

const DebugInfo = struct("DebugInfo", [
  bool("hasDebugInfo", {  }),
]);

const Header = struct("Header", [
  u32("Magic", {  }),
  record("pexVersion", PexVersion),
  u16("GameID", { values: { "1": "GAME_Skyrim", "2": "GAME_Fallout4", "3": "GAME_Fallout76", "4": "GAME_Starfield" } }),
]);

export default definePack({
  name: "Bethesda Papyrus executable compiled script file",
  endian: "little",
  pointerSize: 8,
  types: [PexVersion, StringsTable, Time, VariableData, VariableType, VariableTypes, Instruction, Instructions, BaseFunction, NamedFunction, NamedFunctions, State, SyncStates, States, Property, Properties, Variable, Variables, ObjectStructMember, ObjectStructMembers, ObjectStruct, ObjectStructs, Guards, ScriptObjectData, ScriptObject, ScriptObjects, UserFlag, UserFlags, StringMembers, DebugPropertyGroup, DebugInstructions, DebugFunction, DebugStruct, DebugFunctions, DebugPropertyGroups, DebugStructs, DebugInfo, Header],
  nodes: {
    "entry": structNode(PexVersion, { label: "PexVersion（入口）" }),
    "StringsTable": structNode(StringsTable, { label: "StringsTable" }),
    "Time": structNode(Time, { label: "Time" }),
    "VariableData": structNode(VariableData, { label: "VariableData" }),
    "VariableType": structNode(VariableType, { label: "VariableType" }),
    "VariableTypes": structNode(VariableTypes, { label: "VariableTypes" }),
    "Instruction": structNode(Instruction, { label: "Instruction" }),
    "Instructions": structNode(Instructions, { label: "Instructions" }),
    "BaseFunction": structNode(BaseFunction, { label: "BaseFunction" }),
    "NamedFunction": structNode(NamedFunction, { label: "NamedFunction" }),
    "NamedFunctions": structNode(NamedFunctions, { label: "NamedFunctions" }),
    "State": structNode(State, { label: "State" }),
    "SyncStates": structNode(SyncStates, { label: "SyncStates" }),
    "States": structNode(States, { label: "States" }),
    "Property": structNode(Property, { label: "Property" }),
    "Properties": structNode(Properties, { label: "Properties" }),
    "Variable": structNode(Variable, { label: "Variable" }),
    "Variables": structNode(Variables, { label: "Variables" }),
    "ObjectStructMember": structNode(ObjectStructMember, { label: "ObjectStructMember" }),
    "ObjectStructMembers": structNode(ObjectStructMembers, { label: "ObjectStructMembers" }),
    "ObjectStruct": structNode(ObjectStruct, { label: "ObjectStruct" }),
    "ObjectStructs": structNode(ObjectStructs, { label: "ObjectStructs" }),
    "Guards": structNode(Guards, { label: "Guards" }),
    "ScriptObjectData": structNode(ScriptObjectData, { label: "ScriptObjectData" }),
    "ScriptObject": structNode(ScriptObject, { label: "ScriptObject" }),
    "ScriptObjects": structNode(ScriptObjects, { label: "ScriptObjects" }),
    "UserFlag": structNode(UserFlag, { label: "UserFlag" }),
    "UserFlags": structNode(UserFlags, { label: "UserFlags" }),
    "StringMembers": structNode(StringMembers, { label: "StringMembers" }),
    "DebugPropertyGroup": structNode(DebugPropertyGroup, { label: "DebugPropertyGroup" }),
    "DebugInstructions": structNode(DebugInstructions, { label: "DebugInstructions" }),
    "DebugFunction": structNode(DebugFunction, { label: "DebugFunction" }),
    "DebugStruct": structNode(DebugStruct, { label: "DebugStruct" }),
    "DebugFunctions": structNode(DebugFunctions, { label: "DebugFunctions" }),
    "DebugPropertyGroups": structNode(DebugPropertyGroups, { label: "DebugPropertyGroups" }),
    "DebugStructs": structNode(DebugStructs, { label: "DebugStructs" }),
    "DebugInfo": structNode(DebugInfo, { label: "DebugInfo" }),
    "Header": structNode(Header, { label: "Header" }),
  },
});

