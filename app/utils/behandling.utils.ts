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

export function hentOpplysningUrl({
  oppgaveId,
  behandlingId,
  regelsett,
  opplysningTypeId,
}: {
  oppgaveId: string;
  behandlingId: string;
  regelsett?: Pick<components["schemas"]["Regelsett"], "id" | "type">;
  opplysningTypeId?: string;
}) {
  const baseUrl = `/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}`;

  if (
    !regelsett ||
    !opplysningTypeId ||
    opplysningTypeId === "01990a09-0eab-7957-b88f-14484a50e194"
  ) {
    const regelsettUrl = `${baseUrl}/regelsett/${regelsett?.id ?? "MjA5OTE0NTUwMg=="}`;
    return opplysningTypeId ? `${regelsettUrl}/opplysning/${opplysningTypeId}` : regelsettUrl;
  }

  const fane = {
    Vilkår: "vilkar",
    Fastsettelse: "fastsettelser",
    Prosess: "prosessregler",
  }[regelsett.type];

  return `${baseUrl}/${fane}?opplysning=${opplysningTypeId}`;
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
