import { Suspense } from "react";
import styles from "./DokumentOversikt.module.css";
import { Await } from "@remix-run/react";
import { JournalpostOversikt } from "~/components/journalpost-oversikt/JournalpostOversikt";
import { Alert, Heading, Loader } from "@navikt/ds-react";
import type { JournalpostQuery } from "../../../graphql/generated/saf/graphql";
import type { INetworkResponse } from "~/utils/types";
import { isNetworkResponseSuccess } from "~/utils/type-guards";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

export function DokumentOversikt() {
  const { journalposterPromises } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  return (
    <div className={styles.dokumentContainer}>
      <Heading size={"medium"} level={"3"}>
        Dokumenter
      </Heading>

      <Suspense
        fallback={
          <div>
            Henter journalposter <Loader />
          </div>
        }
      >
        <Await
          resolve={journalposterPromises}
          errorElement={
            <Alert variant="error" className="my-4">
              Vi klarte ikke å hente journalposter fra SAF 📥
            </Alert>
          }
        >
          {(journalpromises) => {
            const journalposter = lagJournalpostData(journalpromises);
            return (
              <>
                {journalposter?.data?.length > 0 && (
                  <JournalpostOversikt journalposter={journalposter.data} />
                )}

                {journalposter.errors && (
                  <Alert variant="error" className="my-4">
                    En feil oppsto når vi skulle hente ut dokumentene 🤖
                  </Alert>
                )}
              </>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
}

interface IJournalposter {
  data: JournalpostQuery["journalpost"][];
  errors: boolean;
}

function lagJournalpostData(
  journalpostResponses: INetworkResponse<JournalpostQuery["journalpost"]>[],
): IJournalposter {
  const journalposter: IJournalposter = {
    data: [],
    errors: false,
  };

  for (const response of journalpostResponses) {
    if (isNetworkResponseSuccess(response) && response.data) {
      journalposter.data.push(response.data);
    } else {
      journalposter.errors = true;
    }
  }
  return journalposter;
}
