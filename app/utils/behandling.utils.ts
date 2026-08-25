import { skalViseOpplysning } from "~/utils/opplysning.utils";
import { isDefined } from "~/utils/type-guards";

import { components } from "../../openapi/behandling-typer";

export function alleRegelsett(
  behandling: Pick<
    components["schemas"]["Behandling"],
    "vilkår" | "fastsettelser" | "saksbehandlingsregler"
  >,
): components["schemas"]["Regelsett"][] {
  return [
    ...behandling.vilkår,
    ...behandling.fastsettelser,
    ...(behandling.saksbehandlingsregler ?? []),
  ];
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
