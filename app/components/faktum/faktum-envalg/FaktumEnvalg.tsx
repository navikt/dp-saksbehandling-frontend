import { BodyShort, Label } from "@navikt/ds-react";
import { useSanityTekst } from "~/context/sanity-content";
import type { IEnvalgFaktum } from "~/models/faktum.server";
import type { IFaktum } from "../Faktum";

export function FaktumEnvalg({ faktum }: IFaktum<IEnvalgFaktum>) {
  const { hentFaktumTekstMedId, hentSvaralternativTekstMedId } = useSanityTekst();

  return (
    <div>
      <Label as={"p"}>{hentFaktumTekstMedId(faktum.beskrivendeId)?.text}</Label>
      {faktum.svar && <BodyShort>{hentSvaralternativTekstMedId(faktum.svar)?.text}</BodyShort>}
    </div>
  );
}
