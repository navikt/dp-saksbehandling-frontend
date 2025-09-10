import { Button, Detail, Heading, List } from "@navikt/ds-react";

import { formaterTilNorskDato } from "~/utils/dato.utils";
import { isDefined } from "~/utils/type-guards";

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
    <div className={"flex flex-col gap-6"}>
      {journalposter.map((journalpost, index) => {
        const dokumenterMedTilgang = journalpost?.dokumenter
          ?.map((dokument) => {
            if (!dokument) return null;
            const dokumentvarianterMedTilgang = dokument.dokumentvarianter.filter(
              (variant) => variant?.saksbehandlerHarTilgang,
            );

            if (dokumentvarianterMedTilgang.length === 0) return null;

            return { ...dokument, dokumentvarianter: dokumentvarianterMedTilgang };
          })
          .filter(isDefined);

        console.log("journalpost", journalpost);
        console.log("dokumenterMedTilgang", dokumenterMedTilgang);

        if (!dokumenterMedTilgang || dokumenterMedTilgang.length === 0) {
          return (
            <Heading key={index} size={"xsmall"} level={"2"}>
              Du har ikke tilgang til journalpost med id {journalpost?.journalpostId}
            </Heading>
          );
        }

        return (
          <div key={index}>
            <Heading size={"xsmall"} level={"2"}>
              {journalpost?.tittel}
            </Heading>
            {journalpost?.datoOpprettet && (
              <Detail textColor={"subtle"}>
                {formaterTilNorskDato(journalpost.datoOpprettet, true)}
              </Detail>
            )}

            <List as="ul" size="small">
              {journalpost?.dokumenter && journalpost.dokumenter.length === 0 && (
                <List.Item>Ingen dokumenter</List.Item>
              )}

              {journalpost &&
                dokumenterMedTilgang.map((dokument) =>
                  dokument?.dokumentvarianter.map((variant) => (
                    <>
                      {dokument && variant && (
                        <List.Item>
                          <Button
                            type="button"
                            size="xsmall"
                            variant="tertiary"
                            onClick={() =>
                              aapneDokument(
                                journalpost?.journalpostId,
                                dokument.dokumentInfoId,
                                variant.variantformat,
                              )
                            }
                          >
                            {dokument.tittel}
                          </Button>
                        </List.Item>
                      )}
                    </>
                  )),
                )}
            </List>
          </div>
        );
      })}
    </div>
  );
}
