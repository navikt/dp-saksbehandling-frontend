import { GavelSoundBlockIcon } from "@navikt/aksel-icons";
import { Button, ButtonProps } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useLocation } from "react-router";

import { hentValideringForFerdigstillBehandlingKlage } from "~/utils/validering.util";

import { components } from "../../../openapi/saksbehandling-typer";

interface IProps {
  oppgave: components["schemas"]["Oppgave"];
  buttonSize?: ButtonProps["size"];
  buttonVariant?: ButtonProps["variant"];
  className?: string;
  readOnly?: boolean;
}

export function OppgaveValgFerdigstillBehandlingKlage({
  oppgave,
  buttonVariant,
  buttonSize,
  className,
  readOnly,
}: IProps) {
  const { pathname } = useLocation();

  const ferdigstillBehandlingKlageForm = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringForFerdigstillBehandlingKlage(),
    defaultValues: {
      _action: "ferdigstill-behandling-klage",
      behandlingId: oppgave.behandlingId,
    },
  });

  return (
    <div>
      <Button
        size={buttonSize ? buttonSize : "xsmall"}
        variant={buttonVariant ? buttonVariant : "tertiary-neutral"}
        onClick={() => ferdigstillBehandlingKlageForm.submit()}
        disabled={readOnly ? readOnly : false}
        loading={ferdigstillBehandlingKlageForm.formState.isSubmitting}
        icon={<GavelSoundBlockIcon aria-hidden />}
        className={className ? className : "aksel--font-regular aksel--full-bredde"}
      >
        Ferdigstill behandling
      </Button>
    </div>
  );
}
