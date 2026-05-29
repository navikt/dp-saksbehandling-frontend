import { keepPreviousData, useQuery } from "@tanstack/react-query";

import type { components } from "../../openapi/saksbehandling-typer";

export type OppgaveOversikt = components["schemas"]["OppgaveOversikt"];
export type Oppgave = components["schemas"]["Oppgave"];

export type OppgaveListeData = {
  oppgaver: OppgaveOversikt[];
  totaltAntallOppgaver: number;
};

async function fetchOppgaver(searchParams: URLSearchParams) {
  const url = `/api/oppgave?${searchParams.toString()}`;
  const res = await fetch(url, { credentials: "include" });

  console.info("fetching oppgaver with url:", url, "response status:", res.status);

  if (!res.ok) {
    throw new Error(`Failed to fetch oppgaver: ${res.status}`);
  }
  return (await res.json()) as OppgaveListeData;
}

export const oppgaverQueryKey = (searchParams: URLSearchParams) =>
  [
    "oppgaver",
    Array.from(searchParams.entries()).reduce(
      (acc, [key]) => ({ ...acc, [key]: searchParams.getAll(key) }),
      {},
    ),
  ] as const;

export function useOppgaverQuery(searchParams: URLSearchParams) {
  const { data, isFetching } = useQuery<OppgaveListeData>({
    queryKey: oppgaverQueryKey(searchParams),
    queryFn: () => fetchOppgaver(searchParams),
    placeholderData: keepPreviousData,
  });

  return {
    oppgaver: data?.oppgaver ?? [],
    totaltAntallOppgaver: data?.totaltAntallOppgaver ?? 0,
    isFetching,
  };
}

async function fetchOppgave(oppgaveId: string) {
  const url = `/api/oppgave/${oppgaveId}`;
  const res = await fetch(url, { credentials: "include" });

  console.info("fetching oppgave with url:", url, "response status:", res.status);

  if (!res.ok) {
    throw new Error(`Failed to fetch oppgave: ${res.status}`);
  }
  return (await res.json()) as Oppgave;
}

export function useOppgaveQuery(oppgaveId: string) {
  const { data, isFetching } = useQuery<Oppgave>({
    queryKey: ["oppgave", oppgaveId],
    queryFn: async () => fetchOppgave(oppgaveId),
  });

  return {
    oppgave: data ?? ({} as Oppgave),
    isFetching,
  };
}
