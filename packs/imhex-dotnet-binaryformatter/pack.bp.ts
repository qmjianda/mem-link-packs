/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/dotnet_binaryformatter.hexpat
// 许可：GPL-2.0-or-later（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 25 项（见文件末尾）
const MessageFlags = struct("MessageFlags", [
  bits("NoArgs", 1, { at: 0, bit: 0, unit: 4, label: "NoArgs" }),
  bits("ArgsInline", 1, { at: 0, bit: 1, unit: 4, label: "ArgsInline" }),
  bits("ArgsIsArray", 1, { at: 0, bit: 2, unit: 4, label: "ArgsIsArray" }),
  bits("ArgsInArray", 1, { at: 0, bit: 3, unit: 4, label: "ArgsInArray" }),
  bits("NoContext", 1, { at: 0, bit: 4, unit: 4, label: "NoContext" }),
  bits("ContextInline", 1, { at: 0, bit: 5, unit: 4, label: "ContextInline" }),
  bits("ContextInArray", 1, { at: 0, bit: 6, unit: 4, label: "ContextInArray" }),
  bits("MethodSignatureInArray", 1, { at: 0, bit: 7, unit: 4, label: "MethodSignatureInArray" }),
  bits("PropertiesInArray", 1, { at: 0, bit: 8, unit: 4, label: "PropertiesInArray" }),
  bits("NoReturnValue", 1, { at: 0, bit: 9, unit: 4, label: "NoReturnValue" }),
  bits("ReturnValueVoid", 1, { at: 0, bit: 10, unit: 4, label: "ReturnValueVoid" }),
  bits("ReturnValueInline", 1, { at: 0, bit: 11, unit: 4, label: "ReturnValueInline" }),
  bits("ReturnValueInArray", 1, { at: 0, bit: 12, unit: 4, label: "ReturnValueInArray" }),
  bits("ExceptionInArray", 1, { at: 0, bit: 13, unit: 4, label: "ExceptionInArray" }),
  bits("GenericMethod", 1, { at: 0, bit: 14, unit: 4, label: "GenericMethod" }),
  bits("unused", 17, { at: 0, bit: 15, unit: 4, label: "unused" }),
]);

const DateTime = struct("DateTime", [
  bits("Ticks", 62, { at: 0, bit: 0, unit: 8, label: "Ticks" }),
  bits("kind", 2, { at: 0, bit: 62, unit: 8, label: "kind" }),
]);

const vLength = struct("vLength", [
  u64("bytes", {  }),
]);

const LengthPrefixedString = struct("LengthPrefixedString", [
  record("Length", vLength),
]);

const ClassTypeInfo = struct("ClassTypeInfo", [
  record("TypeName", LengthPrefixedString),
  i32("LibraryId", {  }),
]);

const ValueWithCode = struct("ValueWithCode", [
  u8("PrimitiveType", { values: { "0": "Invalid", "1": "Boolean", "2": "Byte", "3": "Char", "4": "Currency", "5": "Decimal", "6": "Double", "7": "Int16", "8": "Int32", "9": "Int64", "10": "SByte", "11": "Single", "12": "TimeSpan", "13": "DateTime", "14": "UInt16", "15": "UInt32", "16": "UInt64", "17": "Null", "18": "String" } }),
]);

const StringValueWithCode = struct("StringValueWithCode", [
  record("StringValue", LengthPrefixedString),
]);

const ArrayOfValueWithCode = struct("ArrayOfValueWithCode", [
  i32("Length", {  }),
]);

const ArrayInfo = struct("ArrayInfo", [
  i32("ObjectId", {  }),
  i32("Length", {  }),
]);

const ClassInfo = struct("ClassInfo", [
  i32("ObjectId", {  }),
  record("Name", LengthPrefixedString),
  i32("MemberCount", {  }),
]);

const ClassWithMembersAndTypes = struct("ClassWithMembersAndTypes", [
  record("classInfo", ClassInfo),
]);

const ClassWithMembers = struct("ClassWithMembers", [
  record("classInfo", ClassInfo),
  i32("LibraryId", {  }),
]);

const SystemClassWithMembersAndTypes = struct("SystemClassWithMembersAndTypes", [
  record("classInfo", ClassInfo),
]);

const SystemClassWithMembers = struct("SystemClassWithMembers", [
  record("classInfo", ClassInfo),
]);

const ClassWithId = struct("ClassWithId", [
  i32("ObjectId", {  }),
  i32("MetadataId", {  }),
]);

const BinaryArray = struct("BinaryArray", [
  i32("ObjectId", {  }),
  u8("binaryArrayTypeEnum", { values: { "0": "Single", "1": "Jagged", "2": "Rectangular", "3": "SingleOffset", "4": "JaggedOffset", "5": "RectangularOffset" } }),
  i32("Rank", {  }),
]);

const ArraySinglePrimitive = struct("ArraySinglePrimitive", [
  record("arrayInfo", ArrayInfo),
  u8("primitiveTypeEnum", { values: { "0": "Invalid", "1": "Boolean", "2": "Byte", "3": "Char", "4": "Currency", "5": "Decimal", "6": "Double", "7": "Int16", "8": "Int32", "9": "Int64", "10": "SByte", "11": "Single", "12": "TimeSpan", "13": "DateTime", "14": "UInt16", "15": "UInt32", "16": "UInt64", "17": "Null", "18": "String" } }),
]);

