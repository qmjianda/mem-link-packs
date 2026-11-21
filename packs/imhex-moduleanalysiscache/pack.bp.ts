/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/moduleanalysiscache.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const DateTime = struct("DateTime", [
  bytes("time", { size: 8 }),
]);

const ModuleCommandTypesStruct = struct("ModuleCommandTypesStruct", [
  u32("CmdLen", {  }),
]);

const ModuleTypeAttribStruct = struct("ModuleTypeAttribStruct", [
  u32("TypeLen", {  }),
]);

const ModuleDetail = struct("ModuleDetail", [
  u64("date", {  }),
  u32("ModulePathLen", {  }),
]);

const PSModuleCache = struct("PSModuleCache", [
  str("header", { size: 13 }),
]);

export default definePack({
  name: "PSModuleCacheFile (ModuleAnalysisCache)",
  endian: "little",
  pointerSize: 8,
  types: [DateTime, ModuleCommandTypesStruct, ModuleTypeAttribStruct, ModuleDetail, PSModuleCache],
  nodes: {
    "entry": structNode(PSModuleCache, { label: "PSModuleCache（入口）" }),
    "DateTime": structNode(DateTime, { label: "DateTime" }),
    "ModuleCommandTypesStruct": structNode(ModuleCommandTypesStruct, { label: "ModuleCommandTypesStruct" }),
    "ModuleTypeAttribStruct": structNode(ModuleTypeAttribStruct, { label: "ModuleTypeAttribStruct" }),
    "ModuleDetail": structNode(ModuleDetail, { label: "ModuleDetail" }),
  },
});

