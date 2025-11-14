import { add, sub } from "date-fns";
import { components } from "openapi/behandling-typer";
import { useState } from "react";

export type AntallUkerITidslinje = "2" | "4" | "8" | "16" | "52";

interface TidslinjeStartSlutt {
  start: Date;
  end: Date;
}

export interface TidslinjeNavigeringState {
  antallUkerITidslinje: AntallUkerITidslinje;
  setAntallUkerITidslinje: (state: AntallUkerITidslinje) => void;
  tidslinjeStartSlutt: TidslinjeStartSlutt;
  setTidslinjeStartSlutt: (state: TidslinjeStartSlutt) => void;
}

export function useTidslinjeNavigeringState(
  opplysninger: components["schemas"]["OpplysningsgruppeV2"][],
  eksternState?: TidslinjeNavigeringState,
  eksternFørsteFraOgMedDato?: string,
): TidslinjeNavigeringState {
  if (eksternState) {
    return eksternState;
  }
  const førsteFraOgMedDato = eksternFørsteFraOgMedDato
    ? eksternFørsteFraOgMedDato
    : opplysninger
        .flatMap((opplysning) => opplysning.perioder)
        .map((opplysning) => opplysning.gyldigFraOgMed)
        .filter((dato) => dato !== null && dato !== undefined)
        .sort()
        .at(0);

  const [antallUkerITidslinje, setAntallUkerITidslinje] = useState<AntallUkerITidslinje>("2");
  const [tidslinjeStartSlutt, setTidslinjeStartSlutt] = useState<TidslinjeStartSlutt>({
    start: førsteFraOgMedDato ? sub(new Date(førsteFraOgMedDato), { days: 1 }) : new Date(),
    end: add(new Date(førsteFraOgMedDato ?? new Date()), { weeks: parseInt(antallUkerITidslinje) }),
  });

  return {
    antallUkerITidslinje,
    setAntallUkerITidslinje,
    tidslinjeStartSlutt,
    setTidslinjeStartSlutt,
  };
}
