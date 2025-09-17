import { useRouteLoaderData } from "react-router";

import type { loader as rootLoader } from "~/root";
import type { loader as behandlingLoader } from "~/routes/behandling.$behandlingId";
import type { loader as oppgaveLoader } from "~/routes/oppgave.$oppgaveId";
import type { loader as dagpengerRettLoader } from "~/routes/oppgave.$oppgaveId.dagpenger-rett.$behandlingId";
import type { loader as dagpengerRettBehandlingLoader } from "~/routes/oppgave.$oppgaveId.dagpenger-rett.$behandlingId.behandle";
import type { loader as meldingOmVedtakLoader } from "~/routes/oppgave.$oppgaveId.dagpenger-rett.$behandlingId.melding-om-vedtak";
import type { loader as klageLoader } from "~/routes/oppgave.$oppgaveId.klage.$behandlingId";
import type { loader as personLoader } from "~/routes/person.$personUuid";

type Loaders = {
  root: typeof rootLoader;
  "routes/person.$personUuid": typeof personLoader;
  "routes/behandling.$behandlingId": typeof behandlingLoader;
  "routes/oppgave.$oppgaveId": typeof oppgaveLoader;
  "routes/oppgave.$oppgaveId.klage.$behandlingId": typeof klageLoader;
  "routes/oppgave.$oppgaveId.dagpenger-rett.$behandlingId": typeof dagpengerRettLoader;
  "routes/oppgave.$oppgaveId.dagpenger-rett.$behandlingId.behandle": typeof dagpengerRettBehandlingLoader;
  "routes/oppgave.$oppgaveId.dagpenger-rett.$behandlingId.melding-om-vedtak": typeof meldingOmVedtakLoader;
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
