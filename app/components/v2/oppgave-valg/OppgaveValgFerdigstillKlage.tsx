import { GavelSoundBlockIcon } from "@navikt/aksel-icons";
import { Button, ButtonProps } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useLocation } from "react-router";

import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { hentValideringForFerdigstillKlage } from "~/utils/validering.util";

import { components } from "../../../../openapi/saksbehandling-typer";

interface IProps {
  oppgave: components["schemas"]["Oppgave"];
  buttonSize?: ButtonProps["size"];
  buttonVariant?: ButtonProps["variant"];
}

export function OppgaveValgFerdigstillKlage({ oppgave, buttonVariant, buttonSize }: IProps) {
  const { pathname } = useLocation();
  const { aktivtOppgaveSok } = useSaksbehandler();

  const ferdigstillKlageForm = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringForFerdigstillKlage(),
    defaultValues: {
      _action: "ferdigstill-klage",
      ident: oppgave.person.ident,
      behandlingId: oppgave.behandlingId,
      aktivtOppgaveSok,
    },
  });

  return (
    <div>
      <Button
        size={buttonSize ? buttonSize : "xsmall"}
        variant={buttonVariant ? buttonVariant : "tertiary-neutral"}
        onClick={() => ferdigstillKlageForm.submit()}
        loading={ferdigstillKlageForm.formState.isSubmitting}
        icon={<GavelSoundBlockIcon aria-hidden />}
        className={"aksel--font-regular aksel--full-bredde"}
      >
        Ferdigstill klage
      </Button>
    </div>
  );
}
