/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/max_v104.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const IniOptions = struct("IniOptions", [
  i32("world", {  }),
  i32("turn_timer", {  }),
  i32("endturn", {  }),
  i32("start_gold", {  }),
  i32("play_mode", {  }),
  i32("victory_type", {  }),
  i32("victory_limit", {  }),
  i32("opponent", {  }),
  i32("raw_resource", {  }),
  i32("fuel_resource", {  }),
  i32("gold_resource", {  }),
  i32("alien_derelicts", {  }),
]);

const IniPreferences = struct("IniPreferences", [
  i32("effects", {  }),
  i32("click_scroll", {  }),
  i32("quick_scroll", {  }),
  i32("fast_movement", {  }),
  i32("follow_unit", {  }),
  i32("auto_select", {  }),
  i32("enemy_halt", {  }),
]);

const GridResourceMapEntry = struct("GridResourceMapEntry", [
  bits("team_visibility_gray", 1, { at: 0, bit: 2, unit: 2, label: "team_visibility_gray" }),
  bits("team_visibility_blue", 1, { at: 0, bit: 3, unit: 2, label: "team_visibility_blue" }),
  bits("team_visibility_green", 1, { at: 0, bit: 4, unit: 2, label: "team_visibility_green" }),
  bits("team_visibility_red", 1, { at: 0, bit: 5, unit: 2, label: "team_visibility_red" }),
  bits("cargo_amount", 5, { at: 0, bit: 8, unit: 2, label: "cargo_amount" }),
  bits("cargo_type_fuel", 1, { at: 0, bit: 13, unit: 2, label: "cargo_type_fuel" }),
  bits("cargo_type_gold", 1, { at: 0, bit: 14, unit: 2, label: "cargo_type_gold" }),
  bits("cargo_type_material", 1, { at: 0, bit: 15, unit: 2, label: "cargo_type_material" }),
]);

const UnitFlags = struct("UnitFlags", [
  bits("requires_slab", 1, { at: 0, bit: 0, unit: 4, label: "requires_slab" }),
  bits("turret_sprite", 1, { at: 0, bit: 1, unit: 4, label: "turret_sprite" }),
  bits("sentry_unit", 1, { at: 0, bit: 2, unit: 4, label: "sentry_unit" }),
  bits("spinning_turret", 1, { at: 0, bit: 3, unit: 4, label: "spinning_turret" }),
  bits("hovering", 1, { at: 0, bit: 8, unit: 4, label: "hovering" }),
  bits("has_firing_sprite", 1, { at: 0, bit: 9, unit: 4, label: "has_firing_sprite" }),
  bits("fires_missiles", 1, { at: 0, bit: 10, unit: 4, label: "fires_missiles" }),
  bits("constructor_unit", 1, { at: 0, bit: 11, unit: 4, label: "constructor_unit" }),
  bits("electronic_unit", 1, { at: 0, bit: 13, unit: 4, label: "electronic_unit" }),
  bits("selectable", 1, { at: 0, bit: 14, unit: 4, label: "selectable" }),
  bits("standalone", 1, { at: 0, bit: 15, unit: 4, label: "standalone" }),
  bits("mobile_land_unit", 1, { at: 0, bit: 16, unit: 4, label: "mobile_land_unit" }),
  bits("stationary", 1, { at: 0, bit: 17, unit: 4, label: "stationary" }),
  bits("upgradeable", 1, { at: 0, bit: 22, unit: 4, label: "upgradeable" }),
  bits("ground_cover", 1, { at: 0, bit: 24, unit: 4, label: "ground_cover" }),
  bits("exploding", 1, { at: 0, bit: 25, unit: 4, label: "exploding" }),
  bits("animated", 1, { at: 0, bit: 26, unit: 4, label: "animated" }),
  bits("connector_unit", 1, { at: 0, bit: 27, unit: 4, label: "connector_unit" }),
  bits("building", 1, { at: 0, bit: 28, unit: 4, label: "building" }),
  bits("missile_unit", 1, { at: 0, bit: 29, unit: 4, label: "missile_unit" }),
  bits("mobile_air_unit", 1, { at: 0, bit: 30, unit: 4, label: "mobile_air_unit" }),
  bits("mobile_sea_unit", 1, { at: 0, bit: 31, unit: 4, label: "mobile_sea_unit" }),
]);

