import { useContext } from "react";

import { OppgaveContext } from "~/context/oppgave-context";

export function useOppgave() {
  const context = useContext(OppgaveContext);
  if (!context) {
    throw new Error("useOppgave must be used within an OppgaveProvider");
  }
  return context;
}
