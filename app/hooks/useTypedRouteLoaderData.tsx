import { useRouteLoaderData } from "@remix-run/react";
import type { loader as saksbehandlingLoader } from "~/routes/saksbehandling";
import type { loader as oppgaveLoader } from "~/routes/saksbehandling.oppgave.$oppgaveId";
import type { loader as personLoader } from "~/routes/saksbehandling.person.$oppgaveId";

type Loaders = {
  "routes/saksbehandling": typeof saksbehandlingLoader;
  "routes/saksbehandling.oppgave.$oppgaveId": typeof oppgaveLoader;
  "routes/saksbehandling.person.$oppgaveId": typeof personLoader;
};

export function useTypedRouteLoaderData<T extends keyof Loaders>(route: T) {
  const routeData = useRouteLoaderData<Loaders[T]>(route);

  if (!routeData) {
    throw new Error(
      "Route data is not loaded. You might be trying to accessing data from a sub route that has not yet loaded",
    );
  }

  return routeData;
}
