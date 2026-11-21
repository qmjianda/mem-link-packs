/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/ttf.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：complete
const TableDirectory = struct("TableDirectory", [
  str("tag", { size: 4 }),
  u32("checkSum", {  }),
  u32("offset", {  }),
  u32("length", {  }),
]);

const FixedPoint32 = struct("FixedPoint32", [
  u16("integer", {  }),
  u16("fraction", {  }),
]);

const F2Dot14 = struct("F2Dot14", [
  bits("integer", 2, { at: 0, bit: 0, unit: 2, label: "integer" }),
  bits("fraction", 14, { at: 0, bit: 2, unit: 2, label: "fraction" }),
]);

const LongDatetime = struct("LongDatetime", [
  i64("time", {  }),
]);

const AxisValueMap = struct("AxisValueMap", [
  record("fromCoord", F2Dot14),
  record("toCoord", F2Dot14),
]);

const ShortFracSegment = struct("ShortFracSegment", [
  u16("positionMapCount", {  }),
]);

const AvarTable = struct("AvarTable", [
  record("version", FixedPoint32),
  i32("axisCount", {  }),
]);

const BaseCmapSubtable = struct("BaseCmapSubtable", [
  u16("format", {  }),
]);

const CmapSubtable0 = struct("CmapSubtable0", [
  u16("format", {  }),
  u16("length", {  }),
  u16("language", {  }),
  bytes("glyphIndexArr", { size: 256 }),
]);

const CmapSubtable2 = struct("CmapSubtable2", [
  u16("format", {  }),
  u16("length", {  }),
  u16("language", {  }),
  array("subHeaderKeys", "u16", 256),
]);

const CmapSubtable4 = struct("CmapSubtable4", [
  u16("format", {  }),
  u16("length", {  }),
  u16("language", {  }),
  u16("segCountX2", {  }),
  u16("searchRange", {  }),
  u16("entrySelector", {  }),
  u16("rangeShift", {  }),
]);

const CmapSubtable6 = struct("CmapSubtable6", [
  u16("format", {  }),
  u16("length", {  }),
  u16("language", {  }),
  u16("firstCode", {  }),
  u16("entryCount", {  }),
]);

const SequentialMapGroup = struct("SequentialMapGroup", [
  u32("startCharCode", {  }),
  u32("endCharCode", {  }),
  u32("startGlyphId", {  }),
]);

const CmapSubtable8 = struct("CmapSubtable8", [
  u16("format", {  }),
  u16("reserved", {  }),
  u32("length", {  }),
  u32("language", {  }),
  bytes("is32", { size: 8192 }),
  u32("numGroups", {  }),
]);

const CmapSubtable10 = struct("CmapSubtable10", [
  u16("format", {  }),
  u16("reserved", {  }),
  u32("length", {  }),
  u32("language", {  }),
  u32("startCharCode", {  }),
  u32("numChars", {  }),
]);

const CmapSubtable12 = struct("CmapSubtable12", [
  u16("format", {  }),
  u16("reserved", {  }),
  u32("length", {  }),
  u32("language", {  }),
  u32("numGroups", {  }),
]);

const EncodingRecord = struct("EncodingRecord", [
  u16("platformId", { values: { "0": "Unicode", "1": "Macintosh", "2": "ISO", "3": "Microsoft", "4": "Custom" } }),
  u16("encodingId", {  }),
  u32("offset", {  }),
]);

const RangeGaspBehavior = struct("RangeGaspBehavior", [
  bits("symmetricSmoothing", 1, { at: 0, bit: 12, unit: 2, label: "symmetricSmoothing" }),
  bits("symmetricGridfit", 1, { at: 0, bit: 13, unit: 2, label: "symmetricGridfit" }),
  bits("doGray", 1, { at: 0, bit: 14, unit: 2, label: "doGray" }),
  bits("gridFit", 1, { at: 0, bit: 15, unit: 2, label: "gridFit" }),
]);

const GaspRange = struct("GaspRange", [
  u16("rangeMaxPPEM", {  }),
  record("rangeGaspBehavior", RangeGaspBehavior),
]);

