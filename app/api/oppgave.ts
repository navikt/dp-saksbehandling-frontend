import { useQuery } from "@tanstack/react-query";

import type { components } from "../../openapi/saksbehandling-typer";

export type OppgaveOversikt = components["schemas"]["OppgaveOversikt"];

export type OppgaveListeData = {
  oppgaver: OppgaveOversikt[];
  totaltAntallOppgaver: number;
};

export async function fetchOppgaver(searchParams: URLSearchParams) {
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
  });

  return {
    oppgaver: data?.oppgaver ?? [],
    totaltAntallOppgaver: data?.totaltAntallOppgaver ?? 0,
    isFetching,
  };
}
