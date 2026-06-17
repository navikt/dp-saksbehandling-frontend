import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { redirect, useNavigate, useNavigation } from "react-router";

import { useSaksbehandler } from "~/hooks/useSaksbehandler";

import {
  fetchNesteOppgave,
  fetchOppgave,
  fetchOppgaver,
  leggTilbakeOppgaveFetch,
  Oppgave,
  OppgaveListeData,
  tildelOppgaveFetch,
} from "./oppgave";

export const oppgaverQueryKey = (searchParams: URLSearchParams) =>
  [
    "oppgaver",
    Array.from(searchParams.entries()).reduce(
      (acc, [key]) => ({ ...acc, [key]: searchParams.getAll(key) }),
      {},
    ),
  ] as const;

export function useOppgaverQuery(searchParams: URLSearchParams) {
  const { data, isLoading } = useQuery<OppgaveListeData>({
    queryKey: oppgaverQueryKey(searchParams),
    queryFn: () => fetchOppgaver(searchParams),
    placeholderData: keepPreviousData,
  });

  return {
    oppgaver: data?.oppgaver ?? [],
    totaltAntallOppgaver: data?.totaltAntallOppgaver ?? 0,
    isLoading,
  };
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

export function useTildelOppgaveMutation() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const mutation = useMutation({
    mutationFn: tildelOppgaveFetch,
    onSuccess: (result, payload) => {
      const { behandlingType, nyTilstand, utlostAv } = result.data;
      const { oppgaveId, behandlingId } = payload;

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
  });

  return {
    mutate: mutation.mutate,
    isPending: mutation.isPending || navigation.state === "loading",
  };
}

export function useLeggTilbakeOppgaveMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: leggTilbakeOppgaveFetch,
    onSuccess: () => {
      // Invalidate cache after mutation settles
      queryClient.invalidateQueries({ queryKey: ["oppgaver"] });
    },
  });

  return {
    mutate: mutation.mutate,
    isPending: mutation.isPending,
  };
}

export function useHentNesteOppgave() {
  const queryClient = useQueryClient();
  const { aktivtOppgaveSok } = useSaksbehandler();

  const params = new URLSearchParams(aktivtOppgaveSok);
  params.delete("side");
  params.delete("antallOppgaver");
  const aktivtOppgaveSokUtenPaginering = params.toString();

  const mutation = useMutation({
    mutationFn: () => fetchNesteOppgave(aktivtOppgaveSokUtenPaginering),
    onSuccess: (oppgave) => {
      // Invalidate cache after mutation settles
      queryClient.invalidateQueries({ queryKey: ["oppgaver"] });

      switch (oppgave.behandlingType) {
        case "RETT_TIL_DAGPENGER":
          if (oppgave.tilstand === "UNDER_KONTROLL") {
            return redirect(
              `/oppgave/${oppgave.oppgaveId}/dagpenger-rett/${oppgave.behandlingId}/vedtak`,
            );
          }

          return redirect(
            `/oppgave/${oppgave.oppgaveId}/dagpenger-rett/${oppgave.behandlingId}/behandle`,
          );

        case "KLAGE":
          return redirect(`/oppgave/${oppgave.oppgaveId}/klage/${oppgave.behandlingId}`);
      }
    },
  });

  return {
    mutate: mutation.mutate,
    isPending: mutation.isPending,
  };
}
