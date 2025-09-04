import { Button, Detail, Heading, List } from "@navikt/ds-react";

import { formaterTilNorskDato } from "~/utils/dato.utils";

import type { JournalpostQuery } from "../../../graphql/generated/saf/graphql";

interface IProps {
  journalposter: JournalpostQuery["journalpost"][];
}

export function JournalpostOversikt({ journalposter }: IProps) {
  async function aapneDokument(journalpostId: string, dokumentInfoId: string) {
    const variantFormat = "ARKIV";

    const url = `/api/hent-dokument/${journalpostId}/${dokumentInfoId}/${variantFormat}`;
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

  return (
    <>
      {journalposter.map((journalpost, index) => (
        <div className={"mb-8"} key={index}>
          <Heading size={"xsmall"}>{journalpost?.tittel}</Heading>
          {journalpost?.datoOpprettet && (
            <Detail textColor={"subtle"}>
              {formaterTilNorskDato(journalpost.datoOpprettet, true)}
            </Detail>
          )}

          <List as="ul" size="small">
            {journalpost?.dokumenter?.map((dokument) => (
              <List.Item key={dokument?.dokumentInfoId}>
                {dokument && (
                  <Button
                    type="button"
                    size="xsmall"
                    variant="tertiary"
                    onClick={() =>
                      aapneDokument(journalpost?.journalpostId, dokument.dokumentInfoId)
                    }
                  >
                    {dokument.tittel}
                  </Button>
                )}
              </List.Item>
            ))}
          </List>
        </div>
      ))}
    </>
  );
}
