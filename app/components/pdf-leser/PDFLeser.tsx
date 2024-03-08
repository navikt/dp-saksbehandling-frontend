import { useRef, useState } from "react";
import { Button, Heading, List, Loader, Modal, Select } from "@navikt/ds-react";

import styles from "./PDFLeser.module.css";
import type { JournalpostQuery } from "../../../graphql/generated/saf/graphql";

interface IPDFLeserProps {
  journalposter: JournalpostQuery["journalpost"][];
}

export function PDFLeser({ journalposter }: IPDFLeserProps) {
  const filModalRef = useRef<HTMLDialogElement>(null);
  const [valgtFilUrl, setValgtFilUrl] = useState<string>("");
  const [valgtJournalpost, setValgtJournalpost] = useState<
    JournalpostQuery["journalpost"] | undefined
  >(journalposter[0]);

  async function hentDokument(dokumentInfoId: string) {
    // const valgtJournalpost = "598116231";
    // const dokumentInfoId = "624863374";
    const variantFormat = "ARKIV";

    if (!valgtJournalpost || !dokumentInfoId) {
      return;
    }

    const url = `/saksbehandling/api/hent-dokument/${valgtJournalpost.journalpostId}/${dokumentInfoId}/${variantFormat}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Response(`Feil ved kall til ${url}`, {
        status: response.status,
        statusText: response.statusText,
      });
    }

    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    setValgtFilUrl(blobUrl);
  }

  function velgJournalpost(journalpostId: string) {
    const valgtJournalpost = journalposter.find(
      (journalpost) => journalpost?.journalpostId === journalpostId,
    );
    setValgtJournalpost(valgtJournalpost);
  }

  return (
    <div>
      <Heading size={"medium"} level={"3"}>
        Dokumenter
      </Heading>

      <Select
        className={styles.dropdown}
        label={"Velg Journalpost"}
        onChange={(event) => velgJournalpost(event.currentTarget.value)}
        value={valgtJournalpost?.journalpostId}
      >
        {journalposter.map((journalpost) => (
          <option key={journalpost?.journalpostId} value={journalpost?.journalpostId}>
            {journalpost?.tittel}
          </option>
        ))}
      </Select>

      {valgtJournalpost && (
        <List as="ul" size="small" title="Filer">
          {valgtJournalpost.dokumenter?.map((dokument) => (
            <List.Item key={dokument?.dokumentInfoId}>
              {dokument && (
                <Button
                  type="button"
                  size="xsmall"
                  variant="tertiary"
                  onClick={() => {
                    filModalRef.current?.showModal();
                    hentDokument(dokument.dokumentInfoId);
                  }}
                >
                  {dokument.tittel}
                </Button>
              )}
            </List.Item>
          ))}
        </List>
      )}

      <Modal
        className={styles.pdfModal}
        ref={filModalRef}
        closeOnBackdropClick
        header={{
          heading: "",
          size: "small",
          closeButton: true,
        }}
      >
        <Modal.Body>
          {!valgtFilUrl && (
            <div className={styles.loaderContainer}>
              <Loader size="3xlarge" title="Henter dokument..." />
              Henter dokument...
            </div>
          )}

          {valgtFilUrl && (
            <div className={styles.iframeWrapper}>
              <iframe title={"Pdf leser"} src={valgtFilUrl} className={styles.iframe}></iframe>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}
