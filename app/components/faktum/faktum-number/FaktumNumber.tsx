import { BodyShort, Label } from "@navikt/ds-react";
import { useSanityTekst } from "~/context/sanity-content";
import type { INumberFaktum } from "~/models/faktum.server";
import type { IFaktum } from "../Faktum";

export function FaktumNumber({ faktum }: IFaktum<INumberFaktum>) {
  const { hentFaktumTekstMedId } = useSanityTekst();

  return (
    <div>
      <Label as={"p"}>{hentFaktumTekstMedId(faktum.beskrivendeId)?.text}</Label>
      <BodyShort>{faktum.svar}</BodyShort>
    </div>
  );
}
