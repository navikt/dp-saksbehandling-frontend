import React from "react";
import { BodyShort, Label } from "@navikt/ds-react";
import type { IFaktum } from "../Faktum";
import type { ITekstFaktum } from "~/models/faktum.server";
import { useSanityTekst } from "~/hooks/useSanityTekst";

export function FaktumText({ faktum }: IFaktum<ITekstFaktum>) {
  const { hentFaktumTekstMedId } = useSanityTekst();

  return (
    <div>
      <Label as={"p"}>{hentFaktumTekstMedId(faktum.beskrivendeId)?.text}</Label>
      {faktum.svar && <BodyShort>{faktum.svar}</BodyShort>}
    </div>
  );
}
