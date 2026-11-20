/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/job.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const JobDate = struct("JobDate", [
  u16("Year", {  }),
  u16("Month", {  }),
  u16("wday", { values: { "0": "Sunday", "1": "Monday", "2": "Tuesday", "3": "Wednesday", "4": "Thursday", "5": "Friday", "6": "Saturday" } }),
  u16("Day", {  }),
  u16("Hour", {  }),
  u16("Minutes", {  }),
  u16("Seconds", {  }),
  u16("MilliSeconds", {  }),
]);

const TriggerStructure = struct("TriggerStructure", [
  u16("TriggerSize", {  }),
  u16("Reserved1", {  }),
  u16("BeginYear", {  }),
  u16("BeginMonth", {  }),
  u16("BeginDay", {  }),
  u16("EndYear", {  }),
  u16("EndMonth", {  }),
  u16("EndDay", {  }),
  u16("StartHour", {  }),
  u16("StartMinutes", {  }),
  u32("MinuteDuration", {  }),
  u32("MinuteInterval", {  }),
  u32("Flags", { values: { "0": "TRIGGER_ONCE", "1": "TRIGGER_DAILY", "2": "TRIGGER_WEEKLY", "3": "TRIGGER_MONTHLYDATE", "4": "TRIGGER_MONTHLYDOW", "5": "TRIGGER_ON_IDLE", "6": "TRIGGER_AT_SYSTEMSTART", "7": "TRIGGER_AT_LOGON" } }),
  u32("TriggerType", {  }),
  u16("TriggerSpecific0", {  }),
  u16("TriggerSpecific1", {  }),
  u16("TriggerSpecific2", {  }),
  u16("Padding", {  }),
  u16("Reserved2", {  }),
  u16("Reserved3", {  }),
]);

const TaskFlagStruct = struct("TaskFlagStruct", [
  u16("flags", { values: { "1": "Interactive", "2": "DeleteWhenDone", "4": "Disabled", "16": "StartOnlyIfIdle", "32": "KillOnIdleEnd", "64": "DontStartIfOnBatteries", "128": "KillIfGoingOnBatteries", "256": "RunOnlyIfDocked", "512": "Hidden", "1024": "RunIfConnectedToInternet", "2048": "RestartOnIdleResume", "4096": "SystemRequired", "8192": "RunOnlyIfLoggedOn" } }),
  u16("Unkn", {  }),
]);

const ReservedData = struct("ReservedData", [
  u16("Unknown1", {  }),
  u16("Unknown2", {  }),
  u16("tflags", {  }),
  u16("Reserved", {  }),
]);

const JobTask = struct("JobTask", [
  u16("ProductVersion", {  }),
  u16("FileVersion", {  }),
]);

export default definePack({
  name: "WindowsTaskScheduler v1.0 job",
  endian: "little",
  pointerSize: 8,
  types: [JobDate, TriggerStructure, TaskFlagStruct, ReservedData, JobTask],
  nodes: {
    "entry": structNode(JobTask, { label: "JobTask（入口）" }),
    "JobDate": structNode(JobDate, { label: "JobDate" }),
    "TriggerStructure": structNode(TriggerStructure, { label: "TriggerStructure" }),
    "TaskFlagStruct": structNode(TaskFlagStruct, { label: "TaskFlagStruct" }),
    "ReservedData": structNode(ReservedData, { label: "ReservedData" }),
  },
});


/*
未移植项：
- JobTask.guid: 类型 type_GUID 不可移植
*/
