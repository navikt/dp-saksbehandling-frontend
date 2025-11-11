import { ArrowUndoIcon } from "@navikt/aksel-icons";
import { Button } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useLocation } from "react-router";

import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { hentValideringForLeggTilbakeOppgave } from "~/utils/validering.util";

import { components } from "../../../../openapi/saksbehandling-typer";

interface IProps {
  oppgave: components["schemas"]["Oppgave"];
}

export function OppgaveMenyLeggTilbake({ oppgave }: IProps) {
  const { pathname } = useLocation();
  const { aktivtOppgaveSok } = useSaksbehandler();

  const leggTilbakeForm = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringForLeggTilbakeOppgave(),
    defaultValues: {
      _action: "legg-tilbake-oppgave",
      oppgaveId: oppgave.oppgaveId,
      aktivtOppgaveSok,
    },
  });

  return (
    <Button
      size="xsmall"
      variant="tertiary-neutral"
      onClick={() => leggTilbakeForm.submit()}
      loading={leggTilbakeForm.formState.isSubmitting}
      icon={<ArrowUndoIcon aria-hidden />}
      className={"aksel--font-regular aksel--full-bredde"}
    >
      Legg tilbake
    </Button>
  );
}
