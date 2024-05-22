import { expect, test } from "@playwright/test";

test("Bruker kan navigere til mine oppgaver", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);

  const mineOppgaverLenke = page.getByRole("link", { name: "Mine oppgaver" });
  await mineOppgaverLenke.click();

  await expect(page).toHaveURL(
    `${baseURL}mine-oppgaver?mineOppgaver=true&tilstand=KLAR_TIL_BEHANDLING&tilstand=UNDER_BEHANDLING`,
  );
});

test("Bruker kan navigere til alle oppgaver", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);

  const alleOppgaverLenke = page.getByRole("link", { name: "Alle oppgaver" });
  await alleOppgaverLenke.click();

  await expect(page).toHaveURL(`${baseURL}alle-oppgaver`);
});

test("Bruker kan navigere til oppgaver til behandling", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);

  const alleOppgaverLenke = page.getByRole("link", { name: "Oppgaver til behandling" });
  await alleOppgaverLenke.click();

  await expect(page).toHaveURL(`${baseURL}?tilstand=KLAR_TIL_BEHANDLING`);
});

test("Klikk på 1 status filter setter tilstand i url og checkbox som checked", async ({
  page,
  baseURL,
}) => {
  await page.goto(`${baseURL}alle-oppgaver`);

  const underBehandlingCheckbox = page.getByLabel("Under behandling");
  await underBehandlingCheckbox.check();

  await expect(underBehandlingCheckbox).toBeChecked();
  await expect(page).toHaveURL(`${baseURL}alle-oppgaver?tilstand=UNDER_BEHANDLING`);
});

test("Klikk på 3 status filter setter tilstand i url og checkbox som checked", async ({
  page,
  baseURL,
}) => {
  await page.goto(`${baseURL}alle-oppgaver`);

  const klarTilBehandlingCheckbox = page.getByLabel("Klar til behandling");
  const underBehandlingCheckbox = page.getByLabel("Under behandling");
  const ferdigBehandlingCheckbox = page.getByLabel("Ferdig behandlet");

  await klarTilBehandlingCheckbox.check();
  await underBehandlingCheckbox.check();
  await ferdigBehandlingCheckbox.check();

  await expect(klarTilBehandlingCheckbox).toBeChecked();
  await expect(underBehandlingCheckbox).toBeChecked();
  await expect(ferdigBehandlingCheckbox).toBeChecked();
  await expect(page).toHaveURL(
    `${baseURL}alle-oppgaver?tilstand=KLAR_TIL_BEHANDLING&tilstand=UNDER_BEHANDLING&tilstand=FERDIG_BEHANDLET`,
  );
});
