import { useRouteLoaderData } from "react-router";

import type { loader as rootLoader } from "~/root";
import type { loader as personBehandlingLoader } from "~/routes/oppgave.$oppgaveId.dagpenger-rett.$behandlingId._person";
import type { loader as klageLoader } from "~/routes/oppgave.$oppgaveId.klage.$behandlingId";
import type { loader as personLoader } from "~/routes/person.$personUuid";

type Loaders = {
  root: typeof rootLoader;
  "routes/person.$personUuid": typeof personLoader;
  "routes/oppgave.$oppgaveId.dagpenger-rett.$behandlingId._person": typeof personBehandlingLoader;
  "routes/oppgave.$oppgaveId.klage.$behandlingId": typeof klageLoader;
};

export function useTypedRouteLoaderData<T extends keyof Loaders>(route: T) {
  const routeData = useRouteLoaderData<Loaders[T]>(route);

  if (!routeData) {
    throw new Error(
      `Route (${route}) data is not loaded. You might be trying to accessing data from a sub route that has not yet loaded`,
    );
  }

  return routeData;
}