const Point = struct("Point", [
  i16("x", {  }),
  i16("y", {  }),
]);

const ResearchTopicInfo = struct("ResearchTopicInfo", [
  u32("research_level", {  }),
  u32("turns_to_complete", {  }),
  i32("allocation", {  }),
]);

const ScreenLocation = struct("ScreenLocation", [
  i8("x", {  }),
  i8("y", {  }),
]);

const TeamInfo = struct("TeamInfo", [
  array("markers", Point, 10),
  u8("team_type", { values: { "0": "None", "1": "Human", "2": "Computer", "3": "Remote", "4": "Eliminated" } }),
  i8("field_41", {  }),
  u8("team_clan", { values: { "0": "None", "1": "The_Chosen", "2": "Crimson_Path", "3": "Von_Griffin", "4": "Ayers_Hand", "5": "Musashi", "6": "Sacred_Eights", "7": "Seven_Knights", "8": "Axis_Inc" } }),
  array("research_topics", ResearchTopicInfo, 8),
  u32("victory_points", {  }),
  u16("next_unit_id", {  }),
  bytes("unit_counters", { size: 93 }),
  array("screen_location", ScreenLocation, 6),
  array("score_graph", "u16", 50),
  u16("selected_unit", {  }),
  u16("zoom_level", {  }),
  record("screen_position", Point),
  bool("gui_button_state_range", {  }),
  bool("gui_button_state_scan", {  }),
  bool("gui_button_state_status", {  }),
  bool("gui_button_state_colors", {  }),
  bool("gui_button_state_hits", {  }),
  bool("gui_button_state_ammo", {  }),
  bool("gui_button_state_names", {  }),
  bool("gui_button_state_minimap_2x", {  }),
  bool("gui_button_state_minimap_tnt", {  }),
  bool("gui_button_state_grid", {  }),
  bool("gui_button_state_survey", {  }),
  u16("stats_factories_built", {  }),
  u16("stats_mines_built", {  }),
  u16("stats_buildings_built", {  }),
  u16("stats_units_built", {  }),
  array("casualties", "u16", 93),
  u16("stats_gold_spent_on_upgrades", {  }),
]);

const UnitValues = struct("UnitValues", [
  u16("object_index", {  }),
]);

const Complex = struct("Complex", [
  u16("object_index", {  }),
]);

const TeamUnits = struct("TeamUnits", [
  i16("gold", {  }),
  array("base_unit_values", UnitValues, 93),
  array("current_unit_values", UnitValues, 93),
  u16("complex_count", {  }),
]);

const Rect = struct("Rect", [
  i32("ulx", {  }),
  i32("uly", {  }),
  i32("lrx", {  }),
  i32("lry", {  }),
]);

const PathStep = struct("PathStep", [
  i8("x", {  }),
  i8("y", {  }),
]);

const Path = struct("Path", [
  u16("object_index", {  }),
]);

const UnitTypeArray = struct("UnitTypeArray", [
  u16("object_count", {  }),
]);

const UnitInfo = struct("UnitInfo", [
  u16("object_index", {  }),
]);

const UnitInfoList = struct("UnitInfoList", [
  u16("unitinfo_count", {  }),
]);

const HashMapUnitInfo = struct("HashMapUnitInfo", [
  u16("hash_size", {  }),
]);

const MapHash = struct("MapHash", [
  record("coordinates", Point),
  record("units", UnitInfoList),
]);

const MapHashList = struct("MapHashList", [
  u16("maphash_count", {  }),
]);

const HashMapMapHash = struct("HashMapMapHash", [
  u16("hash_size", {  }),
  i16("x_shift", {  }),
]);

const TeamHeatMaps = struct("TeamHeatMaps", [
  bytes("heatmap_complete", { size: 12544 }),
  bytes("heatmap_stealth_sea", { size: 12544 }),
  bytes("heatmap_stealth_land", { size: 12544 }),
]);

const MessageLog = struct("MessageLog", [
  i16("length", {  }),
]);

