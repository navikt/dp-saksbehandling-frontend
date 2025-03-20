import { Suspense } from "react";
import { Await, useLoaderData } from "react-router";

import { AsyncErrorMelding } from "~/components/async-error-melding/AsyncErrorMelding";
import { HttpProblemAlert } from "~/components/http-problem-alert/HttpProblemAlert";
import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";
import { loader } from "~/routes/oppgave.$oppgaveId";
import { getHttpProblemAlert } from "~/utils/error-response.utils";

export function OppgavelistePerson() {
  const { oppgaverForPersonResponse } = useLoaderData<typeof loader>();

  return (
    <Suspense fallback={<OppgaveListe oppgaver={[]} lasterOppgaver={true} />}>
      <Await
        resolve={oppgaverForPersonResponse}
        errorElement={
          <div className="card p-2">
            <AsyncErrorMelding feilmelding="Klarte ikke hente oppgaver for person" />
          </div>
        }
      >
        {(oppgaverForPerson) => {
          if (oppgaverForPerson.error) {
            return (
              <div className="card p-2">
                <HttpProblemAlert error={getHttpProblemAlert(oppgaverForPerson.error)} />
              </div>
            );
          }

          return <OppgaveListe oppgaver={oppgaverForPerson.data} />;
        }}
      </Await>
    </Suspense>
  );
}
