/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/ffx/en/pccom.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const Elements = struct("Elements", [
  bits("fire", 1, { at: 0, bit: 0, unit: 1, label: "fire" }),
  bits("ice", 1, { at: 0, bit: 1, unit: 1, label: "ice" }),
  bits("thunder", 1, { at: 0, bit: 2, unit: 1, label: "thunder" }),
  bits("water", 1, { at: 0, bit: 3, unit: 1, label: "water" }),
  bits("holy", 1, { at: 0, bit: 4, unit: 1, label: "holy" }),
  bits("flag6", 1, { at: 0, bit: 5, unit: 1, label: "flag6" }),
  bits("flag7", 1, { at: 0, bit: 6, unit: 1, label: "flag7" }),
  bits("flag8", 1, { at: 0, bit: 7, unit: 1, label: "flag8" }),
]);

const TargetFlags = struct("TargetFlags", [
  bits("enabled", 1, { at: 0, bit: 0, unit: 1, label: "enabled" }),
  bits("enemies", 1, { at: 0, bit: 1, unit: 1, label: "enemies" }),
  bits("multi", 1, { at: 0, bit: 2, unit: 1, label: "multi" }),
  bits("self_only", 1, { at: 0, bit: 3, unit: 1, label: "self_only" }),
  bits("flag5", 1, { at: 0, bit: 4, unit: 1, label: "flag5" }),
  bits("either_team", 1, { at: 0, bit: 5, unit: 1, label: "either_team" }),
  bits("dead", 1, { at: 0, bit: 6, unit: 1, label: "dead" }),
  bits("flag8", 1, { at: 0, bit: 7, unit: 1, label: "flag8" }),
]);

const MenuPropFlags = struct("MenuPropFlags", [
  bits("top_level_in_menu", 1, { at: 0, bit: 0, unit: 1, label: "top_level_in_menu" }),
  bits("opens_sub_menu", 1, { at: 0, bit: 4, unit: 1, label: "opens_sub_menu" }),
]);

const MiscProps = struct("MiscProps", [
  bits("usable_outside_combat", 1, { at: 0, bit: 0, unit: 4, label: "usable_outside_combat" }),
  bits("usable_in_combat", 1, { at: 0, bit: 1, unit: 4, label: "usable_in_combat" }),
  bits("display_move_name", 1, { at: 0, bit: 2, unit: 4, label: "display_move_name" }),
  bits("flag4", 1, { at: 0, bit: 3, unit: 4, label: "flag4" }),
  bits("can_miss", 1, { at: 0, bit: 4, unit: 4, label: "can_miss" }),
  bits("flag6", 1, { at: 0, bit: 5, unit: 4, label: "flag6" }),
  bits("affected_by_darkness", 1, { at: 0, bit: 6, unit: 4, label: "affected_by_darkness" }),
  bits("can_be_reflected", 1, { at: 0, bit: 7, unit: 4, label: "can_be_reflected" }),
  bits("absorb_dmg", 1, { at: 0, bit: 8, unit: 4, label: "absorb_dmg" }),
  bits("steal_item", 1, { at: 0, bit: 9, unit: 4, label: "steal_item" }),
  bits("in_use_menu", 1, { at: 0, bit: 10, unit: 4, label: "in_use_menu" }),
  bits("in_sub_menu", 1, { at: 0, bit: 11, unit: 4, label: "in_sub_menu" }),
  bits("in_trigger_menu", 1, { at: 0, bit: 12, unit: 4, label: "in_trigger_menu" }),
  bits("inflict_delay_weak", 1, { at: 0, bit: 13, unit: 4, label: "inflict_delay_weak" }),
  bits("inflict_delay_strong", 1, { at: 0, bit: 14, unit: 4, label: "inflict_delay_strong" }),
  bits("random_targets", 1, { at: 0, bit: 15, unit: 4, label: "random_targets" }),
  bits("is_piercing", 1, { at: 0, bit: 16, unit: 4, label: "is_piercing" }),
  bits("affect_by_silence", 1, { at: 0, bit: 17, unit: 4, label: "affect_by_silence" }),
  bits("uses_weapon_props", 1, { at: 0, bit: 18, unit: 4, label: "uses_weapon_props" }),
  bits("is_trigger_command", 1, { at: 0, bit: 19, unit: 4, label: "is_trigger_command" }),
  bits("use_tier1_cast_anim", 1, { at: 0, bit: 20, unit: 4, label: "use_tier1_cast_anim" }),
  bits("use_tier3_cast_anim", 1, { at: 0, bit: 21, unit: 4, label: "use_tier3_cast_anim" }),
  bits("destroy_user", 1, { at: 0, bit: 22, unit: 4, label: "destroy_user" }),
  bits("miss_if_alive", 1, { at: 0, bit: 23, unit: 4, label: "miss_if_alive" }),
]);

