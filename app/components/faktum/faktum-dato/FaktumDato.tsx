import { BodyShort, Label } from "@navikt/ds-react";
import { useSanityTekst } from "../context/sanity-content";
import type { IDatoFaktum } from "../models/faktum.server";
import type { IFaktum } from "../Faktum";

export function FaktumDato({ faktum }: IFaktum<IDatoFaktum>) {
  const { hentFaktumTekstMedId } = useSanityTekst();

  return (
    <div>
      <Label as={"p"}>{hentFaktumTekstMedId(faktum.beskrivendeId)?.text}</Label>
      {faktum.svar && <BodyShort>{faktum.svar}</BodyShort>}
    </div>
  );
}
