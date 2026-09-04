import { queryOptions, useQuery } from "@tanstack/react-query";

import { fetchVurderinger } from "./behandling";

export function vurderingerQueryOptions(behandlingId: string) {
  return queryOptions({
    queryKey: ["behandling", behandlingId, "vurderinger"],
    queryFn: () => fetchVurderinger(behandlingId),
  });
}

export function useVurderingerQuery(behandlingId: string) {
  return useQuery(vurderingerQueryOptions(behandlingId));
}
