import { Button, ButtonProps } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useLocation } from "react-router";

import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { hentValideringForFlyttBehandlingTilNySak } from "~/utils/validering.util";

import { components } from "../../../openapi/saksbehandling-typer";

interface IProps {
  oppgave: components["schemas"]["Oppgave"];
  buttonSize?: ButtonProps["size"];
  buttonVariant?: ButtonProps["variant"];
  className?: string;
  readOnly?: boolean;
  label?: string;
}

export function OppgaveValgFlyttBehandlingTilNySak({
  oppgave,
  buttonVariant,
  buttonSize,
  className,
  readOnly,
}: IProps) {
  const { pathname } = useLocation();
  const { aktivtOppgaveSok } = useSaksbehandler();

  const flyttBehandlingTilNySakForm = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringForFlyttBehandlingTilNySak(),
    defaultValues: {
      _action: "flytt-behandling-til-ny-sak",
      personIdent: oppgave.person.ident,
      behandlingId: oppgave.behandlingId,
      aktivtOppgaveSok,
    },
  });

  return (
    <div>
      <Button
        size={buttonSize ? buttonSize : "xsmall"}
        variant={buttonVariant ? buttonVariant : "tertiary-neutral"}
        onClick={() => flyttBehandlingTilNySakForm.submit()}
        disabled={readOnly ? readOnly : false}
        loading={flyttBehandlingTilNySakForm.formState.isSubmitting}
        className={className ? className : "aksel--font-regular aksel--full-bredde"}
      >
        Flytt behandling til ny sak
      </Button>
    </div>
  );
}
