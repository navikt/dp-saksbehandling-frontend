import { BodyShort, Label } from "@navikt/ds-react";
import { useSanityTekst } from "../context/sanity-content";
import type { IPeriodeFaktum } from "../models/faktum.server";
import type { IFaktum } from "../Faktum";

export function FaktumPeriode({ faktum }: IFaktum<IPeriodeFaktum>) {
  const { hentFaktumTekstMedId } = useSanityTekst();

  return (
    <div>
      <Label as={"p"}>{hentFaktumTekstMedId(faktum.beskrivendeId)?.text}</Label>
      {faktum.svar?.fom && <BodyShort>Fra: {faktum.svar.fom} </BodyShort>}
      {faktum.svar?.tom && <BodyShort>Til: {faktum.svar.tom}</BodyShort>}
    </div>
  );
}
