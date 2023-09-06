// @vitest-environment jsdom

import { json } from "@remix-run/node";
import { unstable_createRemixStub } from "@remix-run/testing";
import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { BehandlingSteg } from "./BehandlingSteg";
import userEvent from "@testing-library/user-event";
import { type IBehandlingSteg } from "~/models/oppgave.server";
import { hentStegTekst } from "~/tekster/stegTekster";

describe("BehandlingSteg", () => {
  const steg: IBehandlingSteg = {
    uuid: "962305f9-3ec5-482c-9d59-558c7653749a",
    id: "Grunnlag",
    type: "Fastsetting",
    svartype: "Int",
    tilstand: "IkkeUtført",
    svar: null,
  };

  describe("Lagre tall", () => {
    test("burde vise et tall-steg", async () => {
      const RemixStub = unstable_createRemixStub([
        {
          path: "/",
          element: <BehandlingSteg steg={steg} readonly={false} isSubmitting={false} />,
        },
      ]);

      render(<RemixStub />);

      const stegTekst = hentStegTekst(steg.id) || { label: steg.id, begrunnelse: "Begrunnelse" };

      expect(await screen.findByLabelText(stegTekst.label)).toBeInTheDocument();
      expect(await screen.findByLabelText(stegTekst.begrunnelse)).toBeInTheDocument();
    });

    test("burde kunne lagre et tall", async () => {
      let stegFelt;

      const actionFn = vi.fn(async ({ request }) => {
        const formData = await request.formData();
        stegFelt = formData.get(steg.uuid) as string;

        return json({ lagret: true });
      });

      const RemixStub = unstable_createRemixStub([
        {
          path: "/",
          element: <BehandlingSteg steg={steg} readonly={false} isSubmitting={false} />,
          action: actionFn,
        },
      ]);

      render(<RemixStub />);

      const stegTekst = hentStegTekst(steg.id) || { label: steg.id, begrunnelse: "Begrunnelse" };

      const stegInput = await screen.findByLabelText(stegTekst.label);
      const lagreKnapp = await screen.findByRole("button", { name: "Lagre" });

      await userEvent.type(stegInput, "500");
      await userEvent.click(lagreKnapp);

      expect(actionFn).toBeCalledTimes(1);
      expect(stegFelt).toBe("500");
    });

    test("burde vise feilmelding hvis bruker skriver inn tekst", async () => {
      const actionFn = vi.fn(async ({ request }) => {
        // Denne kan være tom, siden vi ikke skal komme hit i denne testen
      });

      const RemixStub = unstable_createRemixStub([
        {
          path: "/",
          element: <BehandlingSteg steg={steg} readonly={false} isSubmitting={false} />,
          action: actionFn,
        },
      ]);

      render(<RemixStub />);

      const stegTekst = hentStegTekst(steg.id) || { label: steg.id, begrunnelse: "Begrunnelse" };

      const stegInput = await screen.findByLabelText(stegTekst.label);
      const lagreKnapp = await screen.findByRole("button", { name: "Lagre" });

      await userEvent.type(stegInput, "hei");
      await userEvent.click(lagreKnapp);

      expect(actionFn).toBeCalledTimes(0);
      expect(stegInput.getAttribute("aria-invalid")).toBe("true");
      expect(await screen.findByText("Det må være et gyldig heltall")).toBeInTheDocument();
    });
  });
});
