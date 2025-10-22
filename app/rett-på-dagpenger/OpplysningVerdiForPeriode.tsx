import { BodyShort } from "@navikt/ds-react";

import { formaterOpplysningVerdiV2 } from "~/utils/opplysning.utils";

import { components } from "../../openapi/behandling-typer";

export function OpplysningVerdiForPeriode(props: {
  label: string;
  periode: components["schemas"]["Opplysningsperiode"];
}) {
  return (
    <div className="flex flex-col gap-1">
      <BodyShort size={"small"} weight={"semibold"}>
        {props.label}
      </BodyShort>
      <BodyShort size={"small"}>{formaterOpplysningVerdiV2(props.periode.verdi)}</BodyShort>
    </div>
  );
}
