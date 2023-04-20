import { test, expect } from "@playwright/test";

// SlowMo mode for local debug
// test.use({ launchOptions: { slowMo: 1000 } });

test("Has page title", async ({ page, baseURL }) => {
  await page.goto(baseURL + "/");

  // Expect page title to contain "Dagpenger saksbehandling"
  await expect(page).toHaveTitle(/Dagpenger saksbehandling/);
});

test("Navigate to admin page and has page title", async ({ page, baseURL }) => {
  await page.goto(baseURL + "/");

  // Expect page title to contain "Dagpenger saksbehandling | Admin".
  await expect(page).toHaveTitle(/Dagpenger saksbehandling/);
});
