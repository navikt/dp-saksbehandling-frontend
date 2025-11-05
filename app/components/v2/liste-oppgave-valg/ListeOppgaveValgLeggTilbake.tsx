import { Button } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useLocation } from "react-router";

import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { hentValideringForLeggTilbakeOppgave } from "~/utils/validering.util";

import { components } from "../../../../openapi/saksbehandling-typer";

interface IProps {
  listeOppgave: components["schemas"]["OppgaveOversikt"];
}

export function ListeOppgaveValgLeggTilbake({ listeOppgave }: IProps) {
  const { pathname } = useLocation();
  const { aktivtOppgaveSok } = useSaksbehandler();
  const leggTilbakeOppgaveForm = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringForLeggTilbakeOppgave(),
    defaultValues: {
      _action: "legg-tilbake-oppgave",
      oppgaveId: listeOppgave.oppgaveId,
      aktivtOppgaveSok,
    },
  });

  return (
    <Button
      variant="tertiary-neutral"
      size="xsmall"
      loading={leggTilbakeOppgaveForm.formState.isSubmitting}
      onClick={() => leggTilbakeOppgaveForm.submit()}
    >
      Legg oppgave tilbake i køen
    </Button>
  );
}
