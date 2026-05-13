import { OpplysningerForRettighetsperiode } from "~/components/opplysinger-for-rettighetsperiode/OpplysningerForRettighetsperiode";
import { OpplysningerPåPrøvingsdato } from "~/components/opplysninger-på-prøvingsdato/OpplysningerPåPrøvingsdato";
import { OpplysningerTidslinje } from "~/components/opplysninger-tidslinje/OpplysningerTidslinje";
import { useBehandling } from "~/hooks/useBehandling";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";

export function RettPåDagpenger() {
  const { behandlingId, oppgaveId } = useTypeSafeParams();
  const { behandling, sistePrøvingsdato } = useBehandling();
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
        pins={sistePrøvingsdato && [{ label: "Prøvingsdato", date: sistePrøvingsdato }]}
        medLenkeTilOpplysning={true}
        opplysningGrunnUrl={`/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/regelsett/MjA5OTE0NTUwMg==/opplysning`}
        visAllePerioder={true}
      />

      {sistePrøvingsdato && (
        <OpplysningerPåPrøvingsdato behandling={behandling} prøvingsdato={sistePrøvingsdato} />
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