const GaspTable = struct("GaspTable", [
  u16("version", {  }),
  u16("numRanges", {  }),
]);

const GlyphTableHeader = struct("GlyphTableHeader", [
  i16("numContours", {  }),
  i16("xMin", {  }),
  i16("yMin", {  }),
  i16("xMax", {  }),
  i16("yMax", {  }),
]);

const OutlineFlag = struct("OutlineFlag", [
  bits("ySameOrPositive", 1, { at: 0, bit: 2, unit: 1, label: "ySameOrPositive" }),
  bits("xSameOrPositive", 1, { at: 0, bit: 3, unit: 1, label: "xSameOrPositive" }),
  bits("repeat", 1, { at: 0, bit: 4, unit: 1, label: "repeat" }),
  bits("yShort", 1, { at: 0, bit: 5, unit: 1, label: "yShort" }),
  bits("xShort", 1, { at: 0, bit: 6, unit: 1, label: "xShort" }),
  bits("onCurve", 1, { at: 0, bit: 7, unit: 1, label: "onCurve" }),
]);

const SimpleGlyphTable = struct("SimpleGlyphTable", [
  i16("numContours", {  }),
  i16("xMin", {  }),
  i16("yMin", {  }),
  i16("xMax", {  }),
  i16("yMax", {  }),
]);

const CompositeGlyphFlag = struct("CompositeGlyphFlag", [
  bits("unscaledComponentOffset", 1, { at: 0, bit: 3, unit: 2, label: "unscaledComponentOffset" }),
  bits("scaledComponentOffset", 1, { at: 0, bit: 4, unit: 2, label: "scaledComponentOffset" }),
  bits("overlapCompound", 1, { at: 0, bit: 5, unit: 2, label: "overlapCompound" }),
  bits("useMyMetrics", 1, { at: 0, bit: 6, unit: 2, label: "useMyMetrics" }),
  bits("weHaveInstructions", 1, { at: 0, bit: 7, unit: 2, label: "weHaveInstructions" }),
  bits("weHaveA2x2", 1, { at: 0, bit: 8, unit: 2, label: "weHaveA2x2" }),
  bits("weHaveAnXAndYScale", 1, { at: 0, bit: 9, unit: 2, label: "weHaveAnXAndYScale" }),
  bits("moreComponents", 1, { at: 0, bit: 10, unit: 2, label: "moreComponents" }),
  bits("weHaveAScale", 1, { at: 0, bit: 12, unit: 2, label: "weHaveAScale" }),
  bits("roundXYToGrid", 1, { at: 0, bit: 13, unit: 2, label: "roundXYToGrid" }),
  bits("argsAreXYValues", 1, { at: 0, bit: 14, unit: 2, label: "argsAreXYValues" }),
  bits("arg1And2AreWords", 1, { at: 0, bit: 15, unit: 2, label: "arg1And2AreWords" }),
]);

const ComponentGlyphRecord = struct("ComponentGlyphRecord", [
  record("flags", CompositeGlyphFlag),
  u16("glyphIndex", {  }),
]);

const CompositeGlyphTable = struct("CompositeGlyphTable", [
  i16("numContours", {  }),
  i16("xMin", {  }),
  i16("yMin", {  }),
  i16("xMax", {  }),
  i16("yMax", {  }),
]);

const DeviceRecord = struct("DeviceRecord", [
  u8("pixelSize", {  }),
  u8("maxWidth", {  }),
]);

const HdmxTable = struct("HdmxTable", [
  u16("version", {  }),
  u16("numRecords", {  }),
  u32("sizeDeviceRecord", {  }),
]);

