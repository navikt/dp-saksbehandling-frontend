import { test, expect } from "@playwright/test";

test("Tittel på forsiden er Dagpenger saksbehandling", async ({ page, baseURL }) => {
  await page.goto(baseURL!);

  // Expect a title "to contain" a substring.
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Dagpenger saksbehandling/);
});
