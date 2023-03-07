import { test } from "@playwright/test";

// SlowMo mode for local debug
// test.use({ launchOptions: { slowMo: 1000 } });

test("Test admin and mine-saker menu button", async ({ page, baseURL }) => {
  await page.goto(baseURL + "/");
  await page.getByTestId("admin-menu-button").click();
  await page.getByTestId("mine-saker-menu-button").click();
});
