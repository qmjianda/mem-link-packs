/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/hldem.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const header_t = struct("header_t", [
  str("MAGIC", { size: 8 }),
  i32("demproto", {  }),
  i32("netproto", {  }),
  str("mapname", { size: 260 }),
  str("dlldir", { size: 260 }),
  i32("crc", {  }),
  i32("diroffset", {  }),
]);

const entry_t = struct("entry_t", [
  i32("type", {  }),
  str("desc", { size: 64 }),
  i32("flags", {  }),
  i32("cdtrack", {  }),
  f32("pb_time", {  }),
  i32("pb_frames", {  }),
  i32("offset", {  }),
  i32("length", {  }),
]);

const demdir_t = struct("demdir_t", [
  i32("numentries", {  }),
  array("entries", entry_t, 2),
]);

const vec3_t = struct("vec3_t", [
  f32("y", {  }),
  f32("x", {  }),
  f32("z", {  }),
]);

const camprefs_t = struct("camprefs_t", [
  record("position", vec3_t),
  record("orientation", vec3_t),
  record("forward", vec3_t),
  record("right", vec3_t),
  record("up", vec3_t),
]);

const refparams_t = struct("refparams_t", [
  f32("frametime", {  }),
  f32("time", {  }),
  i32("intermission", {  }),
  i32("paused", {  }),
  i32("spectator", {  }),
  i32("onground", {  }),
  i32("waterlevel", {  }),
  record("velocity", vec3_t),
  record("origin", vec3_t),
  record("viewHeight", vec3_t),
  f32("idealPitch", {  }),
  record("viewangles", vec3_t),
  i32("health", {  }),
  record("xhairAngle", vec3_t),
  f32("viewsize", {  }),
  record("punchAngle", vec3_t),
  i32("maxClients", {  }),
  i32("viewEntity", {  }),
  i32("playerCount", {  }),
  i32("maxEnts", {  }),
  i32("demoPlayback", {  }),
  i32("hardware", {  }),
  i32("smoothing", {  }),
  i32("ptr_cmd", {  }),
  i32("ptr_mvars", {  }),
  array("viewport", "i32", 4),
  i32("nextview", {  }),
  i32("onlyClientDraw", {  }),
]);

const usercmd_t = struct("usercmd_t", [
  i16("lerp_msec", {  }),
  u8("msec", {  }),
  u8("UNUSED1", {  }),
  record("viewAngles", vec3_t),
  f32("fwdMove", {  }),
  f32("sideMove", {  }),
  f32("upMove", {  }),
  i8("lightLevel", {  }),
  u8("UNUSED2", {  }),
  u16("buttons", {  }),
  i8("impulse", {  }),
  i8("weaponSel", {  }),
  i16("UNUSED3", {  }),
  i32("impactIndex", {  }),
  record("impactPos", vec3_t),
]);

const movevars_t = struct("movevars_t", [
  f32("gravity", {  }),
  f32("stopSpeed", {  }),
  f32("maxSpeed", {  }),
  f32("specMaxSpeed", {  }),
  f32("accel", {  }),
  f32("airAccel", {  }),
  f32("waterAccel", {  }),
  f32("friction", {  }),
  f32("edgeFriction", {  }),
  f32("waterFrict", {  }),
  f32("entGravity", {  }),
  f32("bounce", {  }),
  f32("stepSize", {  }),
  f32("maxVel", {  }),
  f32("zMax", {  }),
  f32("waveHeight", {  }),
  i32("footsteps", {  }),
  str("skyname", { size: 32 }),
  f32("rollAngle", {  }),
  f32("rollSpeed", {  }),
  record("skyColor", vec3_t),
  record("skyVec", vec3_t),
]);

const mainframes_t = struct("mainframes_t", [
  u32("pad1", {  }),
  record("camprefs", camprefs_t),
  record("params", refparams_t),
  record("usercmds", usercmd_t),
  record("movevars", movevars_t),
  bytes("etcdata", { size: 44 }),
  i32("length", {  }),
]);

const cmd_t = struct("cmd_t", [
  str("command", { size: 64 }),
]);

const clientdata_t = struct("clientdata_t", [
  record("position", vec3_t),
  record("rotation", vec3_t),
  u32("weaponFlags", {  }),
  f32("fov", {  }),
]);

const args_t = struct("args_t", [
  u32("flags", {  }),
  u32("entIdx", {  }),
  record("pos", vec3_t),
  record("rot", vec3_t),
  record("vel", vec3_t),
  u32("ducking", {  }),
  f32("fparam1", {  }),
  f32("fparam2", {  }),
  i32("iparam1", {  }),
  i32("iparam2", {  }),
  i32("bparam1", {  }),
  i32("bparam2", {  }),
]);

const eventdata_t = struct("eventdata_t", [
  u32("flags", {  }),
  u32("index", {  }),
  f32("delay", {  }),
  record("args", args_t),
]);

const weaponanim_t = struct("weaponanim_t", [
  i32("animIdx", {  }),
  i32("body", {  }),
]);

const sounddata_t = struct("sounddata_t", [
  i32("channel", {  }),
  i32("charslen", {  }),
]);

const macro_data_9 = struct("macro_data_9", [
  i32("length", {  }),
]);

const frame_t = struct("frame_t", [
  u8("type", {  }),
  f32("time", {  }),
  u32("frame", {  }),
]);

export default definePack({
  name: "GoldSRC DEM",
  endian: "little",
  pointerSize: 8,
  types: [header_t, entry_t, demdir_t, vec3_t, camprefs_t, refparams_t, usercmd_t, movevars_t, mainframes_t, cmd_t, clientdata_t, args_t, eventdata_t, weaponanim_t, sounddata_t, macro_data_9, frame_t],
  nodes: {
    "entry": structNode(header_t, { label: "header_t（入口）" }),
    "entry_t": structNode(entry_t, { label: "entry_t" }),
    "demdir_t": structNode(demdir_t, { label: "demdir_t" }),
    "vec3_t": structNode(vec3_t, { label: "vec3_t" }),
    "camprefs_t": structNode(camprefs_t, { label: "camprefs_t" }),
    "refparams_t": structNode(refparams_t, { label: "refparams_t" }),
    "usercmd_t": structNode(usercmd_t, { label: "usercmd_t" }),
    "movevars_t": structNode(movevars_t, { label: "movevars_t" }),
    "mainframes_t": structNode(mainframes_t, { label: "mainframes_t" }),
    "cmd_t": structNode(cmd_t, { label: "cmd_t" }),
    "clientdata_t": structNode(clientdata_t, { label: "clientdata_t" }),
    "args_t": structNode(args_t, { label: "args_t" }),
    "eventdata_t": structNode(eventdata_t, { label: "eventdata_t" }),
    "weaponanim_t": structNode(weaponanim_t, { label: "weaponanim_t" }),
    "sounddata_t": structNode(sounddata_t, { label: "sounddata_t" }),
    "macro_data_9": structNode(macro_data_9, { label: "macro_data_9" }),
    "frame_t": structNode(frame_t, { label: "frame_t" }),
  },
});

