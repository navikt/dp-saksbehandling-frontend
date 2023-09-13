// @vitest-environment node
import { describe, expect, test } from "vitest";
import {
  hentAktivitetIDager,
  hentAktivitetITimer,
  hentAllAktivitetIDager,
  hentAllAktivitetITimer,
} from "./aktivitet.utils";
import { mockRapporteringsperioder } from "mocks/api-routes/rapporteringsperiodeResponse";
import type { IRapporteringsperiodeDag } from "~/models/rapporteringsperiode.server";

describe("Aktivitet utils", () => {
  test("skal hente ut antall timer fra et ISO-8601-format for en dag", async () => {
    const timer = hentAktivitetITimer(mockRapporteringsperioder[0].dager[0], "Arbeid");
    expect(timer).toBe("8");
  });

  test("skal vise 0 timer hvis ingen timer matchet aktivitetstypen", async () => {
    const timer = hentAktivitetITimer(mockRapporteringsperioder[0].dager[0], "Syk");
    expect(timer).toBe("0");
  });

  test("skal hente ut antall timer fra et ISO-8601-format for en rapporteringsperiode", async () => {
    const timer = hentAllAktivitetITimer(mockRapporteringsperioder[0], "Arbeid");
    expect(timer).toBe("30");
  });

  test("skal vise antall dager for en dag hvis aktivitetstypen er enten Syk eller Ferie", async () => {
    const dag: IRapporteringsperiodeDag = {
      ...mockRapporteringsperioder[0].dager[0],
      aktiviteter: [
        {
          id: "4a49e571-6384-4eab-9c2e-3f4d48d30b9a",
          type: "Syk",
          timer: "PT24H0M",
          dato: "2023-07-03",
        },
      ],
    };

    const dager = hentAktivitetIDager(dag, "Syk");

    expect(dager).toBe("1");
  });

  test("skal vise antall dager for en periode hvis aktivitetstypen er enten Syk eller Ferie", async () => {
    const antallSykDager = hentAllAktivitetIDager(mockRapporteringsperioder[0], "Syk");
    expect(antallSykDager).toBe("3");

    const antallFerieDager = hentAllAktivitetIDager(mockRapporteringsperioder[0], "Ferie");
    expect(antallFerieDager).toBe("2");
  });
});
