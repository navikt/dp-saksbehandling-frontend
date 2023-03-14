import React from "react";
import { BodyShort, Label } from "@navikt/ds-react";
import type { IFaktum } from "../Faktum";
import type { IFlervalgFaktum } from "~/models/faktum.server";
import { useSanityTekst } from "~/hooks/useSanityTekst";

export function FaktumFlervalg({ faktum }: IFaktum<IFlervalgFaktum>) {
  const { hentFaktumTekstMedId, hentSvaralternativTekstMedId } = useSanityTekst();

  return (
    <div>
      <Label as={"p"}>{hentFaktumTekstMedId(faktum.beskrivendeId)?.text}</Label>
      {faktum.svar?.map((svar) => (
        <BodyShort key={svar}>{hentSvaralternativTekstMedId(svar)?.text}</BodyShort>
      ))}
    </div>
  );
}
