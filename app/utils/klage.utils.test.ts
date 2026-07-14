import { describe, expect, test } from "vitest";

import { erMedholdEllerDelvisMedhold, hentKlageFerdigstillModus } from "./klage.utils";

describe("erMedholdEllerDelvisMedhold", () => {
  test("returnerer true for MEDHOLD", () => {
    expect(erMedholdEllerDelvisMedhold("MEDHOLD")).toBe(true);
  });

  test("returnerer true for DELVIS_MEDHOLD", () => {
    expect(erMedholdEllerDelvisMedhold("DELVIS_MEDHOLD")).toBe(true);
  });

  test("returnerer false for OPPRETTHOLDELSE", () => {
    expect(erMedholdEllerDelvisMedhold("OPPRETTHOLDELSE")).toBe(false);
  });

  test("returnerer false for AVVIST", () => {
    expect(erMedholdEllerDelvisMedhold("AVVIST")).toBe(false);
  });

  test("returnerer false for IKKE_SATT", () => {
    expect(erMedholdEllerDelvisMedhold("IKKE_SATT")).toBe(false);
  });
});

describe("hentKlageFerdigstillModus", () => {
  test("MEDHOLD i tilstand BEHANDLES gir steg 1 (ferdigstill-behandling)", () => {
    expect(hentKlageFerdigstillModus("MEDHOLD", "BEHANDLES")).toBe("ferdigstill-behandling");
  });

  test("DELVIS_MEDHOLD i tilstand BEHANDLES gir steg 1 (ferdigstill-behandling)", () => {
    expect(hentKlageFerdigstillModus("DELVIS_MEDHOLD", "BEHANDLES")).toBe("ferdigstill-behandling");
  });

  test("MEDHOLD i tilstand BEHANDLING_UTFORT gir steg 2 (fullfor-klage)", () => {
    expect(hentKlageFerdigstillModus("MEDHOLD", "BEHANDLING_UTFORT")).toBe("fullfor-klage");
  });

  test("DELVIS_MEDHOLD i tilstand BEHANDLING_UTFORT gir steg 2 (fullfor-klage)", () => {
    expect(hentKlageFerdigstillModus("DELVIS_MEDHOLD", "BEHANDLING_UTFORT")).toBe("fullfor-klage");
  });

  test("OPPRETTHOLDELSE gir ordinær ferdigstill-klage uansett tilstand", () => {
    expect(hentKlageFerdigstillModus("OPPRETTHOLDELSE", "BEHANDLES")).toBe("ferdigstill-klage");
    expect(hentKlageFerdigstillModus("OPPRETTHOLDELSE", "BEHANDLING_UTFORT")).toBe(
      "ferdigstill-klage",
    );
  });

  test("AVVIST gir ordinær ferdigstill-klage", () => {
    expect(hentKlageFerdigstillModus("AVVIST", "BEHANDLES")).toBe("ferdigstill-klage");
  });
});
