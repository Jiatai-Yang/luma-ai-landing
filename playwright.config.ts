import { existsSync } from "node:fs";
import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: "list",
  use: {
    baseURL: process.env.TEST_BASE_URL || "http://127.0.0.1:3000",
    launchOptions: {
      executablePath:
        process.env.PLAYWRIGHT_CHROME_PATH ||
        (existsSync(
          "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        )
          ? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
          : undefined),
    },
    trace: "retain-on-failure",
  },
  webServer:
    process.env.CI && !process.env.TEST_BASE_URL
      ? {
          command: "npm start",
          url: "http://127.0.0.1:3000",
          reuseExistingServer: false,
          timeout: 60_000,
        }
      : undefined,
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
});
