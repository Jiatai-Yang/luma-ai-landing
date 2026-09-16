import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
test("both languages render semantic content without overflow", async ({
  page,
}) => {
  for (const locale of ["zh", "en"]) {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto(`/${locale}`);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("html")).toHaveAttribute(
      "lang",
      locale === "zh" ? "zh-CN" : "en",
    );
    await expect(page.locator(".scene-card")).toHaveCount(24);
    await expect(page.locator("details")).toHaveCount(12);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    expect(errors).toEqual([]);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /.{40,}/,
    );
  }
});
test("language switch survives refresh and remembers root preference", async ({
  page,
}) => {
  await page.goto("/zh#scenarios");
  await page.locator(".language").click();
  await expect(page).toHaveURL(/\/en#scenarios/);
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await page.goto("/");
  await expect(page).toHaveURL(/\/en/);
});
test("category filters expose relevant tasks", async ({ page }) => {
  await page.goto("/en");
  await page.getByRole("button", { name: "Education", exact: true }).click();
  await expect(page.locator(".scene-card")).toHaveCount(3);
  await expect(
    page.getByRole("heading", { name: "Make complexity click" }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "All scenarios", exact: true })
    .click();
  await expect(page.locator(".scene-card")).toHaveCount(24);
});
test("demo provides code and local preset disclosure", async ({
  page,
}, testInfo) => {
  await page.goto("/en");
  const selector =
    testInfo.project.name === "mobile" ? ".demo-tabs" : ".demo-sidebar";
  await page.locator(selector).getByRole("button", { name: /Code/ }).click();
  await expect(page.locator("code")).toContainText("function debounce");
  await page.getByLabel("Task description").fill("A custom question");
  await page.getByRole("button", { name: "View sample output" }).click();
  await expect(page.locator(".demo-disclaimer")).toContainText(
    "No live AI was called",
  );
});
test("billing updates annual totals and plan dialog closes with keyboard", async ({
  page,
}) => {
  await page.goto("/en");
  await page.getByRole("button", { name: /Annual/ }).click();
  await expect(page.locator(".price-card").nth(1)).toContainText(
    "$180/user/year",
  );
  await page
    .locator(".price-card")
    .nth(1)
    .getByRole("button", { name: "Explore plan" })
    .click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("dialog")).toContainText(
    "No subscription or charge",
  );
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
});
test("FAQ works with keyboard and theme persists", async ({ page }) => {
  await page.goto("/en");
  const summary = page.locator("summary").first();
  await summary.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("details").first()).toHaveAttribute("open", "");
  await page.getByRole("button", { name: "Toggle color theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});
test("reduced-motion preference keeps sections available", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/en");
  expect(
    await page.locator("#faq").evaluate((el) => getComputedStyle(el).opacity),
  ).toBe("1");
  expect(
    await page
      .locator(".hero-glow")
      .first()
      .evaluate((el) => getComputedStyle(el).animationName),
  ).toBe("none");
});
test("unknown locale is a genuine 404", async ({ request }) => {
  expect((await request.get("/fr")).status()).toBe(404);
});

test("mobile navigation closes after selection and supports Escape", async ({
  page,
}, testInfo) => {
  if (testInfo.project.name !== "mobile") {
    await page.goto("/en");
    await expect(page.locator(".desktop-nav")).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Navigation menu" }),
    ).not.toBeVisible();
    return;
  }
  await page.goto("/en");
  await page.getByRole("button", { name: "Navigation menu" }).click();
  await expect(page.locator("#mobile-nav")).toBeVisible();
  await page
    .locator("#mobile-nav")
    .getByRole("link", { name: "Pricing" })
    .click();
  await expect(page.locator("#mobile-nav")).toHaveCount(0);
  await page.getByRole("button", { name: "Navigation menu" }).click();
  await page.keyboard.press("Escape");
  await expect(page.locator("#mobile-nav")).toHaveCount(0);
  await expect(
    page.getByRole("button", { name: "Navigation menu" }),
  ).toBeFocused();
});

test("SEO endpoints and social image use the published domain", async ({
  request,
  page,
}) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  expect(await sitemap.text()).toContain(
    "https://luma-ai-landing-gold.vercel.app/en",
  );
  const robots = await request.get("/robots.txt");
  expect(await robots.text()).toContain(
    "https://luma-ai-landing-gold.vercel.app/sitemap.xml",
  );
  const image = await request.get("/og.png");
  expect(image.status()).toBe(200);
  expect(image.headers()["content-type"]).toContain("image/png");
  await page.goto("/en");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://luma-ai-landing-gold.vercel.app/en",
  );
});

test("both themes and plan dialogs meet WCAG AA checks", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/en");
  const audit = async () => {
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(
      result.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => n.html),
      })),
    ).toEqual([]);
  };
  await audit();
  await page.getByRole("button", { name: "Toggle color theme" }).click();
  await audit();
  await page
    .locator(".price-card")
    .nth(1)
    .getByRole("button", { name: "Explore plan" })
    .click();
  await audit();
});
