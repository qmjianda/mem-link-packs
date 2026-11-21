/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/usb.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const Ampere = struct("Ampere", [
  u8("amps", {  }),
]);

const ConfigAttributes = struct("ConfigAttributes", [
  bits("SelfPowered", 1, { at: 0, bit: 1, unit: 1, label: "SelfPowered" }),
  bits("RemoteWakeup", 1, { at: 0, bit: 2, unit: 1, label: "RemoteWakeup" }),
]);

const ConfigDescriptor = struct("ConfigDescriptor", [
  u16("wTotalLength", {  }),
  u8("bNumInterfaces", {  }),
  u8("bConfigurationValue", {  }),
  u8("iConfiguration", {  }),
  record("bmAttributes", ConfigAttributes),
  record("bMaxPower", Ampere),
]);

const InterfaceDescriptor = struct("InterfaceDescriptor", [
  u8("bInterfaceNumber", {  }),
  u8("bAlternateSetting", {  }),
  u8("bNumEndpoints", {  }),
  u8("bInterfaceClass", { values: { "0": "UseClassInformationInInterfaceDescriptors", "1": "Audio", "2": "CommunicationAndCDCControl", "3": "HID", "5": "Physical", "6": "Image", "7": "Printer", "8": "MassStorage", "9": "Hub", "10": "CDCData", "11": "SmartCard", "12": "ContentSecurity", "14": "Video", "15": "PersonalHealthcare", "16": "AudioVideoDevice", "17": "BillboardDevice", "18": "USBTypeCBridge", "60": "I3CDevice", "220": "DiagnosticDevice", "224": "WirelessController", "239": "Miscellaneous", "254": "ApplicationSpecific", "255": "VendorSpecific" } }),
]);

const EndpointAddress = struct("EndpointAddress", [
  bits("EndpointNumber", 4, { at: 0, bit: 0, unit: 1, label: "EndpointNumber" }),
  bits("Direction", 1, { at: 0, bit: 7, unit: 1, label: "Direction" }),
]);

const EndpointAttributes = struct("EndpointAttributes", [
  bits("TransferType", 2, { at: 0, bit: 0, unit: 1, label: "TransferType" }),
  bits("SynchronizationType", 2, { at: 0, bit: 2, unit: 1, label: "SynchronizationType" }),
  bits("UsageType", 2, { at: 0, bit: 4, unit: 1, label: "UsageType" }),
]);

const EndpointDescriptor = struct("EndpointDescriptor", [
  record("bEndPointAddress", EndpointAddress),
  record("bmAttributes", EndpointAttributes),
  u16("wMaxPacketSize", {  }),
  u8("bInterval", {  }),
]);

const OtherSpeedConfigurationDescriptor = struct("OtherSpeedConfigurationDescriptor", [
  record("content", ConfigDescriptor),
]);

const OTGAttributes = struct("OTGAttributes", [
  bits("SRPSupport", 1, { at: 0, bit: 0, unit: 1, label: "SRPSupport" }),
  bits("HNPSupport", 1, { at: 0, bit: 1, unit: 1, label: "HNPSupport" }),
]);

const OTGDescriptor = struct("OTGDescriptor", [
  record("bmAttributes", OTGAttributes),
]);

const USBDescriptor = struct("USBDescriptor", [
  u8("bLength", {  }),
  u8("bDescriptorType", { values: { "1": "DeviceDescriptor", "2": "ConfigDescriptor", "3": "StringDescriptor", "4": "InterfaceDescriptor", "5": "EndpointDescriptor", "6": "DeviceQualifierDescriptor", "7": "OtherSpeedConfigurationDescriptor", "8": "InterfacePowerDescriptor", "9": "OTGDescriptor", "10": "DebugDescriptor", "11": "InterfaceAssociationDescriptor", "33": "HIDDescriptor", "34": "ReportDescriptor", "35": "PhysicalDescriptor" } }),
]);

export default definePack({
  name: "USB Device Descriptor",
  endian: "little",
  pointerSize: 8,
  types: [Ampere, ConfigAttributes, ConfigDescriptor, InterfaceDescriptor, EndpointAddress, EndpointAttributes, EndpointDescriptor, OtherSpeedConfigurationDescriptor, OTGAttributes, OTGDescriptor, USBDescriptor],
  nodes: {
    "entry": structNode(USBDescriptor, { label: "USBDescriptor（入口）" }),
    "Ampere": structNode(Ampere, { label: "Ampere" }),
    "ConfigAttributes": structNode(ConfigAttributes, { label: "ConfigAttributes" }),
    "ConfigDescriptor": structNode(ConfigDescriptor, { label: "ConfigDescriptor" }),
    "InterfaceDescriptor": structNode(InterfaceDescriptor, { label: "InterfaceDescriptor" }),
    "EndpointAddress": structNode(EndpointAddress, { label: "EndpointAddress" }),
    "EndpointAttributes": structNode(EndpointAttributes, { label: "EndpointAttributes" }),
    "EndpointDescriptor": structNode(EndpointDescriptor, { label: "EndpointDescriptor" }),
    "OtherSpeedConfigurationDescriptor": structNode(OtherSpeedConfigurationDescriptor, { label: "OtherSpeedConfigurationDescriptor" }),
    "OTGAttributes": structNode(OTGAttributes, { label: "OTGAttributes" }),
    "OTGDescriptor": structNode(OTGDescriptor, { label: "OTGDescriptor" }),
  },
});


/*
未移植项：
- DeviceQualifierDescriptor.deviceDescriptor: 类型 DeviceDescriptor 不可移植
*/
