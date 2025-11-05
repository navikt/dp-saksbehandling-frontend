import { Button } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useLocation } from "react-router";

import { hentValideringForRekjørBehandling } from "~/utils/validering.util";

import { components } from "../../../../openapi/saksbehandling-typer";

interface IProps {
  listeOppgave: components["schemas"]["OppgaveOversikt"];
}

export function ListeOppgaveValgRekjørBehandling({ listeOppgave }: IProps) {
  const { pathname } = useLocation();
  const rekjørBehandlingForm = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringForRekjørBehandling(),
    defaultValues: {
      _action: "rekjor-behandling",
      behandlingId: listeOppgave.behandlingId,
      ident: listeOppgave.personIdent,
    },
  });

  if (listeOppgave.behandlingType === "RETT_TIL_DAGPENGER") {
    return (
      <Button
        size="xsmall"
        variant="tertiary-neutral"
        loading={rekjørBehandlingForm.formState.isSubmitting}
        onClick={() => rekjørBehandlingForm.submit()}
      >
        Kjør behandling på nytt
      </Button>
    );
  }

  return null;
}
