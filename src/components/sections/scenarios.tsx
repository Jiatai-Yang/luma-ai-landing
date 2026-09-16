import type { Content, Locale } from "@/content";
import { Heading, Section } from "../section";
import { SceneLibrary } from "../interactive";
export function Scenarios({
  locale,
  content: c,
}: {
  locale: Locale;
  content: Content;
}) {
  const zh = c.zh;
  return (
    <Section id="scenarios" className="alternate">
      <div className="heading-with-note">
        <Heading
          eyebrow={zh ? "从真实任务出发" : "START WITH A REAL TASK"}
          title={
            zh ? "你的工作，总有新的打开方式。" : "Your work. A new way in."
          }
          description={
            zh
              ? "8 类工作领域，24 个具体场景。找到你的任务，看看 AI 可以从哪里帮起。"
              : "8 areas of work. 24 concrete scenarios. Find your task and a place for AI to help."
          }
        />
        <div className="big-stat">
          24<span>{zh ? "种工作可能" : "ways to work"}</span>
        </div>
      </div>
      <SceneLibrary content={c} />
    </Section>
  );
}
