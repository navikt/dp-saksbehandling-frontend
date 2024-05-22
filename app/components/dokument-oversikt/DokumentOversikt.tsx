import React, { Suspense } from "react";
import styles from "./DokumentOversikt.module.css";
import { Await } from "@remix-run/react";
import { PDFLeser } from "~/components/pdf-leser/PDFLeser";
import { Alert, Loader } from "@navikt/ds-react";
import type { JournalpostQuery } from "../../../graphql/generated/saf/graphql";
import type { INetworkResponse } from "~/utils/types";
import { isNetworkResponseSuccess } from "~/utils/type-guards";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { logger } from "~/utils/logger.utils";

export function DokumentOversikt() {
  const { journalposterPromises } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  return (
    <Suspense
      fallback={
        <div>
          Henter arbeidsforhold <Loader />
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
            <div className={styles.dokumentContainer}>
              {journalposter?.data?.length > 0 && <PDFLeser journalposter={journalposter.data} />}

              {journalposter.errors && (
                <Alert variant="error" className="my-4">
                  En feil oppsto når vi skulle hente ut dokumentene 🤖
                </Alert>
              )}
            </div>
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
  logger.info("journalpostResponses", journalpostResponses);
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
