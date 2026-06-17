import type { components } from "../../openapi/saksbehandling-typer";
import type { LeggTilbakeOppgaveResponse } from "../routes/api.oppgave.legg-tilbake";
import type { TildelOppgaveResponse } from "../routes/api.oppgave.tildel";
import { apiGet, apiPost } from "./util";

export type OppgaveOversikt = components["schemas"]["OppgaveOversikt"];
export type Oppgave = components["schemas"]["Oppgave"];

export type OppgaveListeData = {
  oppgaver: OppgaveOversikt[];
  totaltAntallOppgaver: number;
};

export async function fetchOppgaver(searchParams: URLSearchParams) {
  const url = `/api/oppgave?${searchParams.toString()}`;
  console.info("fetching oppgaver with url:", url);
  return apiGet<OppgaveListeData>(url);
}

export async function fetchOppgave(oppgaveId: string) {
  const url = `/api/oppgave/${oppgaveId}`;
  console.info("fetching oppgave with url:", url);
  return apiGet<Oppgave>(url);
}

interface TildelOppgavePayload {
  oppgaveId: string;
  behandlingId: string;
}

export async function tildelOppgaveFetch(payload: TildelOppgavePayload) {
  return apiPost<TildelOppgaveResponse>("/api/oppgave/tildel", payload, "Failed to tildel oppgave");
}

export async function leggTilbakeOppgaveFetch(payload: { oppgaveId: string; årsak: string }) {
  return apiPost<LeggTilbakeOppgaveResponse>(
    "/api/oppgave/legg-tilbake",
    payload,
    "Failed to legg tilbake oppgave",
  );
}
