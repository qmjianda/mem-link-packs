/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/GoldBox/GB_UA_SCRIPT.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const LISTITEM = struct("LISTITEM", [
  u8("Property", { values: { "48": "Text_Color", "49": "Unknown_31", "50": "Store__u8", "51": "Store__u16", "52": "Store__u32", "53": "Store__Bit", "54": "Store__Control", "55": "List_Item", "56": "Value__Min", "57": "Value__Max", "58": "Picture__Picture", "59": "Picture__Sprite", "60": "Picture__Combat_Icon_Monster", "61": "Picture__Combat_Icon_NPC", "62": "Picture__Big_Picture", "63": "Picture__Map", "64": "Art__Dungeon", "65": "Art__Wilderness", "66": "Art__Wall_Set", "67": "Art__Backdrop", "68": "Select__Event", "69": "String__Length", "70": "Default__u8", "71": "Default__u16", "72": "Default__u32", "73": "Default__String", "74": "Select__Module", "75": "Select__Item_Kind", "76": "Select__Item", "77": "Select__Special_Effect", "78": "Select__Variable", "79": "Select__Spell" } }),
  u8("ID", {  }),
  u8("StringLength", {  }),
]);

const STOREBIT = struct("STOREBIT", [
  u8("BitCount", {  }),
]);

const FIELD = struct("FIELD", [
  u8("FieldType", { values: { "1": "PageStart", "2": "PageEnd", "3": "Label", "4": "Button", "5": "List", "6": "Text_Box", "7": "Number", "8": "Select", "9": "String", "10": "Text", "32": "Data_Check", "33": "Background", "34": "Auto_Set" } }),
  u16("FieldLength", {  }),
]);

const PAGE = struct("PAGE", [
  u8("PageType", { values: { "1": "PageStart", "2": "PageEnd", "3": "Label", "4": "Button", "5": "List", "6": "Text_Box", "7": "Number", "8": "Select", "9": "String", "10": "Text", "32": "Data_Check", "33": "Background", "34": "Auto_Set" } }),
  u16("PageLength", {  }),
  u8("PageNumber", {  }),
]);

const SCRIPT = struct("SCRIPT", [
  u8("HeaderLength", {  }),
]);

const RECORD = struct("RECORD", [
  u32("Offset_Start", {  }),
  u32("Offset_End", {  }),
]);

export default definePack({
  name: "Gold Box Games - UA Script",
  endian: "little",
  pointerSize: 8,
  types: [LISTITEM, STOREBIT, FIELD, PAGE, SCRIPT, RECORD],
  nodes: {
    "entry": structNode(RECORD, { label: "RECORD（入口）" }),
    "LISTITEM": structNode(LISTITEM, { label: "LISTITEM" }),
    "STOREBIT": structNode(STOREBIT, { label: "STOREBIT" }),
    "FIELD": structNode(FIELD, { label: "FIELD" }),
    "PAGE": structNode(PAGE, { label: "PAGE" }),
    "SCRIPT": structNode(SCRIPT, { label: "SCRIPT" }),
  },
});

