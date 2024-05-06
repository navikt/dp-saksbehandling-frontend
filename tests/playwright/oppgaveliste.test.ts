import { expect, test } from "@playwright/test";

test("Klikk på filter under behandling setter tilstand i url", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}alle-oppgaver`);

  const underBehandlingCheckbox = await page.getByLabel("Under behandling");
  await underBehandlingCheckbox.check();
  const oppgaveListe = await page.getByRole("table");

  await expect(underBehandlingCheckbox).toBeChecked();
  await expect(page).toHaveURL(`${baseURL}alle-oppgaver?tilstand=UNDER_BEHANDLING`);
  await expect(oppgaveListe).toBeVisible();
});
