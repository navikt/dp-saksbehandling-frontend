import { type ISteg } from "~/models/oppgave.server";
import { OppgaveStegGenerell } from "./OppgaveStegGenerell";

import { OppgaveStegTaptArbeidstid } from "~/components/oppgave-steg-tapt-arbeidstid/OppgaveStegTaptArbeidstid";
import { OppgaveStegAlder } from "~/components/oppgave-steg-alder/OppgaveStegAlder";

export interface IOppgaveStegProps {
  steg: ISteg;
  readonly?: boolean;
}

export function OppgaveSteg(props: IOppgaveStegProps) {
  const { steg } = props;

  switch (steg.beskrivendeId) {
    case "Tapt arbeidstid":
      return <OppgaveStegTaptArbeidstid />;

    case "Ikke over 67 år":
      return <OppgaveStegAlder />;

    default:
      return <OppgaveStegGenerell {...props} />;
  }
}
