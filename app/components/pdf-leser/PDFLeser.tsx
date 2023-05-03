import React, { useState } from "react";
import { Button, Heading, Select } from "@navikt/ds-react";

import styles from "./PDFLeser.module.css";
import { getEnv } from "~/utils/env.utils";
import { useRouteLoaderData } from "@remix-run/react";
import type { IOppgave } from "~/models/oppgave.server";

export function PDFLeser() {
  const { oppgave } = useRouteLoaderData(
    "routes/saksbehandling.person.$ident.oppgave.$oppgaveId"
  ) as { oppgave: IOppgave };

  console.log(oppgave);

  const [fileUrl, setFileUrl] = useState(`${getEnv("BASE_PATH")}/test.pdf`);
  const [journalpostId, setJournalpostId] = useState<string>("");

  function setUrl(event: React.ChangeEvent<HTMLSelectElement>) {
    setFileUrl(event.currentTarget.value);
  }

  async function handleHentDokument() {
    const journalpostId = "598116231";
    const dokumentInfoId = "624863374";
    const variantFormat = "ARKIV";

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

  console.log("oppgave.journalposter: ", oppgave.journalposter);
  console.log("oppgave.journalposter.length: ", oppgave.journalposter.length);

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

      {oppgave.journalposter.length > 0 && (
        <div>
          <Select
            className={styles.dropdown}
            label={"Velg Journalpost"}
            onChange={(event) => setJournalpostId(event.currentTarget.value)}
            value={journalpostId}
          >
            {oppgave.journalposter.map((journalpostId) => (
              <option key={journalpostId} value={journalpostId}>
                {journalpostId}
              </option>
            ))}
          </Select>
        </div>
      )}

      <div className={styles.iframeWrapper}>
        <iframe title={"Pdf leser"} src={fileUrl} className={styles.iframe}></iframe>
      </div>
    </div>
  );
}
