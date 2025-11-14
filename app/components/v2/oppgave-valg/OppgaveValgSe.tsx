import { EyeWithPupilIcon } from "@navikt/aksel-icons";
import { ButtonProps } from "@navikt/ds-react";

import { LoadingLink } from "~/components/loading-link/LoadingLink";

import { components } from "../../../../openapi/saksbehandling-typer";

interface IProps {
  oppgaveId: string;
  behandlingId: string;
  behandlingType: components["schemas"]["BehandlingType"];
  buttonSize?: ButtonProps["size"];
  buttonVariant?: ButtonProps["variant"];
}
export function OppgaveValgSe({
  oppgaveId,
  behandlingId,
  behandlingType,
  buttonVariant,
  buttonSize,
}: IProps) {
  return (
    <LoadingLink
      to={`${behandlingType === "RETT_TIL_DAGPENGER" ? `/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/behandle` : `/oppgave/${oppgaveId}/klage/${behandlingId}`}`}
      asButtonVariant={buttonVariant ? buttonVariant : "tertiary-neutral"}
      buttonSize={buttonSize}
      className={"aksel--font-regular aksel--full-bredde"}
      icon={<EyeWithPupilIcon aria-hidden />}
    >
      Se oppgave
    </LoadingLink>
  );
}
