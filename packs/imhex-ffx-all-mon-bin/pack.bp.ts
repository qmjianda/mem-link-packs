/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/ffx/all/mon.bin.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const Oper = struct("Oper", [
  u8("opcode", { values: { "0": "NOP", "1": "OPLOR", "2": "OPLAND", "3": "OPOR", "4": "OPEOR", "5": "OPAND", "6": "OPEQ", "7": "OPNE", "8": "OPGTU", "9": "OPLSU", "10": "OPGT", "11": "OPLS", "12": "OPGTEU", "13": "OPLSEU", "14": "OPGTE", "15": "OPLSE", "16": "OPBON", "17": "OPBOFF", "18": "OPSLL", "19": "OPSRL", "20": "OPADD", "21": "OPSUB", "22": "OPMUL", "23": "OPDIV", "24": "OPMOD", "25": "OPNOT", "26": "OPUMINUS", "27": "OPFIXADRS", "28": "OPBNOT", "157": "LABEL", "158": "TAG", "159": "PUSHV", "160": "POPV", "161": "POPVL", "162": "PUSHAR", "163": "POPAR", "164": "POPARL", "37": "POPA", "38": "PUSHA", "167": "PUSHARP", "40": "PUSHX", "41": "PUSHY", "42": "POPX", "43": "REPUSH", "44": "POPY", "173": "PUSHI", "174": "PUSHII", "175": "PUSHF", "176": "JMP", "177": "CJMP", "178": "NCJMP", "179": "JSR", "52": "RTS", "181": "CALL", "54": "REQ", "55": "REQSW", "56": "REQEW", "57": "PREQ", "58": "PREQSW", "59": "PREQEW", "60": "RET", "61": "RETN", "62": "RETT", "63": "RETTN", "64": "HALT", "193": "PUSHN", "194": "PUSHT", "195": "PUSHVP", "196": "PUSHFIX", "69": "FREQ", "70": "TREQ", "71": "BREQ", "72": "BFREQ", "73": "BTREQ", "74": "FREQSW", "75": "TREQSW", "76": "BREQSW", "77": "BFREQSW", "78": "BTREQSW", "79": "FREQEW", "80": "TREQEW", "81": "BREQEW", "82": "BFREQEW", "83": "BTREQEW", "84": "DRET", "213": "POPXJMP", "214": "POPXCJMP", "215": "POPXNCJMP", "216": "CALLPOPA", "89": "POPI0", "90": "POPI1", "91": "POPI2", "92": "POPI3", "93": "POPF0", "94": "POPF1", "95": "POPF2", "96": "POPF3", "97": "POPF4", "98": "POPF5", "99": "POPF6", "100": "POPF7", "101": "POPF8", "102": "POPF9", "103": "PUSHI0", "104": "PUSHI1", "105": "PUSHI2", "106": "PUSHI3", "107": "PUSHF0", "108": "PUSHF1", "109": "PUSHF2", "110": "PUSHF3", "111": "PUSHF4", "112": "PUSHF5", "113": "PUSHF6", "114": "PUSHF7", "115": "PUSHF8", "116": "PUSHF9", "245": "PUSHAINTER", "246": "SYSTEM", "119": "REQWAIT", "120": "PREQWAIT", "121": "REQCHG", "122": "ACTREQ" } }),
]);

const ScriptHeader = struct("ScriptHeader", [
  u16("script_type", {  }),
  u16("var_count", {  }),
  u16("ref_int_count", {  }),
  u16("ref_float_count", {  }),
  u16("entry_point_count", {  }),
  u16("jump_count", {  }),
  pad(4),
  u32("priv_data_len", {  }),
  u32("var_table_offset", {  }),
  u32("int_table_offset", {  }),
  u32("float_table_offset", {  }),
  u32("script_begin_table_offset", {  }),
  u32("jumps_begin_table_offset", {  }),
  pad(4),
  u32("priv_data_offset", {  }),
  u32("shared_data_offset", {  }),
]);

const WeirdBlock = struct("WeirdBlock", [
  u32("len", {  }),
]);

const SecondWeirdBlock = struct("SecondWeirdBlock", [
  u32("len", {  }),
]);

const ScriptChunk = struct("ScriptChunk", [
  u32("code_length", {  }),
  u32("map_start", {  }),
  u32("author_offset", {  }),
  u32("name_offset", {  }),
  u32("jumps_end_offset", {  }),
  u16("unk4", {  }),
  u16("unk5", {  }),
  u16("main_script_idx", {  }),
  u16("unk6", {  }),
  u16("unk7", {  }),
  u16("zone_bytes", {  }),
  u32("event_data_offset", {  }),
  u32("unk8", {  }),
  u32("area_offset", {  }),
  u32("other_offset", {  }),
  u32("code_offset", {  }),
  u16("script_num", {  }),
  u16("script_num_except_subroutines", {  }),
]);

