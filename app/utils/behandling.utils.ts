import { getEnv } from "~/utils/env.utils";
import { isBoolskVerdi, isDatoVerdi, isHeltallVerdi, isTekstVerdi } from "~/utils/type-guards";

import { components } from "../../openapi/behandling-typer";

export interface KnaddBehandling {
  inntektsRedigeringUrl?: string;
  prøvingsdato?: Date;
  harLøpendeRett?: boolean;
  dagerSomGjenstår?: number;
  sistUtbetalt?: string;
}

export function tilKnaddBehandling(
  behandling: components["schemas"]["Behandling"],
): KnaddBehandling {
  return {
    inntektsRedigeringUrl: hentInntektRedigeringUrl(behandling),
    prøvingsdato: hentPrøvingsdato(behandling),
    harLøpendeRett: hentHarLøpendeRett(behandling),
    dagerSomGjenstår: hentDagerSomGjenstår(behandling),
    sistUtbetalt: hentSistUtbetalt(behandling),
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

export function hentHarLøpendeRett(
  behandling: components["schemas"]["Behandling"],
): boolean | undefined {
  const løpendeRettOpplysning = behandling.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === "01990a09-0eab-7957-b88f-14484a50e194",
  );
  const løpendeRettOpplysningPeriode =
    løpendeRettOpplysning?.perioder[løpendeRettOpplysning?.perioder.length - 1];
  if (løpendeRettOpplysningPeriode && isBoolskVerdi(løpendeRettOpplysningPeriode.verdi)) {
    return løpendeRettOpplysningPeriode.verdi.verdi;
  }

  return;
}

export function hentDagerSomGjenstår(
  behandling: components["schemas"]["Behandling"],
): number | undefined {
  const dagerSomGjenstårOpplysning = behandling.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === "01992956-e349-76b1-8f68-c9d481df3a32",
  );
  const dagerSomGjenstårOpplysningPeriode =
    dagerSomGjenstårOpplysning?.perioder[dagerSomGjenstårOpplysning?.perioder.length - 1];
  if (
    dagerSomGjenstårOpplysningPeriode &&
    isHeltallVerdi(dagerSomGjenstårOpplysningPeriode.verdi)
  ) {
    return dagerSomGjenstårOpplysningPeriode.verdi.verdi;
  }

  return;
}

export function hentSistUtbetalt(
  behandling: components["schemas"]["Behandling"],
): string | undefined {
  const pengerSomSkalUtbetalesOpplysning = behandling.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === "01957069-d7d5-7f7c-b359-c00686fbf1f7",
  );
  const pengerSomSkalUtbetalesOpplysningPeriode =
    pengerSomSkalUtbetalesOpplysning?.perioder[
      pengerSomSkalUtbetalesOpplysning?.perioder.length - 1
    ];
  if (pengerSomSkalUtbetalesOpplysningPeriode) {
    return pengerSomSkalUtbetalesOpplysning.perioder[0].gyldigFraOgMed;
  }

  return;
}
