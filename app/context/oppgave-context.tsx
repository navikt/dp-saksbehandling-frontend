import type { PropsWithChildren } from "react";
import { createContext } from "react";

import { ISaksbehandler } from "~/models/microsoft.server";

import {
  components,
  components as saksbehandlingComponent,
} from "../../openapi/saksbehandling-typer";

export interface IOppgaveContextType {
  oppgave: components["schemas"]["Oppgave"];
  gyldigeOppgaveValg: IGyldigeOppgaveHandlinger[];
  minOppgave: boolean;
  underKontroll: boolean;
  readonly: boolean;
}

export const OppgaveContext = createContext<IOppgaveContextType | undefined>(undefined);
export type IGyldigeOppgaveHandlinger =
  | "legg-tilbake"
  | "utsett"
  | "avbryt"
  | "rekjor-behandling"
  | "tildel-oppgave";

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
  const gyldigeOppgaveValg = hentGyldigeOppgaveValg(minOppgave, oppgave);
  return (
    <OppgaveContext.Provider
      value={{ oppgave, gyldigeOppgaveValg, minOppgave, underKontroll, readonly }}
    >
      {children}
    </OppgaveContext.Provider>
  );
}

function hentGyldigeOppgaveValg(
  minOppgave: boolean,
  oppgave: saksbehandlingComponent["schemas"]["Oppgave"],
): IGyldigeOppgaveHandlinger[] {
  const handlinger: IGyldigeOppgaveHandlinger[] = [];

  if (oppgave.tilstand === "AVBRUTT") {
    return handlinger;
  }

  if (oppgave.tilstand === "KLAR_TIL_BEHANDLING") {
    handlinger.push("tildel-oppgave");
    return handlinger;
  }

  if (!minOppgave) {
    handlinger.push("legg-tilbake");
    return handlinger;
  }

  switch (oppgave.tilstand) {
    case "UNDER_BEHANDLING":
      handlinger.push("rekjor-behandling", "legg-tilbake", "utsett", "avbryt");

      return handlinger;
    case "UNDER_KONTROLL":
      handlinger.push("legg-tilbake");

      return handlinger;
    default:
      return [];
  }
}
