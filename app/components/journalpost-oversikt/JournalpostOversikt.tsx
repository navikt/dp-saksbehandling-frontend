import { Button, Detail, Heading, List } from "@navikt/ds-react";

import { HttpProblemAlert } from "~/components/http-problem-alert/HttpProblemAlert";
import { IAlert } from "~/context/alert-context";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { isAlert, isDefined } from "~/utils/type-guards";

import { JournalpostQuery, Variantformat } from "../../../graphql/generated/saf/graphql";

interface IProps {
  journalposterResponse: (JournalpostQuery["journalpost"] | IAlert)[];
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
    <div className={"flex flex-col gap-6"}>
      {journalposterResponse.map((journalpost, index) => {
        if (isAlert(journalpost)) {
          return <HttpProblemAlert key={index} error={journalpost} />;
        }

        const dokumenterMedTilgang = journalpost?.dokumenter
          ?.map((dokument) => {
            if (!dokument) return null;

            // Filtrer ut dokumentvarianter hvor saksbehandler ikke har tilgang eller hvor variantformat er "ORIGINAL". Vi er usikre på hva original er, men den kan ikke åpnes som et dokument. Ser heller ikke ut til å finnesi Gosys
            const dokumentvarianterMedTilgang = dokument.dokumentvarianter.filter(
              (variant) =>
                variant?.saksbehandlerHarTilgang && variant?.variantformat !== "ORIGINAL",
            );

            if (dokumentvarianterMedTilgang.length === 0) return null;
            return { ...dokument, dokumentvarianter: dokumentvarianterMedTilgang };
          })
          .filter(isDefined);

        if (!dokumenterMedTilgang || dokumenterMedTilgang.length === 0) {
          return (
            <Heading
              key={index}
              size={"xsmall"}
              level={"2"}
              className={"border-l-2 border-(--a-border-subtle) pl-2"}
            >
              Du har ikke tilgang til journalpost med id {journalpost?.journalpostId}
            </Heading>
          );
        }

        return (
          <div key={index} className={"border-l-2 border-(--a-border-subtle) pl-2"}>
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
