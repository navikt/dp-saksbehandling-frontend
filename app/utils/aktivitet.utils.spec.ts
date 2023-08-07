// @vitest-environment node
import { describe, expect, test } from "vitest";
import { hentAktivitetITimer, hentAllAktivitetITimer } from "./aktivitet.utils";
import { mockRapporteringsperioder } from "mocks/api-routes/rapporteringsperiodeResponse";

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
    expect(timer).toBe("40");
  });

  test("skal vise 0 timer hvis ingen timer matchet aktivitetstypen", async () => {
    const timer = hentAllAktivitetITimer(mockRapporteringsperioder[0], "Syk");
    expect(timer).toBe("0");
  });
});
