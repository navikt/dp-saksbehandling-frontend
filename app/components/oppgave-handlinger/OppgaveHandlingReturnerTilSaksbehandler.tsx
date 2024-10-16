import { RemixLink } from "~/components/RemixLink";

interface IProps {
  oppgaveId: string;
}

export function OppgaveHandlingReturnerTilSaksbehandler(props: IProps) {
  return (
    <RemixLink
      to={`/oppgave/${props.oppgaveId}/behandle/returner-til-saksbehandler`}
      asButtonVariant="secondary"
      size="small"
    >
      Returner til saksbehandler
    </RemixLink>
  );
}
