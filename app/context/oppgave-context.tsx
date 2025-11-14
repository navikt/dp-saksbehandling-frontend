import type { PropsWithChildren } from "react";
import { createContext } from "react";

import { ISaksbehandler } from "~/models/microsoft.server";

import {
  components,
  components as saksbehandlingComponent,
} from "../../openapi/saksbehandling-typer";

interface IOppgaveContextType {
  oppgave: components["schemas"]["Oppgave"];
  gyldigeOppgaveValg: IGyldigeOppgaveHandlinger[];
  minOppgave: boolean;
  minBeslutterOppgave: boolean;
  underKontroll: boolean;
  readonly: boolean;
}

export const OppgaveContext = createContext<IOppgaveContextType | undefined>(undefined);
export type IGyldigeOppgaveHandlinger =
  | "legg-tilbake-oppgave"
  | "utsett-oppgave"
  | "avbryt-behandling"
  | "rekjor-behandling"
  | "behandle-oppgave"
  | "kontroller-oppgave"
  | "se-oppgave"
  | "trekk-klage"
  | "ferdigstill-klage";

export function OppgaveProvider({
  children,
  oppgave,
  saksbehandler,
}: PropsWithChildren<{
  oppgave: components["schemas"]["Oppgave"];
  saksbehandler: ISaksbehandler;
}>) {
  const minOppgave =
    oppgave.saksbehandler?.ident === saksbehandler.onPremisesSamAccountName &&
    oppgave.tilstand === "UNDER_BEHANDLING";

  const minBeslutterOppgave =
    oppgave.beslutter?.ident === saksbehandler.onPremisesSamAccountName &&
    oppgave.tilstand === "UNDER_KONTROLL";

  const underKontroll = oppgave.tilstand === "UNDER_KONTROLL";
  const readonly = !minOppgave || underKontroll || oppgave.tilstand !== "UNDER_BEHANDLING";
  const gyldigeOppgaveValg = hentGyldigeOppgaveValg(oppgave, minOppgave);

  return (
    <OppgaveContext.Provider
      value={{
        oppgave,
        gyldigeOppgaveValg,
        minOppgave,
        minBeslutterOppgave,
        underKontroll,
        readonly,
      }}
    >
      {children}
    </OppgaveContext.Provider>
  );
}

export function hentGyldigeOppgaveValg(
  oppgave:
    | saksbehandlingComponent["schemas"]["Oppgave"]
    | saksbehandlingComponent["schemas"]["OppgaveOversikt"],
  minOppgave: boolean,
): IGyldigeOppgaveHandlinger[] {
  switch (oppgave.behandlingType) {
    case "RETT_TIL_DAGPENGER":
      return hentGyldigeDagpengerRettOppgaveValg(oppgave, minOppgave);
    case "KLAGE":
      return hentGyldigeKlageOppgaveValg(oppgave, minOppgave);

    default:
      return [];
  }
}

function hentGyldigeDagpengerRettOppgaveValg(
  oppgave:
    | saksbehandlingComponent["schemas"]["Oppgave"]
    | saksbehandlingComponent["schemas"]["OppgaveOversikt"],
  minOppgave: boolean,
): IGyldigeOppgaveHandlinger[] {
  const handlinger: IGyldigeOppgaveHandlinger[] = [];

  if (
    oppgave.tilstand === "KLAR_TIL_BEHANDLING" ||
    oppgave.tilstand === "PAA_VENT" ||
    (oppgave.tilstand === "UNDER_BEHANDLING" && minOppgave)
  ) {
    handlinger.push("behandle-oppgave");
  }

  if (
    oppgave.tilstand === "KLAR_TIL_KONTROLL" ||
    (oppgave.tilstand === "UNDER_KONTROLL" && minOppgave)
  ) {
    handlinger.push("kontroller-oppgave");
  }

  if (
    (oppgave.tilstand === "UNDER_BEHANDLING" || oppgave.tilstand === "UNDER_KONTROLL") &&
    minOppgave
  ) {
    handlinger.push("utsett-oppgave");
  }

  if (oppgave.tilstand === "UNDER_BEHANDLING" || oppgave.tilstand === "UNDER_KONTROLL") {
    handlinger.push("legg-tilbake-oppgave");
  }

  if (oppgave.tilstand !== "FERDIG_BEHANDLET" && oppgave.tilstand !== "AVBRUTT") {
    handlinger.push("rekjor-behandling");
  }

  if (
    oppgave.tilstand === "FERDIG_BEHANDLET" ||
    oppgave.tilstand === "AVBRUTT" ||
    (oppgave.tilstand === "UNDER_BEHANDLING" && !minOppgave) ||
    (oppgave.tilstand === "UNDER_KONTROLL" && !minOppgave)
  ) {
    handlinger.push("se-oppgave");
  }

  if (oppgave.tilstand === "UNDER_BEHANDLING" && minOppgave) {
    handlinger.push("avbryt-behandling");
  }

  return handlinger;
}

function hentGyldigeKlageOppgaveValg(
  oppgave:
    | saksbehandlingComponent["schemas"]["Oppgave"]
    | saksbehandlingComponent["schemas"]["OppgaveOversikt"],
  minOppgave: boolean,
): IGyldigeOppgaveHandlinger[] {
  const handlinger: IGyldigeOppgaveHandlinger[] = [];

  if (
    oppgave.tilstand === "FERDIG_BEHANDLET" ||
    oppgave.tilstand === "AVBRUTT" ||
    (oppgave.tilstand === "UNDER_BEHANDLING" && !minOppgave)
  ) {
    handlinger.push("se-oppgave");
  }

  if (
    oppgave.tilstand === "KLAR_TIL_BEHANDLING" ||
    oppgave.tilstand === "PAA_VENT" ||
    (oppgave.tilstand === "UNDER_BEHANDLING" && minOppgave)
  ) {
    handlinger.push("behandle-oppgave");
  }

  if (oppgave.tilstand === "UNDER_BEHANDLING" && minOppgave) {
    handlinger.push("legg-tilbake-oppgave", "utsett-oppgave", "trekk-klage", "ferdigstill-klage");
  }

  return handlinger;
}
