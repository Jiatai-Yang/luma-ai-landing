import { getContent, type Locale } from "@/content";
import { Landing } from "@/components/landing";
import { notFound } from "next/navigation";
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "zh" && locale !== "en") notFound();
  const content = getContent(locale as Locale);
  const origin =
    process.env.NEXT_PUBLIC_SITE_URL || "https://luma-ai-landing-gold.vercel.app";
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Luma AI",
    description:
      locale === "zh"
        ? "AI 概念产品交互展示"
        : "Interactive concept AI product showcase",
    url: `${origin}/${locale}`,
    inLanguage: locale === "zh" ? "zh-CN" : "en",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data).replace(/</g, "\\u003c"),
        }}
      />
      <Landing locale={locale} content={content} />
    </>
  );
}
