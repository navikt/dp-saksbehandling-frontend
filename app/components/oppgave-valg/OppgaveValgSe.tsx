import { EyeWithPupilIcon } from "@navikt/aksel-icons";
import { ButtonProps } from "@navikt/ds-react";

import { LoadingLink } from "~/components/loading-link/LoadingLink";

import { components } from "../../../openapi/saksbehandling-typer";

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
  function hentBehandlingPath(behandlingType: components["schemas"]["BehandlingType"]) {
    switch (behandlingType) {
      case "RETT_TIL_DAGPENGER":
        return `/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/behandle`;
      case "KLAGE":
        return `/oppgave/${oppgaveId}/klage/${behandlingId}`;
      case "INNSENDING":
        return `/oppgave/${oppgaveId}/innsending/${behandlingId}`;
    }
  }

  return (
    <LoadingLink
      to={hentBehandlingPath(behandlingType)}
      asButtonVariant={buttonVariant ? buttonVariant : "tertiary-neutral"}
      buttonSize={buttonSize}
      className={"aksel--font-regular aksel--full-bredde"}
      icon={<EyeWithPupilIcon aria-hidden />}
    >
      Se oppgave
    </LoadingLink>
  );
}
