// @vitest-environment jsdom

import { json } from "@remix-run/node";
import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { mockRapporteringsperioder } from "../../../mocks/api-routes/rapporteringsperiodeResponse";
import { AktivitetModal } from "./AktivitetModal";
import { useState } from "react";
import { type TAktivitetType } from "~/models/aktivitet.server";
import userEvent from "@testing-library/user-event";
import { type IRapporteringsperiodeDag } from "~/models/rapporteringsperiode.server";
import { TestContainer } from "../../../tests/vitest/helpers/TestContainer";

describe("AktivitetModal", () => {
  const dagUtenAktivitet: IRapporteringsperiodeDag = {
    dagIndex: 0,
    dato: "2023-06-19",
    muligeAktiviteter: ["Arbeid", "Ferie"],
    aktiviteter: [],
  };

  const dagMedAktivitet: IRapporteringsperiodeDag = {
    dagIndex: 1,
    dato: "2023-06-20",
    muligeAktiviteter: [],
    aktiviteter: [
      {
        id: "4a49e571-6384-4eab-9c2e-3f4d48d30b9a",
        type: "Ferie",
        timer: "PT8H0M",
        dato: "2023-06-20",
      },
    ],
  };

  const rapporteringsperiode = { ...mockRapporteringsperioder[0] };
  rapporteringsperiode.dager = [dagUtenAktivitet, dagMedAktivitet];

  describe("Lagre aktivitet", () => {
    const utvalgtAktivitet = dagUtenAktivitet.muligeAktiviteter[1];

    test("burde vise mulige aktiviteter", async () => {
      const TestComponent = () => {
        const [valgtAktivitet, setValgtAktivitet] = useState<TAktivitetType | string>("");

        return (
          <div id="dp-saksbehandling-frontend">
            <AktivitetModal
              rapporteringsperiode={rapporteringsperiode}
              dato={dagUtenAktivitet.dato}
              valgtAktivitet={valgtAktivitet}
              setValgtAktivitet={setValgtAktivitet}
              modalAapen={true}
              lukkModal={() => {}}
            />
          </div>
        );
      };

      render(
        <TestContainer>
          <TestComponent />
        </TestContainer>,
      );

      expect(
        await screen.findByLabelText(dagUtenAktivitet.muligeAktiviteter[0]),
      ).toBeInTheDocument();
      expect(
        await screen.findByLabelText(dagUtenAktivitet.muligeAktiviteter[1]),
      ).toBeInTheDocument();
    });

    test("burde kunne velge og lagre en aktivitet", async () => {
      let dato, aktivitetstype, submit;

      const actionFn = vi.fn(async ({ request }) => {
        const formData = await request.formData();
        dato = formData.get("dato") as string;
        submit = formData.get("submit") as string;
        aktivitetstype = formData.get("aktivitetstype") as string;

        return json({ aktivitetLagret: true });
      });

      const TestComponent = () => {
        const [valgtAktivitet, setValgtAktivitet] = useState<TAktivitetType | string>("");

        return (
          <div id="dp-saksbehandling-frontend">
            <AktivitetModal
              rapporteringsperiode={rapporteringsperiode}
              dato={dagUtenAktivitet.dato}
              valgtAktivitet={valgtAktivitet}
              setValgtAktivitet={setValgtAktivitet}
              modalAapen={true}
              lukkModal={() => {}}
            />
          </div>
        );
      };

      render(
        <TestContainer action={actionFn}>
          <TestComponent />
        </TestContainer>,
      );

      const valgtAktivitet = await screen.findByLabelText(utvalgtAktivitet);
      const lagreKnapp = await screen.findByRole("button", { name: "Lagre" });

      await userEvent.click(valgtAktivitet);
      await userEvent.click(lagreKnapp);

      expect(actionFn).toBeCalledTimes(1);

      expect(dato).toBe(dagUtenAktivitet.dato);
      expect(aktivitetstype).toBe(utvalgtAktivitet);
      expect(submit).toBe("lagre-aktivitet");
    });

    test("burde vise feilmelding hvis det er feil i backenden når vi lagrer aktivitet", async () => {
      const actionFn = vi.fn(async ({ request }) => {
        return json({ aktivitetError: true });
      });

      const TestComponent = () => {
        const [valgtAktivitet, setValgtAktivitet] = useState<TAktivitetType | string>("");

        return (
          <div id="dp-saksbehandling-frontend">
            <AktivitetModal
              rapporteringsperiode={rapporteringsperiode}
              dato={dagUtenAktivitet.dato}
              valgtAktivitet={valgtAktivitet}
              setValgtAktivitet={setValgtAktivitet}
              modalAapen={true}
              lukkModal={() => {}}
            />
          </div>
        );
      };

      render(
        <TestContainer action={actionFn}>
          <TestComponent />
        </TestContainer>,
      );

      const valgtAktivitet = await screen.findByLabelText(utvalgtAktivitet);
      const lagreKnapp = await screen.findByRole("button", { name: "Lagre" });

      await userEvent.click(valgtAktivitet);
      await userEvent.click(lagreKnapp);

      expect(actionFn).toBeCalledTimes(1);
      expect(await screen.findByText("Det skjedde en feil.")).toBeInTheDocument();
    });

    describe("Arbeid", () => {
      const aktivitetArbeid = "Arbeid";

      test("burde kunne velge og lagre timer når man velger Arbeid", async () => {
        let dato, aktivitetstype, timer, submit;

        const actionFn = vi.fn(async ({ request }) => {
          const formData = await request.formData();
          dato = formData.get("dato") as string;
          timer = formData.get("timer") as string;
          submit = formData.get("submit") as string;
          aktivitetstype = formData.get("aktivitetstype") as string;

          return json({ aktivitetLagret: true });
        });

        const TestComponent = () => {
          const [valgtAktivitet, setValgtAktivitet] = useState<TAktivitetType | string>("");

          return (
            <div id="dp-saksbehandling-frontend">
              <AktivitetModal
                rapporteringsperiode={rapporteringsperiode}
                dato={dagUtenAktivitet.dato}
                valgtAktivitet={valgtAktivitet}
                setValgtAktivitet={setValgtAktivitet}
                modalAapen={true}
                lukkModal={() => {}}
              />
            </div>
          );
        };

        render(
          <TestContainer action={actionFn}>
            <TestComponent />
          </TestContainer>,
        );

        const valgtAktivitet = await screen.findByLabelText(aktivitetArbeid);
        const lagreKnapp = await screen.findByRole("button", { name: "Lagre" });

        await userEvent.click(valgtAktivitet);
        const antallTimer = await screen.findByLabelText("Antall timer:");

        await userEvent.type(antallTimer, "2,5");
        await userEvent.click(lagreKnapp);

        expect(actionFn).toBeCalledTimes(1);

        expect(dato).toBe(dagUtenAktivitet.dato);
        expect(aktivitetstype).toBe(aktivitetArbeid);
        expect(timer).toBe("2,5");
        expect(submit).toBe("lagre-aktivitet");
      });

      test("burde vise feilmelding hvis bruker prøver å lagre arbeid uten å skrive inn timer", async () => {
        const actionFn = vi.fn(async ({ request }) => {
          return json({ aktivitetLagret: true });
        });

        const TestComponent = () => {
          const [valgtAktivitet, setValgtAktivitet] = useState<TAktivitetType | string>("");

          return (
            <div id="dp-saksbehandling-frontend">
              <AktivitetModal
                rapporteringsperiode={rapporteringsperiode}
                dato={dagUtenAktivitet.dato}
                valgtAktivitet={valgtAktivitet}
                setValgtAktivitet={setValgtAktivitet}
                modalAapen={true}
                lukkModal={() => {}}
              />
            </div>
          );
        };

        render(
          <TestContainer action={actionFn}>
            <TestComponent />
          </TestContainer>,
        );

        const valgtAktivitet = await screen.findByLabelText(aktivitetArbeid);
        const lagreKnapp = await screen.findByRole("button", { name: "Lagre" });

        await userEvent.click(valgtAktivitet);
        const antallTimer = await screen.findByLabelText("Antall timer:");

        await userEvent.click(lagreKnapp);

        expect(actionFn).toBeCalledTimes(0);
        expect(antallTimer.getAttribute("aria-invalid")).toBe("true");
        expect(await screen.findByText("Det må være mellom 0,5 og 24 timer")).toBeInTheDocument();
      });
    });
  });

  describe("Slett aktivitet", () => {
    test("burde vise allerede valgt aktivitet", async () => {
      const TestComponent = () => {
        const [valgtAktivitet, setValgtAktivitet] = useState<TAktivitetType | string>("");

        return (
          <div id="dp-saksbehandling-frontend">
            <AktivitetModal
              rapporteringsperiode={rapporteringsperiode}
              dato={dagMedAktivitet.dato}
              valgtAktivitet={valgtAktivitet}
              setValgtAktivitet={setValgtAktivitet}
              modalAapen={true}
              lukkModal={() => {}}
            />
          </div>
        );
      };

      render(
        <TestContainer>
          <TestComponent />
        </TestContainer>,
      );

      const valgtAktivitet = await screen.findByText(dagMedAktivitet.aktiviteter[0].type);

      expect(valgtAktivitet).toBeInTheDocument();
    });

    test("burde kunne fjerne en aktivitet", async () => {
      let aktivitetId, submit;

      const actionFn = vi.fn(async ({ request }) => {
        const formData = await request.formData();
        aktivitetId = formData.get("aktivitetId") as string;
        submit = formData.get("submit") as string;

        return json({ aktivitetLagret: true });
      });

      const TestComponent = () => {
        const [valgtAktivitet, setValgtAktivitet] = useState<TAktivitetType | string>("");

        return (
          <div id="dp-saksbehandling-frontend">
            <AktivitetModal
              rapporteringsperiode={rapporteringsperiode}
              dato={dagMedAktivitet.dato}
              valgtAktivitet={valgtAktivitet}
              setValgtAktivitet={setValgtAktivitet}
              modalAapen={true}
              lukkModal={() => {}}
            />
          </div>
        );
      };

      render(
        <TestContainer action={actionFn}>
          <TestComponent />
        </TestContainer>,
      );

      const valgtAktivitet = await screen.findByText(dagMedAktivitet.aktiviteter[0].type);

      expect(valgtAktivitet).toBeInTheDocument();

      const slettKnapp = await screen.findByRole("button", { name: "Fjern registrering" });
      await userEvent.click(slettKnapp);

      expect(actionFn).toBeCalledTimes(1);
      expect(aktivitetId).toBe(dagMedAktivitet.aktiviteter[0].id);
      expect(submit).toBe("slette-aktivitet");
    });
  });
});
