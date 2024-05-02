import { expect, test } from "@playwright/test";

test("Oppgavelisten inneholder oppgaver", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);

  const underBehandlingCheckbox = await page.getByLabel("Under behandling");
  await underBehandlingCheckbox.check();
  const oppgaveListe = await page.getByRole("table");

  await expect(underBehandlingCheckbox).toBeChecked();
  await expect(page).toHaveURL(`${baseURL}?tilstand=UNDER_BEHANDLING`);
  await expect(oppgaveListe).toBeVisible();
  //
  // const alleRader = await page.getByRole("row").all();
  // const alleRader = await oppgaveListe.locator("tr").all();
  // for (const rad of alleRader) {
  //   const oppgaveStatus = rad.getByText("Under behandling");
  //   console.log(oppgaveStatus);
  //   await expect(oppgaveStatus).toHaveText("Under behandling");
  // }
});
