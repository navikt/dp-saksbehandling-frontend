import React, { useState } from "react";
import { Button, Heading, Select } from "@navikt/ds-react";

import styles from "./PDFLeser.module.css";
import { getEnv } from "~/utils/env.utils";
import { useRouteLoaderData } from "@remix-run/react";
import type { IJournalpost } from "~/models/SAF.server";

export function PDFLeser() {
  const { journalposter } = useRouteLoaderData(
    "routes/saksbehandling.person.$ident.oppgave.$oppgaveId"
  ) as { journalposter: IJournalpost[] };

  console.log(journalposter);

  const [fileUrl, setFileUrl] = useState(`${getEnv("BASE_PATH")}/test.pdf`);
  const [journalpostId, setJournalpostId] = useState<string>("");
  const [dokumentInfoId, setDokumentInfoId] = useState<string>("");

  function setUrl(event: React.ChangeEvent<HTMLSelectElement>) {
    setFileUrl(event.currentTarget.value);
  }

  async function handleHentDokument() {
    // const journalpostId = "598116231";
    // const dokumentInfoId = "624863374";
    const variantFormat = "ARKIV";

    if (!journalpostId || !dokumentInfoId) {
      return;
    }

    const url = `/saksbehandling/api/hent-dokument/${journalpostId}/${dokumentInfoId}/${variantFormat}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Response(`Feil ved kall til ${url}`, {
        status: response.status,
        statusText: response.statusText,
      });
    }

    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    setFileUrl(blobUrl);
  }

  const currentActiveJournalpost = journalposter.find(
    (journalpost) => journalpost.journalpostId === journalpostId
  );

  return (
    <div>
      <Heading size={"medium"} level={"3"}>
        Dokumenter
      </Heading>

      <Button onClick={handleHentDokument}>Hent dokument</Button>

      <div>
        <Select className={styles.dropdown} label={"Velg fil"} onChange={setUrl} value={fileUrl}>
          <option value={`${getEnv("BASE_PATH")}/sample.pdf`}>sample.pdf</option>
          <option value={`${getEnv("BASE_PATH")}/test.pdf`}>test.pdf</option>
        </Select>
      </div>

      {journalposter.length > 0 && (
        <div>
          <Select
            className={styles.dropdown}
            label={"Velg Journalpost"}
            onChange={(event) => setJournalpostId(event.currentTarget.value)}
            value={journalpostId}
          >
            {journalposter.map((journalpost) => (
              <option key={journalpost.journalpostId} value={journalpost.journalpostId}>
                {journalpost.tittel}
              </option>
            ))}
          </Select>

          {currentActiveJournalpost && (
            <Select
              className={styles.dropdown}
              label={"Velg Dokument"}
              onChange={(event) => setDokumentInfoId(event.currentTarget.value)}
              value={dokumentInfoId}
            >
              {currentActiveJournalpost.dokumenter.map((dokument) => (
                <option key={dokument.dokumentInfoId} value={dokument.dokumentInfoId}>
                  {dokument.tittel}
                </option>
              ))}
            </Select>
          )}
        </div>
      )}

      <div className={styles.iframeWrapper}>
        <iframe title={"Pdf leser"} src={fileUrl} className={styles.iframe}></iframe>
      </div>
    </div>
  );
}
