# 验证记录

日期：2026-09-16（Asia/Shanghai）。

## 已执行

- Next.js 16.3.5 生产构建通过，`/zh`、`/en` 静态生成。
- TypeScript strict 检查通过。
- ESLint 检查通过。
- Playwright 桌面与 Pixel 7 两组：16/16 测试通过。
- 中文桌面首屏浏览器视觉检查：布局、渐变背景与产品预览正常。
- 本地生产构建首次移动 Lighthouse：Performance 99、Accessibility 98、Best Practices 100、SEO 100。LCP 2.2 秒。

首测发现演示区 H3 前缺少 H2、品牌 aria-label 与可见名称不一致，已安排修正。首测报告保留于 `lighthouse-local-zh.report.*`，不代表最终版本。

## 待完成

- 最终代码构建与回归。
- 中英移动端、浅色主题的视觉检查。
- Vercel 正式部署与公开 URL 验证。
- 线上两种语言各三次 Lighthouse，中位数和报告。
