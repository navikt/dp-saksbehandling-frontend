import type { IStegTekst } from "~/tekst/stegTekster";
import { stegTekster } from "~/tekst/stegTekster";

const manglerTekst: IStegTekst = {
  tittel: "Mangler steg tittel",
  beskrivelse: "Mangler steg beskrivelse",
};
export function useStegTekst(urn: string) {
  const tekst = stegTekster[urn];

  return tekst !== undefined ? tekst : manglerTekst;
}
