import type { Content, Locale } from "@/content";
import { Heading, Section } from "../section";
export function Testimonials({
  locale,
  content: c,
}: {
  locale: Locale;
  content: Content;
}) {
  const zh = c.zh;
  return (
    <Section id="testimonials" className="alternate">
      <Heading
        center
        eyebrow={
          zh ? "不同角色，共同的期待" : "DIFFERENT ROLES. SHARED AMBITIONS."
        }
        title={
          zh
            ? "好的协作，让人更有创造力。"
            : "Better collaboration. More creativity."
        }
        description={
          zh
            ? "以下为虚构人物的场景化示例反馈，并非真实客户评价或背书。"
            : "The following scenario-based feedback comes from fictional personas, rather than real customers or endorsements."
        }
      />
      <div className="testimonial-grid">
        {(zh
          ? [
              [
                "初稿不再是最难的一步。我可以把更多时间放在观点与表达的打磨上。",
                "林若",
                "内容创作者",
                "LR",
              ],
              [
                "解释代码的过程，帮我找到之前忽略的边界条件。最终还是会自己运行测试。",
                "陈翌",
                "前端开发者",
                "CY",
              ],
              [
                "同一个知识点，可以换几种方式解释。学生的理解情况仍然需要我观察。",
                "苏宁",
                "教育工作者",
                "SN",
              ],
              [
                "从一张表开始提问，比直接追求一个结论更有帮助。",
                "周墨",
                "数据分析师",
                "ZM",
              ],
              [
                "让回复先有结构，再补上真实订单细节，工作顺畅了很多。",
                "许安",
                "客户支持专员",
                "XA",
              ],
              [
                "把访谈里分散的声音整理成主题，团队讨论就有了共同起点。",
                "陆遥",
                "产品经理",
                "LY",
              ],
            ]
          : [
              [
                "The first draft is no longer the hardest part. I can spend more time refining the ideas and the voice.",
                "Robin Lee",
                "Content creator",
                "RL",
              ],
              [
                "Explaining the code helped me spot overlooked edge cases. I still run the tests myself.",
                "Alex Chen",
                "Frontend developer",
                "AC",
              ],
              [
                "One concept, several ways to explain it. Understanding my students still takes my observation.",
                "Sam Wu",
                "Educator",
                "SW",
              ],
              [
                "Starting with questions about a table is more useful than rushing toward a conclusion.",
                "Morgan Zhou",
                "Data analyst",
                "MZ",
              ],
              [
                "A structured reply gives me a starting point, then I add the real order details.",
                "Avery Xu",
                "Support specialist",
                "AX",
              ],
              [
                "Organizing scattered interview notes into themes gave our discussion a common starting point.",
                "Jamie Lu",
                "Product manager",
                "JL",
              ],
            ]
        ).map(([quote, name, role, initials], i) => (
          <figure className="quote-card" key={name}>
            <span className="quote-mark" aria-hidden="true">
              “
            </span>
            <blockquote>{quote}</blockquote>
            <figcaption>
              <span className={`avatar avatar-${i}`}>{initials}</span>
              <div>
                <strong>{name}</strong>
                <span>{role}</span>
              </div>
              <span className="example-tag">{zh ? "示例" : "Example"}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
