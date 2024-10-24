import { useEffect, useState } from "react";
import { Button, List, Select } from "@navikt/ds-react";
import type { JournalpostQuery } from "../../../graphql/generated/saf/graphql";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { logger } from "~/utils/logger.utils";
import styles from "./JournalpostOversikt.module.css";

interface IProps {
  journalposter: JournalpostQuery["journalpost"][];
}

export function JournalpostOversikt({ journalposter }: IProps) {
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const [valgtJournalpost, setValgtJournalpost] = useState<
    JournalpostQuery["journalpost"] | undefined
  >(journalposter[0]);

  useEffect(() => {
    if (journalposter.length > 0) {
      setValgtJournalpost(journalposter[0]);
    }
  }, [journalposter]);

  async function aapneDokument(dokumentInfoId: string) {
    const variantFormat = "ARKIV";

    if (!valgtJournalpost || !dokumentInfoId) {
      return;
    }
    logger.info(
      `Henter dokument for journalpostId: ${valgtJournalpost.journalpostId}. Oppgave journalpostIder: ${oppgave.journalpostIder}`,
    );
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