const ArraySingleObject = struct("ArraySingleObject", [
  record("arrayInfo", ArrayInfo),
]);

const ArraySingleString = struct("ArraySingleString", [
  record("arrayInfo", ArrayInfo),
]);

const BinaryMethodReturn = struct("BinaryMethodReturn", [
  record("MessageEnum", MessageFlags),
]);

const BinaryMethodCall = struct("BinaryMethodCall", [
  record("MessageEnum", MessageFlags),
]);

const MemberPrimitiveTyped = struct("MemberPrimitiveTyped", [
  u8("primitiveTypeEnum", { values: { "0": "Invalid", "1": "Boolean", "2": "Byte", "3": "Char", "4": "Currency", "5": "Decimal", "6": "Double", "7": "Int16", "8": "Int32", "9": "Int64", "10": "SByte", "11": "Single", "12": "TimeSpan", "13": "DateTime", "14": "UInt16", "15": "UInt32", "16": "UInt64", "17": "Null", "18": "String" } }),
]);

const MemberReference = struct("MemberReference", [
  i32("IdRef", {  }),
]);

const ObjectNullMultiple = struct("ObjectNullMultiple", [
  i32("NullCount", {  }),
]);

const ObjectNullMultiple256 = struct("ObjectNullMultiple256", [
  u8("NullCount", {  }),
]);

const BinaryObjectString = struct("BinaryObjectString", [
  i32("ObjectId", {  }),
  record("Value", LengthPrefixedString),
]);

const SerializationHeaderRecord = struct("SerializationHeaderRecord", [
  i32("RootId", {  }),
  i32("HeaderId", {  }),
  i32("MajorVersion", {  }),
]);

const BinaryLibrary = struct("BinaryLibrary", [
  i32("LibraryId", {  }),
  record("LibraryName", LengthPrefixedString),
]);

const CrossAppDomainMap = struct("CrossAppDomainMap", [
  i32("crossAppDomainArrayIndex", {  }),
]);

const CrossAppDomainString = struct("CrossAppDomainString", [
  i32("ObjectId", {  }),
  i32("Value", {  }),
]);

const CrossAppDomainAssembly = struct("CrossAppDomainAssembly", [
  i32("LibraryId", {  }),
  i32("LibraryIndex", {  }),
]);

const Record = struct("Record", [
  u8("recordTypeEnum", { values: { "0": "SerializedStreamHeader", "1": "ClassWithId", "2": "Object", "2": "SystemClassWithMembers", "3": "ObjectWithMap", "3": "ClassWithMembers", "4": "ObjectWithMapAssemId", "4": "SystemClassWithMembersAndTypes", "5": "ObjectWithMapTyped", "5": "ClassWithMembersAndTypes", "6": "ObjectWithMapTypedAssemId", "6": "BinaryObjectString", "7": "ObjectString", "7": "BinaryArray", "8": "Array", "8": "MemberPrimitiveTyped", "9": "MemberReference", "10": "ObjectNull", "11": "MessageEnd", "12": "BinaryLibrary", "13": "Assembly", "13": "ObjectNullMultiple256", "14": "ObjectNullMultiple", "15": "ArraySinglePrimitive", "16": "ArraySingleObject", "17": "ArraySingleString", "18": "CrossAppDomainMap", "19": "CrossAppDomainString", "20": "CrossAppDomainAssembly", "21": "MethodCall", "22": "MethodReturn" } }),
]);

const DotNetBinnaryFormatter = struct("DotNetBinnaryFormatter", [
  record("Header", SerializationHeaderRecord),
]);

