import { type IOppgaveSteg } from "~/models/oppgave.server";
import { OppgaveStegGenerell } from "./OppgaveStegGenerell";

import { OppgaveStegTaptArbeidstid } from "~/components/oppgave-steg-tapt-arbeidstid/OppgaveStegTaptArbeidstid";
import { OppgaveStegAlder } from "~/components/oppgave-steg-alder/OppgaveStegAlder";

export interface IOppgaveStegProps {
  steg: IOppgaveSteg;
  readonly?: boolean;
}

export function OppgaveSteg(props: IOppgaveStegProps) {
  const { steg } = props;

  switch (steg.stegNavn) {
    case "Tapt arbeidstid":
      return <OppgaveStegTaptArbeidstid />;

    case "Ikke over 67 år":
      return <OppgaveStegAlder />;

    default:
      return <OppgaveStegGenerell {...props} />;
  }
}
