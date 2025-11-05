import { Button } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useLocation } from "react-router";

import { hentValideringForTildelOppgave } from "~/utils/validering.util";

import { components } from "../../../../openapi/saksbehandling-typer";

interface IProps {
  listeOppgave: components["schemas"]["OppgaveOversikt"];
  label: string;
}

export function ListeOppgaveValgBehandle({ listeOppgave, label }: IProps) {
  const { pathname } = useLocation();
  const tildelOppgaveForm = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringForTildelOppgave(),
    defaultValues: {
      _action: "v2-tildel-oppgave",
      oppgaveId: listeOppgave.oppgaveId,
      behandlingId: listeOppgave.behandlingId,
    },
  });

  return (
    <Button
      variant="tertiary-neutral"
      size="xsmall"
      loading={tildelOppgaveForm.formState.isSubmitting}
      onClick={() => tildelOppgaveForm.submit()}
    >
      {label}
    </Button>
  );
}