const ScriptDataEntry = struct("ScriptDataEntry", [
  u8("script_idx", {  }),
  u8("script_type", {  }),
  u16("entry_points_offset", {  }),
]);

const AiEntries = struct("AiEntries", [
  u16("on_turn", {  }),
  u16("pre_turn", {  }),
  u16("on_targetted", {  }),
  u16("on_hit", {  }),
  u16("on_death", {  }),
  u16("on_attack", {  }),
  u16("pre_poison_tick", {  }),
  u16("unk", {  }),
  u16("post_poison_tick", {  }),
  pad(24),
]);

const ScriptDataChunk = struct("ScriptDataChunk", [
  u8("script_count", {  }),
  pad(3),
  bytes("a1", { size: 28 }),
  pad(1),
  bytes("a2", { size: 15 }),
  pad(5),
  pad(2),
  pad(14),
  bytes("a3", { size: 28 }),
  pad(2),
  bytes("a4", { size: 28 }),
  pad(1),
]);

const MonProps = struct("MonProps", [
  bits("armored", 1, { at: 0, bit: 0, unit: 2, label: "armored" }),
  bits("immune_fractional_dmg", 1, { at: 0, bit: 1, unit: 2, label: "immune_fractional_dmg" }),
  bits("immune_life", 1, { at: 0, bit: 2, unit: 2, label: "immune_life" }),
  bits("immune_sensor", 1, { at: 0, bit: 3, unit: 2, label: "immune_sensor" }),
  bits("immune_phys_dmg", 1, { at: 0, bit: 5, unit: 2, label: "immune_phys_dmg" }),
  bits("immune_mag_dmg", 1, { at: 0, bit: 6, unit: 2, label: "immune_mag_dmg" }),
  bits("immune_delay", 1, { at: 0, bit: 8, unit: 2, label: "immune_delay" }),
]);

const Elements = struct("Elements", [
  bits("fire", 1, { at: 0, bit: 0, unit: 1, label: "fire" }),
  bits("ice", 1, { at: 0, bit: 1, unit: 1, label: "ice" }),
  bits("thunder", 1, { at: 0, bit: 2, unit: 1, label: "thunder" }),
  bits("water", 1, { at: 0, bit: 3, unit: 1, label: "water" }),
  bits("holy", 1, { at: 0, bit: 4, unit: 1, label: "holy" }),
]);

const Status = struct("Status", [
  u8("death", {  }),
  u8("zombie", {  }),
  u8("petrify", {  }),
  u8("poison", {  }),
  u8("power_break", {  }),
  u8("magic_break", {  }),
  u8("armor_break", {  }),
  u8("mental_break", {  }),
  u8("confuse", {  }),
  u8("berserk", {  }),
  u8("provoke", {  }),
  u8("threaten", {  }),
  u8("sleep", {  }),
  u8("silence", {  }),
  u8("darkness", {  }),
  u8("shell", {  }),
  u8("protect", {  }),
  u8("reflect", {  }),
  u8("nul_water", {  }),
  u8("nul_fire", {  }),
  u8("nul_thunder", {  }),
  u8("nul_ice", {  }),
  u8("regen", {  }),
  u8("haste", {  }),
  u8("slow", {  }),
]);

const AutoStatus = struct("AutoStatus", [
  bits("death", 1, { at: 0, bit: 0, unit: 4, label: "death" }),
  bits("zombie", 1, { at: 0, bit: 1, unit: 4, label: "zombie" }),
  bits("petrify", 1, { at: 0, bit: 2, unit: 4, label: "petrify" }),
  bits("poison", 1, { at: 0, bit: 3, unit: 4, label: "poison" }),
  bits("power_break", 1, { at: 0, bit: 4, unit: 4, label: "power_break" }),
  bits("magic_break", 1, { at: 0, bit: 5, unit: 4, label: "magic_break" }),
  bits("armor_break", 1, { at: 0, bit: 6, unit: 4, label: "armor_break" }),
  bits("mental_break", 1, { at: 0, bit: 7, unit: 4, label: "mental_break" }),
  bits("confuse", 1, { at: 0, bit: 8, unit: 4, label: "confuse" }),
  bits("berserk", 1, { at: 0, bit: 9, unit: 4, label: "berserk" }),
  bits("provoke", 1, { at: 0, bit: 10, unit: 4, label: "provoke" }),
  bits("threaten", 1, { at: 0, bit: 11, unit: 4, label: "threaten" }),
  bits("sleep", 1, { at: 0, bit: 12, unit: 4, label: "sleep" }),
  bits("silence", 1, { at: 0, bit: 13, unit: 4, label: "silence" }),
  bits("darkness", 1, { at: 0, bit: 14, unit: 4, label: "darkness" }),
  bits("shell", 1, { at: 0, bit: 19, unit: 4, label: "shell" }),
  bits("protect", 1, { at: 0, bit: 20, unit: 4, label: "protect" }),
  bits("reflect", 1, { at: 0, bit: 21, unit: 4, label: "reflect" }),
  bits("nul_water", 1, { at: 0, bit: 22, unit: 4, label: "nul_water" }),
  bits("nul_fire", 1, { at: 0, bit: 23, unit: 4, label: "nul_fire" }),
  bits("nul_thunder", 1, { at: 0, bit: 24, unit: 4, label: "nul_thunder" }),
  bits("nul_ice", 1, { at: 0, bit: 25, unit: 4, label: "nul_ice" }),
  bits("regen", 1, { at: 0, bit: 26, unit: 4, label: "regen" }),
  bits("haste", 1, { at: 0, bit: 27, unit: 4, label: "haste" }),
  bits("slow", 1, { at: 0, bit: 28, unit: 4, label: "slow" }),
]);

