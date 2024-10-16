import { RemixLink } from "~/components/RemixLink";

interface IProps {
  oppgaveId: string;
}

export function OppgaveHandlingFattVedtak(props: IProps) {
  return (
    <RemixLink
      to={`/oppgave/${props.oppgaveId}/behandle/fatt-vedtak`}
      asButtonVariant="primary"
      size="small"
    >
      Fatt vedtak
    </RemixLink>
  );
}