const HeadFlag = struct("HeadFlag", [
  bits("lastResort", 1, { at: 0, bit: 1, unit: 2, label: "lastResort" }),
  bits("clearTypeOptimized", 1, { at: 0, bit: 2, unit: 2, label: "clearTypeOptimized" }),
  bits("converted", 1, { at: 0, bit: 3, unit: 2, label: "converted" }),
  bits("lossless", 1, { at: 0, bit: 4, unit: 2, label: "lossless" }),
  bits("indicStyleRearr", 1, { at: 0, bit: 5, unit: 2, label: "indicStyleRearr" }),
  bits("RTLGlyph", 1, { at: 0, bit: 6, unit: 2, label: "RTLGlyph" }),
  bits("AATFont", 1, { at: 0, bit: 7, unit: 2, label: "AATFont" }),
  bits("linguisticRender", 1, { at: 0, bit: 8, unit: 2, label: "linguisticRender" }),
  bits("verticalLayout", 1, { at: 0, bit: 10, unit: 2, label: "verticalLayout" }),
  bits("instrMayAlterAW", 1, { at: 0, bit: 11, unit: 2, label: "instrMayAlterAW" }),
  bits("integerScaling", 1, { at: 0, bit: 12, unit: 2, label: "integerScaling" }),
  bits("differentPointSize", 1, { at: 0, bit: 13, unit: 2, label: "differentPointSize" }),
  bits("xLBlackBitIsLSB", 1, { at: 0, bit: 14, unit: 2, label: "xLBlackBitIsLSB" }),
  bits("yZeroIsBaseline", 1, { at: 0, bit: 15, unit: 2, label: "yZeroIsBaseline" }),
]);

const MacStyle = struct("MacStyle", [
  bits("extended", 1, { at: 0, bit: 9, unit: 2, label: "extended" }),
  bits("condensed", 1, { at: 0, bit: 10, unit: 2, label: "condensed" }),
  bits("shadow", 1, { at: 0, bit: 11, unit: 2, label: "shadow" }),
  bits("outline", 1, { at: 0, bit: 12, unit: 2, label: "outline" }),
  bits("underline", 1, { at: 0, bit: 13, unit: 2, label: "underline" }),
  bits("italic", 1, { at: 0, bit: 14, unit: 2, label: "italic" }),
  bits("bold", 1, { at: 0, bit: 15, unit: 2, label: "bold" }),
]);

const HeadTable = struct("HeadTable", [
  record("version", FixedPoint32),
  record("fontRevision", FixedPoint32),
  u32("checksumAdjustment", {  }),
]);

const HheaTable = struct("HheaTable", [
  record("version", FixedPoint32),
  i16("ascent", {  }),
  i16("descent", {  }),
  i16("lineGap", {  }),
  u16("advanceWidthMax", {  }),
  i16("minLeftSideBearing", {  }),
  i16("minRightSideBearing", {  }),
  i16("xMaxExtent", {  }),
  i16("caretSlopeRise", {  }),
  i16("caretSlopeRun", {  }),
  i16("caretOffset", {  }),
  array("reserved", "i16", 4),
  i16("metricDataFormat", {  }),
  u16("numberOfHMetrics", {  }),
]);

const LongHorMetric = struct("LongHorMetric", [
  u16("advanceWidth", {  }),
  i16("lsb", {  }),
]);

const MaxpTable = struct("MaxpTable", [
  record("version", FixedPoint32),
  u16("numGlyphs", {  }),
]);

const NameRecord = struct("NameRecord", [
  u16("platformId", {  }),
  u16("encodingId", {  }),
  u16("languageId", {  }),
  u16("nameId", {  }),
  u16("length", {  }),
  u16("stringOffset", {  }),
]);

const LangTagRecord = struct("LangTagRecord", [
  u16("length", {  }),
  u16("langTagOffset", {  }),
]);

const NameTableV0 = struct("NameTableV0", [
  u16("version", {  }),
  u16("count", {  }),
  u16("storageOffset", {  }),
]);

const NameTableV1 = struct("NameTableV1", [
  u16("version", {  }),
  u16("count", {  }),
  u16("storageOffset", {  }),
  u16("langTagCount", {  }),
]);

