import React from "react";
import styles from "./DokumentOversikt.module.css";
import { PDFLeser } from "~/components/pdf-leser/PDFLeser";
import { Alert } from "@navikt/ds-react";
import type { JournalpostQuery } from "../../../graphql/generated/saf/graphql";
import type { INetworkResponse } from "~/utils/types";
import { isNetworkResponseSuccess } from "~/utils/type-guards";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

export function DokumentOversikt() {
  const { journalposter } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const dokumenter = lagJournalpostData(journalposter);

  return (
    <div className={styles.dokumentContainer}>
      {dokumenter?.data?.length > 0 && <PDFLeser journalposter={dokumenter.data} />}

      {dokumenter.errors && (
        <Alert variant="error" className="my-4">
          En feil oppsto når vi skulle hente ut dokumentene 🤖
        </Alert>
      )}
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
