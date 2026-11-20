/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/amd_ucode_patch.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const PatchDate = struct("PatchDate", [
  u16("year", {  }),
  u8("day", {  }),
  u8("month", {  }),
]);

const UcodeCpuid = struct("UcodeCpuid", [
  bits("stepping", 4, { at: 0, bit: 0, unit: 2, label: "stepping" }),
  bits("model_lo", 4, { at: 0, bit: 4, unit: 2, label: "model_lo" }),
  bits("model_hi", 4, { at: 0, bit: 8, unit: 2, label: "model_hi" }),
  bits("family_ext", 4, { at: 0, bit: 12, unit: 2, label: "family_ext" }),
]);

const ZenPatchLevel = struct("ZenPatchLevel", [
  bits("rev", 8, { at: 0, bit: 0, unit: 4, label: "rev" }),
  bits("stepping", 4, { at: 0, bit: 8, unit: 4, label: "stepping" }),
  bits("model_lo", 4, { at: 0, bit: 12, unit: 4, label: "model_lo" }),
  bits("reserved", 4, { at: 0, bit: 16, unit: 4, label: "reserved" }),
  bits("model_hi", 4, { at: 0, bit: 20, unit: 4, label: "model_hi" }),
  bits("family_ext", 8, { at: 0, bit: 24, unit: 4, label: "family_ext" }),
]);

const AmdUcodeHeader = struct("AmdUcodeHeader", [
  record("date", PatchDate),
  u32("patch_id", {  }),
  u16("mc_patch_data_id", {  }),
  u8("mc_patch_data_len", {  }),
  u8("init_flag", {  }),
  u32("mc_patch_data_checksum", {  }),
  u32("nb_dev_id", {  }),
  u32("sb_dev_id", {  }),
  record("processor_rev_id", UcodeCpuid),
  u8("nb_rev_id", {  }),
  u8("sb_rev_id", {  }),
  u8("bios_api_rev", {  }),
  bytes("reserved1", { size: 3 }),
]);

const Signature = struct("Signature", [
  bytes("signature", { size: 256 }),
  bytes("modulus", { size: 256 }),
  bytes("check", { size: 256 }),
]);

const VerifiedHeader = struct("VerifiedHeader", [
  u8("autorun", {  }),
  u8("encrypted", {  }),
  u8("unk0", {  }),
  u8("unk1", {  }),
  record("patch_level", ZenPatchLevel),
]);

export default definePack({
  name: "AMD microcode patch",
  endian: "little",
  pointerSize: 8,
  types: [PatchDate, UcodeCpuid, ZenPatchLevel, AmdUcodeHeader, Signature, VerifiedHeader],
  nodes: {
    "entry": structNode(PatchDate, { label: "PatchDate（入口）" }),
    "UcodeCpuid": structNode(UcodeCpuid, { label: "UcodeCpuid" }),
    "ZenPatchLevel": structNode(ZenPatchLevel, { label: "ZenPatchLevel" }),
    "AmdUcodeHeader": structNode(AmdUcodeHeader, { label: "AmdUcodeHeader" }),
    "Signature": structNode(Signature, { label: "Signature" }),
    "VerifiedHeader": structNode(VerifiedHeader, { label: "VerifiedHeader" }),
  },
});

