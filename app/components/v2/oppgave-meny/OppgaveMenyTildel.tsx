import { PersonIcon } from "@navikt/aksel-icons";
import { Button } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useLocation } from "react-router";

import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { hentValideringForTildelOppgave } from "~/utils/validering.util";

export function OppgaveMenyTildel() {
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
      size="xsmall"
      variant="tertiary-neutral"
      icon={<PersonIcon aria-hidden />}
      loading={tildelOppgaveForm.formState.isSubmitting}
      onClick={() => tildelOppgaveForm.submit()}
      className={"aksel--font-regular aksel--full-bredde"}
    >
      Ta oppgave
    </Button>
  );
}