const AnimProps = struct("AnimProps", [
  bits("flag1", 1, { at: 0, bit: 0, unit: 1, label: "flag1" }),
  bits("flag2", 1, { at: 0, bit: 1, unit: 1, label: "flag2" }),
  bits("flag3", 1, { at: 0, bit: 2, unit: 1, label: "flag3" }),
  bits("user_runs_off", 1, { at: 0, bit: 3, unit: 1, label: "user_runs_off" }),
  bits("flag5", 1, { at: 0, bit: 4, unit: 1, label: "flag5" }),
  bits("flag6", 1, { at: 0, bit: 5, unit: 1, label: "flag6" }),
  bits("flag7", 1, { at: 0, bit: 6, unit: 1, label: "flag7" }),
  bits("flag8", 1, { at: 0, bit: 7, unit: 1, label: "flag8" }),
]);

const DmgProps = struct("DmgProps", [
  bits("is_physical", 1, { at: 0, bit: 0, unit: 1, label: "is_physical" }),
  bits("is_magical", 1, { at: 0, bit: 1, unit: 1, label: "is_magical" }),
  bits("can_crit", 1, { at: 0, bit: 2, unit: 1, label: "can_crit" }),
  bits("gives_crit_bonus", 1, { at: 0, bit: 3, unit: 1, label: "gives_crit_bonus" }),
  bits("is_healing", 1, { at: 0, bit: 4, unit: 1, label: "is_healing" }),
  bits("is_cleansing", 1, { at: 0, bit: 5, unit: 1, label: "is_cleansing" }),
  bits("supress_bdl", 1, { at: 0, bit: 6, unit: 1, label: "supress_bdl" }),
  bits("break_dmg_limit", 1, { at: 0, bit: 7, unit: 1, label: "break_dmg_limit" }),
]);

const PartyPreviewProps = struct("PartyPreviewProps", [
  bits("uses_preview", 1, { at: 0, bit: 0, unit: 1, label: "uses_preview" }),
  bits("heals_mp", 1, { at: 0, bit: 1, unit: 1, label: "heals_mp" }),
  bits("heal_status", 1, { at: 0, bit: 2, unit: 1, label: "heal_status" }),
  bits("heal_hp", 1, { at: 0, bit: 3, unit: 1, label: "heal_hp" }),
]);

const DamageClass = struct("DamageClass", [
  bits("hp", 1, { at: 0, bit: 0, unit: 1, label: "hp" }),
  bits("mp", 1, { at: 0, bit: 1, unit: 1, label: "mp" }),
  bits("ctb", 1, { at: 0, bit: 2, unit: 1, label: "ctb" }),
  bits("flag4", 1, { at: 0, bit: 3, unit: 1, label: "flag4" }),
]);

