import { BodyShort } from "@navikt/ds-react";
import { components } from "openapi/behandling-typer";

import { formaterTilNorskDato } from "~/utils/dato.utils";
import { formaterOpplysningVerdiV2 } from "~/utils/opplysning.utils";

export function OpplysningsVerdierForPerioder(props: {
  label: string;
  perioder: components["schemas"]["Opplysningsperiode"][];
}) {
  return (
    <div className="flex flex-col gap-1">
      <BodyShort size={"small"} weight={"semibold"}>
        {props.label}
      </BodyShort>
      <div className="flex flex-col gap-2 rounded-lg bg-(--ax-bg-accent-moderate) p-2">
        {props.perioder.map((periode, index) => (
          <>
            <BodyShort size={"small"} weight={"semibold"}>
              Periode:{" "}
              {periode.gyldigFraOgMed ? formaterTilNorskDato(periode.gyldigFraOgMed) : "--"} –{" "}
              {periode.gyldigTilOgMed ? formaterTilNorskDato(periode.gyldigTilOgMed) : "--"}
            </BodyShort>
            <BodyShort size={"small"}>{formaterOpplysningVerdiV2(periode.verdi)}</BodyShort>
            {index < props.perioder.length - 1 && (
              <hr className="border-t border-(--ax-border-subtle)" />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
