import { useQueries } from "@tanstack/react-query";

import { isDefined } from "~/utils/type-guards";

import { fetchJournalpost, JournalpostResponse } from "./journalpost";

export function useJournalposterQuery(journalpostIder: string[]) {
  return useQueries({
    queries: journalpostIder.map((journalpostId) => ({
      queryKey: ["journalpost", journalpostId],
      queryFn: () => fetchJournalpost(journalpostId),
    })),
    combine: (results) => {
      return {
        data: results.map((result) => result.data).filter(isDefined),
        pending: results.some((result) => result.isPending),
        error: results.find((result) => result.error)?.error,
      } satisfies {
        data: JournalpostResponse[];
        pending: boolean;
        error: Error | null | undefined;
      };
    },
  });
}