const ExtraImmunities = struct("ExtraImmunities", [
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
]);

const Spoils = struct("Spoils", [
  u16("item_primary_common", { values: { "0": "Null", "255": "None", "8192": "Potion", "8193": "HiPotion", "8194": "XPotion", "8195": "MegaPotion", "8196": "Ether", "8197": "TurboEther", "8198": "PhoenixDown", "8199": "MegaPhoenix", "8200": "Elixir", "8201": "Megalixir", "8202": "Antidote", "8203": "Soft", "8204": "EyeDrops", "8205": "EchoScreen", "8206": "HolyWater", "8207": "Remedy", "8208": "PowerDistiller", "8209": "ManaDistiller", "8210": "SpeedDistiller", "8211": "AbilityDistiller", "8212": "AlBhedPotion", "8213": "HealingWater", "8214": "TetraElemental", "8215": "AntarcticWind", "8216": "ArcticWind", "8217": "IceGem", "8218": "BombFragment", "8219": "BombCore", "8220": "FireGem", "8221": "ElectroMarble", "8222": "LightningMarble", "8223": "LightningGem", "8224": "FishScale", "8225": "DragonScale", "8226": "WaterGem", "8227": "Grenade", "8228": "FragGrenade", "8229": "SleepingPowder", "8230": "DreamPowder", "8231": "SilenceGrenade", "8232": "SmokeBomb", "8233": "ShadowGem", "8234": "ShiningGem", "8235": "BlessedGem", "8236": "SupremeGem", "8237": "PoisonFang", "8238": "SilverHourglass", "8239": "GoldHourglass", "8240": "CandleOfLife", "8241": "PetrifyGrenade", "8242": "FarplaneShadow", "8243": "FarplaneWind", "8244": "DesignerWallet", "8245": "DarkMatter", "8246": "ChocoboFeather", "8247": "ChocoboWing", "8248": "LunarCurtain", "8249": "LightCurtain", "8250": "StarCurtain", "8251": "HealingSpring", "8252": "ManaSpring", "8253": "StaminaSpring", "8254": "SoulSpring", "8255": "PurifyingSalt", "8256": "StaminaTablet", "8257": "ManaTablet", "8258": "TwinStars", "8259": "StaminaTonic", "8260": "ManaTonic", "8261": "ThreeStars", "8262": "PowerSphere", "8263": "ManaSphere", "8264": "SpeedSphere", "8265": "AbilitySphere", "8266": "FortuneSphere", "8267": "AttributteSphere", "8268": "SpecialSphere", "8269": "SkillSphere", "8270": "WhtMagicSphere", "8271": "BlkMagicSphere", "8272": "MasterSphere", "8273": "Lv1KeySphere", "8274": "Lv2KeySphere", "8275": "Lv3KeySphere", "8276": "Lv4KeySphere", "8277": "HpSphere", "8278": "MpSphere", "8279": "StrengthSphere", "8280": "DefenseSphere", "8281": "MagicSphere", "8282": "MagicDefSphere", "8283": "AgilitySphere", "8284": "EvasionSphere", "8285": "AccuracySphere", "8286": "LuckSphere", "8287": "ClearSphere", "8288": "ReturnSphere", "8289": "FriendSphere", "8290": "TeleportSphere", "8291": "WarpSphere", "8292": "Map", "8293": "RenameCard", "8294": "Musk", "8295": "HypelloPotion", "8296": "ShiningThorn", "8297": "Pendulum", "8298": "Amulet", "8299": "DoorToTomorrow", "8300": "WingsToDiscovery", "8301": "GamblersSpirit", "8302": "UnderdogsSecret", "8303": "WinningFormula" } }),
  u16("item_primary_rare", { values: { "0": "Null", "255": "None", "8192": "Potion", "8193": "HiPotion", "8194": "XPotion", "8195": "MegaPotion", "8196": "Ether", "8197": "TurboEther", "8198": "PhoenixDown", "8199": "MegaPhoenix", "8200": "Elixir", "8201": "Megalixir", "8202": "Antidote", "8203": "Soft", "8204": "EyeDrops", "8205": "EchoScreen", "8206": "HolyWater", "8207": "Remedy", "8208": "PowerDistiller", "8209": "ManaDistiller", "8210": "SpeedDistiller", "8211": "AbilityDistiller", "8212": "AlBhedPotion", "8213": "HealingWater", "8214": "TetraElemental", "8215": "AntarcticWind", "8216": "ArcticWind", "8217": "IceGem", "8218": "BombFragment", "8219": "BombCore", "8220": "FireGem", "8221": "ElectroMarble", "8222": "LightningMarble", "8223": "LightningGem", "8224": "FishScale", "8225": "DragonScale", "8226": "WaterGem", "8227": "Grenade", "8228": "FragGrenade", "8229": "SleepingPowder", "8230": "DreamPowder", "8231": "SilenceGrenade", "8232": "SmokeBomb", "8233": "ShadowGem", "8234": "ShiningGem", "8235": "BlessedGem", "8236": "SupremeGem", "8237": "PoisonFang", "8238": "SilverHourglass", "8239": "GoldHourglass", "8240": "CandleOfLife", "8241": "PetrifyGrenade", "8242": "FarplaneShadow", "8243": "FarplaneWind", "8244": "DesignerWallet", "8245": "DarkMatter", "8246": "ChocoboFeather", "8247": "ChocoboWing", "8248": "LunarCurtain", "8249": "LightCurtain", "8250": "StarCurtain", "8251": "HealingSpring", "8252": "ManaSpring", "8253": "StaminaSpring", "8254": "SoulSpring", "8255": "PurifyingSalt", "8256": "StaminaTablet", "8257": "ManaTablet", "8258": "TwinStars", "8259": "StaminaTonic", "8260": "ManaTonic", "8261": "ThreeStars", "8262": "PowerSphere", "8263": "ManaSphere", "8264": "SpeedSphere", "8265": "AbilitySphere", "8266": "FortuneSphere", "8267": "AttributteSphere", "8268": "SpecialSphere", "8269": "SkillSphere", "8270": "WhtMagicSphere", "8271": "BlkMagicSphere", "8272": "MasterSphere", "8273": "Lv1KeySphere", "8274": "Lv2KeySphere", "8275": "Lv3KeySphere", "8276": "Lv4KeySphere", "8277": "HpSphere", "8278": "MpSphere", "8279": "StrengthSphere", "8280": "DefenseSphere", "8281": "MagicSphere", "8282": "MagicDefSphere", "8283": "AgilitySphere", "8284": "EvasionSphere", "8285": "AccuracySphere", "8286": "LuckSphere", "8287": "ClearSphere", "8288": "ReturnSphere", "8289": "FriendSphere", "8290": "TeleportSphere", "8291": "WarpSphere", "8292": "Map", "8293": "RenameCard", "8294": "Musk", "8295": "HypelloPotion", "8296": "ShiningThorn", "8297": "Pendulum", "8298": "Amulet", "8299": "DoorToTomorrow", "8300": "WingsToDiscovery", "8301": "GamblersSpirit", "8302": "UnderdogsSecret", "8303": "WinningFormula" } }),
  u16("item_secondary_common", { values: { "0": "Null", "255": "None", "8192": "Potion", "8193": "HiPotion", "8194": "XPotion", "8195": "MegaPotion", "8196": "Ether", "8197": "TurboEther", "8198": "PhoenixDown", "8199": "MegaPhoenix", "8200": "Elixir", "8201": "Megalixir", "8202": "Antidote", "8203": "Soft", "8204": "EyeDrops", "8205": "EchoScreen", "8206": "HolyWater", "8207": "Remedy", "8208": "PowerDistiller", "8209": "ManaDistiller", "8210": "SpeedDistiller", "8211": "AbilityDistiller", "8212": "AlBhedPotion", "8213": "HealingWater", "8214": "TetraElemental", "8215": "AntarcticWind", "8216": "ArcticWind", "8217": "IceGem", "8218": "BombFragment", "8219": "BombCore", "8220": "FireGem", "8221": "ElectroMarble", "8222": "LightningMarble", "8223": "LightningGem", "8224": "FishScale", "8225": "DragonScale", "8226": "WaterGem", "8227": "Grenade", "8228": "FragGrenade", "8229": "SleepingPowder", "8230": "DreamPowder", "8231": "SilenceGrenade", "8232": "SmokeBomb", "8233": "ShadowGem", "8234": "ShiningGem", "8235": "BlessedGem", "8236": "SupremeGem", "8237": "PoisonFang", "8238": "SilverHourglass", "8239": "GoldHourglass", "8240": "CandleOfLife", "8241": "PetrifyGrenade", "8242": "FarplaneShadow", "8243": "FarplaneWind", "8244": "DesignerWallet", "8245": "DarkMatter", "8246": "ChocoboFeather", "8247": "ChocoboWing", "8248": "LunarCurtain", "8249": "LightCurtain", "8250": "StarCurtain", "8251": "HealingSpring", "8252": "ManaSpring", "8253": "StaminaSpring", "8254": "SoulSpring", "8255": "PurifyingSalt", "8256": "StaminaTablet", "8257": "ManaTablet", "8258": "TwinStars", "8259": "StaminaTonic", "8260": "ManaTonic", "8261": "ThreeStars", "8262": "PowerSphere", "8263": "ManaSphere", "8264": "SpeedSphere", "8265": "AbilitySphere", "8266": "FortuneSphere", "8267": "AttributteSphere", "8268": "SpecialSphere", "8269": "SkillSphere", "8270": "WhtMagicSphere", "8271": "BlkMagicSphere", "8272": "MasterSphere", "8273": "Lv1KeySphere", "8274": "Lv2KeySphere", "8275": "Lv3KeySphere", "8276": "Lv4KeySphere", "8277": "HpSphere", "8278": "MpSphere", "8279": "StrengthSphere", "8280": "DefenseSphere", "8281": "MagicSphere", "8282": "MagicDefSphere", "8283": "AgilitySphere", "8284": "EvasionSphere", "8285": "AccuracySphere", "8286": "LuckSphere", "8287": "ClearSphere", "8288": "ReturnSphere", "8289": "FriendSphere", "8290": "TeleportSphere", "8291": "WarpSphere", "8292": "Map", "8293": "RenameCard", "8294": "Musk", "8295": "HypelloPotion", "8296": "ShiningThorn", "8297": "Pendulum", "8298": "Amulet", "8299": "DoorToTomorrow", "8300": "WingsToDiscovery", "8301": "GamblersSpirit", "8302": "UnderdogsSecret", "8303": "WinningFormula" } }),
  u16("item_secondary_rare", { values: { "0": "Null", "255": "None", "8192": "Potion", "8193": "HiPotion", "8194": "XPotion", "8195": "MegaPotion", "8196": "Ether", "8197": "TurboEther", "8198": "PhoenixDown", "8199": "MegaPhoenix", "8200": "Elixir", "8201": "Megalixir", "8202": "Antidote", "8203": "Soft", "8204": "EyeDrops", "8205": "EchoScreen", "8206": "HolyWater", "8207": "Remedy", "8208": "PowerDistiller", "8209": "ManaDistiller", "8210": "SpeedDistiller", "8211": "AbilityDistiller", "8212": "AlBhedPotion", "8213": "HealingWater", "8214": "TetraElemental", "8215": "AntarcticWind", "8216": "ArcticWind", "8217": "IceGem", "8218": "BombFragment", "8219": "BombCore", "8220": "FireGem", "8221": "ElectroMarble", "8222": "LightningMarble", "8223": "LightningGem", "8224": "FishScale", "8225": "DragonScale", "8226": "WaterGem", "8227": "Grenade", "8228": "FragGrenade", "8229": "SleepingPowder", "8230": "DreamPowder", "8231": "SilenceGrenade", "8232": "SmokeBomb", "8233": "ShadowGem", "8234": "ShiningGem", "8235": "BlessedGem", "8236": "SupremeGem", "8237": "PoisonFang", "8238": "SilverHourglass", "8239": "GoldHourglass", "8240": "CandleOfLife", "8241": "PetrifyGrenade", "8242": "FarplaneShadow", "8243": "FarplaneWind", "8244": "DesignerWallet", "8245": "DarkMatter", "8246": "ChocoboFeather", "8247": "ChocoboWing", "8248": "LunarCurtain", "8249": "LightCurtain", "8250": "StarCurtain", "8251": "HealingSpring", "8252": "ManaSpring", "8253": "StaminaSpring", "8254": "SoulSpring", "8255": "PurifyingSalt", "8256": "StaminaTablet", "8257": "ManaTablet", "8258": "TwinStars", "8259": "StaminaTonic", "8260": "ManaTonic", "8261": "ThreeStars", "8262": "PowerSphere", "8263": "ManaSphere", "8264": "SpeedSphere", "8265": "AbilitySphere", "8266": "FortuneSphere", "8267": "AttributteSphere", "8268": "SpecialSphere", "8269": "SkillSphere", "8270": "WhtMagicSphere", "8271": "BlkMagicSphere", "8272": "MasterSphere", "8273": "Lv1KeySphere", "8274": "Lv2KeySphere", "8275": "Lv3KeySphere", "8276": "Lv4KeySphere", "8277": "HpSphere", "8278": "MpSphere", "8279": "StrengthSphere", "8280": "DefenseSphere", "8281": "MagicSphere", "8282": "MagicDefSphere", "8283": "AgilitySphere", "8284": "EvasionSphere", "8285": "AccuracySphere", "8286": "LuckSphere", "8287": "ClearSphere", "8288": "ReturnSphere", "8289": "FriendSphere", "8290": "TeleportSphere", "8291": "WarpSphere", "8292": "Map", "8293": "RenameCard", "8294": "Musk", "8295": "HypelloPotion", "8296": "ShiningThorn", "8297": "Pendulum", "8298": "Amulet", "8299": "DoorToTomorrow", "8300": "WingsToDiscovery", "8301": "GamblersSpirit", "8302": "UnderdogsSecret", "8303": "WinningFormula" } }),
  u8("amount_primary_common", {  }),
  u8("amount_primary_rare", {  }),
  u8("amount_secondary_common", {  }),
  u8("amount_secondary_rare", {  }),
]);

