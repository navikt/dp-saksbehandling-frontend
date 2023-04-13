import { useMatches } from "@remix-run/react";
import { useMemo } from "react";
import type { ISaksbehandler } from "~/models/saksbehandler.server";

export function useMatchesData(id: string): Record<string, unknown> | undefined {
  const matchingRoutes = useMatches();
  const route = useMemo(
    () => matchingRoutes.find((route) => route.id === id),
    [matchingRoutes, id]
  );
  return route?.data;
}

export function GetLoaderSaksbehandler(): ISaksbehandler {
  const data = useMatchesData("root");

  return data?.saksbehandler as ISaksbehandler;
}
