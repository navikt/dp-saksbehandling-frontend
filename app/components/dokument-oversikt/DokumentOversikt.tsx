import { Alert, Heading } from "@navikt/ds-react";

import { JournalpostOversikt } from "~/components/journalpost-oversikt/JournalpostOversikt";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { isNetworkResponseSuccess } from "~/utils/type-guards";
import type { INetworkResponse } from "~/utils/types";

import type { JournalpostQuery } from "../../../graphql/generated/saf/graphql";
import styles from "./DokumentOversikt.module.css";

export function DokumentOversikt() {
  const { journalposterResponses } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const journalposter = lagJournalpostData(journalposterResponses);

  return (
    <div className={styles.dokumentContainer}>
      <Heading size={"medium"} level={"3"}>
        Dokumenter
      </Heading>

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