const InflictSpecialStatusFlags = struct("InflictSpecialStatusFlags", [
  bits("scan", 1, { at: 0, bit: 0, unit: 2, label: "scan" }),
  bits("distill_power", 1, { at: 0, bit: 1, unit: 2, label: "distill_power" }),
  bits("distill_mana", 1, { at: 0, bit: 2, unit: 2, label: "distill_mana" }),
  bits("distill_speed", 1, { at: 0, bit: 3, unit: 2, label: "distill_speed" }),
  bits("unused1", 1, { at: 0, bit: 4, unit: 2, label: "unused1" }),
  bits("distill_ability", 1, { at: 0, bit: 5, unit: 2, label: "distill_ability" }),
  bits("shield", 1, { at: 0, bit: 6, unit: 2, label: "shield" }),
  bits("boost", 1, { at: 0, bit: 7, unit: 2, label: "boost" }),
  bits("eject", 1, { at: 0, bit: 8, unit: 2, label: "eject" }),
  bits("auto_life", 1, { at: 0, bit: 9, unit: 2, label: "auto_life" }),
  bits("curse", 1, { at: 0, bit: 10, unit: 2, label: "curse" }),
  bits("defend", 1, { at: 0, bit: 11, unit: 2, label: "defend" }),
  bits("guard", 1, { at: 0, bit: 12, unit: 2, label: "guard" }),
  bits("sentinel", 1, { at: 0, bit: 13, unit: 2, label: "sentinel" }),
  bits("doom", 1, { at: 0, bit: 14, unit: 2, label: "doom" }),
  bits("unused2", 1, { at: 0, bit: 15, unit: 2, label: "unused2" }),
]);

const StatBuffFlags = struct("StatBuffFlags", [
  bits("cheer", 1, { at: 0, bit: 0, unit: 1, label: "cheer" }),
  bits("aim", 1, { at: 0, bit: 1, unit: 1, label: "aim" }),
  bits("focus", 1, { at: 0, bit: 2, unit: 1, label: "focus" }),
  bits("reflex", 1, { at: 0, bit: 3, unit: 1, label: "reflex" }),
  bits("luck", 1, { at: 0, bit: 4, unit: 1, label: "luck" }),
  bits("jinx", 1, { at: 0, bit: 5, unit: 1, label: "jinx" }),
  bits("unused1", 1, { at: 0, bit: 6, unit: 1, label: "unused1" }),
  bits("unused2", 1, { at: 0, bit: 7, unit: 1, label: "unused2" }),
]);

const SpecialBuffFlags = struct("SpecialBuffFlags", [
  bits("double_hp", 1, { at: 0, bit: 0, unit: 1, label: "double_hp" }),
  bits("double_mp", 1, { at: 0, bit: 1, unit: 1, label: "double_mp" }),
  bits("spellspring", 1, { at: 0, bit: 2, unit: 1, label: "spellspring" }),
  bits("dmg_9999", 1, { at: 0, bit: 3, unit: 1, label: "dmg_9999" }),
  bits("always_crit", 1, { at: 0, bit: 4, unit: 1, label: "always_crit" }),
  bits("overdrive_150", 1, { at: 0, bit: 5, unit: 1, label: "overdrive_150" }),
  bits("overdrive_200", 1, { at: 0, bit: 6, unit: 1, label: "overdrive_200" }),
  bits("unused1", 1, { at: 0, bit: 7, unit: 1, label: "unused1" }),
]);

const Status = struct("Status", [
  u8("chance_death", {  }),
  u8("chance_zombie", {  }),
  u8("chance_petrify", {  }),
  u8("chance_poison", {  }),
  u8("chance_power_break", {  }),
  u8("chance_magic_break", {  }),
  u8("chance_armor_break", {  }),
  u8("chance_mental_break", {  }),
  u8("chance_confuse", {  }),
  u8("chance_berserk", {  }),
  u8("chance_provoke", {  }),
  u8("chance_threaten", {  }),
  u8("chance_sleep", {  }),
  u8("chance_silence", {  }),
  u8("chance_darkness", {  }),
  u8("chance_shell", {  }),
  u8("chance_protect", {  }),
  u8("chance_reflect", {  }),
  u8("chance_nul_water", {  }),
  u8("chance_nul_fire", {  }),
  u8("chance_nul_thunder", {  }),
  u8("chance_nul_ice", {  }),
  u8("chance_regen", {  }),
  u8("chance_haste", {  }),
  u8("chance_slow", {  }),
  u8("dur_sleep", {  }),
  u8("dur_silence", {  }),
  u8("dur_darkness", {  }),
  u8("dur_shell", {  }),
  u8("dur_protect", {  }),
  u8("dur_reflect", {  }),
  u8("dur_nul_water", {  }),
  u8("dur_nul_fire", {  }),
  u8("dur_nul_thunder", {  }),
  u8("dur_nul_ice", {  }),
  u8("dur_regen", {  }),
  u8("dur_haste", {  }),
  u8("dur_slow", {  }),
]);