export default definePack({
  name: ".NET BinaryFormatter (System.Runtime.Serialization.Formatters.Binary, obsolete)",
  endian: "little",
  pointerSize: 8,
  types: [MessageFlags, DateTime, vLength, LengthPrefixedString, ClassTypeInfo, ValueWithCode, StringValueWithCode, ArrayOfValueWithCode, ArrayInfo, ClassInfo, ClassWithMembersAndTypes, ClassWithMembers, SystemClassWithMembersAndTypes, SystemClassWithMembers, ClassWithId, BinaryArray, ArraySinglePrimitive, ArraySingleObject, ArraySingleString, BinaryMethodReturn, BinaryMethodCall, MemberPrimitiveTyped, MemberReference, ObjectNullMultiple, ObjectNullMultiple256, BinaryObjectString, SerializationHeaderRecord, BinaryLibrary, CrossAppDomainMap, CrossAppDomainString, CrossAppDomainAssembly, Record, DotNetBinnaryFormatter],
  nodes: {
    "entry": structNode(DotNetBinnaryFormatter, { label: "DotNetBinnaryFormatter（入口）" }),
    "MessageFlags": structNode(MessageFlags, { label: "MessageFlags" }),
    "DateTime": structNode(DateTime, { label: "DateTime" }),
    "vLength": structNode(vLength, { label: "vLength" }),
    "LengthPrefixedString": structNode(LengthPrefixedString, { label: "LengthPrefixedString" }),
    "ClassTypeInfo": structNode(ClassTypeInfo, { label: "ClassTypeInfo" }),
    "ValueWithCode": structNode(ValueWithCode, { label: "ValueWithCode" }),
    "StringValueWithCode": structNode(StringValueWithCode, { label: "StringValueWithCode" }),
    "ArrayOfValueWithCode": structNode(ArrayOfValueWithCode, { label: "ArrayOfValueWithCode" }),
    "ArrayInfo": structNode(ArrayInfo, { label: "ArrayInfo" }),
    "ClassInfo": structNode(ClassInfo, { label: "ClassInfo" }),
    "ClassWithMembersAndTypes": structNode(ClassWithMembersAndTypes, { label: "ClassWithMembersAndTypes" }),
    "ClassWithMembers": structNode(ClassWithMembers, { label: "ClassWithMembers" }),
    "SystemClassWithMembersAndTypes": structNode(SystemClassWithMembersAndTypes, { label: "SystemClassWithMembersAndTypes" }),
    "SystemClassWithMembers": structNode(SystemClassWithMembers, { label: "SystemClassWithMembers" }),
    "ClassWithId": structNode(ClassWithId, { label: "ClassWithId" }),
    "BinaryArray": structNode(BinaryArray, { label: "BinaryArray" }),
    "ArraySinglePrimitive": structNode(ArraySinglePrimitive, { label: "ArraySinglePrimitive" }),
    "ArraySingleObject": structNode(ArraySingleObject, { label: "ArraySingleObject" }),
    "ArraySingleString": structNode(ArraySingleString, { label: "ArraySingleString" }),
    "BinaryMethodReturn": structNode(BinaryMethodReturn, { label: "BinaryMethodReturn" }),
    "BinaryMethodCall": structNode(BinaryMethodCall, { label: "BinaryMethodCall" }),
    "MemberPrimitiveTyped": structNode(MemberPrimitiveTyped, { label: "MemberPrimitiveTyped" }),
    "MemberReference": structNode(MemberReference, { label: "MemberReference" }),
    "ObjectNullMultiple": structNode(ObjectNullMultiple, { label: "ObjectNullMultiple" }),
    "ObjectNullMultiple256": structNode(ObjectNullMultiple256, { label: "ObjectNullMultiple256" }),
    "BinaryObjectString": structNode(BinaryObjectString, { label: "BinaryObjectString" }),
    "SerializationHeaderRecord": structNode(SerializationHeaderRecord, { label: "SerializationHeaderRecord" }),
    "BinaryLibrary": structNode(BinaryLibrary, { label: "BinaryLibrary" }),
    "CrossAppDomainMap": structNode(CrossAppDomainMap, { label: "CrossAppDomainMap" }),
    "CrossAppDomainString": structNode(CrossAppDomainString, { label: "CrossAppDomainString" }),
    "CrossAppDomainAssembly": structNode(CrossAppDomainAssembly, { label: "CrossAppDomainAssembly" }),
    "Record": structNode(Record, { label: "Record" }),
  },
});


/*
未移植项：
- StringValueWithCode: 基类 PrimitiveTypeEnumT 不可移植
- ClassWithMembersAndTypes: 基类 RecordTypeEnumT 不可移植
- ClassWithMembers: 基类 RecordTypeEnumT 不可移植
- SystemClassWithMembersAndTypes: 基类 RecordTypeEnumT 不可移植
- SystemClassWithMembers: 基类 RecordTypeEnumT 不可移植
- ClassWithId: 基类 RecordTypeEnumT 不可移植
- BinaryArray: 基类 RecordTypeEnumT 不可移植
- ArraySinglePrimitive: 基类 RecordTypeEnumT 不可移植
- ArraySingleObject: 基类 RecordTypeEnumT 不可移植
- ArraySingleString: 基类 RecordTypeEnumT 不可移植
- BinaryMethodReturn: 基类 RecordTypeEnumT 不可移植
- BinaryMethodCall: 基类 RecordTypeEnumT 不可移植
- MemberPrimitiveTyped: 基类 RecordTypeEnumT 不可移植
- MemberReference: 基类 RecordTypeEnumT 不可移植
- ObjectNull: 基类 RecordTypeEnumT 不可移植
- ObjectNullMultiple: 基类 RecordTypeEnumT 不可移植
- ObjectNullMultiple256: 基类 RecordTypeEnumT 不可移植
- BinaryObjectString: 基类 RecordTypeEnumT 不可移植
- SerializationHeaderRecord: 基类 RecordTypeEnumT 不可移植
- BinaryLibrary: 基类 RecordTypeEnumT 不可移植
- MessageEnd: 基类 RecordTypeEnumT 不可移植
- CrossAppDomainMap: 基类 RecordTypeEnumT 不可移植
- CrossAppDomainString: 基类 RecordTypeEnumT 不可移植
- CrossAppDomainAssembly: 基类 RecordTypeEnumT 不可移植
- _Trackers.currentObj: 类型 _ObjTracker 不可移植
*/