const OS2TableV0 = struct("OS2TableV0", [
  u16("version", {  }),
  i16("xAvgCharWidth", {  }),
  u16("usWeightClass", {  }),
  u16("usWidthClass", {  }),
  u16("fsType", {  }),
  i16("ySubscriptXSize", {  }),
  i16("ySubscriptYSize", {  }),
  i16("SubscriptXOffset", {  }),
  i16("SubscriptYOffset", {  }),
  i16("ySuperscriptXSize", {  }),
  i16("ySuperscriptYSize", {  }),
  i16("SuperscriptXOffset", {  }),
  i16("SuperscriptYOffset", {  }),
  i16("yStrikeoutSize", {  }),
  i16("yStrikeoutPosition", {  }),
  i16("sFamilyClass", {  }),
  bytes("panose", { size: 10 }),
  array("ulUnicodeRange", "u32", 4),
  bytes("achVendID", { size: 4 }),
  u16("fsSelection", {  }),
  u16("usFirstCharIndex", {  }),
  u16("usLastCharIndex", {  }),
  i16("sTypoAscender", {  }),
  i16("sTypoDescender", {  }),
  i16("sTypoLineGap", {  }),
  u16("usWinAscent", {  }),
  u16("usWinDescent", {  }),
]);

const OS2TableV1 = struct("OS2TableV1", [
  u16("version", {  }),
  i16("xAvgCharWidth", {  }),
  u16("usWeightClass", {  }),
  u16("usWidthClass", {  }),
  u16("fsType", {  }),
  i16("ySubscriptXSize", {  }),
  i16("ySubscriptYSize", {  }),
  i16("SubscriptXOffset", {  }),
  i16("SubscriptYOffset", {  }),
  i16("ySuperscriptXSize", {  }),
  i16("ySuperscriptYSize", {  }),
  i16("SuperscriptXOffset", {  }),
  i16("SuperscriptYOffset", {  }),
  i16("yStrikeoutSize", {  }),
  i16("yStrikeoutPosition", {  }),
  i16("sFamilyClass", {  }),
  bytes("panose", { size: 10 }),
  array("ulUnicodeRange", "u32", 4),
  bytes("achVendID", { size: 4 }),
  u16("fsSelection", {  }),
  u16("usFirstCharIndex", {  }),
  u16("usLastCharIndex", {  }),
  i16("sTypoAscender", {  }),
  i16("sTypoDescender", {  }),
  i16("sTypoLineGap", {  }),
  u16("usWinAscent", {  }),
  u16("usWinDescent", {  }),
  array("ulCodePageRange", "u32", 2),
]);

const OS2TableV4 = struct("OS2TableV4", [
  u16("version", {  }),
  i16("xAvgCharWidth", {  }),
  u16("usWeightClass", {  }),
  u16("usWidthClass", {  }),
  u16("fsType", {  }),
  i16("ySubscriptXSize", {  }),
  i16("ySubscriptYSize", {  }),
  i16("SubscriptXOffset", {  }),
  i16("SubscriptYOffset", {  }),
  i16("ySuperscriptXSize", {  }),
  i16("ySuperscriptYSize", {  }),
  i16("SuperscriptXOffset", {  }),
  i16("SuperscriptYOffset", {  }),
  i16("yStrikeoutSize", {  }),
  i16("yStrikeoutPosition", {  }),
  i16("sFamilyClass", {  }),
  bytes("panose", { size: 10 }),
  array("ulUnicodeRange", "u32", 4),
  bytes("achVendID", { size: 4 }),
  u16("fsSelection", {  }),
  u16("usFirstCharIndex", {  }),
  u16("usLastCharIndex", {  }),
  i16("sTypoAscender", {  }),
  i16("sTypoDescender", {  }),
  i16("sTypoLineGap", {  }),
  u16("usWinAscent", {  }),
  u16("usWinDescent", {  }),
  array("ulCodePageRange", "u32", 2),
  i16("sxHeight", {  }),
  i16("sCapHeight", {  }),
  u16("usDefaultChar", {  }),
  u16("usBreakChar", {  }),
  u16("usMaxContent", {  }),
]);

