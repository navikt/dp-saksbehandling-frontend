import { variance } from "@babel/types";
import { Button, Detail, Heading, List } from "@navikt/ds-react";
import { Fragment } from "react";

import { formaterTilNorskDato } from "~/utils/dato.utils";

import { JournalpostQuery, Variantformat } from "../../../graphql/generated/saf/graphql";

interface IProps {
  journalposter: JournalpostQuery["journalpost"][];
}

export function JournalpostOversikt({ journalposter }: IProps) {
  async function aapneDokument(
    journalpostId: string,
    dokumentInfoId: string,
    variantFormat: Variantformat,
  ) {
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
            {journalpost?.dokumenter && journalpost.dokumenter.length === 0 && (
              <List.Item>Ingen dokumenter</List.Item>
            )}

            {journalpost?.dokumenter &&
              journalpost.dokumenter.map((dokument) => {
                if (!dokument) return null;
                // Basert på SAF sin graphql dokumentasjon har vi gjort antagelsen at vi prøver å hente arkiv varianten først hvis det finnes.
                // Dokumentvariant
                // En variant av et dokumentet, som er beregnet på et spesielt formål, for eksempel langtidsbevaring eller automatisk saksbehandling.
                // De fleste dokumenter vil kun returneres i variantformat ARKIV. Dersom det eksisterer andre varianter av dokumentet, vil disse også returneres, gitt at saksbehandler har rettigheter som tilsier at han/hun skal vite at det finnes andre varianter.
                let dokumentVariantMedTilgang;
                dokumentVariantMedTilgang = dokument?.dokumentvarianter.find(
                  (variant) =>
                    variant?.saksbehandlerHarTilgang && variant?.variantformat === "ARKIV",
                );

                if (!dokumentVariantMedTilgang) {
                  dokumentVariantMedTilgang = dokument?.dokumentvarianter.find(
                    (variant) => variant?.saksbehandlerHarTilgang,
                  );
                }

                return (
                  <>
                    {dokumentVariantMedTilgang && (
                      <List.Item>
                        <Button
                          type="button"
                          size="xsmall"
                          variant="tertiary"
                          onClick={() =>
                            aapneDokument(
                              journalpost?.journalpostId,
                              dokument.dokumentInfoId,
                              dokumentVariantMedTilgang.variantformat,
                            )
                          }
                        >
                          {dokument.tittel}
                        </Button>
                      </List.Item>
                    )}

                    {!dokumentVariantMedTilgang && (
                      <List.Item>Du har ikke tilgang til dokumentet</List.Item>
                    )}
                  </>
                );
              })}
          </List>
        </div>
      ))}
    </>
  );
}
