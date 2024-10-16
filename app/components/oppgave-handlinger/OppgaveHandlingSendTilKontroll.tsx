import React from "react";
import { RemixLink } from "~/components/RemixLink";

interface IProps {
  oppgaveId: string;
}

export function OppgaveHandlingSendTilKontroll(props: IProps) {
  return (
    <RemixLink
      to={`/oppgave/${props.oppgaveId}/behandle/send-til-kontroll`}
      asButtonVariant="primary"
      size="small"
    >
      Send til kontroll
    </RemixLink>
  );
}
