import { ArrowUndoIcon } from "@navikt/aksel-icons";
import { Button, ButtonProps } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useLocation } from "react-router";

import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { hentValideringForLeggTilbakeOppgave } from "~/utils/validering.util";

interface IProps {
  oppgaveId: string;
  buttonSize?: ButtonProps["size"];
  buttonVariant?: ButtonProps["variant"];
}

export function OppgaveValgLeggTilbake({ oppgaveId, buttonSize, buttonVariant }: IProps) {
  const { pathname } = useLocation();
  const { aktivtOppgaveSok } = useSaksbehandler();

  const leggTilbakeForm = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringForLeggTilbakeOppgave(),
    defaultValues: {
      _action: "legg-tilbake-oppgave",
      oppgaveId,
      aktivtOppgaveSok,
    },
  });

  return (
    <div>
      <Button
        size={buttonSize ? buttonSize : "xsmall"}
        variant={buttonVariant ? buttonVariant : "tertiary-neutral"}
        onClick={() => leggTilbakeForm.submit()}
        loading={leggTilbakeForm.formState.isSubmitting}
        icon={<ArrowUndoIcon aria-hidden />}
        className={"aksel--font-regular aksel--full-bredde"}
      >
        Legg tilbake
      </Button>
    </div>
  );
}