const StealSpoils = struct("StealSpoils", [
  u16("item_common", { values: { "0": "Null", "255": "None", "8192": "Potion", "8193": "HiPotion", "8194": "XPotion", "8195": "MegaPotion", "8196": "Ether", "8197": "TurboEther", "8198": "PhoenixDown", "8199": "MegaPhoenix", "8200": "Elixir", "8201": "Megalixir", "8202": "Antidote", "8203": "Soft", "8204": "EyeDrops", "8205": "EchoScreen", "8206": "HolyWater", "8207": "Remedy", "8208": "PowerDistiller", "8209": "ManaDistiller", "8210": "SpeedDistiller", "8211": "AbilityDistiller", "8212": "AlBhedPotion", "8213": "HealingWater", "8214": "TetraElemental", "8215": "AntarcticWind", "8216": "ArcticWind", "8217": "IceGem", "8218": "BombFragment", "8219": "BombCore", "8220": "FireGem", "8221": "ElectroMarble", "8222": "LightningMarble", "8223": "LightningGem", "8224": "FishScale", "8225": "DragonScale", "8226": "WaterGem", "8227": "Grenade", "8228": "FragGrenade", "8229": "SleepingPowder", "8230": "DreamPowder", "8231": "SilenceGrenade", "8232": "SmokeBomb", "8233": "ShadowGem", "8234": "ShiningGem", "8235": "BlessedGem", "8236": "SupremeGem", "8237": "PoisonFang", "8238": "SilverHourglass", "8239": "GoldHourglass", "8240": "CandleOfLife", "8241": "PetrifyGrenade", "8242": "FarplaneShadow", "8243": "FarplaneWind", "8244": "DesignerWallet", "8245": "DarkMatter", "8246": "ChocoboFeather", "8247": "ChocoboWing", "8248": "LunarCurtain", "8249": "LightCurtain", "8250": "StarCurtain", "8251": "HealingSpring", "8252": "ManaSpring", "8253": "StaminaSpring", "8254": "SoulSpring", "8255": "PurifyingSalt", "8256": "StaminaTablet", "8257": "ManaTablet", "8258": "TwinStars", "8259": "StaminaTonic", "8260": "ManaTonic", "8261": "ThreeStars", "8262": "PowerSphere", "8263": "ManaSphere", "8264": "SpeedSphere", "8265": "AbilitySphere", "8266": "FortuneSphere", "8267": "AttributteSphere", "8268": "SpecialSphere", "8269": "SkillSphere", "8270": "WhtMagicSphere", "8271": "BlkMagicSphere", "8272": "MasterSphere", "8273": "Lv1KeySphere", "8274": "Lv2KeySphere", "8275": "Lv3KeySphere", "8276": "Lv4KeySphere", "8277": "HpSphere", "8278": "MpSphere", "8279": "StrengthSphere", "8280": "DefenseSphere", "8281": "MagicSphere", "8282": "MagicDefSphere", "8283": "AgilitySphere", "8284": "EvasionSphere", "8285": "AccuracySphere", "8286": "LuckSphere", "8287": "ClearSphere", "8288": "ReturnSphere", "8289": "FriendSphere", "8290": "TeleportSphere", "8291": "WarpSphere", "8292": "Map", "8293": "RenameCard", "8294": "Musk", "8295": "HypelloPotion", "8296": "ShiningThorn", "8297": "Pendulum", "8298": "Amulet", "8299": "DoorToTomorrow", "8300": "WingsToDiscovery", "8301": "GamblersSpirit", "8302": "UnderdogsSecret", "8303": "WinningFormula" } }),
  u16("item_rare", { values: { "0": "Null", "255": "None", "8192": "Potion", "8193": "HiPotion", "8194": "XPotion", "8195": "MegaPotion", "8196": "Ether", "8197": "TurboEther", "8198": "PhoenixDown", "8199": "MegaPhoenix", "8200": "Elixir", "8201": "Megalixir", "8202": "Antidote", "8203": "Soft", "8204": "EyeDrops", "8205": "EchoScreen", "8206": "HolyWater", "8207": "Remedy", "8208": "PowerDistiller", "8209": "ManaDistiller", "8210": "SpeedDistiller", "8211": "AbilityDistiller", "8212": "AlBhedPotion", "8213": "HealingWater", "8214": "TetraElemental", "8215": "AntarcticWind", "8216": "ArcticWind", "8217": "IceGem", "8218": "BombFragment", "8219": "BombCore", "8220": "FireGem", "8221": "ElectroMarble", "8222": "LightningMarble", "8223": "LightningGem", "8224": "FishScale", "8225": "DragonScale", "8226": "WaterGem", "8227": "Grenade", "8228": "FragGrenade", "8229": "SleepingPowder", "8230": "DreamPowder", "8231": "SilenceGrenade", "8232": "SmokeBomb", "8233": "ShadowGem", "8234": "ShiningGem", "8235": "BlessedGem", "8236": "SupremeGem", "8237": "PoisonFang", "8238": "SilverHourglass", "8239": "GoldHourglass", "8240": "CandleOfLife", "8241": "PetrifyGrenade", "8242": "FarplaneShadow", "8243": "FarplaneWind", "8244": "DesignerWallet", "8245": "DarkMatter", "8246": "ChocoboFeather", "8247": "ChocoboWing", "8248": "LunarCurtain", "8249": "LightCurtain", "8250": "StarCurtain", "8251": "HealingSpring", "8252": "ManaSpring", "8253": "StaminaSpring", "8254": "SoulSpring", "8255": "PurifyingSalt", "8256": "StaminaTablet", "8257": "ManaTablet", "8258": "TwinStars", "8259": "StaminaTonic", "8260": "ManaTonic", "8261": "ThreeStars", "8262": "PowerSphere", "8263": "ManaSphere", "8264": "SpeedSphere", "8265": "AbilitySphere", "8266": "FortuneSphere", "8267": "AttributteSphere", "8268": "SpecialSphere", "8269": "SkillSphere", "8270": "WhtMagicSphere", "8271": "BlkMagicSphere", "8272": "MasterSphere", "8273": "Lv1KeySphere", "8274": "Lv2KeySphere", "8275": "Lv3KeySphere", "8276": "Lv4KeySphere", "8277": "HpSphere", "8278": "MpSphere", "8279": "StrengthSphere", "8280": "DefenseSphere", "8281": "MagicSphere", "8282": "MagicDefSphere", "8283": "AgilitySphere", "8284": "EvasionSphere", "8285": "AccuracySphere", "8286": "LuckSphere", "8287": "ClearSphere", "8288": "ReturnSphere", "8289": "FriendSphere", "8290": "TeleportSphere", "8291": "WarpSphere", "8292": "Map", "8293": "RenameCard", "8294": "Musk", "8295": "HypelloPotion", "8296": "ShiningThorn", "8297": "Pendulum", "8298": "Amulet", "8299": "DoorToTomorrow", "8300": "WingsToDiscovery", "8301": "GamblersSpirit", "8302": "UnderdogsSecret", "8303": "WinningFormula" } }),
  u8("amount_common", {  }),
  u8("amount_rare", {  }),
  u16("item_bribe", { values: { "0": "Null", "255": "None", "8192": "Potion", "8193": "HiPotion", "8194": "XPotion", "8195": "MegaPotion", "8196": "Ether", "8197": "TurboEther", "8198": "PhoenixDown", "8199": "MegaPhoenix", "8200": "Elixir", "8201": "Megalixir", "8202": "Antidote", "8203": "Soft", "8204": "EyeDrops", "8205": "EchoScreen", "8206": "HolyWater", "8207": "Remedy", "8208": "PowerDistiller", "8209": "ManaDistiller", "8210": "SpeedDistiller", "8211": "AbilityDistiller", "8212": "AlBhedPotion", "8213": "HealingWater", "8214": "TetraElemental", "8215": "AntarcticWind", "8216": "ArcticWind", "8217": "IceGem", "8218": "BombFragment", "8219": "BombCore", "8220": "FireGem", "8221": "ElectroMarble", "8222": "LightningMarble", "8223": "LightningGem", "8224": "FishScale", "8225": "DragonScale", "8226": "WaterGem", "8227": "Grenade", "8228": "FragGrenade", "8229": "SleepingPowder", "8230": "DreamPowder", "8231": "SilenceGrenade", "8232": "SmokeBomb", "8233": "ShadowGem", "8234": "ShiningGem", "8235": "BlessedGem", "8236": "SupremeGem", "8237": "PoisonFang", "8238": "SilverHourglass", "8239": "GoldHourglass", "8240": "CandleOfLife", "8241": "PetrifyGrenade", "8242": "FarplaneShadow", "8243": "FarplaneWind", "8244": "DesignerWallet", "8245": "DarkMatter", "8246": "ChocoboFeather", "8247": "ChocoboWing", "8248": "LunarCurtain", "8249": "LightCurtain", "8250": "StarCurtain", "8251": "HealingSpring", "8252": "ManaSpring", "8253": "StaminaSpring", "8254": "SoulSpring", "8255": "PurifyingSalt", "8256": "StaminaTablet", "8257": "ManaTablet", "8258": "TwinStars", "8259": "StaminaTonic", "8260": "ManaTonic", "8261": "ThreeStars", "8262": "PowerSphere", "8263": "ManaSphere", "8264": "SpeedSphere", "8265": "AbilitySphere", "8266": "FortuneSphere", "8267": "AttributteSphere", "8268": "SpecialSphere", "8269": "SkillSphere", "8270": "WhtMagicSphere", "8271": "BlkMagicSphere", "8272": "MasterSphere", "8273": "Lv1KeySphere", "8274": "Lv2KeySphere", "8275": "Lv3KeySphere", "8276": "Lv4KeySphere", "8277": "HpSphere", "8278": "MpSphere", "8279": "StrengthSphere", "8280": "DefenseSphere", "8281": "MagicSphere", "8282": "MagicDefSphere", "8283": "AgilitySphere", "8284": "EvasionSphere", "8285": "AccuracySphere", "8286": "LuckSphere", "8287": "ClearSphere", "8288": "ReturnSphere", "8289": "FriendSphere", "8290": "TeleportSphere", "8291": "WarpSphere", "8292": "Map", "8293": "RenameCard", "8294": "Musk", "8295": "HypelloPotion", "8296": "ShiningThorn", "8297": "Pendulum", "8298": "Amulet", "8299": "DoorToTomorrow", "8300": "WingsToDiscovery", "8301": "GamblersSpirit", "8302": "UnderdogsSecret", "8303": "WinningFormula" } }),
  u8("amount_bribe", {  }),
]);

