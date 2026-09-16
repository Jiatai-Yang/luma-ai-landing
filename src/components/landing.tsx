import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Braces,
  Check,
  FileText,
  Layers3,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { Content, Locale } from "@/content";
import { Demo, Reveal, SiteControls } from "./interactive";
import { Capabilities } from "./sections/capabilities";
import { Scenarios } from "./sections/scenarios";
import { Features } from "./sections/features";
import { WorkflowSection } from "./sections/workflow";
import { Comparison } from "./sections/comparison";
import { Testimonials } from "./sections/testimonials";
import { PricingSection } from "./sections/pricing";
import { FAQ } from "./sections/faq";
import { FinalCTA } from "./sections/final-cta";
export function Landing({
  locale,
  content: c,
}: {
  locale: Locale;
  content: Content;
}) {
  const zh = c.zh;
  const ids = ["capabilities", "scenarios", "workflow", "pricing"];
  return (
    <>
      <a href="#main" className="skip-link">
        {zh ? "跳到主要内容" : "Skip to main content"}
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a href={`/${locale}`} className="brand">
            <span className="brand-mark">
              <Sparkles size={22} />
            </span>
            luma<span className="brand-ai">AI</span>
          </a>
          <nav
            className="desktop-nav"
            aria-label={zh ? "主导航" : "Main navigation"}
          >
            {c.nav.map((n, i) => (
              <a key={n} href={`#${ids[i]}`}>
                {n}
              </a>
            ))}
          </nav>
          <SiteControls locale={locale} nav={c.nav} />
        </div>
      </header>
      <main id="main">
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow glow-one" aria-hidden="true" />
          <div className="hero-glow glow-two" aria-hidden="true" />
          <div className="container hero-content">
            <a href="#features" className="release-badge">
              <span className="badge-dot" />
              {zh
                ? "为想法而生，为行动而来"
                : "Made for ideas. Built for momentum."}
              <ArrowRight size={13} />
            </a>
            <h1>
              {c.hero[0]}
              <br />
              <span>{c.hero[1]}</span>
            </h1>
            <p className="hero-description">{c.hero[2]}</p>
            <div className="hero-actions">
              <a href="#demo" className="button">
                {c.cta}
                <ArrowUpRight size={17} />
              </a>
              <a href="#scenarios" className="button secondary">
                {c.explore}
                <ArrowRight size={17} />
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <Check size={13} />
                {zh ? "无需注册" : "No sign-up needed"}
              </span>
              <span>
                <ShieldCheck size={13} />
                {zh ? "输入不上传" : "No input uploads"}
              </span>
              <span>
                <Sparkles size={13} />
                {zh ? "概念产品演示" : "Concept product demo"}
              </span>
            </div>
            <Demo locale={locale} />
            <div className="hero-caption">
              <span>
                THINK LESS ABOUT THE TOOLS. MORE ABOUT THE POSSIBILITIES.
              </span>
              <a
                href="#capabilities"
                aria-label={zh ? "浏览核心能力" : "Browse capabilities"}
              >
                <ArrowDown size={16} />
              </a>
            </div>
          </div>
        </section>
        <div className="audience-strip">
          <div className="container">
            <p>
              {zh
                ? "为每一个认真创造的人而设计"
                : "Designed for people who care about what they create"}
            </p>
            <div>
              {(zh
                ? ["创作者", "开发者", "教育者", "分析师", "成长中的团队"]
                : [
                    "Creators",
                    "Developers",
                    "Educators",
                    "Analysts",
                    "Growing teams",
                  ]
              ).map((x, i) => (
                <span key={x}>
                  {
                    [
                      <FileText key="f" />,
                      <Braces key="b" />,
                      <BookOpen key="o" />,
                      <Search key="s" />,
                      <Layers3 key="l" />,
                    ][i]
                  }
                  {x}
                </span>
              ))}
            </div>
          </div>
        </div>
        <Capabilities locale={locale} content={c} />
        <Scenarios locale={locale} content={c} />
        <Features locale={locale} content={c} />
        <WorkflowSection locale={locale} content={c} />
        <Comparison locale={locale} content={c} />
        <Testimonials locale={locale} content={c} />
        <PricingSection locale={locale} content={c} />
        <FAQ locale={locale} content={c} />
        <FinalCTA locale={locale} content={c} />
      </main>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <a className="brand" href={`/${locale}`}>
                <span className="brand-mark">
                  <Sparkles size={22} />
                </span>
                luma<span className="brand-ai">AI</span>
              </a>
              <p>
                {zh
                  ? "为想法而生，为行动而来。"
                  : "Made for ideas. Built for momentum."}
              </p>
            </div>
            <div className="footer-links">
              <div>
                <strong>{zh ? "探索产品" : "Explore"}</strong>
                <a href="#capabilities">{c.nav[0]}</a>
                <a href="#scenarios">{c.nav[1]}</a>
                <a href="#pricing">{c.nav[3]}</a>
              </div>
              <div>
                <strong>{zh ? "了解更多" : "Learn more"}</strong>
                <a href="#workflow">{c.nav[2]}</a>
                <a href="#faq">FAQ</a>
                <Link href="/delivery" prefetch={false}>
                  {zh ? "交付与工具说明" : "Delivery & tools"}
                </Link>
                <a
                  href="https://github.com/Jiatai-Yang/luma-ai-landing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
              <div>
                <strong>{zh ? "语言" : "Language"}</strong>
                <Link href="/zh" hrefLang="zh" prefetch={false}>
                  简体中文
                </Link>
                <Link href="/en" hrefLang="en" prefetch={false}>
                  English
                </Link>
                <a href="#main">{zh ? "回到顶部" : "Back to top"} ↑</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Luma AI.{" "}
              {zh ? "概念产品展示。" : "Concept product showcase."}
            </span>
            <span>
              <ShieldCheck size={13} />
              {zh
                ? "示例内容 · 无真实 AI 或支付连接"
                : "Illustrative content · No live AI or payments"}
            </span>
          </div>
        </div>
      </footer>
      <Reveal />
    </>
  );
}
