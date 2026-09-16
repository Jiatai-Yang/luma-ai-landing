import type { Content, Locale } from "@/content";
import { Heading, Section } from "../section";
export function Comparison({
  locale,
  content: c,
}: {
  locale: Locale;
  content: Content;
}) {
  const zh = c.zh;
  return (
    <Section id="comparison">
      <Heading
        eyebrow={zh ? "把时间，用在更重要的地方" : "MAKE ROOM FOR WHAT MATTERS"}
        title={
          zh
            ? "减少准备时间，保留判断时间。"
            : "Less preparation. More perspective."
        }
        description={
          zh
            ? "下面是示例任务的时间分配估算，用于解释工作方式；不是实测或效果承诺。"
            : "Illustrative task-time estimates explain a workflow, rather than measured results or promised performance."
        }
      />
      <div className="comparison-grid">
        <div className="chart-card">
          <div className="chart-heading">
            <h3>
              {zh ? "内容任务耗时示意" : "Content task time illustration"}
            </h3>
            <span>{zh ? "单位：分钟" : "Unit: minutes"}</span>
          </div>
          <div className="chart-legend">
            <span>
              <i />
              {zh ? "手动起草" : "Manual draft"}
            </span>
            <span>
              <i />
              {zh ? "AI 辅助 + 审核" : "AI-assisted + review"}
            </span>
          </div>
          <svg
            role="img"
            aria-labelledby="chart-title chart-desc"
            viewBox="0 0 480 245"
          >
            <title id="chart-title">
              {zh ? "示例任务耗时对比" : "Illustrative task-time comparison"}
            </title>
            <desc id="chart-desc">
              {zh
                ? "邮件草稿：手动 20 分钟，辅助并审核 12 分钟；文章大纲：40 与 22 分钟；会议纪要：30 与 18 分钟。"
                : "Email draft: manual 20, assisted and reviewed 12 minutes. Article outline: 40 and 22. Meeting notes: 30 and 18."}
            </desc>
            {[0, 10, 20, 30, 40].map((n) => (
              <g key={n}>
                <line
                  x1={100 + n * 8.5}
                  x2={100 + n * 8.5}
                  y1="10"
                  y2="207"
                  stroke="var(--border)"
                  strokeDasharray="3 5"
                />
                <text
                  x={100 + n * 8.5}
                  y="229"
                  textAnchor="middle"
                  fill="var(--muted)"
                  fontSize="11"
                >
                  {n}
                </text>
              </g>
            ))}
            {[
              [20, 12],
              [40, 22],
              [30, 18],
            ].map(([manual, ai], i) => (
              <g key={i}>
                <text x="0" y={38 + i * 66} fill="var(--muted)" fontSize="12">
                  {
                    (zh
                      ? ["邮件草稿", "文章大纲", "会议纪要"]
                      : ["Email draft", "Outline", "Meeting notes"])[i]
                  }
                </text>
                <rect
                  x="100"
                  y={16 + i * 66}
                  width={manual * 8.5}
                  height="17"
                  rx="4"
                  fill="var(--chart-muted)"
                />
                <rect
                  x="100"
                  y={39 + i * 66}
                  width={ai * 8.5}
                  height="17"
                  rx="4"
                  fill="var(--accent)"
                />
                <text
                  x={108 + ai * 8.5}
                  y={51 + i * 66}
                  fill="var(--text)"
                  fontSize="11"
                >
                  {ai}
                </text>
              </g>
            ))}
          </svg>
          <p className="section-note">
            {zh
              ? "示例包含人工审核时间，实际耗时随任务而变。"
              : "Examples include human review. Actual time varies by task."}
          </p>
        </div>
        <div className="table-card">
          <h3>
            {zh
              ? "不同工具，适合不同任务"
              : "Different tools for different tasks"}
          </h3>
          <div className="table-scroll">
            <table>
              <caption className="sr-only">
                {zh ? "工作方式概念对比" : "Conceptual comparison of workflows"}
              </caption>
              <thead>
                <tr>
                  <th scope="col">{zh ? "任务特点" : "Task"}</th>
                  <th scope="col">{zh ? "传统工具" : "Traditional"}</th>
                  <th scope="col">{zh ? "AI 辅助" : "AI-assisted"}</th>
                </tr>
              </thead>
              <tbody>
                {(zh
                  ? [
                      ["初稿生成", "从空白开始", "提供可编辑草稿"],
                      ["资料整理", "手动归纳", "辅助提取要点"],
                      ["表达调整", "逐段修改", "探索多个版本"],
                      ["事实核实", "需要人工", "仍需要人工"],
                      ["精确计算", "表格 / 程序", "交由计算工具"],
                      ["最终决策", "由人负责", "由人负责"],
                    ]
                  : [
                      [
                        "First draft",
                        "Start from blank",
                        "Editable starting point",
                      ],
                      [
                        "Organizing sources",
                        "Manual synthesis",
                        "Assisted extraction",
                      ],
                      [
                        "Refining tone",
                        "Edit line by line",
                        "Explore variations",
                      ],
                      [
                        "Fact verification",
                        "Human review",
                        "Human review required",
                      ],
                      [
                        "Exact calculations",
                        "Sheets / programs",
                        "Use calculation tools",
                      ],
                      [
                        "Final decision",
                        "Human responsibility",
                        "Human responsibility",
                      ],
                    ]
                ).map((r) => (
                  <tr key={r[0]}>
                    {r.map((v, i) =>
                      i === 0 ? (
                        <th key={v} scope="row">
                          {v}
                        </th>
                      ) : (
                        <td key={i}>{v}</td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Section>
  );
}