const GearAbilities = struct("GearAbilities", [
  array("weapon_abilities", "u16", 8),
  array("armor_abilities", "u16", 8),
]);

const GearSpoils = struct("GearSpoils", [
  u8("slot_count", {  }),
  u8("formula", {  }),
  u8("crit", {  }),
  u8("power", {  }),
  u8("ability_count", {  }),
  array("abilities", GearAbilities, 7),
]);

const MonSpoilsChunk = struct("MonSpoilsChunk", [
  u16("gil", {  }),
  u16("ap", {  }),
  u16("ap_overkill", {  }),
  u16("ronso_rage", {  }),
  u8("drop_chance_primary", {  }),
  u8("drop_chance_secondary", {  }),
  u8("steal_chance", {  }),
  u8("drop_chance_gear", {  }),
  record("drop_normal", Spoils),
  record("drop_overkill", Spoils),
  record("steal_spoils", StealSpoils),
  record("gear_spoils", GearSpoils),
  u8("zanmato_level", {  }),
  u8("can_steal_gil", {  }),
]);

const ChunkFiveWd = struct("ChunkFiveWd", [
  str("magic", { size: 2 }),
]);

const Chunk5 = struct("Chunk5", [
  array("header_offsets", "u32", 24),
  u32("wd_block_offset", {  }),
  u32("chunk_len", {  }),
]);

