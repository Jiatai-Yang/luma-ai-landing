import { Check } from "lucide-react";
import type { Content, Locale } from "@/content";
import { Heading, Section, FeatureArt } from "../section";
export function Features({
  locale,
  content: c,
}: {
  locale: Locale;
  content: Content;
}) {
  const zh = c.zh;
  return (
    <Section id="features">
      <Heading
        eyebrow={zh ? "为交付而设计" : "DESIGNED FOR THE DELIVERABLE"}
        title={
          zh
            ? "好工具，让复杂的事变清晰。"
            : "Good tools make complexity clear."
        }
        description={
          zh
            ? "从背景资料到输出格式，再到最后的审核，每一步都围绕你的工作展开。"
            : "From references to output formats to final review, every step revolves around your work."
        }
      />
      <div className="feature-stack">
        {c.features.map((f, i) => (
          <article
            className={`feature-row ${i === 1 ? "reverse" : ""}`}
            key={f[0]}
            data-reveal
          >
            <div className="feature-copy">
              <span className="feature-index">0{i + 1} / FEATURE</span>
              <h3>{f[0]}</h3>
              <p>{f[1]}</p>
              <ul>
                {f.slice(2).map((v) => (
                  <li key={v}>
                    <Check size={15} />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
            <FeatureArt index={i} zh={zh} />
          </article>
        ))}
      </div>
    </Section>
  );
}
