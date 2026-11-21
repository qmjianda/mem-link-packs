/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/ffx/all/weapon.bin.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const gearFlags = struct("gearFlags", [
  bits("flag1", 1, { at: 0, bit: 0, unit: 1, label: "flag1" }),
  bits("hidden", 1, { at: 0, bit: 1, unit: 1, label: "hidden" }),
  bits("no_kaizou", 1, { at: 0, bit: 2, unit: 1, label: "no_kaizou" }),
  bits("brotherhood", 1, { at: 0, bit: 3, unit: 1, label: "brotherhood" }),
]);

const Gear = struct("Gear", [
  u16("always_zero1", {  }),
  u8("zero_or_one", {  }),
  record("flags", gearFlags),
  u8("character", {  }),
  bool("armor", {  }),
  u16("always_zero2", {  }),
  u8("formula", {  }),
  u8("power", {  }),
  u8("crit", {  }),
  u8("slots", {  }),
  u8("unk1", {  }),
  u8("unk2", {  }),
  u16("abi_1", {  }),
  u16("abi_2", {  }),
  u16("abi_3", {  }),
  u16("abi_4", {  }),
]);

export default definePack({
  name: "Weapon.Bin",
  endian: "little",
  pointerSize: 8,
  types: [gearFlags, Gear],
  nodes: {
    "entry": structNode(Gear, { label: "Gear（入口）" }),
    "gearFlags": structNode(gearFlags, { label: "gearFlags" }),
  },
});

