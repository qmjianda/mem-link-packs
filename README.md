# mem-link Pack Store

常见二进制格式的 [mem-link](https://github.com/qmjianda/mem-link) pack 集合。
每个 pack 定义一种格式的头部/固定布局，并通过 `index.json` 目录供 mem-link
的「Pack 商店」浏览、安装和更新。

- **目录**：[`index.json`](./index.json)
- **应用入口**：mem-link 顶栏「Pack 商店」或节点库「Pack 商店」
- **默认商店地址**：`https://cdn.jsdelivr.net/gh/qmjianda/mem-link-packs@main/index.json`
- **移植/生成规范**：主仓库 `.agents/skills/mem-link-pack-authoring/SKILL.md`（pack 生成/移植/发布检查清单）

当前目录包含 **377 个 pack**：

| 来源 | 数量 | 许可 | 说明 |
| --- | ---: | --- | --- |
| 手工维护 | 10 | MIT | NES、SQLite、PNG、BMP、ZIP、GIF、ELF、PE、JPEG、WAV |
| [Nybble format registry](https://github.com/itsmajdbuilds/binary-explorer-registry) | 83 | 上游声明可自由使用/再分发 | 覆盖 7z、APFS、DICOM、GGUF、HDF5、NTFS、TIFF、WASM 等 |
| [ImHex-Patterns](https://github.com/WerWolv/ImHex-Patterns) | 284 | GPL-2.0-only | 固定布局移植，覆盖大量图像/音频/容器/文件系统/游戏格式；另有 28 个 pattern 只有条件/varint/运行时逻辑，没有可静态确定的字段，未生成 pack |

> **部分布局**：mem-link 的静态结构无法表达所有上游特性（条件字段、repeat、
> match、变长数组、指针跟随、运行时变换）。移植器保留能确定的固定前缀，并把
> 动态部分尽量生成成 `calcNode` / `listNode` / `arrayNode` / 变体 `structNode`。
> 当前 377 个 pack 中 192 个完整、185 个部分布局；其中 59 个部分布局带有
> 321 个动态辅助节点。`pack.bp.ts` 末尾仍列出无法自动覆盖的项。

## 安装

在 mem-link 中打开「Pack 商店」，搜索格式并点击「安装」：

1. 下载 `pack.bp.ts`；
2. 用索引里的 `sha256` 校验源码；
3. 编译并写入当前蓝图；节点库立即出现新节点。

安装后的源码随蓝图和浏览器缓存保存，**离线可用**。更新 pack 会保留本地
显示名、启用状态和图中节点；如果新版本改了节点 id，已有节点会按求值器的
规则报「未知节点」。

也可以直接下载单个 `packs/<id>/pack.bp.ts`，通过节点库「导入 .bp.ts」安装。

## 目录结构

```text
.
├── index.json                  # 商店目录（由脚本生成）
├── packs/
│   └── <id>/
│       ├── pack.bp.ts          # mem-link pack（可执行代码）
│       ├── meta.json           # 商店元数据：名称、版本、分类、来源、覆盖度
│       ├── reference.blueprint.json # 已接好线的参考图（零填充示例）
│       └── ...
├── scripts/
│   ├── build-index.mjs         # 生成 / 校验 index.json
│   ├── port-nybble.mjs         # Nybble registry → mem-link pack
│   └── port-imhex.mjs          # ImHex .hexpat 固定布局 → mem-link pack
├── vendor/
│   └── nybble-registry.json    # 固定版本的 Nybble registry 快照
├── licenses/
│   └── GPL-2.0-only.txt        # ImHex 派生 pack 的许可
└── store.schema.json           # index.json 的 JSON Schema
```

## 分类

| 分类 | 数量 | 分类 | 数量 |
| --- | ---: | --- | ---: |
| `image` 图像 | 40 | `archive` 压缩包 | 33 |
| `system` 系统 | 33 | `executable` 可执行文件 | 32 |
| `media` 媒体 | 31 | `game` 游戏 | 28 |
| `model` 模型 | 11 | `data` 数据 | 6 |
| `network` 网络 | 6 | `database` 数据库 | 5 |
| `font` 字体 | 1 | `other` 其他 | 151 |

## 维护 index.json

只依赖 Node 22，无第三方包：

```bash
node scripts/build-index.mjs          # 重新生成 index.json
node scripts/build-index.mjs --check  # CI：索引过期则退出 1
```

参考蓝图在 **mem-link 主仓库**生成（需要主仓库的 pack 加载器）：

```bash
node store/scripts/build-references.mjs --root store   # 重新生成参考蓝图
node store/scripts/build-references.mjs --root store --check
```

`build-index.mjs` 会检查每个 pack 都有 `reference.blueprint.json`，并把它的
SHA-256 / 大小写进索引。

脚本会：

- 校验 `meta.json` 的 `id`/目录名、semver、必填字段；
- 计算每个 `pack.bp.ts` 的 SHA-256 和字节数；
- 按 `order` 排序，写入 `index.json`。

CI 会在每次 push / PR 运行 `--check`。

## 添加一个 pack

1. 新建 `packs/<id>/`，放入 `pack.bp.ts` 和 `meta.json`；
2. `id` 使用小写字母、数字和连字符，必须与目录名一致；
3. 运行 `node scripts/build-index.mjs` 并提交 `index.json`；
4. 打开 PR。

`meta.json` 最小示例：

```json
{
  "id": "my-format",
  "name": "My Format",
  "version": "1.0.0",
  "category": "image",
  "order": 500,
  "summary": "一句话说明",
  "description": "更完整的说明",
  "tags": ["my", "format"],
  "author": "your name",
  "license": "MIT",
  "coverage": "complete",
  "source": {
    "provider": "manual",
    "url": "https://example.com/spec"
  }
}
```

`coverage` 为 `partial` 时，应用会显示「部分布局」；请在 `pack.bp.ts` 末尾列出
未移植的字段。

## 回归测试

主仓库 `mem-link` 的 `tests/store-packs.test.ts` 会加载本目录中的**所有** pack，
并断言每个 pack 至少有 1 个类型和 1 个节点。移植脚本改动后应同步运行：

```bash
# 在 mem-link 仓库根目录
node node_modules/vitest/vitest.mjs run tests/store-packs.test.ts
```

## 许可与来源

- 手工 pack：MIT（见 [`LICENSE`](./LICENSE)）。
- Nybble 派生 pack：来源与作者写在各自 `meta.json` 的 `source` 中；上游
  [registry README](https://github.com/itsmajdbuilds/binary-explorer-registry#license)
  原文声明：除非 pack 另有说明，registry 中的 pack 可自由使用与再分发。
- ImHex 派生 pack：`GPL-2.0-only`（上游 GitHub 识别为 GPL-2.0，不是
  `or-later`），完整文本见
  [`licenses/GPL-2.0-only.txt`](./licenses/GPL-2.0-only.txt)。生成的
  `pack.bp.ts` 头部保留上游路径、修改日期与许可，文件末尾列出未移植项。
- 上游快照与提交号见 [`NOTICE.md`](./NOTICE.md)。

## 安全

pack 是**可执行代码**。商店只在你点击「安装」后才下载和编译源码，并用索引中的
SHA-256 校验；哈希缺失时界面会标注「无哈希」。请只安装你信任的来源。
