/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/rpm.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const Lead = struct("Lead", [
  u32("magic", { values: { "3987467995": "magic" } }),
  u8("major", {  }),
  u8("minor", {  }),
  i16("type", { values: { "0": "binary", "1": "source" } }),
  i16("archnum", {  }),
  str("name", { size: 66 }),
  i16("osnum", {  }),
  i16("signature_type", {  }),
  str("reserved", { size: 16 }),
]);

const Index = struct("Index", [
  u32("tag", { values: { "61": "headerimage", "62": "headersignatures", "63": "headerimmutable", "64": "headerregions", "100": "headero18ntable", "256": "sig_base", "257": "sigsize", "258": "siglemd5_1", "259": "sigpgp", "260": "siglemd5_2", "261": "sigmd5", "262": "siggpg", "263": "sigpgp5", "264": "badsha1_1", "265": "badsha1_2", "266": "pubkeys", "267": "dsaheader", "268": "rsaheader", "269": "sha1header", "270": "longsigsize", "271": "longarchivesize", "273": "sha256header", "276": "veritysignatures", "277": "veritysignaturealgo", "278": "openpgp", "279": "sig_top", "1000": "name", "1001": "version", "1002": "release", "1003": "epoch", "1004": "summary", "1005": "description", "1006": "buildtime", "1007": "buildhost", "1008": "installtime", "1009": "size", "1010": "distribution", "1011": "vendor", "1012": "gif", "1013": "xpm", "1014": "license", "1015": "packager", "1016": "group", "1017": "changelog", "1018": "source", "1019": "patch", "1020": "url", "1021": "os", "1022": "arch", "1023": "prein", "1024": "postin", "1025": "preun", "1026": "postun", "1027": "oldfilenames", "1028": "filesizes", "1029": "filestates", "1030": "filemdes", "1031": "fileuids", "1032": "filegids", "1033": "filerdevs", "1034": "filemtimes", "1035": "filemd5s", "1036": "filelinktos", "1037": "fileflags", "1038": "root", "1039": "fileusername", "1040": "filegroupname", "1041": "exclude", "1042": "exclusive", "1043": "icon", "1044": "sourcerpm", "1045": "fileverifyflags", "1046": "archivesize", "1047": "providename", "1048": "requireflags", "1049": "requirename", "1050": "requireversion", "1051": "nosource", "1052": "nopatch", "1053": "conflictflags", "1054": "conflictname", "1055": "conflictversion", "1056": "defaultprefix", "1057": "buildroot", "1058": "installprefix", "1059": "excludearch", "1060": "excludeos", "1061": "exclusivearch", "1062": "exclusiveos", "1063": "autoreqprov", "1064": "rpmversion", "1065": "triggerscripts", "1066": "triggername", "1067": "triggerversion", "1068": "triggerflags", "1069": "triggerindex", "1079": "verifyscript", "1080": "changelogtime", "1081": "changelogname", "1082": "changelogtext", "1083": "brokenmd5", "1084": "prereq", "1085": "preinprog", "1086": "postinprog", "1087": "preunprog", "1088": "postunprog", "1089": "buildarchs", "1090": "obsoletename", "1091": "verifyscriptprog", "1092": "triggerscriptprog", "1093": "docdir", "1094": "cookie", "1095": "filedevices", "1096": "fileinodes", "1097": "filelangs", "1098": "prefixes", "1099": "instprefixes", "1100": "triggerin", "1101": "triggerun", "1102": "triggerpostun", "1103": "autoreq", "1104": "autoprov", "1105": "capability", "1106": "sourcepackage", "1107": "oldorigfilenames", "1108": "buildprereq", "1109": "buildrequires", "1110": "buildconflicts", "1111": "buildmacros", "1112": "provideflags", "1113": "provideversion", "1114": "obsoleteflags", "1115": "obsoleteversion", "1116": "dirindexes", "1117": "basenames", "1118": "dirnames", "1119": "origdirindexes", "1120": "origbasenames", "1121": "origdirnames", "1122": "optflags", "1123": "disturl", "1124": "payloadformat", "1125": "payloadcompressor", "1126": "payloadflags", "1127": "installcolor", "1128": "installtid", "1129": "removetid", "1130": "sha1rhn", "1131": "rhnplatform", "1132": "platform", "1133": "patchesname", "1134": "patchesflags", "1135": "patchesversion", "1136": "cachectime", "1137": "cachepkgpath", "1138": "cachepkgsize", "1139": "cachepkgmtime", "1140": "filecolors", "1141": "fileclass", "1142": "classdict", "1143": "filedependsx", "1144": "filedependsn", "1145": "dependsdict", "1146": "sourcepkgid", "1147": "filecontexts", "1148": "fscontexts", "1149": "recontexts", "1150": "policies" } }),
  u32("type", { values: { "0": "_null", "1": "_char", "2": "_int8", "3": "_int16", "4": "_int32", "5": "_int64", "6": "_string", "7": "_bin", "8": "_string_array" } }),
  u32("offset", {  }),
  u32("count", {  }),
]);

const Header = struct("Header", [
  bytes("magic", { size: 3 }),
  u8("version", {  }),
  bytes("reserved", { size: 4 }),
  u32("amount", {  }),
  u32("size", {  }),
]);

const RPM = struct("RPM", [
  record("lead", Lead),
]);

export default definePack({
  name: "RPM package format",
  endian: "big",
  pointerSize: 8,
  types: [Lead, Index, Header, RPM],
  nodes: {
    "entry": structNode(RPM, { label: "RPM（入口）" }),
    "Lead": structNode(Lead, { label: "Lead" }),
    "Index": structNode(Index, { label: "Index" }),
    "Header": structNode(Header, { label: "Header" }),
  },
});


/*
未移植项：
- Header.magic: 枚举底层 u24 按 3 字节原始值读取，数值映射不可用
*/
