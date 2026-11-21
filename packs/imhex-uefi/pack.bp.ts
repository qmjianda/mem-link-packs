/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/uefi.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const EFI_TIME = struct("EFI_TIME", [
  u16("Year", {  }),
  u8("Month", {  }),
  u8("Day", {  }),
  u8("Hour", {  }),
  u8("Minute", {  }),
  u8("Second", {  }),
  u8("Pad1", {  }),
  u32("Nanosecond", {  }),
  i16("TimeZone", {  }),
  u8("Daylight", {  }),
  u8("Pad2", {  }),
]);

const EFI_GUID = struct("EFI_GUID", [
  u32("Data1", {  }),
  u16("Data2", {  }),
  u16("Data3", {  }),
  bytes("Data4", { size: 8 }),
]);

const WIN_CERTIFICATE = struct("WIN_CERTIFICATE", [
  u32("Length", {  }),
  u16("Revision", {  }),
  u16("CertificateType", {  }),
]);

const WIN_CERTIFICATE_UEFI_GUID = struct("WIN_CERTIFICATE_UEFI_GUID", [
  record("Hdr", WIN_CERTIFICATE),
  record("CertType", EFI_GUID),
]);

const EFI_VARIABLE_AUTHENTICATION_2 = struct("EFI_VARIABLE_AUTHENTICATION_2", [
  record("TimeStamp", EFI_TIME),
  record("AuthInfo", WIN_CERTIFICATE_UEFI_GUID),
]);

const EFI_SIGNATURE_DATA = struct("EFI_SIGNATURE_DATA", [
  record("SignatureOwner", EFI_GUID),
  bytes("SignatureData", { size: 1076 }),
]);

const EFI_SIGNATURE_LIST = struct("EFI_SIGNATURE_LIST", [
  record("SignatureType", EFI_GUID),
  u32("SignatureListSize", {  }),
  u32("SignatureHeaderSize", {  }),
  u32("SignatureSize", {  }),
]);

const dbx_esl = struct("dbx_esl", [
  record("Auth", EFI_VARIABLE_AUTHENTICATION_2),
  record("x509_1", EFI_SIGNATURE_LIST),
]);

export default definePack({
  name: "UEFI efivars",
  endian: "little",
  pointerSize: 8,
  types: [EFI_TIME, EFI_GUID, WIN_CERTIFICATE, WIN_CERTIFICATE_UEFI_GUID, EFI_VARIABLE_AUTHENTICATION_2, EFI_SIGNATURE_DATA, EFI_SIGNATURE_LIST, dbx_esl],
  nodes: {
    "entry": structNode(dbx_esl, { label: "dbx_esl（入口）" }),
    "EFI_TIME": structNode(EFI_TIME, { label: "EFI_TIME" }),
    "EFI_GUID": structNode(EFI_GUID, { label: "EFI_GUID" }),
    "WIN_CERTIFICATE": structNode(WIN_CERTIFICATE, { label: "WIN_CERTIFICATE" }),
    "WIN_CERTIFICATE_UEFI_GUID": structNode(WIN_CERTIFICATE_UEFI_GUID, { label: "WIN_CERTIFICATE_UEFI_GUID" }),
    "EFI_VARIABLE_AUTHENTICATION_2": structNode(EFI_VARIABLE_AUTHENTICATION_2, { label: "EFI_VARIABLE_AUTHENTICATION_2" }),
    "EFI_SIGNATURE_DATA": structNode(EFI_SIGNATURE_DATA, { label: "EFI_SIGNATURE_DATA" }),
    "EFI_SIGNATURE_LIST": structNode(EFI_SIGNATURE_LIST, { label: "EFI_SIGNATURE_LIST" }),
  },
});

