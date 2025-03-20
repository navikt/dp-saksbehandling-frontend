import { useRouteLoaderData } from "react-router";

import type { loader as rootLoader } from "~/root";
import type { loader as oppgaveLoader } from "~/routes/oppgave.$oppgaveId";

type Loaders = {
  root: typeof rootLoader;
  "routes/oppgave.$oppgaveId": typeof oppgaveLoader;
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
