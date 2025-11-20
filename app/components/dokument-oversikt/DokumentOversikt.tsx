import { Suspense } from "react";
import { Await } from "react-router";

import { AsyncErrorMelding } from "~/components/async-error-melding/AsyncErrorMelding";
import { CenteredLoader } from "~/components/centered-loader/CenteredLoader";
import { JournalpostOversikt } from "~/components/journalpost-oversikt/JournalpostOversikt";
import { hentJournalpost } from "~/models/saf.server";

interface IProps {
  journalposterPromises: Promise<Awaited<ReturnType<typeof hentJournalpost>>[]>;
}

export function DokumentOversikt({ journalposterPromises }: IProps) {
  return (
    <Suspense fallback={<CenteredLoader size={"large"} loadingText={"Henter dokumenter"} />}>
      <Await
        resolve={journalposterPromises}
        errorElement={
          <AsyncErrorMelding tittel={"En feil oppsto når vi skulle hente ut dokumentene 🤖"} />
        }
      >
        {(journalposter) => <JournalpostOversikt journalposterResponse={journalposter} />}
      </Await>
    </Suspense>
  );
}
