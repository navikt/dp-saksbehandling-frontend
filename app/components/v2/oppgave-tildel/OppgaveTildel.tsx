import { Button } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useLocation } from "react-router";

import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { hentValideringForTildelOppgave } from "~/utils/validering.util";

export function OppgaveTildel() {
  const { pathname } = useLocation();
  const { oppgaveId } = useTypeSafeParams();

  const tildelOppgaveForm = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringForTildelOppgave(),
    defaultValues: {
      _action: "v2-tildel-oppgave",
      oppgaveId: oppgaveId,
    },
  });

  return (
    <Button
      variant="secondary"
      size="small"
      loading={tildelOppgaveForm.formState.isSubmitting}
      onClick={() => tildelOppgaveForm.submit()}
    >
      Tildel oppgave
    </Button>
  );
}
