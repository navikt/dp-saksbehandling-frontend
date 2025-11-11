import { EyeWithPupilIcon } from "@navikt/aksel-icons";

import { LoadingLink } from "~/components/loading-link/LoadingLink";

import { components } from "../../../../openapi/saksbehandling-typer";

interface IProps {
  oppgaveId: string;
  behandlingId: string;
  behandlingType: components["schemas"]["BehandlingType"];
}
export function OppgaveValgSe({ oppgaveId, behandlingId, behandlingType }: IProps) {
  return (
    <LoadingLink
      to={`${behandlingType === "RETT_TIL_DAGPENGER" ? `/v2/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/behandle` : `/oppgave/${oppgaveId}/klage/${behandlingId}`}`}
      asButtonVariant="tertiary-neutral"
      className={"aksel--font-regular aksel--full-bredde"}
      icon={<EyeWithPupilIcon aria-hidden />}
    >
      Se oppgave
    </LoadingLink>
  );
}
