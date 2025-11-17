import { OpplysningerForRettighetsperiode } from "~/components/opplysinger-for-rettighetsperiode/OpplysningerForRettighetsperiode";
import { OpplysningerPåPrøvingsdato } from "~/components/opplysninger-på-prøvingsdato/OpplysningerPåPrøvingsdato";
import { OpplysningerTidslinje } from "~/components/v2/opplysninger-tidslinje/OpplysningerTidslinje";
import { usePrøvingsdato } from "~/hooks/usePrøvingsdato";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  behandling: components["schemas"]["Behandling"];
}

export function RettPåDagpenger({ behandling }: IProps) {
  const { behandlingId, oppgaveId } = useTypeSafeParams();
  const { prøvingsdato } = usePrøvingsdato(behandling);
  const rettPåDagpengerOpplysning = behandling.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === "01990a09-0eab-7957-b88f-14484a50e194",
  );

  if (!rettPåDagpengerOpplysning) {
    return null;
  }

  return (
    <div className={"card flex flex-col gap-4 p-4"}>
      <OpplysningerTidslinje
        opplysninger={[rettPåDagpengerOpplysning]}
        tittel={rettPåDagpengerOpplysning.navn}
        pins={[{ label: "Prøvingsdato", date: prøvingsdato }]}
        medLenkeTilOpplysning={true}
        opplysningGrunnUrl={`/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/regelsett/2099145502/opplysning`}
      />

      {prøvingsdato && (
        <OpplysningerPåPrøvingsdato behandling={behandling} prøvingsdato={prøvingsdato} />
      )}

      {behandling.rettighetsperioder.map((rettighetsperiode, index) => (
        <OpplysningerForRettighetsperiode
          key={index}
          index={index}
          rettighetsperiode={rettighetsperiode}
          opplysninger={behandling.opplysninger}
        />
      ))}
    </div>
  );
}
