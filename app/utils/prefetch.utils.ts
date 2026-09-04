import { noop, QueryClient } from "@tanstack/react-query";

import { oppgaverQueryKey } from "~/api/oppgave-hooks";
import { hentOppgaver } from "~/models/saksbehandling.server";
import { mineOppgaverDefaultParams } from "~/routes/mine-oppgaver";

import { convertToQueryParamString } from "./url.utils";

export const prefetchDataForRoute = async (
  url: URL,
  request: Request,
  queryClient: QueryClient,
) => {
  if (url.pathname.startsWith("/mine-oppgaver")) {
    const mineOppgaverParams = new URLSearchParams(
      `?${convertToQueryParamString(mineOppgaverDefaultParams)}`,
    );

    // Let errors be stored in the query cache
    await queryClient
      .query({
        queryKey: oppgaverQueryKey(mineOppgaverParams),
        queryFn: () => hentOppgaver(request, mineOppgaverParams),
      })
      .catch(noop);
  } else if (url.pathname.startsWith("/alle-oppgaver")) {
    await queryClient
      .query({
        queryKey: oppgaverQueryKey(url.searchParams),
        queryFn: () => hentOppgaver(request, url.searchParams),
      })
      .catch(noop);
  } else if (url.pathname === "/") {
    await queryClient
      .query({
        queryKey: oppgaverQueryKey(url.searchParams),
        queryFn: () => hentOppgaver(request, url.searchParams),
      })
      .catch(noop);
  }
  return queryClient;
};
