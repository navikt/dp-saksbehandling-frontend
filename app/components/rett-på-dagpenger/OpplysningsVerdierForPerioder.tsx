import { BodyShort } from "@navikt/ds-react";

import { formaterTilNorskDato } from "~/utils/dato.utils";
import { formaterOpplysningVerdiV2 } from "~/utils/opplysning.utils";

import { components } from "../../../openapi/behandling-typer";
import { VerdiMedTittel } from "../verdi-med-tittel/VerdiMedTittel";

export function OpplysningsVerdierForPerioder(props: {
  label: string;
  perioder: components["schemas"]["Opplysningsperiode"][];
}) {
  return (
    <div className="flex flex-col gap-1">
      <BodyShort size={"small"} weight={"semibold"}>
        {props.label}
      </BodyShort>

      <div className="flex flex-col gap-2 rounded-lg bg-white p-2">
        {props.perioder.map((periode, index) => (
          <VerdiMedTittel
            key={index}
            label={`Periode: ${
              periode.gyldigFraOgMed ? formaterTilNorskDato(periode.gyldigFraOgMed) : "--"
            } – ${periode.gyldigTilOgMed ? formaterTilNorskDato(periode.gyldigTilOgMed) : "--"}`}
            verdi={formaterOpplysningVerdiV2(periode.verdi)}
            visBorder={index !== props.perioder.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
