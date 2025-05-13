import { useRouteLoaderData } from "react-router";

import type { loader as rootLoader } from "~/root";
import type { loader as oppgaveLoader } from "~/routes/oppgave.$oppgaveId";
import type { loader as dagpengerRettLoader } from "~/routes/oppgave.$oppgaveId.dagpenger-rett.$behandlingId";
import type { loader as klageLoader } from "~/routes/oppgave.$oppgaveId.klage.$behandlingId";

type Loaders = {
  root: typeof rootLoader;
  "routes/oppgave.$oppgaveId": typeof oppgaveLoader;
  "routes/oppgave.$oppgaveId.klage.$behandlingId": typeof klageLoader;
  "routes/oppgave.$oppgaveId.dagpenger-rett.$behandlingId": typeof dagpengerRettLoader;
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
