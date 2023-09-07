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
  describe("BehandlingStegGenerell", () => {
    describe("Lagre tall", () => {
      const steg: IBehandlingSteg = {
        uuid: "962305f9-3ec5-482c-9d59-558c7653749a",
        id: "Grunnlag",
        type: "Fastsetting",
        svartype: "Int",
        tilstand: "IkkeUtført",
        svar: null,
      };
      test("burde vise et tallsteg", async () => {
        const RemixStub = unstable_createRemixStub([
          {
            path: "/",
            element: <BehandlingSteg steg={steg} readonly={false} />,
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
            element: <BehandlingSteg steg={steg} readonly={false} />,
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
            element: <BehandlingSteg steg={steg} readonly={false} />,
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

      test("burde vise feilmelding hvis bruker trykker lagre uten å ha skrevet inn et tall", async () => {
        const actionFn = vi.fn(async ({ request }) => {
          // Denne kan være tom, siden vi ikke skal komme hit i denne testen
        });

        const RemixStub = unstable_createRemixStub([
          {
            path: "/",
            element: <BehandlingSteg steg={steg} readonly={false} />,
            action: actionFn,
          },
        ]);

        render(<RemixStub />);

        const stegTekst = hentStegTekst(steg.id) || { label: steg.id, begrunnelse: "Begrunnelse" };

        const stegInput = await screen.findByLabelText(stegTekst.label);
        const lagreKnapp = await screen.findByRole("button", { name: "Lagre" });

        // Ikke skriv inn noe før vi trykker på lagre
        await userEvent.click(lagreKnapp);

        expect(actionFn).toBeCalledTimes(0);
        expect(stegInput.getAttribute("aria-invalid")).toBe("true");
        expect(await screen.findByText("Du må skrive et positivt tall")).toBeInTheDocument();
      });
    });

    describe("Lagre boolsk verdi", () => {
      const steg: IBehandlingSteg = {
        uuid: "962305f9-3ec5-482c-9d59-558c7653749a",
        id: "Oppfyller kravene til dagpenger",
        type: "Fastsetting",
        svartype: "Boolean",
        tilstand: "IkkeUtført",
        svar: null,
      };
      test("burde vise et boolsk steg", async () => {
        const RemixStub = unstable_createRemixStub([
          {
            path: "/",
            element: <BehandlingSteg steg={steg} readonly={false} />,
          },
        ]);

        render(<RemixStub />);

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

        const RemixStub = unstable_createRemixStub([
          {
            path: "/",
            element: <BehandlingSteg steg={steg} readonly={false} />,
            action: actionFn,
          },
        ]);

        render(<RemixStub />);

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

        const RemixStub = unstable_createRemixStub([
          {
            path: "/",
            element: <BehandlingSteg steg={steg} readonly={false} />,
            action: actionFn,
          },
        ]);

        render(<RemixStub />);

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