const OS2TableV5 = struct("OS2TableV5", [
  u16("version", {  }),
  i16("xAvgCharWidth", {  }),
  u16("usWeightClass", {  }),
  u16("usWidthClass", {  }),
  u16("fsType", {  }),
  i16("ySubscriptXSize", {  }),
  i16("ySubscriptYSize", {  }),
  i16("SubscriptXOffset", {  }),
  i16("SubscriptYOffset", {  }),
  i16("ySuperscriptXSize", {  }),
  i16("ySuperscriptYSize", {  }),
  i16("SuperscriptXOffset", {  }),
  i16("SuperscriptYOffset", {  }),
  i16("yStrikeoutSize", {  }),
  i16("yStrikeoutPosition", {  }),
  i16("sFamilyClass", {  }),
  bytes("panose", { size: 10 }),
  array("ulUnicodeRange", "u32", 4),
  bytes("achVendID", { size: 4 }),
  u16("fsSelection", {  }),
  u16("usFirstCharIndex", {  }),
  u16("usLastCharIndex", {  }),
  i16("sTypoAscender", {  }),
  i16("sTypoDescender", {  }),
  i16("sTypoLineGap", {  }),
  u16("usWinAscent", {  }),
  u16("usWinDescent", {  }),
  array("ulCodePageRange", "u32", 2),
  i16("sxHeight", {  }),
  i16("sCapHeight", {  }),
  u16("usDefaultChar", {  }),
  u16("usBreakChar", {  }),
  u16("usMaxContent", {  }),
  u16("usLowerOpticalPointSize", {  }),
  u16("usUpperOpticalPointSize", {  }),
]);

const PostTableV1 = struct("PostTableV1", [
  record("version", FixedPoint32),
  record("italicAngle", FixedPoint32),
  i16("underlinePosition", {  }),
  i16("underlineThickness", {  }),
  u32("isFixedPitch", {  }),
  u32("minMemType42", {  }),
  u32("maxMemType42", {  }),
  u32("minMemType1", {  }),
  u32("maxMemType1", {  }),
]);

const PostTableV2 = struct("PostTableV2", [
  record("version", FixedPoint32),
  record("italicAngle", FixedPoint32),
  i16("underlinePosition", {  }),
  i16("underlineThickness", {  }),
  u32("isFixedPitch", {  }),
  u32("minMemType42", {  }),
  u32("maxMemType42", {  }),
  u32("minMemType1", {  }),
  u32("maxMemType1", {  }),
  u16("numGlyphs", {  }),
]);

const HiddenForPreprocessing = struct("HiddenForPreprocessing", [
  record("td", TableDirectory),
]);

const Table = struct("Table", [
  record("td", TableDirectory),
]);

const TTF = struct("TTF", [
  u32("scalarType", {  }),
  u16("numTables", {  }),
  u16("searchRange", {  }),
  u16("entrySelector", {  }),
  u16("rangeShift", {  }),
]);

