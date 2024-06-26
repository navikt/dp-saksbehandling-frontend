import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config({ path: "./.env.test" });

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const baseURL = `http://localhost:${port}/saksbehandling/`;

export default defineConfig({
  testDir: "./tests/playwright",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: baseURL,
    trace: "on-first-retry",
    testIdAttribute: "data-test-id",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    port,
    command: "npm run dev",
    reuseExistingServer: !process.env.CI,
    timeout: 60000,
  },
});
