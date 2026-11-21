/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/bastion/profile.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const VolumeData = struct("VolumeData", [
  f32("music_volume", {  }),
  f32("fx_volume", {  }),
  f32("dialog_volume", {  }),
]);

const ProfileData = struct("ProfileData", [
  i32("version", {  }),
]);

export default definePack({
  name: "Profile",
  endian: "little",
  pointerSize: 8,
  types: [VolumeData, ProfileData],
  nodes: {
    "entry": structNode(ProfileData, { label: "ProfileData（入口）" }),
    "VolumeData": structNode(VolumeData, { label: "VolumeData" }),
  },
});

