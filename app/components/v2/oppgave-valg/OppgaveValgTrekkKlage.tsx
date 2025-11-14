import { XMarkIcon } from "@navikt/aksel-icons";
import { Button, ButtonProps } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useLocation } from "react-router";

import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { hentValideringForTrekkKlage } from "~/utils/validering.util";

import { components } from "../../../../openapi/saksbehandling-typer";

interface IProps {
  oppgave: components["schemas"]["Oppgave"];
  buttonSize?: ButtonProps["size"];
  buttonVariant?: ButtonProps["variant"];
}

export function OppgaveValgTrekkKlage({ oppgave, buttonSize, buttonVariant }: IProps) {
  const { pathname } = useLocation();
  const { aktivtOppgaveSok } = useSaksbehandler();

  const trekkKlageForm = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringForTrekkKlage(),
    defaultValues: {
      _action: "trekk-klage",
      ident: oppgave.person.ident,
      behandlingId: oppgave.behandlingId,
      aktivtOppgaveSok,
    },
  });

  return (
    <Button
      size={buttonSize ? buttonSize : "xsmall"}
      variant={buttonVariant ? buttonVariant : "tertiary-neutral"}
      onClick={() => trekkKlageForm.submit()}
      loading={trekkKlageForm.formState.isSubmitting}
      icon={<XMarkIcon aria-hidden />}
      className={"aksel--font-regular aksel--full-bredde"}
    >
      Trekk klage
    </Button>
  );
}
