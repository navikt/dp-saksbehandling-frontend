import type { TOppgaveTilstand } from "~/models/oppgave.server";
import type { loader as rootLoader } from "~/root";
import type { loader as oppgaveLoader } from "~/routes/saksbehandling.oppgave.$oppgaveId";
import type { loader as personLoader } from "~/routes/saksbehandling.person.$oppgaveId";
import type { SerializeFrom } from "@remix-run/node";
import { useRouteLoaderData } from "@remix-run/react";

export function erGyldigTilstand(tilstand: string): tilstand is TOppgaveTilstand {
  return ["TilBehandling", "VentPåMangelbrev", "Vedtak", "Innstilt"].includes(
    tilstand as TOppgaveTilstand,
  );
}

type Loaders = {
  root: typeof rootLoader;
  "routes/saksbehandling.oppgave.$oppgaveId": typeof oppgaveLoader;
  "routes/saksbehandling.person.$oppgaveId": typeof personLoader;
};

export function useTypedRouteLoaderData<T extends keyof Loaders>(route: T) {
  return useRouteLoaderData(route) as SerializeFrom<Loaders[T]>;
}
