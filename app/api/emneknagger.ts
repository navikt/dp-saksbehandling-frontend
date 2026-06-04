import { useQuery } from "@tanstack/react-query";

import type { components } from "../../openapi/saksbehandling-typer";

export type Emneknagg = components["schemas"]["Emneknagg"];

async function fetchEmneknagger() {
  const url = `/api/emneknagger`;
  const res = await fetch(url, { credentials: "include" });

  console.info("fetching emneknagger with url:", url, "response status:", res.status);

  if (!res.ok) {
    throw new Error(`Failed to fetch emneknagger: ${res.status}`);
  }

  return (await res.json()) as Emneknagg[];
}

export function useEmneknaggerQuery() {
  const { data, isFetching } = useQuery<Emneknagg[]>({
    queryKey: ["emneknagger"],
    queryFn: () => fetchEmneknagger(),
    staleTime: 20 * 60 * 1000, // 20 minutes
  });

  return {
    emneknagger: data ?? [],
    isFetching,
  };
}
