/// <reference path="../../../types/memlink-bp.d.ts" />

// 由 store/scripts/port-imhex.mjs 自动生成，请勿手工编辑。
// 修改：2026-11-21 由上游 .hexpat 静态移植为 mem-link pack（非上游原文件）。
// 上游：https://github.com/WerWolv/ImHex-Patterns/blob/master/esp32_image.hexpat
// 许可：GPL-2.0-only（ImHex-Patterns）；生成物按同一许可分发。
// 覆盖：partial；未移植 1 项（见文件末尾）
const spi_config_t = struct("spi_config_t", [
  bits("spi_speed", 4, { at: 0, bit: 0, unit: 1, label: "spi_speed" }),
  bits("spi_size", 4, { at: 0, bit: 4, unit: 1, label: "spi_size" }),
]);

const esp_app_desc_t = struct("esp_app_desc_t", [
  u32("magic_word", {  }),
  u32("secure_version", {  }),
  array("reserv1", "u32", 2),
  str("version", { size: 32 }),
  str("project_name", { size: 32 }),
  str("compile_time", { size: 16 }),
  str("compile_date", { size: 16 }),
  str("idf_ver", { size: 32 }),
  bytes("app_elf_sha256", { size: 32 }),
  u16("min_efuse_blk_rev_full", {  }),
  u16("max_efuse_blk_rev_full", {  }),
  u8("mmu_page_size", {  }),
  bytes("reserv3", { size: 3 }),
  array("reserv2", "u32", 18),
]);

const esp_image_header_t = struct("esp_image_header_t", [
  u8("magic", {  }),
  u8("segment_count", {  }),
  u8("spi_mode", { values: { "0": "QIO", "1": "QOUT", "2": "DIO", "3": "DOUT", "4": "FAST_READ", "5": "SLOW_READ" } }),
  record("spi_cfg", spi_config_t),
  u32("entry_addr", {  }),
  u8("wp_pin", {  }),
  bytes("spi_pin_drv", { size: 3 }),
  u16("chip_id", { values: { "0": "ESP_CHIP_ID_ESP32", "2": "ESP_CHIP_ID_ESP32S2", "5": "ESP_CHIP_ID_ESP32C3", "9": "ESP_CHIP_ID_ESP32S3", "12": "ESP_CHIP_ID_ESP32C2", "13": "ESP_CHIP_ID_ESP32C6", "16": "ESP_CHIP_ID_ESP32H2", "18": "ESP_CHIP_ID_ESP32P4", "23": "ESP_CHIP_ID_ESP32C5", "20": "ESP_CHIP_ID_ESP32C61", "25": "ESP_CHIP_ID_ESP32H21", "28": "ESP_CHIP_ID_ESP32H4", "65535": "ESP_CHIP_ID_INVALID" } }),
  u8("min_chip_rev", {  }),
  u16("min_chip_rev_full", {  }),
  u16("max_chip_rev_full", {  }),
  bytes("reserved", { size: 4 }),
  u8("hash_appended", {  }),
]);

const esp_image_segment_header_t = struct("esp_image_segment_header_t", [
  u32("load_addr", {  }),
  u32("data_len", {  }),
]);

const esp_image_segment_t = struct("esp_image_segment_t", [
  record("header", esp_image_segment_header_t),
]);

const esp_image_t = struct("esp_image_t", [
  record("header", esp_image_header_t),
]);

export default definePack({
  name: "ESP32 Firmware Image Format",
  endian: "little",
  pointerSize: 8,
  types: [spi_config_t, esp_app_desc_t, esp_image_header_t, esp_image_segment_header_t, esp_image_segment_t, esp_image_t],
  nodes: {
    "entry": structNode(esp_image_t, { label: "esp_image_t（入口）" }),
    "spi_config_t": structNode(spi_config_t, { label: "spi_config_t" }),
    "esp_app_desc_t": structNode(esp_app_desc_t, { label: "esp_app_desc_t" }),
    "esp_image_header_t": structNode(esp_image_header_t, { label: "esp_image_header_t" }),
    "esp_image_segment_header_t": structNode(esp_image_segment_header_t, { label: "esp_image_segment_header_t" }),
    "esp_image_segment_t": structNode(esp_image_segment_t, { label: "esp_image_segment_t" }),
  },
});


/*
未移植项：
- esp_image_segment_t.data: 类型 esp_image_segment_data_t 不可移植
*/
