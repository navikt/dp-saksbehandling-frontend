import { isDatoVerdi } from "~/utils/type-guards";

import { components } from "../../openapi/behandling-typer";

export function usePrøvingsdato(behandling: components["schemas"]["BehandlingsresultatV2"]) {
  const prøvingsdatoOpplysning = behandling.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === "0194881f-91d1-7df2-ba1d-4533f37fcc76",
  );

  const prøvingsdatoOpplysningPeriode =
    prøvingsdatoOpplysning?.perioder[prøvingsdatoOpplysning?.perioder.length - 1];

  if (!prøvingsdatoOpplysningPeriode || !isDatoVerdi(prøvingsdatoOpplysningPeriode.verdi)) {
    throw new Error("Finner ikke prøvingsdato");
  }

  return {
    prøvingsdatoOpplysning,
    prøvingsdato: new Date(prøvingsdatoOpplysningPeriode.verdi.verdi),
  };
}
