# 最终验证记录

日期：2026-09-16（Asia/Shanghai）。

## 正式交付

- 中文：https://luma-ai-landing-gold.vercel.app/zh
- English：https://luma-ai-landing-gold.vercel.app/en
- GitHub：https://github.com/Jiatai-Yang/luma-ai-landing
- 页面源码版本：`bd21779`。
- Vercel 正式部署：`dpl_ASBMCXjmvgCjFnA3DQTgbk5DhiMB`。
- 部署检查：https://vercel.com/ace-ff1a/luma-ai-landing/ASBMCXjmvgCjFnA3DQTgbk5DhiMB

## 构建与代码检查

- Next.js 16.3.5 生产构建通过；`/zh`、`/en` 使用 generateStaticParams 静态生成。
- TypeScript strict 检查通过。
- ESLint 检查通过。
- 最终工具安装后的 npm audit：0 个漏洞；发布 CLI 放在临时独立目录，不进入网站依赖。

## 线上交互回归

命令：

```bash
TEST_BASE_URL=https://luma-ai-landing-gold.vercel.app npm test
```

22/22 通过，耗时 15.8 秒。桌面 Chrome 与 Pixel 7 两组覆盖：

- 中英文内容、单个 H1、语言属性、24 场景与 12 FAQ，无横向溢出。
- 语言切换保留区块锚点，刷新保持语言，根入口读取偏好 Cookie。
- 场景分类筛选与恢复全部内容。
- 代码示例、任务输入与明确的本地预设输出说明。
- 年付价格总额、方案弹窗、Escape 关闭。
- FAQ 键盘操作与主题持久化。
- 减少动画偏好下内容直接可读。
- 桌面导航与移动菜单选择、Escape 和焦点返回。
- 无效语言返回 HTTP 404。
- canonical、sitemap、robots 使用真实域名，OG PNG 可访问。
- Axe 的 WCAG 2 A/AA 与 2.1 A/AA 自动化检查：默认深色、浅色及打开的方案弹窗均未发现违规。

自动化检查不能覆盖全部无障碍体验；已另行检查可见焦点、移动布局与减少动画。

## 视觉检查与修正

浏览器检查了中文桌面与 390px 移动首屏、英文移动首屏、英文浅色主题、桌面价格区、最终中文线上首屏。导航、CTA、工作台、换行与主题正常。

检查中发现并修正：

1. 演示区标题由 H1 跳到 H3，补充语义化 H2。
2. 品牌 aria-label 与可见名称不一致，改为直接使用可见文本。
3. 浅色推荐标签和示例头像字母对比度不足，改为白字或深色字。
4. 完整页面 Axe 扫描发现卡片序号透明度使文字对比度不足，取消文字透明度。

## 移动 Lighthouse

| 页面 | Performance | Accessibility | Best Practices | SEO | LCP | TBT | CLS |
|---|---:|---:|---:|---:|---:|---:|---:|
| 中文 /zh | 99 | 100 | 100 | 100 | 1.53s | 8.5ms | 0 |
| English /en | 98 | 100 | 100 | 100 | 1.79s | 57.0ms | 0 |

所有单次测试的 Performance / SEO 均达到 90+。中文 Performance：100、96、99；英文：97、100、98。英文第三次 SEO 为 92，原始报告注明 robots.txt 抓取超时；其余五次 SEO 均为 100。保留全部结果，不删除或替换该次波动。

每种语言执行 3 次，串行测试，默认移动模拟节流、重置存储、无其他测试并发运行。测试对象为公开正式域名；不是开发模式或本地页面。

原始报告：`docs/lighthouse/zh-1.json` 至 `zh-3.json`、`en-1.json` 至 `en-3.json`。汇总通过 `node scripts/summarize-lighthouse.mjs` 生成，保留准确测试时间。

首次本地报告 `lighthouse-local-zh.report.*` 保留为修正前记录（Performance 99 / Accessibility 98 / Best Practices 100 / SEO 100），不作为最终线上分数。

## 发布方式

已通过官方 Vercel CLI 发布正式环境，域名配置保存于 Production / Preview / Development。GitHub Actions 提供构建与回归验证。Vercel 与 GitHub App 的自动部署连接尚未建立；后续发布需重新执行 CLI，或在 Vercel Git 设置中连接该仓库。此项不影响当前正式页面访问。

最终页面源码的 GitHub Actions 验证通过：
https://github.com/Jiatai-Yang/luma-ai-landing/actions/runs/35104379374（源码 bd21779，1 分 20 秒）。

robots.txt 超时复核：直接公开 HTTP 请求返回 200，内容包含 `User-agent: *`、`Allow: /` 和正式域名 sitemap。线上 Playwright 对该端点的校验也已通过。
