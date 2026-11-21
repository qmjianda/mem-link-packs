/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/cab.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 2 项（见文件末尾）
const flags = struct("flags", [
  bits("cfhdrPREV_CABINET", 1, { at: 0, bit: 0, unit: 2, label: "cfhdrPREV_CABINET" }),
  bits("cfhdrNEXT_CABINET", 1, { at: 0, bit: 1, unit: 2, label: "cfhdrNEXT_CABINET" }),
  bits("cfhdrRESERVE_PRESENT", 1, { at: 0, bit: 2, unit: 2, label: "cfhdrRESERVE_PRESENT" }),
]);

const CFFOLDER = struct("CFFOLDER", [
  u32("coffCabStart", {  }),
  u16("cCfData", {  }),
  u8("typeCompress", { values: { "15": "tcompMASK_TYPE", "0": "tcompTYPE_NONE", "1": "tcompTYPE_MSZIP", "2": "tcompTYPE_QUANTUM", "3": "tcompTYPE_LZX" } }),
  u8("compressionLevel", {  }),
]);

const attribs = struct("attribs", [
  bits("_A_RDONLY", 1, { at: 0, bit: 0, unit: 2, label: "_A_RDONLY" }),
  bits("_A_HIDDEN", 1, { at: 0, bit: 1, unit: 2, label: "_A_HIDDEN" }),
  bits("_A_SYSTEM", 1, { at: 0, bit: 2, unit: 2, label: "_A_SYSTEM" }),
  bits("_A_ARCH", 1, { at: 0, bit: 5, unit: 2, label: "_A_ARCH" }),
  bits("_A_EXEC", 1, { at: 0, bit: 6, unit: 2, label: "_A_EXEC" }),
  bits("_A_NAME_IS_UTF", 1, { at: 0, bit: 7, unit: 2, label: "_A_NAME_IS_UTF" }),
]);

const CFDATA = struct("CFDATA", [
  u32("csum", {  }),
]);

export default definePack({
  name: "Microsoft Cabinet (CAB) Files",
  endian: "little",
  pointerSize: 8,
  types: [flags, CFFOLDER, attribs, CFDATA],
  nodes: {
    "entry": structNode(CFFOLDER, { label: "CFFOLDER（入口）" }),
    "flags": structNode(flags, { label: "flags" }),
    "attribs": structNode(attribs, { label: "attribs" }),
    "CFDATA": structNode(CFDATA, { label: "CFDATA" }),
  },
});


/*
未移植项：
- CFFILE.cbFile: 类型 type_Size32 不可移植
- CFDATA.cbData: 类型 type_Size16 不可移植
*/
