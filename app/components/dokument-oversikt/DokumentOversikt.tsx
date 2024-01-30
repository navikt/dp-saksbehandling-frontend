import React, { Suspense } from "react";
import styles from "./DokumentOversikt.module.css";
import { Await } from "@remix-run/react";
import { PDFLeser } from "~/components/pdf-leser/PDFLeser";
import { Alert } from "@navikt/ds-react";
import type { JournalpostQuery } from "../../../graphql/generated/saf/graphql";
import type { INetworkResponse } from "~/utils/types";
import { isNetworkResponseSuccess } from "~/utils/type-guards";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

export function DokumentOversikt() {
  const { journalposterPromises } = useTypedRouteLoaderData(
    "routes/saksbehandling.oppgave.$oppgaveId.steg",
  );

  return (
    <Suspense fallback={<div>Henter arbeidsforhold</div>}>
      <Await
        resolve={journalposterPromises}
        errorElement={<div>Greide ikke laste inn journalposter 😬</div>}
      >
        {(journalpromises) => {
          const journalposter = lagJournalpostData(journalpromises);
          return (
            <>
              {journalposter?.data?.length > 0 ? (
                <div className={styles.dokumentContainer}>
                  <PDFLeser journalposter={journalposter.data} />
                </div>
              ) : (
                <div> Ingen dokumenter tilgjengelig</div>
              )}

              {journalposter.errors && (
                <div className={styles.dokumentContainer}>
                  <Alert variant="error" className="my-4">
                    En feil oppsto når vi skulle hente ut dokumentene.
                  </Alert>
                </div>
              )}
            </>
          );
        }}
      </Await>
    </Suspense>
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
