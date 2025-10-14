import { BodyShort } from "@navikt/ds-react";

import { formaterOpplysningVerdiV2 } from "~/utils/opplysning.utils";

import { components } from "../../openapi/behandling-typer";

export function OpplysningVerdiPåPrøvingstidspunkt(props: {
  label: string;
  opplysninger: components["schemas"]["OpplysningsgruppeV2"][];
  opplysningTypeId: string;
  prøvingsdato?: string;
}) {
  const verdier = hentVerdierForOpplysning(
    props.opplysninger,
    props.opplysningTypeId,
    props.prøvingsdato,
  );
  if (!verdier) {
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

function hentVerdierForOpplysning(
  opplysninger: components["schemas"]["OpplysningsgruppeV2"][],
  opplysningTypeId: string,
  prøvingsdato?: string,
): components["schemas"]["Opplysningsverdi"][] | undefined {
  return opplysninger
    .find((opplysning) => opplysning.opplysningTypeId === opplysningTypeId)
    ?.perioder.filter((periode) =>
      erPrøvingsdatoInnenforPeriode(
        prøvingsdato ?? "",
        periode.gyldigFraOgMed,
        periode.gyldigTilOgMed,
      ),
    )
    .map((periode) => periode.verdi);
}
