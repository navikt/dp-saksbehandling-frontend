import { useQueries } from "@tanstack/react-query";
import { Suspense } from "react";

import { JournalpostQuery } from "@/graphql/generated/saf/graphql";
import { CenteredLoader } from "~/components/centered-loader/CenteredLoader";
import { JournalpostOversikt } from "~/components/dokument-oversikt/JournalpostOversikt";
import { useOppgave } from "~/hooks/useOppgave";

const fetchJournalpost = (journalpostId: string): Promise<JournalpostQuery["journalpost"]> =>
  fetch(`/api/journalpost/${journalpostId}`).then((res) => res.json());

export function DokumentOversikt() {
  const { oppgave } = useOppgave();
  console.log("oppgave", oppgave);
  const { data } = useQueries({
    queries: oppgave.journalpostIder.map((journalpostId) => ({
      queryKey: ["journalpost", journalpostId],
      queryFn: () => fetchJournalpost(journalpostId),
    })),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
      };
    },
  });
  console.log("data", data);
  return (
    <Suspense fallback={<CenteredLoader size={"large"} loadingText={"Henter dokumenter"} />}>
      <JournalpostOversikt journalposterResponse={data} />
    </Suspense>
  );
}
