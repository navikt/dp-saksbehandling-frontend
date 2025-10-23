import { Heading } from "@navikt/ds-react";

import { VerdiMedTittel } from "~/components/verdi-med-tittel/VerdiMedTittel";
import {
  formaterOpplysningVerdiV2,
  hentOpplysningsperiodePåPrøvingsdato,
} from "~/utils/opplysning.utils";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  behandling: components["schemas"]["BehandlingsresultatV2"];
  prøvingsdato: Date;
}

const opplysninger = [
  { id: "0194881f-91d1-7df2-ba1d-4533f37fcc76", label: "Vurdert fra" },
  { id: "0194881f-9435-72a8-b1ce-9575cbc2a767", label: "Arbeidstid før tap" },
  { id: "0194881f-9444-7a73-a458-0af81c034d8b", label: "Rettighetstype" },
  { id: "0194881f-943d-77a7-969c-147999f15459", label: "Stønadsperiode" },
  { id: "0194881f-943f-78d9-b874-00a4944c54ef", label: "Egenandel" },
  { id: "0194881f-9410-7481-b263-4606fdd10cba", label: "Beregnet basert på" },
  { id: "0194881f-9410-7481-b263-4606fdd10cbd", label: "Inntektsgrunnlag" },
];

export function OpplysningerPåPrøvingsdato({ behandling, prøvingsdato }: IProps) {
  return (
    <div className={"card card-raised flex flex-col gap-4 p-4"}>
      <Heading size={"small"}>Opplysninger på prøvingsdato</Heading>
      <section className="grid grid-cols-4 gap-2">
        {opplysninger.map(({ id, label }) => {
          const periode = hentOpplysningsperiodePåPrøvingsdato(
            behandling.opplysninger,
            id,
            prøvingsdato.toISOString(),
          );

          if (!periode) {
            return;
          }

          return (
            <VerdiMedTittel
              key={id}
              visBorder={true}
              label={label}
              verdi={formaterOpplysningVerdiV2(periode.verdi)}
            />
          );
        })}

        <VerdiMedTittel
          visBorder={true}
          label="Rettighetsperioder"
          verdi={`${behandling.rettighetsperioder.length} periode
              ${behandling.rettighetsperioder.length !== 1 ? "r" : ""}`}
        />
      </section>
    </div>
  );
}