export default definePack({
  name: "TrueType/OpenType font",
  endian: "big",
  pointerSize: 8,
  types: [TableDirectory, FixedPoint32, F2Dot14, LongDatetime, AxisValueMap, ShortFracSegment, AvarTable, BaseCmapSubtable, CmapSubtable0, CmapSubtable2, CmapSubtable4, CmapSubtable6, SequentialMapGroup, CmapSubtable8, CmapSubtable10, CmapSubtable12, EncodingRecord, RangeGaspBehavior, GaspRange, GaspTable, GlyphTableHeader, OutlineFlag, SimpleGlyphTable, CompositeGlyphFlag, ComponentGlyphRecord, CompositeGlyphTable, DeviceRecord, HdmxTable, HeadFlag, MacStyle, HeadTable, HheaTable, LongHorMetric, MaxpTable, NameRecord, LangTagRecord, NameTableV0, NameTableV1, OS2TableV0, OS2TableV1, OS2TableV4, OS2TableV5, PostTableV1, PostTableV2, HiddenForPreprocessing, Table, TTF],
  nodes: {
    "entry": structNode(TTF, { label: "TTF（入口）" }),
    "TableDirectory": structNode(TableDirectory, { label: "TableDirectory" }),
    "FixedPoint32": structNode(FixedPoint32, { label: "FixedPoint32" }),
    "F2Dot14": structNode(F2Dot14, { label: "F2Dot14" }),
    "LongDatetime": structNode(LongDatetime, { label: "LongDatetime" }),
    "AxisValueMap": structNode(AxisValueMap, { label: "AxisValueMap" }),
    "ShortFracSegment": structNode(ShortFracSegment, { label: "ShortFracSegment" }),
    "AvarTable": structNode(AvarTable, { label: "AvarTable" }),
    "BaseCmapSubtable": structNode(BaseCmapSubtable, { label: "BaseCmapSubtable" }),
    "CmapSubtable0": structNode(CmapSubtable0, { label: "CmapSubtable0" }),
    "CmapSubtable2": structNode(CmapSubtable2, { label: "CmapSubtable2" }),
    "CmapSubtable4": structNode(CmapSubtable4, { label: "CmapSubtable4" }),
    "CmapSubtable6": structNode(CmapSubtable6, { label: "CmapSubtable6" }),
    "SequentialMapGroup": structNode(SequentialMapGroup, { label: "SequentialMapGroup" }),
    "CmapSubtable8": structNode(CmapSubtable8, { label: "CmapSubtable8" }),
    "CmapSubtable10": structNode(CmapSubtable10, { label: "CmapSubtable10" }),
    "CmapSubtable12": structNode(CmapSubtable12, { label: "CmapSubtable12" }),
    "EncodingRecord": structNode(EncodingRecord, { label: "EncodingRecord" }),
    "RangeGaspBehavior": structNode(RangeGaspBehavior, { label: "RangeGaspBehavior" }),
    "GaspRange": structNode(GaspRange, { label: "GaspRange" }),
    "GaspTable": structNode(GaspTable, { label: "GaspTable" }),
    "GlyphTableHeader": structNode(GlyphTableHeader, { label: "GlyphTableHeader" }),
    "OutlineFlag": structNode(OutlineFlag, { label: "OutlineFlag" }),
    "SimpleGlyphTable": structNode(SimpleGlyphTable, { label: "SimpleGlyphTable" }),
    "CompositeGlyphFlag": structNode(CompositeGlyphFlag, { label: "CompositeGlyphFlag" }),
    "ComponentGlyphRecord": structNode(ComponentGlyphRecord, { label: "ComponentGlyphRecord" }),
    "CompositeGlyphTable": structNode(CompositeGlyphTable, { label: "CompositeGlyphTable" }),
    "DeviceRecord": structNode(DeviceRecord, { label: "DeviceRecord" }),
    "HdmxTable": structNode(HdmxTable, { label: "HdmxTable" }),
    "HeadFlag": structNode(HeadFlag, { label: "HeadFlag" }),
    "MacStyle": structNode(MacStyle, { label: "MacStyle" }),
    "HeadTable": structNode(HeadTable, { label: "HeadTable" }),
    "HheaTable": structNode(HheaTable, { label: "HheaTable" }),
    "LongHorMetric": structNode(LongHorMetric, { label: "LongHorMetric" }),
    "MaxpTable": structNode(MaxpTable, { label: "MaxpTable" }),
    "NameRecord": structNode(NameRecord, { label: "NameRecord" }),
    "LangTagRecord": structNode(LangTagRecord, { label: "LangTagRecord" }),
    "NameTableV0": structNode(NameTableV0, { label: "NameTableV0" }),
    "NameTableV1": structNode(NameTableV1, { label: "NameTableV1" }),
    "OS2TableV0": structNode(OS2TableV0, { label: "OS2TableV0" }),
    "OS2TableV1": structNode(OS2TableV1, { label: "OS2TableV1" }),
    "OS2TableV4": structNode(OS2TableV4, { label: "OS2TableV4" }),
    "OS2TableV5": structNode(OS2TableV5, { label: "OS2TableV5" }),
    "PostTableV1": structNode(PostTableV1, { label: "PostTableV1" }),
    "PostTableV2": structNode(PostTableV2, { label: "PostTableV2" }),
    "HiddenForPreprocessing": structNode(HiddenForPreprocessing, { label: "HiddenForPreprocessing" }),
    "Table": structNode(Table, { label: "Table" }),
  },
});

