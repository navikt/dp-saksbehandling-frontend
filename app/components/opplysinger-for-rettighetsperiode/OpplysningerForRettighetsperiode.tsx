import { Heading } from "@navikt/ds-react";

import { OpplysningsVerdierForPerioder } from "~/components/rett-på-dagpenger/OpplysningsVerdierForPerioder";
import { VerdiMedTittel } from "~/components/verdi-med-tittel/VerdiMedTittel";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { formaterOpplysningVerdi, hentPerioderForOpplysning } from "~/utils/opplysning.utils";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  index: number;
  opplysninger: components["schemas"]["RedigerbareOpplysninger"][];
  rettighetsperiode: components["schemas"]["Rettighetsperiode"];
}

const RETTIGHETSPERIODE_OPPLYSNINGER: { id: string; label: string }[] = [
  // { id: "0194881f-9444-7a73-a458-0af81c034d8b", label: "Rettighetstype" },
  // { id: "0194881f-9435-72a8-b1ce-9575cbc2a76b", label: "Ny arbeidstid per uke" },
  // { id: "0194881f-9434-79e8-a64d-1a23cc5d86eb", label: "Samordnet dagssats uten barnetillegg" },
  // { id: "0194881f-9428-74d5-b160-f63a4c61a24d", label: "Samordnet dagssats med barnetillegg" },
  // { id: "0194881f-9445-734c-a7ee-045edf29b523", label: "Godkjent unntak for utdanning" },
  // { id: "0194881f-9428-74d5-b160-f63a4c61a24f", label: "Dagsats" },
];

export function OpplysningerForRettighetsperiode({
  rettighetsperiode,
  opplysninger,
  index,
}: IProps) {
  return (
    <div className={"card card-raised flex flex-col gap-4 p-4"}>
      <Heading size={"xsmall"}>Opplysninger i rettighetsperiode {index + 1}</Heading>

      <section className="grid grid-cols-4 gap-2">
        <VerdiMedTittel
          visBorder={true}
          label="Rett på dagpenger"
          verdi={rettighetsperiode.harRett ? "Ja" : "Nei"}
        />

        <VerdiMedTittel
          visBorder={true}
          label="Fra og med"
          verdi={formaterTilNorskDato(rettighetsperiode.fraOgMed)}
        />

        <VerdiMedTittel
          visBorder={true}
          label="Til og med"
          verdi={
            rettighetsperiode.tilOgMed ? formaterTilNorskDato(rettighetsperiode.tilOgMed) : "--"
          }
        />

        {RETTIGHETSPERIODE_OPPLYSNINGER.filter(
          ({ id }) => hentPerioderForOpplysning(opplysninger, id, rettighetsperiode).length === 1,
        ).map(({ id, label }) => {
          const perioder = hentPerioderForOpplysning(opplysninger, id, rettighetsperiode);
          return (
            <VerdiMedTittel
              key={id}
              label={label}
              visBorder={true}
              verdi={formaterOpplysningVerdi(perioder[0].verdi)}
            />
          );
        })}
      </section>

      <section className="grid grid-cols-4 gap-2">
        {RETTIGHETSPERIODE_OPPLYSNINGER.filter(
          ({ id }) => hentPerioderForOpplysning(opplysninger, id, rettighetsperiode).length > 1,
        ).map(({ id, label }) => {
          const perioder = hentPerioderForOpplysning(opplysninger, id, rettighetsperiode);
          return <OpplysningsVerdierForPerioder key={id} label={label} perioder={perioder} />;
        })}
      </section>
    </div>
  );
}
