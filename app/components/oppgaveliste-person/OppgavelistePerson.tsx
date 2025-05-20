import { Suspense } from "react";
import { Await } from "react-router";

import { AsyncErrorMelding } from "~/components/async-error-melding/AsyncErrorMelding";
import { HttpProblemAlert } from "~/components/http-problem-alert/HttpProblemAlert";
import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";
import { hentOppgaverForPerson } from "~/models/saksbehandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";

interface IProps {
  oppgaverForPersonPromise: ReturnType<typeof hentOppgaverForPerson>;
}

export function OppgavelistePerson({ oppgaverForPersonPromise }: IProps) {
  return (
    <Suspense fallback={<OppgaveListe oppgaver={[]} lasterOppgaver={true} />}>
      <Await
        resolve={oppgaverForPersonPromise}
        errorElement={<AsyncErrorMelding feilmelding="Klarte ikke hente oppgaver for person" />}
      >
        {(oppgaverForPerson) => {
          if (oppgaverForPerson.error) {
            return <HttpProblemAlert error={getHttpProblemAlert(oppgaverForPerson.error)} />;
          }

          return (
            <OppgaveListe
              tittel={"Alle oppgaver"}
              oppgaver={oppgaverForPerson.data}
              totaltAntallOppgaver={oppgaverForPerson.data.length}
            />
          );
        }}
      </Await>
    </Suspense>
  );
}
