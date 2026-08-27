import { Button, ButtonProps } from "@navikt/ds-react";
import { ReactNode } from "react";

import { useTildelOppgaveMutation } from "~/api/oppgave-hooks";
import type { IAlert } from "~/context/alert-context";

import { components } from "../../../openapi/saksbehandling-typer";

interface IProps {
  listeOppgave: components["schemas"]["OppgaveOversikt"];
  label: string;
  icon: ReactNode;
  buttonSize?: ButtonProps["size"];
  buttonVariant?: ButtonProps["variant"];
  forbiddenAlert?: IAlert;
}

export function OppgaveValgBehandle({
  listeOppgave,
  label,
  icon,
  buttonVariant,
  buttonSize,
  forbiddenAlert,
}: IProps) {
  const { mutate, isPending } = useTildelOppgaveMutation(forbiddenAlert);

  return (
    <div>
      <Button
        size={buttonSize ? buttonSize : "xsmall"}
        variant={buttonVariant ? buttonVariant : "tertiary-neutral"}
        loading={isPending}
        onClick={() =>
          mutate({
            oppgaveId: listeOppgave.oppgaveId,
            behandlingId: listeOppgave.behandlingId,
          })
        }
        className={"aksel--font-regular aksel--full-bredde"}
        icon={icon}
      >
        {label}
      </Button>
    </div>
  );
}
