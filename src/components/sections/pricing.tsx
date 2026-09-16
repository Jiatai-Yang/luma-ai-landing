import type { Content, Locale } from "@/content";
import { Heading, Section } from "../section";
import { Pricing } from "../interactive";
export function PricingSection({
  locale,
  content: c,
}: {
  locale: Locale;
  content: Content;
}) {
  const zh = c.zh;
  return (
    <Section id="pricing">
      <Heading
        center
        eyebrow={zh ? "适合你的节奏" : "FIND YOUR OWN PACE"}
        title={
          zh ? "从一次尝试，到团队协作。" : "From a first try to team momentum."
        }
        description={
          zh
            ? "清晰的概念方案，为不同阶段的工作提供选择。"
            : "Clear concept plans for different stages of your work."
        }
      />
      <Pricing locale={locale} />
    </Section>
  );
}
