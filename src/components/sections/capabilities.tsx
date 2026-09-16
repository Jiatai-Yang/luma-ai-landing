import {
  BookOpen,
  Braces,
  FileText,
  Globe2,
  Layers3,
  Search,
} from "lucide-react";
import type { Content, Locale } from "@/content";
import { Heading, Section } from "../section";
const icons = [FileText, Braces, BookOpen, Search, Globe2, Layers3];
export function Capabilities({
  locale,
  content: c,
}: {
  locale: Locale;
  content: Content;
}) {
  const zh = c.zh;
  return (
    <Section id="capabilities">
      <Heading
        eyebrow={
          zh ? "一个助手，多种可能" : "ONE ASSISTANT. MANY POSSIBILITIES."
        }
        title={
          zh ? "不止回答，更能帮你推进。" : "More than answers. A way forward."
        }
        description={
          zh
            ? "把重复工作交给 AI，把注意力留给值得你判断的事情。"
            : "Let AI help with the repetitive parts. Keep your attention on the decisions that matter."
        }
      />
      <div className="capability-grid">
        {c.capabilities.map((item, i) => {
          const Icon = icons[i];
          return (
            <article className="capability-card" key={item.title}>
              <span className={`capability-icon icon-${i}`}>
                <Icon size={22} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="card-number">0{i + 1}</span>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