const ExtraStatusFlags = struct("ExtraStatusFlags", [
  bits("scan", 1, { at: 0, bit: 0, unit: 2, label: "scan" }),
  bits("distill_power", 1, { at: 0, bit: 1, unit: 2, label: "distill_power" }),
  bits("distill_mana", 1, { at: 0, bit: 2, unit: 2, label: "distill_mana" }),
  bits("distill_speed", 1, { at: 0, bit: 3, unit: 2, label: "distill_speed" }),
  bits("distill_move", 1, { at: 0, bit: 4, unit: 2, label: "distill_move" }),
  bits("distill_ability", 1, { at: 0, bit: 5, unit: 2, label: "distill_ability" }),
  bits("shield", 1, { at: 0, bit: 6, unit: 2, label: "shield" }),
  bits("boost", 1, { at: 0, bit: 7, unit: 2, label: "boost" }),
  bits("eject", 1, { at: 0, bit: 8, unit: 2, label: "eject" }),
  bits("auto_life", 1, { at: 0, bit: 9, unit: 2, label: "auto_life" }),
  bits("curse", 1, { at: 0, bit: 10, unit: 2, label: "curse" }),
  bits("defend", 1, { at: 0, bit: 11, unit: 2, label: "defend" }),
  bits("guard", 1, { at: 0, bit: 12, unit: 2, label: "guard" }),
  bits("sentinel", 1, { at: 0, bit: 13, unit: 2, label: "sentinel" }),
  bits("doom", 1, { at: 0, bit: 14, unit: 2, label: "doom" }),
  bits("unused", 1, { at: 0, bit: 15, unit: 2, label: "unused" }),
]);

export default definePack({
  name: "Pccom",
  endian: "little",
  pointerSize: 8,
  types: [Elements, TargetFlags, MenuPropFlags, MiscProps, AnimProps, DmgProps, PartyPreviewProps, DamageClass, InflictSpecialStatusFlags, StatBuffFlags, SpecialBuffFlags, Status, ExtraStatusFlags],
  nodes: {
    "entry": structNode(Elements, { label: "Elements（入口）" }),
    "TargetFlags": structNode(TargetFlags, { label: "TargetFlags" }),
    "MenuPropFlags": structNode(MenuPropFlags, { label: "MenuPropFlags" }),
    "MiscProps": structNode(MiscProps, { label: "MiscProps" }),
    "AnimProps": structNode(AnimProps, { label: "AnimProps" }),
    "DmgProps": structNode(DmgProps, { label: "DmgProps" }),
    "PartyPreviewProps": structNode(PartyPreviewProps, { label: "PartyPreviewProps" }),
    "DamageClass": structNode(DamageClass, { label: "DamageClass" }),
    "InflictSpecialStatusFlags": structNode(InflictSpecialStatusFlags, { label: "InflictSpecialStatusFlags" }),
    "StatBuffFlags": structNode(StatBuffFlags, { label: "StatBuffFlags" }),
    "SpecialBuffFlags": structNode(SpecialBuffFlags, { label: "SpecialBuffFlags" }),
    "Status": structNode(Status, { label: "Status" }),
    "ExtraStatusFlags": structNode(ExtraStatusFlags, { label: "ExtraStatusFlags" }),
  },
});


/*
未移植项：
- Command.name: 类型 String2 不可移植
*/
