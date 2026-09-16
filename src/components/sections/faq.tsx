import { ChevronDown } from "lucide-react";
import type { Content, Locale } from "@/content";
import { Heading, Section } from "../section";
export function FAQ({
  locale,
  content: c,
}: {
  locale: Locale;
  content: Content;
}) {
  const zh = c.zh;
  return (
    <Section id="faq" className="alternate">
      <div className="faq-layout">
        <Heading
          eyebrow={zh ? "你可能还想知道" : "A FEW MORE THINGS"}
          title={
            zh
              ? "好问题，值得清楚回答。"
              : "Good questions deserve clear answers."
          }
          description={
            zh
              ? "关于产品、演示、数据和使用边界，在这里找到说明。"
              : "Find clear explanations about the product, demo, data and boundaries."
          }
        />
        <div className="faq-list">
          {c.faq.map((f, i) => (
            <details key={f.title}>
              <summary>
                <span>
                  <span className="faq-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {f.title}
                </span>
                <ChevronDown size={17} />
              </summary>
              <p>{f.description}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
