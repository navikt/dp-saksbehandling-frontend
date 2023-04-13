import { BodyShort, Label } from "@navikt/ds-react";
import { useSanityTekst } from "../context/sanity-content";
import type { ILandFaktum } from "../models/faktum.server";
import { getCountryName } from "../utils/country.utils";
import type { IFaktum } from "../Faktum";

export function FaktumLand({ faktum }: IFaktum<ILandFaktum>) {
  const { hentFaktumTekstMedId } = useSanityTekst();

  return (
    <div>
      <Label as={"p"}>{hentFaktumTekstMedId(faktum.beskrivendeId)?.text}</Label>
      {faktum.svar && <BodyShort>{getCountryName(faktum.svar, "nb")}</BodyShort>}
    </div>
  );
}
