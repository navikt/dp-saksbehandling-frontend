import { test } from "@playwright/test";

// SlowMo mode for local debug
// test.use({ launchOptions: { slowMo: 1000 } });

test("Test benken menu button", async ({ page, baseURL }) => {
  await page.goto(baseURL + "/");
  await page.getByTestId("benken-menu-button").click();
});
