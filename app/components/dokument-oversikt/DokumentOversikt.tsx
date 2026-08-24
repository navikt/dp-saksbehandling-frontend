import { useJournalposterQuery } from "~/api/journalpost-hooks";
import { CenteredLoader } from "~/components/centered-loader/CenteredLoader";
import { JournalpostOversikt } from "~/components/dokument-oversikt/JournalpostOversikt";
import { useOppgave } from "~/hooks/useOppgave";

import { AsyncErrorMelding } from "../async-error-melding/AsyncErrorMelding";

export function DokumentOversikt() {
  const { oppgave } = useOppgave();
  const { data, error, pending } = useJournalposterQuery(oppgave.journalpostIder);

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
