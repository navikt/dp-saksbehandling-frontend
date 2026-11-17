import { OpplysningerTidslinje } from "~/components/opplysninger-tidslinje/OpplysningerTidslinje";
import { useBehandling } from "~/hooks/useBehandling";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { alleRegelsett, hentOpplysningUrl } from "~/utils/behandling.utils";

const opplysningsIDer = [
  "0194881f-943f-78d9-b874-00a4944c54ef" /** Gjenstående egenandel */,
  "0194881f-943d-77a7-969c-147999f15459" /** Antall stønadsuker */,
  "01992956-e349-76b1-8f68-c9d481df3a32" /** Antall dager som gjenstår */,
  "0194881f-9435-72a8-b1ce-9575cbc2a76a" /** Fastsatt arbeidstid per uke før tap */,
  "0194881f-9428-74d5-b160-f63a4c61a23c" /** Antall barn som gir rett til barnetillegg */,
  "0194881f-9428-74d5-b160-f63a4c61a24f" /** Dagsats med barnetillegg etter samordning og 90% regel */,
  "76d9c243-228b-4359-9550-1ebbb7ba5cb5" /** Antall dager med sanksjon som gjenstår */,
  "019df7d6-5159-7290-b8a1-9fc9edc58579" /** Antall bortfallsdager som gjenstår */,
];

export function Behandlingsoversikt() {
  const { behandlingId, oppgaveId } = useTypeSafeParams();
  const { behandling, sistePrøvingsdato } = useBehandling();
  const førsteFraOgMedDato = behandling.opplysninger
    .find((opplysning) => opplysning.opplysningTypeId === "01994cfd-9a27-762e-81fa-61f550467c95")
    ?.perioder.at(-1)?.gyldigFraOgMed;
  const opplysninger = opplysningsIDer
    .map((id) => behandling.opplysninger.find((opplysning) => opplysning.opplysningTypeId === id))
    .filter((opplysning) => opplysning !== undefined);

  if (opplysninger.length === 0) {
    return null;
  }

  return (
    <div className={"card flex flex-col gap-4 p-4"}>
      <OpplysningerTidslinje
        opplysninger={opplysninger}
        tittel={"Opplysninger"}
        pins={sistePrøvingsdato && [{ label: "Prøvingsdato", date: sistePrøvingsdato }]}
        medLenkeTilOpplysning={true}
        opplysningUrlBuilder={(opplysningTypeId) => {
          const regelsett = alleRegelsett(behandling).find((regelsett) =>
            regelsett.opplysninger.includes(opplysningTypeId),
          );

          return hentOpplysningUrl({
            oppgaveId,
            behandlingId,
            regelsett,
            opplysningTypeId,
          });
        }}
        visAllePerioder={true}
        førsteFraOgMedDato={førsteFraOgMedDato}
      />
    </div>
  );
}
