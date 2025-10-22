import { formaterTilNorskDato } from "~/utils/dato.utils";
import { formaterTallMedTusenSeperator } from "~/utils/number.utils";

import { components } from "../../openapi/behandling-typer";

export function formaterOpplysningVerdi(opplysning: components["schemas"]["Opplysning"]): string {
  switch (opplysning.datatype) {
    case "penger":
      return `${formaterTallMedTusenSeperator(opplysning.verdi)} kr`;
    case "desimaltall":
      return formaterTallMedTusenSeperator(opplysning.verdi);
    case "dato":
      return formaterTilNorskDato(opplysning.verdi);
    case "boolsk":
      return opplysning.verdi === "true" ? "Ja" : "Nei";
    case "barn": {
      return (opplysning.verdien as components["schemas"]["Barneliste"])?.verdi.length.toString();
    }

    default:
      return opplysning.verdi;
  }
}

export function formaterOpplysningVerdiV2(
  opplysningsverdi: components["schemas"]["Opplysningsverdi"],
) {
  switch (opplysningsverdi.datatype) {
    case "tekst":
      return opplysningsverdi.verdi;
    case "inntekt":
      return `${opplysningsverdi.verdi} inntekt`;
    case "dato":
      return formaterTilNorskDato(opplysningsverdi.verdi);
    case "heltall":
      return formaterTallMedTusenSeperator(opplysningsverdi.verdi);
    case "desimaltall":
      return formaterTallMedTusenSeperator(opplysningsverdi.verdi);
    case "penger":
      return `${formaterTallMedTusenSeperator(opplysningsverdi.verdi)} kr`;
    case "ulid":
      return `${opplysningsverdi.verdi} ulid`;
    case "boolsk":
      return opplysningsverdi.verdi ? "Ja" : "Nei";
    case "periode":
      return `${formaterTilNorskDato(opplysningsverdi.fom)} - ${formaterTilNorskDato(opplysningsverdi.tom)}`;
    case "barn":
      return `${opplysningsverdi.verdi} barn`;
  }
}

export function konverterOpplysningVerdiTilSkjemaVerdi(
  verdi: components["schemas"]["Opplysningsverdi"],
): string {
  switch (verdi.datatype) {
    case "tekst":
      return verdi.verdi;
    case "inntekt":
      return verdi.verdi;
    case "dato":
      return formaterTilNorskDato(verdi.verdi);
    case "heltall":
      return verdi.verdi.toString();
    case "desimaltall":
      return verdi.verdi.toString();
    case "penger":
      return verdi.verdi.toString();
    case "ulid":
      return verdi.verdi;
    case "boolsk":
      return verdi.verdi ? "Ja" : "Nei";
    case "periode":
      return `${verdi.fom} - ${verdi.tom}`;
    case "barn":
      return JSON.stringify(verdi.verdi);
  }
}

