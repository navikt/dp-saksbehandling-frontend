import { useQueries } from "@tanstack/react-query";

import { JournalpostQuery } from "@/graphql/generated/saf/graphql";
import { CenteredLoader } from "~/components/centered-loader/CenteredLoader";
import { JournalpostOversikt } from "~/components/dokument-oversikt/JournalpostOversikt";
import { useOppgave } from "~/hooks/useOppgave";

import { AsyncErrorMelding } from "../async-error-melding/AsyncErrorMelding";

const fetchJournalpost = (journalpostId: string): Promise<JournalpostQuery["journalpost"]> =>
  fetch(`/api/journalpost/${journalpostId}`).then((res) => res.json());

export function DokumentOversikt() {
  const { oppgave } = useOppgave();

  const { data, error, pending } = useQueries({
    queries: oppgave.journalpostIder.map((journalpostId) => ({
      queryKey: ["journalpost", journalpostId],
      queryFn: () => fetchJournalpost(journalpostId),
    })),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
        error: results.find((result) => result.error)?.error,
      };
    },
  });

  return (
    <>
      {pending && <CenteredLoader size={"large"} loadingText={"Henter dokumenter"} />}
      {error && (
        <AsyncErrorMelding
          tittel={"En feil oppsto når vi skulle hente ut dokumentene 🤖"}
          feilmelding={error.message}
        />
      )}
      {data && <JournalpostOversikt journalposterResponse={data} />}
    </>
  );
}
