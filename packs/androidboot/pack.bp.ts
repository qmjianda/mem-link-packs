/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-nybble.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/itsmajdbuilds/binary-explorer-registry/tree/main/formats/androidboot
// 原始 pack：androidboot · Android boot image v1.0.0 · 作者 Nybble
// 许可：Nybble format registry 允许自由使用与再分发；见上游 meta.toml。
// 覆盖：partial；未移植 1 项（见文件末尾）
const AndroidBoot = struct("AndroidBoot", [
  str("magic", { size: 8, label: "ANDROID!" }),
  u32("kernelSize", { endian: "little", label: "kernel size in bytes" }),
  u32("kernelAddr", { endian: "little", label: "physical load address of the kernel" }),
  u32("ramdiskSize", { endian: "little", label: "ramdisk size in bytes (0 if none)" }),
  u32("ramdiskAddr", { endian: "little", label: "physical load address of the ramdisk" }),
  u32("secondSize", { endian: "little", label: "second stage size in bytes (rarely used)" }),
  u32("secondAddr", { endian: "little", label: "physical load address of the second stage" }),
  u32("tagsAddr", { endian: "little", label: "physical address of the kernel tags or device tree" }),
  u32("pageSize", { endian: "little", label: "flash page size; every section is padded to it" }),
  u32("headerVersion", { endian: "little", label: "0, 1 or 2 (older images put a size here)" }),
  u32("osVersion", { endian: "little", label: "OS version and security patch level, packed" }),
  str("name", { size: 16, label: "product name (NUL-padded)" }),
  str("cmdline", { size: 512, label: "kernel command line" }),
  bytes("id", { size: 32, label: "SHA-1 digest of the image sections, zero padded" }),
  str("extraCmdline", { size: 1024, label: "command line continued past 512 bytes" }),
]);

export default definePack({
  name: "ANDROIDBOOT",
  endian: "little",
  pointerSize: 4,
  types: [AndroidBoot],
  nodes: {
    "entry": structNode(AndroidBoot, { label: "AndroidBoot（入口）" }),
  },
});


/*
未移植项：
- AndroidBoot.recoveryDtboSize: 条件字段未移植，后续布局在此停止
*/
