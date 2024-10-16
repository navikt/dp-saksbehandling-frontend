import { RemixLink } from "~/components/RemixLink";

interface IProps {
  oppgaveId: string;
}

export function OppgaveHandlingSendTilArena(props: IProps) {
  return (
    <RemixLink
      to={`/oppgave/${props.oppgaveId}/behandle/send-til-arena`}
      asButtonVariant="secondary"
      size="small"
    >
      Send til Arena
    </RemixLink>
  );
}
