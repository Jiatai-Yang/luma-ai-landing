# Luma AI — AI 产品落地页

一个面向创作者与团队的 **概念 AI 产品**介绍页，使用 Next.js App Router、TypeScript 和 Tailwind CSS 实现。支持 `/zh` 与 `/en`，页面内容静态生成。

## 交付

- GitHub：https://github.com/Jiatai-Yang/luma-ai-landing
- Vercel：https://luma-ai-landing-gold.vercel.app/zh（中文） · https://luma-ai-landing-gold.vercel.app/en（English）。
- 项目说明：`/delivery`

> 不是实际 AI 服务。演示使用本地预设输出，没有真实模型请求、文件上传、账号或支付。评价人物为虚构示例，价格与耗时图表为明确标注的概念数据。

## 本地运行

建议 Node.js 22 LTS 或满足 Next.js 当前版本要求的运行环境。本次本地构建环境：Node.js 25.8.1。

```bash
npm ci
cp .env.example .env.local
npm run dev
```

访问 http://127.0.0.1:3000/zh 或 http://127.0.0.1:3000/en。

生产检查：

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

`.env.local` 的 `NEXT_PUBLIC_SITE_URL` 应设为正式部署域名，用于 canonical、OG、JSON-LD、robots 与 sitemap。

## 内容与交互

- Hero：渐变光晕、网格动态背景、两个有效 CTA、完整工作台预览。
- 6 项核心能力、8 类领域和 24 个输入/输出明确的细分场景。
- 写作、代码、客服、分析四类演示；可编辑任务输入、切换类别、查看预设结果和复制文本。
- 3 组特性详解与代码原生界面示意。
- 4 步流程：目标、上下文、迭代、人工审核与交付。
- 可访问 SVG 耗时图表与语义化功能对比表。
- 6 条虚构人物示例反馈，3 档概念套餐、月付/年付切换、方案说明弹窗。
- 12 条原生 details/summary FAQ。
- 中英独立路由、语言偏好 Cookie、刷新保留语言。
- 明暗主题持久化、键盘焦点、跳到主内容、减少动画支持。
- 各内容区进入视口动画；无 JavaScript 时内容仍可读。
- 本地加载骨架、PNG OG 图、favicon、双语元数据、sitemap、robots、WebSite JSON-LD。

## 架构

```text
src/app/[locale]/       静态双语页面、布局、元数据与加载状态
src/app/route.ts        根据语言 Cookie 重定向入口
src/components/        页面区块与局部交互
src/content/index.ts   类型化的中英文文案与场景数据
public/                SVG 品牌资产与 PNG 分享图
tests/                关键行为的桌面与移动自动化验证
 docs/                 决策与实测记录
```

页面叙事与静态内容通过 Server Components 输出；演示、筛选、主题、价格属于局部 Client Components。未使用全页客户端渲染。样式由 Tailwind 的 PostCSS 流程构建，辅以语义化 CSS 类与主题变量。Lucide 图标按名称导入。

## 性能取舍

1. CSS transform/opacity 动画取代大型视频、Three.js 与 Shader 初始化，优先保证首屏体验。
2. HTML/CSS/SVG 绘制产品示意，无外部图片、字体或第三方追踪请求。
3. SVG 绘制简单图表，避免为静态数据引入图表库。
4. 双语内容构建时生成，首屏标题和 CTA 不等待客户端执行。
5. 一个 IntersectionObserver 管理 scroll reveal，动画仅执行一次；减少动画偏好下直接显示。
6. 语言链接不预取另一语言整页，控制首屏网络开销。
7. PNG OG 图仅用于分享，不参与首屏加载。

细节和证据见 [docs/decisions.md](docs/decisions.md) 与 [docs/verification.md](docs/verification.md)。

## 用了哪些 AI 工具，如何使用

本项目实际使用 **Codex**：任务拆解、双语内容初稿、React 组件实现、TypeScript 与 ESLint 问题排查、终端构建测试、浏览器视觉检查以及部署操作。

实施中主动判断与修改：

- 选择概念品牌，使功能、场景和视觉有统一叙事，并明确标注内容真实性。
- 将空泛的“支持某行业”改为输入、输出和具体任务。
- 把无后端的 CTA 设计为本地演示和方案详情，避免虚假注册或支付。
- 英文按英文表达组织，检查扩展后的卡片和移动布局。
- 用轻量 CSS/SVG 视觉控制资源成本；未使用图片生成工具、3D 库或图表库。
- 根据 Lighthouse 修正演示标题层级与品牌可访问名称。
- 根据 ESLint 修正主题初始化，避免 effect 中同步 setState。

没有调用其他 AI 模型、真实推理 API 或付费生成服务。浏览器、Playwright、Lighthouse、Git 与 Vercel CLI 是实现和验证工具，不作为 AI 生成工具统计。

## 自动化测试

```bash
# 先运行生产服务器
npm run build
npm start
# 在另一终端
npm test
```

测试覆盖双语内容、刷新与入口语言偏好、场景筛选、本地演示、价格总额、弹窗 Escape、FAQ 键盘操作、主题持久化、减少动画、横向溢出和无效语言 404。

本地测试默认使用 macOS 已安装的 Google Chrome。非 macOS 环境自动使用 Playwright Chromium，可执行：

```bash
npx playwright install chromium
```

线上验证使用 `TEST_BASE_URL=https://your-project.vercel.app npm test`。

## Lighthouse

使用生产构建、移动端默认模拟配置。每种语言最终执行三次，记录中位数。分数属于具体测试条件下的实验室结果，不代表所有设备和网络。报告与测试时间见验证文档。

本地命令示例（macOS）：

```bash
CHROME_PATH='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' \
  npx lighthouse http://127.0.0.1:3000/zh \
  --chrome-flags='--headless --no-sandbox' \
  --only-categories=performance,accessibility,best-practices,seo \
  --output=json --output=html --output-path=docs/lighthouse-local-zh
```

## Vercel 部署

从 GitHub 导入该仓库，框架选择 Next.js，根目录为仓库根目录。设置 `NEXT_PUBLIC_SITE_URL` 为正式域名后部署。

也可以使用官方 CLI（通过 npx 临时获取，不作为网站依赖）：

```bash
npx vercel login
npx vercel --prod
```

本项目无模型 API Key 或数据库配置。不要提交 `.env.local`、`.vercel` 或认证凭据。

## 持续验证与发布通道

GitHub Actions 在 push / pull request 上执行安装、生产构建、lint、类型检查与桌面/移动端测试。当前 Vercel 通过官方 CLI 从源码发布；GitHub App 自动部署连接尚未建立，后续推送需要重新执行 CLI 发布，或在 Vercel 的 Git 设置中连接该公开仓库。
