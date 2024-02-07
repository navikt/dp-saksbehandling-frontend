import { type IOppgaveSteg } from "~/models/oppgave.server";
import { OppgaveStegGenerell } from "./OppgaveStegGenerell";

import { OppgaveStegTaptArbeidstid } from "~/views/oppgave-steg-tapt-arbeidstid/OppgaveStegTaptArbeidstid";

export interface IOppgaveStegProps {
  steg: IOppgaveSteg;
  readonly?: boolean;
}

export function OppgaveSteg(props: IOppgaveStegProps) {
  const { steg } = props;

  switch (steg.stegNavn) {
    case "Tapt arbeidstid":
      return <OppgaveStegTaptArbeidstid {...props} />;

    default:
      return <OppgaveStegGenerell {...props} />;
  }
}