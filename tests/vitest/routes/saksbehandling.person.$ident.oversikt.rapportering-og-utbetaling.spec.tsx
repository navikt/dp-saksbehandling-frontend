// @vitest-environment jsdom

import { json } from "@remix-run/node";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import PersonOversiktRapporteringOgUtbetalingSide from "~/routes/saksbehandling.person.$oppgaveId.oversikt.rapportering-og-utbetaling";
import { mockRapporteringsperioder } from "../../../mocks/api-routes/rapporteringsperiodeResponse";
import { TestContainer } from "../helpers/TestContainer";

describe("Rapportering og utbetaling", () => {
  test("burde vise rapporteringsperioder", async () => {
    const loaderFn = () => {
      return json({ rapporteringsperioder: mockRapporteringsperioder });
    };

    render(
      <TestContainer loader={loaderFn}>
        <PersonOversiktRapporteringOgUtbetalingSide />
      </TestContainer>,
    );

    const rapporteringsperioder = await screen.findAllByTestId("rapporteringsperiode");

    expect(rapporteringsperioder.length).toBe(mockRapporteringsperioder.length);
  });

  test("burde vise melding hvis det ikke finnes rapporteringsperioder", async () => {
    const loaderFn = () => {
      return json({ rapporteringsperioder: [] });
    };

    render(
      <TestContainer loader={loaderFn}>
        <PersonOversiktRapporteringOgUtbetalingSide />
      </TestContainer>,
    );

    expect(
      await screen.findByText("Ingen rapporteringsperioder funnet for bruker"),
    ).toBeInTheDocument();
  });
});
