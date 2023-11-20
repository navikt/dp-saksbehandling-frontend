// @vitest-environment jsdom

import { json } from "@remix-run/node";
import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { BehandlingSteg } from "../BehandlingSteg";
import userEvent from "@testing-library/user-event";
import { type IBehandlingSteg } from "~/models/oppgave.server";
import { hentStegTekst } from "~/tekster/stegTekster";
import { TestContainer } from "../../../../tests/vitest/helpers/TestContainer";

describe("BehandlingSteg", () => {
  describe("BehandlingStegGenerell", () => {
    describe("Lagre boolsk verdi", () => {
      const steg: IBehandlingSteg = {
        uuid: "962305f9-3ec5-482c-9d59-558c7653749a",
        id: "Oppfyller krav til minsteinntekt",
        type: "Fastsetting",
        svartype: "Boolean",
        tilstand: "IkkeUtført",
        svar: null,
      };
      test("burde vise et boolsk steg", async () => {
        render(
          <TestContainer>
            <BehandlingSteg steg={steg} readonly={false} />
          </TestContainer>,
        );

        const stegTekst = hentStegTekst(steg.id) || { label: steg.id, begrunnelse: "Begrunnelse" };

        expect(await screen.findByRole("group", { name: stegTekst.label })).toBeInTheDocument();
        expect(await screen.findByLabelText(stegTekst.begrunnelse)).toBeInTheDocument();
      });

      test("burde kunne lagre et boolsk svar", async () => {
        let stegFelt;

        const actionFn = vi.fn(async ({ request }) => {
          const formData = await request.formData();
          stegFelt = formData.get(steg.uuid) as string;

          return json({ lagret: true });
        });

        render(
          <TestContainer action={actionFn}>
            <BehandlingSteg steg={steg} readonly={false} />
          </TestContainer>,
        );

        const radioButton = await screen.findByLabelText("Ja");
        const lagreKnapp = await screen.findByRole("button", { name: "Lagre" });

        await userEvent.click(radioButton);
        await userEvent.click(lagreKnapp);

        expect(actionFn).toBeCalledTimes(1);
        expect(stegFelt).toBe("true");
      });

      test("burde vise feilmelding hvis bruker submitter uten å velge noe", async () => {
        const actionFn = vi.fn(async ({ request }) => {
          // Denne kan være tom, siden vi ikke skal komme hit i denne testen
        });

        render(
          <TestContainer action={actionFn}>
            <BehandlingSteg steg={steg} readonly={false} />
          </TestContainer>,
        );

        const radioButton = await screen.findByLabelText("Ja");
        const lagreKnapp = await screen.findByRole("button", { name: "Lagre" });

        // Ikke velg noe før vi trykker på lagre
        await userEvent.click(lagreKnapp);

        expect(actionFn).toBeCalledTimes(0);
        expect(radioButton.getAttribute("aria-invalid")).toBe("true");
        expect(await screen.findByText("Du må velge et svar")).toBeInTheDocument();
      });
    });
  });
});
