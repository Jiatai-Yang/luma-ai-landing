import { ArrowUpRight, Sparkles } from "lucide-react";
import type { Content, Locale } from "@/content";
import { Heading, Section } from "../section";
export function FinalCTA({
  locale,
  content: c,
}: {
  locale: Locale;
  content: Content;
}) {
  const zh = c.zh;
  return (
    <Section className="final-cta">
      <div className="cta-orb" aria-hidden="true">
        <Sparkles size={42} />
      </div>
      <Heading
        center
        eyebrow={
          zh ? "下一个好想法，就从这里开始" : "YOUR NEXT GOOD IDEA STARTS HERE"
        }
        title={zh ? "让想法，迈出下一步。" : "Give your idea its next step."}
        description={
          zh
            ? "带着一个问题来，带着新的可能离开。"
            : "Bring a question. Leave with a new possibility."
        }
      />
      <a className="button" href="#demo">
        {c.cta}
        <ArrowUpRight size={17} />
      </a>
      <span className="cta-note">
        {zh
          ? "免费本地演示 · 无需账号"
          : "Free local demo · No account required"}
      </span>
    </Section>
  );
}
