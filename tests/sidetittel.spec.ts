import { expect, test } from "@playwright/test";

test("Tittel på forsiden er Dagpenger saksbehandling", async ({ page, baseURL }) => {
  await page.goto(baseURL!);
  await expect(page).toHaveTitle(/Dagpenger saksbehandling/);
});
