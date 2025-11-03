import type { PropsWithChildren } from "react";
import { createContext } from "react";

import { ISaksbehandler } from "~/models/microsoft.server";

import { components } from "../../openapi/saksbehandling-typer";

export interface IOppgaveContextType {
  oppgave: components["schemas"]["Oppgave"];
  minOppgave: boolean;
  underKontroll: boolean;
  readonly: boolean;
}

export const OppgaveContext = createContext<IOppgaveContextType | undefined>(undefined);

export function OppgaveProvider({
  children,
  oppgave,
  saksbehandler,
}: PropsWithChildren<{
  oppgave: components["schemas"]["Oppgave"];
  saksbehandler: ISaksbehandler;
}>) {
  const minOppgave =
    (oppgave.saksbehandler?.ident === saksbehandler.onPremisesSamAccountName &&
      oppgave.tilstand === "UNDER_BEHANDLING") ||
    (oppgave.beslutter?.ident === saksbehandler.onPremisesSamAccountName &&
      oppgave.tilstand === "UNDER_KONTROLL");

  const underKontroll = oppgave.tilstand === "UNDER_KONTROLL";
  const readonly = !minOppgave || underKontroll || oppgave.tilstand !== "UNDER_BEHANDLING";
  // const readonly = true;
  return (
    <OppgaveContext.Provider value={{ oppgave, minOppgave, underKontroll, readonly }}>
      {children}
    </OppgaveContext.Provider>
  );
}