const MessageLogList = struct("MessageLogList", [
  u16("message_log_count", {  }),
]);

const AiMap = struct("AiMap", [
  record("unit", UnitInfo),
  u16("team", { values: { "0": "Red", "1": "Green", "2": "Blue", "3": "Gray" } }),
  bool("visible_to_team", {  }),
  record("point", Point),
]);

const AiMapList = struct("AiMapList", [
  u16("ai_map_count", {  }),
]);

const AiPlayer = struct("AiPlayer", [
  u16("team", { values: { "0": "Red", "1": "Green", "2": "Blue", "3": "Gray" } }),
  u8("strategy", { values: { "0": "Random", "1": "Defensive", "2": "Missiles", "3": "Air", "4": "Sea", "5": "Scout_horde", "6": "Tank_horde", "7": "Fast_attack", "8": "Combined_arms", "9": "Espionage" } }),
  i16("field_3", {  }),
  i16("field_5", {  }),
  i16("field_7", {  }),
  u16("target_team", { values: { "0": "Red", "1": "Green", "2": "Blue", "3": "Gray" } }),
  record("map_list", AiMapList),
  u16("has_info_map", {  }),
]);

export default definePack({
  name: "Mechanized Assault and Exploration v1.04 (strategy game) save",
  endian: "little",
  pointerSize: 8,
  types: [IniOptions, IniPreferences, GridResourceMapEntry, UnitFlags, Point, ResearchTopicInfo, ScreenLocation, TeamInfo, UnitValues, Complex, TeamUnits, Rect, PathStep, Path, UnitTypeArray, UnitInfo, UnitInfoList, HashMapUnitInfo, MapHash, MapHashList, HashMapMapHash, TeamHeatMaps, MessageLog, MessageLogList, AiMap, AiMapList, AiPlayer],
  nodes: {
    "entry": structNode(IniOptions, { label: "IniOptions（入口）" }),
    "IniPreferences": structNode(IniPreferences, { label: "IniPreferences" }),
    "GridResourceMapEntry": structNode(GridResourceMapEntry, { label: "GridResourceMapEntry" }),
    "UnitFlags": structNode(UnitFlags, { label: "UnitFlags" }),
    "Point": structNode(Point, { label: "Point" }),
    "ResearchTopicInfo": structNode(ResearchTopicInfo, { label: "ResearchTopicInfo" }),
    "ScreenLocation": structNode(ScreenLocation, { label: "ScreenLocation" }),
    "TeamInfo": structNode(TeamInfo, { label: "TeamInfo" }),
    "UnitValues": structNode(UnitValues, { label: "UnitValues" }),
    "Complex": structNode(Complex, { label: "Complex" }),
    "TeamUnits": structNode(TeamUnits, { label: "TeamUnits" }),
    "Rect": structNode(Rect, { label: "Rect" }),
    "PathStep": structNode(PathStep, { label: "PathStep" }),
    "Path": structNode(Path, { label: "Path" }),
    "UnitTypeArray": structNode(UnitTypeArray, { label: "UnitTypeArray" }),
    "UnitInfo": structNode(UnitInfo, { label: "UnitInfo" }),
    "UnitInfoList": structNode(UnitInfoList, { label: "UnitInfoList" }),
    "HashMapUnitInfo": structNode(HashMapUnitInfo, { label: "HashMapUnitInfo" }),
    "MapHash": structNode(MapHash, { label: "MapHash" }),
    "MapHashList": structNode(MapHashList, { label: "MapHashList" }),
    "HashMapMapHash": structNode(HashMapMapHash, { label: "HashMapMapHash" }),
    "TeamHeatMaps": structNode(TeamHeatMaps, { label: "TeamHeatMaps" }),
    "MessageLog": structNode(MessageLog, { label: "MessageLog" }),
    "MessageLogList": structNode(MessageLogList, { label: "MessageLogList" }),
    "AiMap": structNode(AiMap, { label: "AiMap" }),
    "AiMapList": structNode(AiMapList, { label: "AiMapList" }),
    "AiPlayer": structNode(AiPlayer, { label: "AiPlayer" }),
  },
});

