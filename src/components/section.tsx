import {
  BookOpen,
  Check,
  FileText,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { ReactNode } from "react";
export function Heading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={`section-heading ${center ? "center" : ""}`}>
      <span className="eyebrow">
        <span />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`section ${className}`} data-reveal>
      <div className="container">{children}</div>
    </section>
  );
}
export function FeatureArt({ index, zh }: { index: number; zh: boolean }) {
  return (
    <div
      className={`feature-art art-${index}`}
      aria-label={zh ? "产品功能示意" : "Concept feature illustration"}
    >
      {index === 0 ? (
        <>
          <div className="context-card">
            <BookOpen size={18} />
            <div>
              <strong>{zh ? "品牌参考资料" : "Brand references"}</strong>
              <span>brand-guide.txt · 2.4 KB</span>
            </div>
            <Check size={15} />
          </div>
          <div className="context-card">
            <FileText size={18} />
            <div>
              <strong>{zh ? "任务目标" : "Task objective"}</strong>
              <span>
                {zh
                  ? "清晰 · 温暖 · 面向新用户"
                  : "Clear · Warm · For new users"}
              </span>
            </div>
            <Check size={15} />
          </div>
          <div className="art-connector" />
          <div className="art-answer">
            <Sparkles size={21} />
            <span>
              {zh
                ? "连接上下文，找到更好的表达。"
                : "Connect context. Find better words."}
            </span>
          </div>
        </>
      ) : index === 1 ? (
        <>
          <div className="format-tabs">
            <span className="active">{zh ? "文档" : "Document"}</span>
            <span>{zh ? "表格" : "Table"}</span>
            <span>Markdown</span>
          </div>
          <div className="document-preview">
            <span className="document-tag">DRAFT / 01</span>
            <h4>{zh ? "让下一步更清晰" : "Make the next step clear"}</h4>
            <div className="fake-line wide" />
            <div className="fake-line" />
            <div className="fake-line short" />
            <div className="document-check">
              <Check size={15} />
              {zh ? "明确目标与受众" : "Define the goal and audience"}
            </div>
            <div className="document-check">
              <Check size={15} />
              {zh ? "补充关键背景资料" : "Add essential context"}
            </div>
            <div className="document-check">
              <Check size={15} />
              {zh ? "审核后交付" : "Review before delivery"}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="shield-orbit">
            <ShieldCheck size={49} />
            <span className="orbit-dot one" />
            <span className="orbit-dot two" />
          </div>
          <div className="privacy-badges">
            <span>
              <LockKeyhole size={13} />
              {zh ? "输入本地处理" : "Local demo input"}
            </span>
            <span>
              <Check size={13} />
              {zh ? "由你审核" : "Your review"}
            </span>
          </div>
          <p>
            {zh
              ? "你的判断，是工作流的一部分。"
              : "Your judgment is part of the workflow."}
          </p>
        </>
      )}
    </div>
  );
}
