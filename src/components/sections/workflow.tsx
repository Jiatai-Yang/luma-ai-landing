import {
  ArrowRight,
  ArrowUpRight,
  FileText,
  Layers3,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import type { Content, Locale } from "@/content";
import { Heading, Section } from "../section";
export function WorkflowSection({
  locale,
  content: c,
}: {
  locale: Locale;
  content: Content;
}) {
  const zh = c.zh;
  return (
    <Section id="workflow" className="alternate">
      <Heading
        center
        eyebrow={zh ? "简单开始，持续改进" : "START SIMPLE. KEEP REFINING."}
        title={
          zh ? "四步，把想法变成成果。" : "Four steps from idea to output."
        }
        description={
          zh
            ? "这是使用流程，不是模型内部原理。清晰上下文、持续反馈与人工审核，是有效协作的关键。"
            : "This is the user workflow, rather than model internals. Clear context, feedback and human review make collaboration work."
        }
      />
      <ol className="workflow-grid">
        {c.steps.map((s, i) => (
          <li key={s.title}>
            <div className="step-circle">
              {
                [
                  <FileText key="a" />,
                  <Layers3 key="b" />,
                  <Sparkles key="c" />,
                  <ShieldCheck key="d" />,
                ][i]
              }
            </div>
            {i < 3 && (
              <ArrowRight className="step-arrow" size={18} aria-hidden="true" />
            )}
            <span className="step-number">STEP 0{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </li>
        ))}
      </ol>
      <div className="workflow-tip">
        <Zap size={17} />
        <p>
          {zh
            ? "试试这个提示结构：目标 + 背景 + 输出格式 + 限制条件。"
            : "Try this prompt structure: goal + context + output format + constraints."}
        </p>
        <a href="#demo">
          {zh ? "立即试试" : "Try it now"}
          <ArrowUpRight size={14} />
        </a>
      </div>
    </Section>
  );
}
