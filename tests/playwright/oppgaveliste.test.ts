import { expect, test } from "@playwright/test";
import { mockOppgaver } from "../../mocks/data/mock-oppgaver";

test("Oppgavelisten har oppgaver listet opp", async ({ page, baseURL }) => {
  await page.goto(baseURL!);

  await expect(page.getByText(mockOppgaver[0].personIdent)).toBeVisible();
  await expect(page.getByText(mockOppgaver[1].personIdent)).toBeVisible();
});

test("Man kan gå videre til en oppgave ", async ({ page, baseURL }) => {
  const oppgave = mockOppgaver[0];

  await page.goto(baseURL!);
  await page
    .getByRole("row")
    .filter({ has: page.getByText(oppgave.personIdent, { exact: false }) })
    .getByRole("button", { name: "Behandle" })
    .click();

  await expect(page).toHaveURL(`
    ${baseURL}/oppgave/${oppgave.oppgaveId}/behandling`);
});