export default definePack({
  name: "Mon.Bin",
  endian: "little",
  pointerSize: 8,
  types: [Oper, ScriptHeader, WeirdBlock, SecondWeirdBlock, ScriptChunk, ScriptDataEntry, AiEntries, ScriptDataChunk, MonProps, Elements, Status, AutoStatus, ExtraImmunities, Spoils, StealSpoils, GearAbilities, GearSpoils, MonSpoilsChunk, ChunkFiveWd, Chunk5],
  nodes: {
    "entry": structNode(ScriptChunk, { label: "ScriptChunk（入口）" }),
    "Oper": structNode(Oper, { label: "Oper" }),
    "ScriptHeader": structNode(ScriptHeader, { label: "ScriptHeader" }),
    "WeirdBlock": structNode(WeirdBlock, { label: "WeirdBlock" }),
    "SecondWeirdBlock": structNode(SecondWeirdBlock, { label: "SecondWeirdBlock" }),
    "ScriptDataEntry": structNode(ScriptDataEntry, { label: "ScriptDataEntry" }),
    "AiEntries": structNode(AiEntries, { label: "AiEntries" }),
    "ScriptDataChunk": structNode(ScriptDataChunk, { label: "ScriptDataChunk" }),
    "MonProps": structNode(MonProps, { label: "MonProps" }),
    "Elements": structNode(Elements, { label: "Elements" }),
    "Status": structNode(Status, { label: "Status" }),
    "AutoStatus": structNode(AutoStatus, { label: "AutoStatus" }),
    "ExtraImmunities": structNode(ExtraImmunities, { label: "ExtraImmunities" }),
    "Spoils": structNode(Spoils, { label: "Spoils" }),
    "StealSpoils": structNode(StealSpoils, { label: "StealSpoils" }),
    "GearAbilities": structNode(GearAbilities, { label: "GearAbilities" }),
    "GearSpoils": structNode(GearSpoils, { label: "GearSpoils" }),
    "MonSpoilsChunk": structNode(MonSpoilsChunk, { label: "MonSpoilsChunk" }),
    "ChunkFiveWd": structNode(ChunkFiveWd, { label: "ChunkFiveWd" }),
    "Chunk5": structNode(Chunk5, { label: "Chunk5" }),
  },
});

