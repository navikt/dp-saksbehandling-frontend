import type { IStegTekst } from "~/tekst/stegTekster";
import { stegTekster } from "~/tekst/stegTekster";

const manglerTekst: IStegTekst = {
  tittel: "Mangler steg tittel",
  beskrivelse: "Mangler steg beskrivelse",
};
export function useStegTekst(beskrivendeId: string) {
  const tekst = stegTekster[beskrivendeId];

  return tekst !== undefined ? tekst : manglerTekst;
}
