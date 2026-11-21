/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/ffx/all/buki_get.bin.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const GearProps = struct("GearProps", [
  bits("flag1", 1, { at: 0, bit: 0, unit: 1, label: "flag1" }),
  bits("hidden", 1, { at: 0, bit: 1, unit: 1, label: "hidden" }),
  bits("no_kaizou", 1, { at: 0, bit: 2, unit: 1, label: "no_kaizou" }),
  bits("brotherhood", 1, { at: 0, bit: 3, unit: 1, label: "brotherhood" }),
]);

const Gear = struct("Gear", [
  record("properties", GearProps),
  u8("owner", {  }),
  u8("type", { values: { "0": "Weapon", "1": "Armor" } }),
  u8("dmg_formula", {  }),
  u8("power", {  }),
  u8("crit_bonus", {  }),
  u8("slot_count", {  }),
  array("abilities", "u16", 4),
]);

export default definePack({
  name: "Buki Get.Bin",
  endian: "little",
  pointerSize: 8,
  types: [GearProps, Gear],
  nodes: {
    "entry": structNode(Gear, { label: "Gear（入口）" }),
    "GearProps": structNode(GearProps, { label: "GearProps" }),
  },
});

