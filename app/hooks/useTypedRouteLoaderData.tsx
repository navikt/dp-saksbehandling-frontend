import { useRouteLoaderData } from "@remix-run/react";
import type { loader as indexLoader } from "~/routes/_index";
import type { loader as personLoader } from "~/routes/person.$oppgaveId";
import type { loader as oppgaveLoader } from "~/routes/oppgave.$oppgaveId";

type Loaders = {
  "routes/_index": typeof indexLoader;
  "routes/person.$oppgaveId": typeof personLoader;
  "routes/oppgave.$oppgaveId": typeof oppgaveLoader;
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
