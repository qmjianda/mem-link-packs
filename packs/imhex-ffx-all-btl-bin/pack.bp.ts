/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/ffx/all/btl.bin.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const FormationData = struct("FormationData", [
  u8("idx", {  }),
  u8("weight", {  }),
]);

const GroupData = struct("GroupData", [
  u8("formation_count", {  }),
  u16("battlefield", {  }),
  u8("danger", {  }),
  u8("total_weight", {  }),
]);

const EncounterData = struct("EncounterData", [
  u8("total_formation_count", {  }),
  u8("group_count", {  }),
]);

const Field = struct("Field", [
  u16("id", {  }),
  u16("data_offset", {  }),
  u16("unk", {  }),
  str("name", { size: 8 }),
]);

export default definePack({
  name: "Btl.Bin",
  endian: "little",
  pointerSize: 8,
  types: [FormationData, GroupData, EncounterData, Field],
  nodes: {
    "entry": structNode(FormationData, { label: "FormationData（入口）" }),
    "GroupData": structNode(GroupData, { label: "GroupData" }),
    "EncounterData": structNode(EncounterData, { label: "EncounterData" }),
    "Field": structNode(Field, { label: "Field" }),
  },
});

