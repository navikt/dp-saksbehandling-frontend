import { getEnv } from "~/utils/env.utils";
import { isDatoVerdi, isTekstVerdi } from "~/utils/type-guards";

import { components } from "../../openapi/behandling-typer";

export interface KnaddBehandling {
  inntektsRedigeringUrl?: string;
  prøvingsdato?: Date;
}

export function tilKnaddBehandling(
  behandling: components["schemas"]["Behandling"],
): KnaddBehandling {
  return {
    inntektsRedigeringUrl: hentInntektRedigeringUrl(behandling),
    prøvingsdato: hentPrøvingsdato(behandling),
  };
}

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

export function hentPrøvingsdato(
  behandling: components["schemas"]["Behandling"],
): Date | undefined {
  const prøvingsdatoOpplysning = behandling.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === "0194881f-91d1-7df2-ba1d-4533f37fcc76",
  );
  const prøvingsdatoOpplysningPeriode =
    prøvingsdatoOpplysning?.perioder[prøvingsdatoOpplysning?.perioder.length - 1];
  if (prøvingsdatoOpplysningPeriode && isDatoVerdi(prøvingsdatoOpplysningPeriode.verdi)) {
    return new Date(prøvingsdatoOpplysningPeriode.verdi.verdi);
  }

  return;
}
