import { readFileSync, writeFileSync } from "node:fs";
const categories = ["performance", "accessibility", "best-practices", "seo"];
const summary = {
  site: "https://luma-ai-landing-gold.vercel.app",
  mode: "Mobile Lighthouse default simulated throttling; serial runs; fresh browser storage",
  routes: {},
};
const median = (values) =>
  [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)];
for (const locale of ["zh", "en"]) {
  const reports = [1, 2, 3].map((run) => {
    const report = JSON.parse(
      readFileSync(`docs/lighthouse/${locale}-${run}.json`, "utf8"),
    );
    if (report.runtimeError || report.configSettings.formFactor !== "mobile")
      throw new Error(`Invalid mobile report: ${locale}-${run}`);
    return report;
  });
  summary.routes[locale] = {
    testedAt: reports.map((r) => r.fetchTime),
    runs: reports.map((r) =>
      Object.fromEntries(
        categories.map((key) => [
          key,
          Math.round(r.categories[key].score * 100),
        ]),
      ),
    ),
    median: Object.fromEntries(
      categories.map((key) => [
        key,
        median(reports.map((r) => Math.round(r.categories[key].score * 100))),
      ]),
    ),
    medianMetrics: Object.fromEntries(
      [
        "first-contentful-paint",
        "largest-contentful-paint",
        "total-blocking-time",
        "cumulative-layout-shift",
      ].map((key) => [
        key,
        median(reports.map((r) => r.audits[key].numericValue)),
      ]),
    ),
  };
}
writeFileSync(
  "docs/lighthouse/summary.json",
  JSON.stringify(summary, null, 2) + "\n",
);
console.log(JSON.stringify(summary, null, 2));
