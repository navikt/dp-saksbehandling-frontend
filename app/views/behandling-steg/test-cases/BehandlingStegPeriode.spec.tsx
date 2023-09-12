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
  describe("BehandlingStegPeriode", () => {
    describe("Lagre periode", () => {
      const steg: IBehandlingSteg = {
        uuid: "962305f9-3ec5-482c-9d59-558c7653749a",
        id: "Periode",
        type: "Fastsetting",
        svartype: "String",
        tilstand: "IkkeUtført",
        svar: null,
      };
      test("burde vise nedtrekkslisten", async () => {
        render(
          <TestContainer>
            <BehandlingSteg steg={steg} readonly={false} />
          </TestContainer>,
        );

        const stegTekst = hentStegTekst(steg.id) || { label: steg.id, begrunnelse: "Begrunnelse" };

        expect(await screen.findByLabelText(stegTekst.label)).toBeInTheDocument();
        expect(await screen.findByLabelText(stegTekst.begrunnelse)).toBeInTheDocument();
      });

      test("burde kunne lagre en periode", async () => {
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

        const stegTekst = hentStegTekst(steg.id) || { label: steg.id, begrunnelse: "Begrunnelse" };

        const stegInput = await screen.findByLabelText(stegTekst.label);
        const lagreKnapp = await screen.findByRole("button", { name: "Lagre" });

        await userEvent.selectOptions(stegInput, "26");
        await userEvent.click(lagreKnapp);

        expect(actionFn).toBeCalledTimes(1);
        expect(stegFelt).toBe("26");
      });

      test("burde vise feilmelding hvis bruker trykker lagre uten å ha valgt en periode", async () => {
        const actionFn = vi.fn(async ({ request }) => {
          // Denne kan være tom, siden vi ikke skal komme hit i denne testen
        });

        render(
          <TestContainer action={actionFn}>
            <BehandlingSteg steg={steg} readonly={false} />
          </TestContainer>,
        );

        const stegTekst = hentStegTekst(steg.id) || { label: steg.id, begrunnelse: "Begrunnelse" };

        const stegInput = await screen.findByLabelText(stegTekst.label);
        const lagreKnapp = await screen.findByRole("button", { name: "Lagre" });

        // Ikke skriv inn noe før vi trykker på lagre
        await userEvent.click(lagreKnapp);

        expect(actionFn).toBeCalledTimes(0);
        expect(stegInput.getAttribute("aria-invalid")).toBe("true");
        expect(await screen.findByText("Du må velge en periode")).toBeInTheDocument();
      });
    });
  });
});
