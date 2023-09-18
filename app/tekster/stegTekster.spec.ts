import { describe, expect, it } from "vitest";
import { type TBehandlingStegId } from "~/models/oppgave.server";
import { type IStegTekst } from "./stegTekster";
import { hentStegTekst, stegTekster } from "./stegTekster";

describe("stegTekster[]", () => {
  it("skal inneholde alle nødvendige steg-tekster", () => {
    const forventedeIds: TBehandlingStegId[] = [
      "Virkningsdato",
      "Rettighetstype",
      "Fastsatt vanlig arbeidstid",
      "Grunnlag",
      "Dagsats",
      "Periode",
      "Oppfyller kravene til dagpenger",
    ];

    const faktiskeIds = stegTekster.map((steg) => steg.id);
    expect(faktiskeIds).toEqual(forventedeIds);
  });
});

describe("hentStegTekst()", () => {
  it("skal returnere riktig tekst for en gyldig ID", () => {
    const forventetStegTekst: IStegTekst = {
      id: "Virkningsdato",
      label: "Virkningsdato",
      begrunnelse: "Begrunnelse",
      hjelpetekst: {
        label: "",
        begrunnelse: "",
      },
    };

    const resultat = hentStegTekst("Virkningsdato");
    expect(resultat).toEqual(forventetStegTekst);
  });

  it("skal returnere undefined for en ugyldig ID", () => {
    const resultat = hentStegTekst("UgyldigId" as TBehandlingStegId);
    expect(resultat).toBeUndefined();
  });
});
