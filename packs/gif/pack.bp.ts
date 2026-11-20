/// <reference path="../../../types/memlink-bp.d.ts" />

/**
 * GIF 87a / 89a 图像。
 *
 * GIF 使用**小端**。文件头 13 字节，之后是逻辑屏幕描述符、可选全局调色板、
 * 若干扩展块和图像块。图像描述符以 0x2C 开头；图形控制扩展以 0x21 0xF9 开头。
 */

const GifHeader = struct('GifHeader', [
  str('signature', { at: 0, size: 3, label: 'GIF' }),
  str('version', { at: 3, size: 3, label: '87a / 89a' }),
  u16('width', { at: 6, label: '逻辑屏幕宽度' }),
  u16('height', { at: 8, label: '逻辑屏幕高度' }),
  bits('globalColorTable', 1, {
    at: 10,
    values: { 0: '无', 1: '有全局调色板' },
    label: '全局调色板标志',
  }),
  bits('colorResolution', 3, { values: { 0: '1 bit', 1: '2 bit', 2: '3 bit', 3: '4 bit', 4: '5 bit', 5: '6 bit', 6: '7 bit', 7: '8 bit' }, label: '颜色分辨率' }),
  bits('sort', 1, { values: { 0: '否', 1: '按重要性排序' }, label: '调色板排序' }),
  bits('colorTableSize', 3, { label: '全局调色板大小（2^(n+1)）' }),
  u8('backgroundColorIndex', { at: 11, label: '背景色索引' }),
  u8('pixelAspectRatio', { at: 12, label: '像素宽高比' }),
]);

const ImageDescriptor = struct('ImageDescriptor', [
  u8('separator', { at: 0, values: { 0x2c: '图像描述符' }, label: '分隔符 0x2C' }),
  u16('left', { at: 1, label: '左侧位置' }),
  u16('top', { at: 3, label: '顶部位置' }),
  u16('width', { at: 5, label: '图像宽度' }),
  u16('height', { at: 7, label: '图像高度' }),
  bits('localColorTable', 1, { at: 9, values: { 0: '无', 1: '有局部调色板' }, label: '局部调色板标志' }),
  bits('interlace', 1, { values: { 0: '否', 1: '隔行' }, label: '隔行标志' }),
  bits('sort', 1, { label: '调色板排序' }),
  bits('reserved', 2, { label: '保留' }),
  bits('colorTableSize', 3, { label: '局部调色板大小（2^(n+1)）' }),
]);

const GraphicControlExtension = struct('GraphicControlExtension', [
  u8('introducer', { at: 0, values: { 0x21: '扩展引导符' }, label: '0x21' }),
  u8('label', { at: 1, values: { 0xf9: '图形控制扩展' }, label: '0xF9' }),
  u8('blockSize', { at: 2, label: '块大小（通常 4）' }),
  bits('disposalMethod', 3, {
    at: 3,
    values: { 0: '未指定', 1: '不处置', 2: '恢复背景色', 3: '恢复上一帧', 4: '保留' },
    label: '处置方式',
  }),
  bits('userInput', 1, { values: { 0: '否', 1: '等待用户输入' }, label: '用户输入' }),
  bits('transparentFlag', 1, { values: { 0: '无', 1: '有透明色' }, label: '透明色标志' }),
  bits('reserved', 3, { label: '保留' }),
  u16('delayTime', { at: 4, label: '延迟（1/100 秒）' }),
  u8('transparentIndex', { at: 6, label: '透明色索引' }),
  u8('terminator', { at: 7, values: { 0: '块结束' }, label: '块终止符' }),
]);

export default definePack({
  name: 'GIF',
  endian: 'little',
  pointerSize: 4,
  constants: {
    HEADER_SIZE: 13,
    IMAGE_SEPARATOR: 0x2c,
    EXTENSION_INTRODUCER: 0x21,
    GRAPHIC_CONTROL_LABEL: 0xf9,
  },
  types: [GifHeader, ImageDescriptor, GraphicControlExtension],
  nodes: {
    header: structNode(GifHeader, { label: 'GIF 文件头（13 B）' }),
    image: structNode(ImageDescriptor, { label: '图像描述符（10 B）' }),
    graphicControl: structNode(GraphicControlExtension, { label: '图形控制扩展（8 B）' }),
  },
});
