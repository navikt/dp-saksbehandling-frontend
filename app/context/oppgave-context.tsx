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
  erSaksbehandler: boolean;
  erBeslutter: boolean;
  underKontroll: boolean;
  readonly: boolean;
}

interface IOppgaveProviderType {
  oppgave: components["schemas"]["Oppgave"];
  saksbehandler: ISaksbehandler;
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
  | "avbryt-klage"
  | "send-til-kontroll"
  | "ferdigstill-klage"
  | "returner-oppgave-til-meg"
  | "flytt-behandling-til-ny-sak";

export function OppgaveProvider({
  children,
  oppgave,
  saksbehandler,
}: PropsWithChildren<IOppgaveProviderType>) {
  const erSaksbehandler = oppgave.saksbehandler?.ident === saksbehandler.onPremisesSamAccountName;

  const erBeslutter =
    oppgave.beslutter?.ident === saksbehandler.onPremisesSamAccountName &&
    oppgave.tilstand === "UNDER_KONTROLL";

  const underKontroll = oppgave.tilstand === "UNDER_KONTROLL";
  const readonly =
    !(erSaksbehandler && oppgave.tilstand === "UNDER_BEHANDLING") ||
    underKontroll ||
    oppgave.tilstand !== "UNDER_BEHANDLING";
  const gyldigeOppgaveValg = hentGyldigeOppgaveValg(oppgave, erSaksbehandler, erBeslutter);

  return (
    <OppgaveContext.Provider
      value={{
        oppgave,
        gyldigeOppgaveValg,
        erSaksbehandler,
        erBeslutter,
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
  erSaksbehandler: boolean,
  erBeslutter: boolean,
): IGyldigeOppgaveHandlinger[] {
  const handlinger: IGyldigeOppgaveHandlinger[] = [];
  if (
    oppgave.tilstand === "KLAR_TIL_BEHANDLING" ||
    oppgave.tilstand === "PAA_VENT" ||
    (oppgave.tilstand === "UNDER_BEHANDLING" && erSaksbehandler)
  ) {
    handlinger.push("behandle-oppgave");
  }

  switch (oppgave.behandlingType) {
    case "RETT_TIL_DAGPENGER":
      return hentGyldigeDagpengerRettOppgaveValg(oppgave, erSaksbehandler, erBeslutter, handlinger);
    case "KLAGE":
      return hentGyldigeKlageOppgaveValg(oppgave, erSaksbehandler, handlinger);
    case "INNSENDING":
      return hentGyldigeInnsendingOppgaveValg(oppgave, erSaksbehandler, handlinger);
    case "TILBAKEKREVING":
      return hentGyldigeTilbakekrevingOppgaveValg(oppgave, erSaksbehandler, handlinger);
    case "OPPFØLGING":
      return hentGyldigeOppfolgingValg(oppgave, erSaksbehandler, handlinger);
    default:
      return [];
  }
}

function hentGyldigeDagpengerRettOppgaveValg(
  oppgave:
    | saksbehandlingComponent["schemas"]["Oppgave"]
    | saksbehandlingComponent["schemas"]["OppgaveOversikt"],
  erSaksbehandler: boolean,
  erBeslutter: boolean,
  handlinger: IGyldigeOppgaveHandlinger[],
): IGyldigeOppgaveHandlinger[] {
  if (
    oppgave.tilstand === "KLAR_TIL_KONTROLL" ||
    (oppgave.tilstand === "UNDER_KONTROLL" && erBeslutter)
  ) {
    handlinger.push("kontroller-oppgave");
  }

  if (oppgave.tilstand === "UNDER_BEHANDLING" && erSaksbehandler) {
    handlinger.push("utsett-oppgave");
    handlinger.push("send-til-kontroll");
    handlinger.push("flytt-behandling-til-ny-sak");
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
    (oppgave.tilstand === "UNDER_BEHANDLING" && !erSaksbehandler) ||
    (oppgave.tilstand === "UNDER_KONTROLL" && !erBeslutter)
  ) {
    handlinger.push("se-oppgave");
  }

  if (oppgave.tilstand === "UNDER_BEHANDLING" && erSaksbehandler) {
    handlinger.push("avbryt-behandling");
  }

  if (oppgave.tilstand === "KLAR_TIL_KONTROLL" && erSaksbehandler) {
    handlinger.push("returner-oppgave-til-meg");
  }

  return handlinger;
}

function hentGyldigeKlageOppgaveValg(
  oppgave:
    | saksbehandlingComponent["schemas"]["Oppgave"]
    | saksbehandlingComponent["schemas"]["OppgaveOversikt"],
  erSaksbehandler: boolean,
  handlinger: IGyldigeOppgaveHandlinger[],
): IGyldigeOppgaveHandlinger[] {
  if (
    oppgave.tilstand === "FERDIG_BEHANDLET" ||
    oppgave.tilstand === "AVBRUTT" ||
    (oppgave.tilstand === "UNDER_BEHANDLING" && !erSaksbehandler)
  ) {
    handlinger.push("se-oppgave");
  }

  if (oppgave.tilstand === "UNDER_BEHANDLING") {
    handlinger.push("legg-tilbake-oppgave");
  }

  if (oppgave.tilstand === "UNDER_BEHANDLING" && erSaksbehandler) {
    handlinger.push("utsett-oppgave", "avbryt-klage", "ferdigstill-klage");
  }

  return handlinger;
}

function hentGyldigeInnsendingOppgaveValg(
  oppgave:
    | saksbehandlingComponent["schemas"]["Oppgave"]
    | saksbehandlingComponent["schemas"]["OppgaveOversikt"],
  erSaksbehandler: boolean,
  handlinger: IGyldigeOppgaveHandlinger[],
): IGyldigeOppgaveHandlinger[] {
  if (
    oppgave.tilstand === "FERDIG_BEHANDLET" ||
    oppgave.tilstand === "AVBRUTT" ||
    (oppgave.tilstand === "UNDER_BEHANDLING" && !erSaksbehandler)
  ) {
    handlinger.push("se-oppgave");
  }

  if (oppgave.tilstand === "UNDER_BEHANDLING") {
    handlinger.push("legg-tilbake-oppgave");
  }

  if (oppgave.tilstand === "UNDER_BEHANDLING" && erSaksbehandler) {
    handlinger.push("utsett-oppgave");
  }

  return handlinger;
}

function hentGyldigeTilbakekrevingOppgaveValg(
  oppgave:
    | saksbehandlingComponent["schemas"]["Oppgave"]
    | saksbehandlingComponent["schemas"]["OppgaveOversikt"],
  erSaksbehandler: boolean,
  handlinger: IGyldigeOppgaveHandlinger[],
): IGyldigeOppgaveHandlinger[] {
  if (
    ["FERDIG_BEHANDLET", "AVBRUTT"].includes(oppgave.tilstand) ||
    (oppgave.tilstand === "UNDER_BEHANDLING" && !erSaksbehandler)
  ) {
    handlinger.push("se-oppgave");
  }

  if (oppgave.tilstand === "UNDER_BEHANDLING") {
    handlinger.push("legg-tilbake-oppgave");
  }

  if (oppgave.tilstand === "UNDER_BEHANDLING" && erSaksbehandler) {
    handlinger.push("utsett-oppgave");
  }

  return handlinger;
}

function hentGyldigeOppfolgingValg(
  oppgave:
    | saksbehandlingComponent["schemas"]["Oppgave"]
    | saksbehandlingComponent["schemas"]["OppgaveOversikt"],
  erSaksbehandler: boolean,
  handlinger: IGyldigeOppgaveHandlinger[],
): IGyldigeOppgaveHandlinger[] {
  if (
    ["FERDIG_BEHANDLET", "AVBRUTT", "PAA_VENT"].includes(oppgave.tilstand) ||
    (oppgave.tilstand === "UNDER_BEHANDLING" && !erSaksbehandler)
  ) {
    handlinger.push("se-oppgave");
  }

  if (oppgave.tilstand === "UNDER_BEHANDLING") {
    handlinger.push("legg-tilbake-oppgave");
    if (erSaksbehandler) {
      handlinger.push("utsett-oppgave");
    }
  }

  return handlinger;
}
