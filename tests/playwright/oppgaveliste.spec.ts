import { expect, test } from "@playwright/test";
import { oppgaverResponse } from "../../mocks/api-routes/oppgaverResponse";

test("Oppgavelisten har oppgaver listet opp", async ({ page, baseURL }) => {
  await page.goto(baseURL!);
  const oppgaver = oppgaverResponse;

  await expect(page.getByText(oppgaver[0].uuid)).toBeVisible();
  await expect(page.getByText(oppgaver[1].uuid)).toBeVisible();
});

test("Man kan gå videre til en oppgave ", async ({ page, baseURL }) => {
  const oppgaver = oppgaverResponse;
  const oppgave = oppgaver[0];

  await page.goto(baseURL!);

  await page
    .getByRole("row")
    .filter({ has: page.getByText(oppgave.uuid, { exact: false }) })
    .getByRole("button", { name: "Behandle" })
    .click();

  await expect(page).toHaveURL(`
    ${baseURL}/oppgave/${oppgave.uuid}/steg/${oppgave.steg[0].uuid}`);
});
