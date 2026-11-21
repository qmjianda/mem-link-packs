/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/gtasa_save.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const GTASABlock0 = struct("GTASABlock0", [
  i32("version", {  }),
  pad(120),
  i32("minuteLength", {  }),
  pad(6),
  u8("timeHour", {  }),
  u8("timeMinute", {  }),
  u8("timeDayOfWeek", {  }),
  pad(87),
  bool("riots", {  }),
  pad(13),
  bool("uncensored", {  }),
  pad(69),
  bool("helpStealVehicle", {  }),
  bool("taxiNitro", {  }),
  bool("prostitutesPay", {  }),
]);

const GTASABlock15 = struct("GTASABlock15", [
  pad(4),
  i32("money", {  }),
  pad(8),
  i32("moneyOnScreen", {  }),
  pad(12),
  bool("infiniteRun", {  }),
  bool("fastReload", {  }),
  bool("fireProof", {  }),
  pad(2),
  bool("freeBustedOnce", {  }),
  bool("freeWastedOnce", {  }),
  bool("enableDriveby", {  }),
]);

const GTASABlock16 = struct("GTASABlock16", [
  pad(84),
  f32("fat", {  }),
  f32("stamina", {  }),
  f32("muscle", {  }),
  f32("maxHealth", {  }),
  pad(156),
  f32("respect", {  }),
  pad(16),
  f32("weaponPistol", {  }),
  f32("weaponSilencedPistol", {  }),
  f32("weaponDesertEagle", {  }),
  f32("weaponShotgun", {  }),
  f32("weaponSawnoffShotgun", {  }),
  f32("weaponCombatShotgun", {  }),
  f32("weaponMachinePistol", {  }),
  f32("weaponSmg", {  }),
  f32("weaponAk47", {  }),
  f32("weaponM4", {  }),
  pad(4),
  f32("sexAppeal", {  }),
  f32("gamblingSkill", {  }),
  pad(52),
  i32("timesBusted", {  }),
  i32("daysPassed", {  }),
  i32("timesWasted", {  }),
  pad(4),
  i32("timesCheated", {  }),
  pad(88),
  i32("drivingSkill", {  }),
  pad(80),
  i32("storyLine", {  }),
  pad(164),
  i32("flyingSkill", {  }),
  pad(4),
  i32("lungCapacity", {  }),
  pad(12),
  i32("bikeSkill", {  }),
  i32("cyclingSkill", {  }),
  i32("snapshotsCollected", {  }),
  pad(36),
  i32("horseshoesCollected", {  }),
  pad(4),
  i32("oystersCollected", {  }),
]);

export default definePack({
  name: "GTA San Andreas Save Game",
  endian: "little",
  pointerSize: 8,
  types: [GTASABlock0, GTASABlock15, GTASABlock16],
  nodes: {
    "entry": structNode(GTASABlock0, { label: "GTASABlock0（入口）" }),
    "GTASABlock15": structNode(GTASABlock15, { label: "GTASABlock15" }),
    "GTASABlock16": structNode(GTASABlock16, { label: "GTASABlock16" }),
  },
});

