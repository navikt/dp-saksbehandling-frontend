import { expect, test } from "@playwright/test";

import {
  alleredeTildeltAlert,
  getLeggTilbakeErrorAlert,
  getNesteOppgaveError,
  leggTilbakeSuccessAlert,
  tomtForOppgaverAlert,
} from "~/tekst/alert-tekster";
import { getAlertMessage } from "~/utils/alert-message.utils";

test("Bruker kan navigere til mine oppgaver", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);
  await page.getByRole("link", { name: "Mine oppgaver" }).click();

  await expect(page).toHaveURL(new RegExp(`${baseURL}mine-oppgaver\\?mineOppgaver=true.*`));
});

test("Bruker kan navigere til alle oppgaver", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);
  await page.getByRole("link", { name: "Alle oppgaver" }).click();

  await expect(page).toHaveURL(new RegExp(`${baseURL}alle-oppgaver.*`));
});

test("Bruker kan navigere til oppgaver til behandling", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);
  await page.getByRole("link", { name: "Oppgaver til behandling" }).click();

  await expect(page).toHaveURL(new RegExp(`${baseURL}`));
});

test("Klikk på 1 status filter setter tilstand i url og checkbox som checked", async ({
  page,
  baseURL,
}) => {
  await page.goto(`${baseURL}alle-oppgaver`);

  const underBehandlingCheckbox = page.getByLabel("Under behandling");
  await underBehandlingCheckbox.check();
  await expect(underBehandlingCheckbox).toBeChecked();

  await expect(page).toHaveURL(new RegExp(`.*\\?tilstand=UNDER_BEHANDLING.*`));
});

test("Klikk på 3 status filter setter tilstand i url og checkbox som checked", async ({
  page,
  baseURL,
}) => {
  await page.goto(`${baseURL}alle-oppgaver`);

  const klarTilBehandlingCheckbox = page.getByLabel("Klar til behandling");
  await klarTilBehandlingCheckbox.check();
  await expect(klarTilBehandlingCheckbox).toBeChecked();

  const underBehandlingCheckbox = page.getByLabel("Under behandling");
  await underBehandlingCheckbox.check();
  await expect(underBehandlingCheckbox).toBeChecked();

  const ferdigBehandlingCheckbox = page.getByLabel("Ferdig behandlet");
  await ferdigBehandlingCheckbox.check();
  await expect(ferdigBehandlingCheckbox).toBeChecked();

  await expect(page).toHaveURL(
    new RegExp(
      `.*\\?tilstand=KLAR_TIL_BEHANDLING&tilstand=UNDER_BEHANDLING&tilstand=FERDIG_BEHANDLET.*`,
    ),
  );
});

test("Klikk på neste knapp skal ta deg til behandling av oppgave", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);

  await page.getByRole("button", { name: "Neste" }).click();
  await expect(page).toHaveURL(new RegExp(`${baseURL}oppgave/[a-zA-Z0-9-]+`));
});

test("Skal vise feilmelding hvis klikk på neste knapp feiler", async ({ page, baseURL }) => {
  const errorCode = 500;
  await page.route(`${baseURL}action-hent-neste-oppgave*`, async (route) => {
    const json = getAlertMessage({ name: "hent-neste-oppgave", httpCode: errorCode });
    await route.fulfill({
      json,
    });
  });

  await page.goto(`${baseURL}`);
  await page.getByRole("button", { name: "Neste" }).click();

  const errAlertAlert = page.getByRole("heading", {
    name: getNesteOppgaveError(errorCode).title,
  });

  await expect(errAlertAlert).toBeVisible();
});

test("Skal vise success alert hvis klikk på neste knapp gir 404", async ({ page, baseURL }) => {
  const errorCode = 404;
  await page.route(`${baseURL}action-hent-neste-oppgave*`, async (route) => {
    const json = getAlertMessage({ name: "hent-neste-oppgave", httpCode: errorCode });
    await route.fulfill({
      json,
    });
  });

  await page.goto(`${baseURL}`);
  await page.getByRole("button", { name: "Neste" }).click();

  const successAlert = page.getByRole("heading", {
    name: tomtForOppgaverAlert.title,
  });

  await expect(successAlert).toBeVisible();
});

test("Bruker kan behandle oppgaver som har status Klar til behandling", async ({
  page,
  baseURL,
}) => {
  await page.goto(`${baseURL}`);

  await page.getByRole("row", { name: "Klar til behandling" }).getByRole("button").first().click();
  await page.getByRole("button", { name: "Behandle oppgave" }).click();

  const urlPattern = new RegExp(`${baseURL}oppgave/[a-zA-Z0-9-]+`);
  await expect(page).toHaveURL(urlPattern);
});

test("Bruker skal få feilmelding hvis man prøver å behandle en oppgave som er plukket av noen andre", async ({
  page,
  baseURL,
}) => {
  const errorCode = 423;
  await page.route(`${baseURL}action-tildel-oppgave*`, async (route) => {
    const json = getAlertMessage({ name: "tildel-oppgave", httpCode: errorCode });
    await route.fulfill({
      json,
    });
  });

  await page.goto(`${baseURL}`);
  await page.getByRole("row", { name: "Klar til behandling" }).getByRole("button").first().click();
  await page.getByRole("button", { name: "Behandle oppgave" }).click();

  const errorAlert = page.getByRole("heading", { name: alleredeTildeltAlert.title });
  await expect(errorAlert).toBeVisible();
});

test("Bruker kan legge tilbake oppgaver som har status under-behandling og få tilbakemelding på at det er gjort", async ({
  page,
  baseURL,
}) => {
  await page.goto(`${baseURL}mine-oppgaver`);

  await page.getByRole("row", { name: "Under behandling" }).getByRole("button").first().click();
  await page.getByRole("button", { name: "Legg oppgave tilbake i køen" }).click();

  const successAlert = page.getByRole("heading", { name: leggTilbakeSuccessAlert.title });
  await expect(successAlert).toBeVisible();
});

test("Bruker skal få feilmelding hvis legg tilbake endepunktet feiler", async ({
  page,
  baseURL,
}) => {
  const errorCode = 500;
  await page.route(`${baseURL}action-legg-tilbake-oppgave*`, async (route) => {
    const json = getAlertMessage({ name: "legg-tilbake-oppgave", httpCode: errorCode });
    await route.fulfill({
      json,
    });
  });

  await page.goto(`${baseURL}mine-oppgaver`);

  await page.getByRole("row", { name: "Under behandling" }).getByRole("button").first().click();
  await page.getByRole("button", { name: "Legg oppgave tilbake i køen" }).click();

  const errorAlert = page.getByRole("heading", { name: getLeggTilbakeErrorAlert(errorCode).title });
  await expect(errorAlert).toBeVisible();
});

test("Bruker skal kunne se en ferdig behandlet oppgave", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}alle-oppgaver`);

  await page.getByRole("row", { name: "Ferdig behandlet" }).getByRole("button").first().click();
  await page.getByRole("button", { name: "Se oppgave" }).click();

  await expect(page).toHaveURL(new RegExp(`${baseURL}oppgave/[a-zA-Z0-9-]+`));
});
