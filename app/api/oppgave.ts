import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

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

interface TildelOppgavePayload {
  oppgaveId: string;
  behandlingId: string;
}

interface TildelOppgaveResponse {
  success: boolean;
  data: {
    behandlingType: string;
    utlostAv?: string;
    nyTilstand: string;
    oppgaveId: string;
    behandlingId: string;
  };
}

async function tildelOppgaveFetch(payload: TildelOppgavePayload) {
  const formData = new FormData();
  formData.append("oppgaveId", payload.oppgaveId);
  formData.append("behandlingId", payload.behandlingId);

  const res = await fetch("/api/oppgave/tildel", {
    method: "POST",
    body: formData,
    credentials: "include",
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Failed to tildel oppgave");
  }

  return (await res.json()) as TildelOppgaveResponse;
}

export function useTildelOppgaveMutation(options?: { onError?: (error: Error) => void }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: tildelOppgaveFetch,
    onSuccess: (result) => {
      const { behandlingType, oppgaveId, behandlingId, nyTilstand, utlostAv } = result.data;

      const performNavigation = () => {
        if (behandlingType === "RETT_TIL_DAGPENGER") {
          if (utlostAv === "FERIETILLEGG" && nyTilstand === "UNDER_BEHANDLING") {
            return navigate(`/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/avklaringer`);
          } else if (nyTilstand === "UNDER_BEHANDLING") {
            return navigate(`/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/behandle`);
          } else if (nyTilstand === "UNDER_KONTROLL") {
            return navigate(`/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/vedtak`);
          }
        } else if (behandlingType === "KLAGE") {
          return navigate(`/oppgave/${oppgaveId}/klage/${behandlingId}`);
        } else if (behandlingType === "INNSENDING") {
          return navigate(`/oppgave/${oppgaveId}/innsending/${behandlingId}`);
        } else if (behandlingType === "TILBAKEKREVING") {
          return navigate(`/oppgave/${oppgaveId}/tilbakekreving/${behandlingId}`);
        } else if (behandlingType === "OPPFØLGING") {
          return navigate(`/oppgave/${oppgaveId}/oppfolging/${behandlingId}`);
        }
      };

      performNavigation()?.then(() => {
        queryClient.invalidateQueries({ queryKey: ["oppgaver"] });
      });
    },
    onError: (error: Error) => {
      options?.onError?.(error);
    },
  });
}
