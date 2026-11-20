/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/keytab.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const CountedString = struct("CountedString", [
  u16("length", {  }),
]);

const Principal = struct("Principal", [
  u16("component_count", {  }),
  record("realm", CountedString),
]);

const Keyblock = struct("Keyblock", [
  u16("enctype", { values: { "0": "unassigned", "0": "NULL", "1": "DES_CBC_CRC", "2": "DES_CBC_MD4", "3": "DES_CBC_MD5", "4": "DES_CBC_RAW", "5": "DES3_CBC_SHA", "6": "DES3_CBC_RAW", "8": "DES_HMAC_SHA1", "9": "DSA_SHA1_CMS", "10": "MD5_RSA_CMS", "11": "SHA1_RSA_CMS", "12": "RC2_CBC_ENV", "13": "RSA_ENV", "14": "RSA_ES_OAEP_ENV", "15": "DES3_CBC_ENV", "16": "DES3_CBC_SHA1", "17": "AES128_CTS_HMAC_SHA1_96", "18": "AES256_CTS_HMAC_SHA1_96", "19": "AES128_CTS_HMAC_SHA256_128", "20": "AES256_CTS_HMAC_SHA384_192", "23": "ARCFOUR_HMAC", "24": "ARCFOUR_HMAC_EXP", "25": "CAMELLIA128_CTS_CMAC", "26": "CAMELLIA256_CTS_CMAC", "511": "UNKNOWN" } }),
  u16("length", {  }),
]);

const EntryContents = struct("EntryContents", [
  record("principal", Principal),
]);

const Entry = struct("Entry", [
  i32("entry_size", {  }),
]);

const Keytab52 = struct("Keytab52", [
  u8("kerberos_ver", {  }),
]);

export default definePack({
  name: "MIT Kerberos 5 keytab file",
  endian: "little",
  pointerSize: 8,
  types: [CountedString, Principal, Keyblock, EntryContents, Entry, Keytab52],
  nodes: {
    "entry": structNode(Keytab52, { label: "Keytab52（入口）" }),
    "CountedString": structNode(CountedString, { label: "CountedString" }),
    "Principal": structNode(Principal, { label: "Principal" }),
    "Keyblock": structNode(Keyblock, { label: "Keyblock" }),
    "EntryContents": structNode(EntryContents, { label: "EntryContents" }),
    "Entry": structNode(Entry, { label: "Entry" }),
  },
});


/*
未移植项：
- EntryContents.timestamp: 类型 type_time32_t 不可移植
*/
