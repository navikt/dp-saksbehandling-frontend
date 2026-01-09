import { getEnv } from "~/utils/env.utils";
import { skalViseOpplysning } from "~/utils/opplysning.utils";
import { isDefined, isTekstVerdi } from "~/utils/type-guards";

import { components } from "../../openapi/behandling-typer";

export function hentInntektRedigeringUrl(
  behandling: components["schemas"]["Behandling"],
): string | undefined {
  const inntektOpplysning = behandling.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === "0194881f-9413-77ce-92ec-d29700f04244",
  );

  const inntektPeriode = inntektOpplysning?.perioder[0];

  if (inntektPeriode && inntektPeriode.verdi && isTekstVerdi(inntektPeriode.verdi)) {
    const inntektId = inntektPeriode.verdi.verdi;
    return `${getEnv("DP_INNTEKT_REDIGERING_FRONTEND_URL")}/inntektId/${inntektId}`;
  }

  return;
}

export function skalViseRegelsett(
  regelsett: components["schemas"]["Regelsett"],
  opplysninger: components["schemas"]["RedigerbareOpplysninger"][],
  visArvedeOpplysninger: boolean,
) {
  return (
    regelsett.opplysninger
      .map((opplysningTypeId) =>
        opplysninger.find((opplysning) => opplysning.opplysningTypeId === opplysningTypeId),
      )
      .filter(isDefined)
      .filter((opplysning) => skalViseOpplysning(opplysning, visArvedeOpplysninger)).length > 0
  );
}
