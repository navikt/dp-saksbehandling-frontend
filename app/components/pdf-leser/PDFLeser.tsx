import React, { useEffect, useState } from "react";
import { Alert, Heading, Select } from "@navikt/ds-react";

import styles from "./PDFLeser.module.css";
import { useRouteLoaderData } from "@remix-run/react";
import type { IJournalpost } from "~/models/SAF.server";

export function PDFLeser() {
  const { journalposter } = useRouteLoaderData("routes/saksbehandling.oppgave.$oppgaveId") as {
    journalposter: IJournalpost[];
  };

  console.log("journalposter for pdf leser fra saf: ", journalposter);

  const [fileUrl, setFileUrl] = useState<string>("");
  const [journalpostId, setJournalpostId] = useState<string>(journalposter[0].journalpostId ?? "");
  const [dokumentInfoId, setDokumentInfoId] = useState<string>("");

  useEffect(() => {
    if (dokumentInfoId) {
      hentDokument();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dokumentInfoId]);

  useEffect(() => {
    setFileUrl("");
    setDokumentInfoId("");
  }, [journalpostId]);

  async function hentDokument() {
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
    (journalpost) => journalpost.journalpostId === journalpostId,
  );

  return (
    <div>
      <Heading size={"medium"} level={"3"}>
        Dokumenter
      </Heading>

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
          {currentActiveJournalpost &&
            currentActiveJournalpost.dokumenter.find((dokument) => {
              return !dokument.dokumentvarianter[0].saksbehandlerHarTilgang;
            }) && <Alert variant={"warning"}> AIIII DU HAR IKKE TILGANG</Alert>}

          {currentActiveJournalpost && (
            <Select
              className={styles.dropdown}
              label={"Velg Dokument"}
              onChange={(event) => setDokumentInfoId(event.currentTarget.value)}
              value={dokumentInfoId}
            >
              <option key={"velg-dokument"} value={""} hidden>
                Velg dokument
              </option>
              {currentActiveJournalpost.dokumenter.map((dokument) => (
                <option key={dokument.dokumentInfoId} value={dokument.dokumentInfoId}>
                  {dokument.tittel}
                </option>
              ))}
            </Select>
          )}
        </div>
      )}

      {fileUrl && (
        <div className={styles.iframeWrapper}>
          <iframe title={"Pdf leser"} src={fileUrl} className={styles.iframe}></iframe>
        </div>
      )}
    </div>
  );
}
