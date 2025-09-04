import { Suspense } from "react";
import { Await } from "react-router";

import { AsyncErrorMelding } from "~/components/async-error-melding/AsyncErrorMelding";
import { CenteredLoader } from "~/components/centered-loader/CenteredLoader";
import { JournalpostOversikt } from "~/components/journalpost-oversikt/JournalpostOversikt";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

export function DokumentOversikt() {
  const { journalposterPromises } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  return (
    <div className={"p-4"}>
      <Suspense fallback={<CenteredLoader size={"large"} loadingText={"Henter dokumenter"} />}>
        <Await
          resolve={journalposterPromises}
          errorElement={
            <AsyncErrorMelding tittel={"En feil oppsto når vi skulle hente ut dokumentene 🤖"} />
          }
        >
          {(journalposter) => <JournalpostOversikt journalposter={journalposter} />}
        </Await>
      </Suspense>
    </div>
  );
}
