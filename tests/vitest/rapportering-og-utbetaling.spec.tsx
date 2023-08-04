// @vitest-environment jsdom

import { json } from "@remix-run/node";
import { unstable_createRemixStub } from "@remix-run/testing";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import PersonOversiktRapporteringOgUtbetalingSide from "~/routes/saksbehandling.person.$ident.oversikt.rapportering-og-utbetaling";
import { mockRapporteringsperioder } from "../../mocks/api-routes/rapporteringsperiodeResponse";

describe("Rapportering og utbetaling", () => {
  test("burde vise rapporteringsperioder", async () => {
    let RemixStub = unstable_createRemixStub([
      {
        path: "/",
        element: <PersonOversiktRapporteringOgUtbetalingSide />,
        loader() {
          return json({ rapporteringsperioder: mockRapporteringsperioder });
        },
      },
    ]);

    render(<RemixStub />);

    const rapporteringsperioder = await screen.findAllByTestId("rapporteringsperiode");

    expect(rapporteringsperioder.length).toBe(mockRapporteringsperioder.length);
  });

  test("burde vise melding hvis det ikke finnes rapporteringsperioder", async () => {
    let RemixStub = unstable_createRemixStub([
      {
        path: "/",
        element: <PersonOversiktRapporteringOgUtbetalingSide />,
        loader() {
          return json({ rapporteringsperioder: [] });
        },
      },
    ]);

    render(<RemixStub />);

    expect(
      await screen.findByText("Ingen rapporteringsperioder funnet for bruker"),
    ).toBeInTheDocument();
  });
});
