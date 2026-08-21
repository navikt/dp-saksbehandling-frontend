import { FilePdfIcon } from "@navikt/aksel-icons";
import { BodyShort, Button, Detail, List } from "@navikt/ds-react";
import { Fragment } from "react";

import { JournalpostResponse } from "~/api/journalpost";
import { hentDokumenterMedTilgang } from "~/components/dokument-oversikt/dokument-oversikt.utils";
import { HttpProblemAlert } from "~/components/http-problem-alert/HttpProblemAlert";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { isAlert } from "~/utils/type-guards";

import { Variantformat } from "../../../graphql/generated/saf/graphql";

interface IProps {
  journalposterResponse: JournalpostResponse[];
}

export function JournalpostOversikt({ journalposterResponse }: IProps) {
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
    <div className={"flex flex-col gap-2"}>
      {journalposterResponse.map((journalpost, index) => {
        if (isAlert(journalpost)) {
          return <HttpProblemAlert key={index} error={journalpost} />;
        }

        const dokumenterMedTilgang = hentDokumenterMedTilgang(journalpost);

        if (!dokumenterMedTilgang || dokumenterMedTilgang.length === 0) {
          return (
            <BodyShort
              key={index}
              size={"small"}
              weight={"semibold"}
              className={"border-b border-(--ax-border-neutral-subtle) pb-2"}
            >
              Du har ikke tilgang til journalpost med id {journalpost?.journalpostId}
            </BodyShort>
          );
        }

        return (
          <div key={index} className={"border-b border-(--ax-border-neutral-subtle)"}>
            <List as="ul" size="small">
              {journalpost?.dokumenter && journalpost.dokumenter.length === 0 && (
                <List.Item>Ingen dokumenter</List.Item>
              )}

              {journalpost &&
                dokumenterMedTilgang.map((dokument) =>
                  dokument?.dokumentvarianter.map((variant, index) => (
                    <Fragment key={index}>
                      {dokument && variant && (
                        <List.Item
                          icon={<FilePdfIcon color={"var(--ax-text-subtle)"} aria-hidden />}
                        >
                          <Button
                            className={"text-start"}
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
                            {dokument.tittel}{" "}
                            {variant.variantformat !== "ARKIV" && `[${variant.variantformat}]`}
                          </Button>
                        </List.Item>
                      )}
                    </Fragment>
                  )),
                )}
            </List>

            {journalpost?.datoOpprettet && (
              <Detail textColor={"subtle"} className={"pt-2"}>
                Mottatt: {formaterTilNorskDato(journalpost.datoOpprettet, true)}
              </Detail>
            )}
          </div>
        );
      })}
    </div>
  );
}
