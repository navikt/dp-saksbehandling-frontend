import { Radio, RadioGroup } from "@navikt/ds-react";
import { useSanityTekst } from "~/hooks/useSanityTekst";
import type { IEnvalgFaktum } from "~/models/faktum.server";
import type { IFaktum } from "../Faktum";

export function FaktumEnvalg({ faktum }: IFaktum<IEnvalgFaktum>) {
  const { hentFaktumTekstMedId, hentSvaralternativTekstMedId } = useSanityTekst();

  return (
    <>
      <RadioGroup
        legend={hentFaktumTekstMedId(faktum.beskrivendeId)?.text}
        value={faktum.svar && hentSvaralternativTekstMedId(faktum.svar)?.text}
      >
        {faktum.gyldigeValg.map((textId) => {
          return (
            <Radio key={textId} value={textId}>
              {hentSvaralternativTekstMedId(textId)?.text}
            </Radio>
          );
        })}
      </RadioGroup>
    </>
  );
}
