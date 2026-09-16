import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  const origin =
    process.env.NEXT_PUBLIC_SITE_URL || "https://luma-ai-landing-gold.vercel.app";
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${origin}/sitemap.xml`,
  };
}
