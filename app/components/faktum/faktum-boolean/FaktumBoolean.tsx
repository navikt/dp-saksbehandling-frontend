import { BodyShort, Label } from "@navikt/ds-react";
import { useSanityTekst } from "../context/sanity-content";
import type { IBooleanFaktum } from "../models/faktum.server";
import type { IFaktum } from "../Faktum";

export function FaktumBoolean({ faktum }: IFaktum<IBooleanFaktum>) {
  const { hentFaktumTekstMedId, hentSvaralternativTekstMedId } = useSanityTekst();

  const svarTextId = booleanTilBeskrivendeId(faktum);
  const tittel = hentFaktumTekstMedId(faktum.beskrivendeId)?.text;
  const svar = svarTextId && hentSvaralternativTekstMedId(svarTextId)?.text;

  return (
    <div>
      <Label as={"p"}>{tittel}</Label>
      {svarTextId && <BodyShort>{svar}</BodyShort>}
    </div>
  );
}

export function beskrivendeIdTilBoolean(beskrivendeId: string): boolean | undefined {
  if (beskrivendeId.match(".*.svar.ja")) {
    return true;
  }

  if (beskrivendeId.match(".*.svar.nei")) {
    return false;
  }

  return undefined;
}

export function booleanTilBeskrivendeId(faktum: IBooleanFaktum): string | undefined {
  if (faktum.svar === undefined) {
    return undefined;
  }

  return faktum.gyldigeValg.find((valg) => {
    if (faktum.svar) {
      return valg.match(".*.svar.ja");
    }

    return valg.match(".*.svar.nei");
  });
}
