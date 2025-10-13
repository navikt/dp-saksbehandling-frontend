import { BodyShort } from "@navikt/ds-react";

import { formaterOpplysningVerdiV2 } from "~/components/vilkår-tidslinje/VilkårTidslinje";

import { components } from "../../openapi/behandling-typer";

export function OpplysningVerdiForPeriode(props: {
  label: string;
  opplysninger: components["schemas"]["OpplysningsgruppeV2"][];
  opplysningTypeId: string;
  rettighetsperiode: components["schemas"]["Rettighetsperiode"];
}) {
  const verdier = hentVerdierForOpplysning(
    props.opplysninger,
    props.opplysningTypeId,
    props.rettighetsperiode,
  );
  if (!verdier || verdier.length === 0) {
    return;
  }

  return (
    <div className="flex flex-col gap-1">
      <BodyShort size={"small"} weight={"semibold"}>
        {props.label}
      </BodyShort>
      <BodyShort size={"small"}>
        {verdier?.map((verdi) => formaterOpplysningVerdiV2(verdi)).join(", ")}
      </BodyShort>
    </div>
  );
}

// Rettighetsperiode har alltid en startdato,
// og kan ha en sluttdato eller vare til evig tid (null).
// Opplysningsperiode kan ha både start- og sluttdato.
// Hvis opplysningsperiodens start er null, betyr det at opplysningen gjelder fra tidenes morgen.
// Hvis opplysningsperiodens slutt er null, betyr det at opplysningen gjelder til evig tid.
function erOpplysningsperiodeInnenforRettighetsperiode(
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

function hentVerdierForOpplysning(
  opplysninger: components["schemas"]["OpplysningsgruppeV2"][],
  opplysningTypeId: string,
  rettighetsperiode: components["schemas"]["Rettighetsperiode"],
): components["schemas"]["Opplysningsverdi"][] | undefined {
  return opplysninger
    .find((opplysning) => opplysning.opplysningTypeId === opplysningTypeId)
    ?.perioder.filter((periode) =>
      erOpplysningsperiodeInnenforRettighetsperiode(rettighetsperiode, periode),
    )
    .map((periode) => periode.verdi);
}
