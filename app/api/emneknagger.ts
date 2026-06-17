import { useQuery } from "@tanstack/react-query";

import type { components } from "../../openapi/saksbehandling-typer";
import { apiGet } from "./util";

export type Emneknagg = components["schemas"]["Emneknagg"];

async function fetchEmneknagger() {
  const url = `/api/emneknagger`;
  console.info("fetching emneknagger with url:", url);
  return apiGet<Emneknagg[]>(url);
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
