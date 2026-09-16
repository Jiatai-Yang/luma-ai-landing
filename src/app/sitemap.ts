import type { MetadataRoute } from 'next';
export default function sitemap():MetadataRoute.Sitemap{const origin=process.env.NEXT_PUBLIC_SITE_URL||'https://luma-ai.vercel.app';return ['zh','en'].map(locale=>({url:`${origin}/${locale}`,changeFrequency:'monthly',priority:1,alternates:{languages:{'zh-CN':`${origin}/zh`,en:`${origin}/en`}}}));}