// Rettighetsperiode har alltid en startdato,
// og kan ha en sluttdato eller vare til evig tid (null).
// Opplysningsperiode kan ha både start- og sluttdato.
// Hvis opplysningsperiodens start er null, betyr det at opplysningen gjelder fra tidenes morgen.
// Hvis opplysningsperiodens slutt er null, betyr det at opplysningen gjelder til evig tid.
export function erOpplysningsperiodeInnenforRettighetsperiode(
  rettighetsperiode: components["schemas"]["Rettighetsperiode"],
  opplysningsperiode: components["schemas"]["Opplysningsperiode"],
) {
  // Opplysningsperioden har start og slutt, rettighetsperiode har en slutt
  if (
    opplysningsperiode.gyldigFraOgMed &&
    opplysningsperiode.gyldigTilOgMed &&
    rettighetsperiode.tilOgMed
  ) {
    // Opplysningsperioden starter og stopper innenfor rettighetsperioden
    return (
      opplysningsperiode.gyldigFraOgMed >= rettighetsperiode.fraOgMed &&
      opplysningsperiode.gyldigTilOgMed <= rettighetsperiode.tilOgMed
    );
  }

  // Opplysningsperioden har start, men ingen slutt, rettighetsperiode har ingen slutt
  if (
    opplysningsperiode.gyldigFraOgMed &&
    !opplysningsperiode.gyldigTilOgMed &&
    !rettighetsperiode.tilOgMed
  ) {
    // Opplysningsperioden starter etter eller samtidig som rettighetsperiodens start
    return opplysningsperiode.gyldigFraOgMed >= rettighetsperiode.fraOgMed;
  }

  // Opplysningsperioden har start, men ingen slutt, rettighetsperiode har en slutt
  if (
    opplysningsperiode.gyldigFraOgMed &&
    !opplysningsperiode.gyldigTilOgMed &&
    rettighetsperiode.tilOgMed
  ) {
    // Opplysningsperioden starter etter eller samtidig som rettighetsperiodens start
    return opplysningsperiode.gyldigFraOgMed >= rettighetsperiode.fraOgMed;
  }
  // Opplysningsperioden har start, men ingen slutt, rettighetsperiode har ingen slutt
  if (
    !rettighetsperiode.tilOgMed &&
    opplysningsperiode.gyldigFraOgMed &&
    !opplysningsperiode.gyldigTilOgMed
  ) {
    // Opplysningsperioden starter etter eller samtidig som rettighetsperiodens start
    return opplysningsperiode.gyldigFraOgMed >= rettighetsperiode.fraOgMed;
  }

  // Opplysningsperioden har ikke start, men har slutt, rettighetsperiode har en slutt
  if (
    !opplysningsperiode.gyldigFraOgMed &&
    opplysningsperiode.gyldigTilOgMed &&
    rettighetsperiode.tilOgMed
  ) {
    // Opplysningsperioden må slutte før eller samtidig som rettighetsperioden
    return opplysningsperiode.gyldigTilOgMed <= rettighetsperiode.tilOgMed;
  }

  // Opplysningsperioden har ikke start, men har slutt, rettighetsperiode har ingen slutt
  if (
    !rettighetsperiode.tilOgMed &&
    !opplysningsperiode.gyldigFraOgMed &&
    opplysningsperiode.gyldigTilOgMed
  ) {
    // Opplysningsperioden må stoppe etter eller samtidig som rettighetsperiodens start
    return opplysningsperiode.gyldigTilOgMed >= rettighetsperiode.fraOgMed;
  }

  // Opplysningsperioden har start og slutt, rettighetsperiode har ikke en slutt
  if (
    !rettighetsperiode.tilOgMed &&
    opplysningsperiode.gyldigFraOgMed &&
    opplysningsperiode.gyldigTilOgMed
  ) {
    // Opplysningsperioden må starte etter eller samtidig som rettighetsperiodens start
    return opplysningsperiode.gyldigFraOgMed >= rettighetsperiode.fraOgMed;
  }

  // Opplysningen gjelder fra tidenes morgen og varer til evig tid
  return true;
}

export function hentPerioderForOpplysning(
  opplysninger: components["schemas"]["OpplysningsgruppeV2"][],
  opplysningTypeId: string,
  rettighetsperiode: components["schemas"]["Rettighetsperiode"],
): components["schemas"]["Opplysningsperiode"][] {
  return (
    opplysninger
      .find((opplysning) => opplysning.opplysningTypeId === opplysningTypeId)
      ?.perioder.filter((periode) =>
        erOpplysningsperiodeInnenforRettighetsperiode(rettighetsperiode, periode),
      ) || []
  );
}

function erPrøvingsdatoInnenforPeriode(
  prøvingsdato: string,
  fraOgMed?: string | null,
  tilOgMed?: string | null,
) {
  if (fraOgMed && tilOgMed) {
    return prøvingsdato >= fraOgMed && prøvingsdato <= tilOgMed;
  }
  if (fraOgMed && !tilOgMed) {
    return prøvingsdato >= fraOgMed;
  }
  if (!fraOgMed && tilOgMed) {
    return prøvingsdato <= tilOgMed;
  }
  return true;
}

export function hentOpplysningsperioderForPrøvingsdato(
  opplysninger: components["schemas"]["OpplysningsgruppeV2"][],
  opplysningTypeId: string,
  prøvingsdato: string,
): components["schemas"]["Opplysningsperiode"][] {
  return (
    opplysninger
      .find((opplysning) => opplysning.opplysningTypeId === opplysningTypeId)
      ?.perioder.filter((periode) =>
        erPrøvingsdatoInnenforPeriode(prøvingsdato, periode.gyldigFraOgMed, periode.gyldigTilOgMed),
      ) || []
  );
}
