import { Button, List, Select } from "@navikt/ds-react";
import { useState } from "react";

import { formaterTilNorskDato } from "~/utils/dato.utils";

import type { JournalpostQuery } from "../../../graphql/generated/saf/graphql";
import styles from "./JournalpostOversikt.module.css";

interface IProps {
  journalposter: JournalpostQuery["journalpost"][];
}

export function JournalpostOversikt({ journalposter }: IProps) {
  const [valgtJournalpost, setValgtJournalpost] = useState<
    JournalpostQuery["journalpost"] | undefined
  >(journalposter[0]);

  async function aapneDokument(dokumentInfoId: string) {
    const variantFormat = "ARKIV";

    if (!valgtJournalpost || !dokumentInfoId) {
      return;
    }

    const url = `/api/hent-dokument/${valgtJournalpost.journalpostId}/${dokumentInfoId}/${variantFormat}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Response(`Feil ved kall til ${url}`, {
        status: response.status,
        statusText: response.statusText,
      });
    }

    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    window.open(blobUrl, "_blank");
  }

  function velgJournalpost(journalpostId: string) {
    const valgtJournalpost = journalposter.find(
      (journalpost) => journalpost?.journalpostId === journalpostId,
    );
    setValgtJournalpost(valgtJournalpost);
  }

  return (
    <>
      <Select
        className={styles.dropdown}
        label={"Velg Journalpost"}
        onChange={(event) => velgJournalpost(event.currentTarget.value)}
        value={valgtJournalpost?.journalpostId}
      >
        {journalposter.map((journalpost) => (
          <option key={journalpost?.journalpostId} value={journalpost?.journalpostId}>
            {`${journalpost?.tittel} ${journalpost?.datoOpprettet ? ` : ${formaterTilNorskDato(journalpost.datoOpprettet, true)}` : ""}`}
          </option>
        ))}
      </Select>

      {valgtJournalpost && (
        <List as="ul" size="small" title="Filer" className={"mt-4"}>
          {valgtJournalpost.dokumenter?.map((dokument) => (
            <List.Item key={dokument?.dokumentInfoId}>
              {dokument && (
                <Button
                  type="button"
                  size="xsmall"
                  variant="tertiary"
                  onClick={() => aapneDokument(dokument.dokumentInfoId)}
                >
                  {dokument.tittel}
                </Button>
              )}
            </List.Item>
          ))}
        </List>
      )}
    </>
  );
}
