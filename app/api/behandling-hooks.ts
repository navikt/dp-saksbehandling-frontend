import { queryOptions, useMutation, useQuery } from "@tanstack/react-query";

import { useGlobalAlerts } from "~/hooks/useGlobalAlerts";

import { fetchVurderinger, opprettBehandlingFetch } from "./behandling";
import { useTildelOppgaveMutation } from "./oppgave-hooks";
import { ApiError } from "./util";

export function vurderingerQueryOptions(behandlingId: string) {
  return queryOptions({
    queryKey: ["behandling", behandlingId, "vurderinger"],
    queryFn: () => fetchVurderinger(behandlingId),
  });
}

export function useVurderingerQuery(behandlingId: string) {
  return useQuery(vurderingerQueryOptions(behandlingId));
}

export function useOpprettBehandlingMutation() {
  const { mutate: tildelOppgave, isPending: tildelerOppgave } = useTildelOppgaveMutation();
  const { addAlert } = useGlobalAlerts();
  const mutation = useMutation({
    mutationFn: opprettBehandlingFetch,
    retry: false,
    onSuccess: (oppgave) => tildelOppgave(oppgave),
    onError: (error) => {
      addAlert({
        variant: "error",
        title: "Kunne ikke opprette behandling",
        body: error instanceof ApiError ? error.detail || error.message : error.message,
        service: error instanceof ApiError ? error.service : undefined,
      });
    },
  });

  return {
    mutate: mutation.mutate,
    mutateAsync: mutation.mutateAsync,
    isPending: mutation.isPending || tildelerOppgave,
  };
}
