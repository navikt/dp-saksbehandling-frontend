import { FilePdfIcon } from "@navikt/aksel-icons";
import { BodyShort, Button, Detail, List } from "@navikt/ds-react";
import { useEffect, useMemo } from "react";
import { Fragment } from "react/jsx-runtime";

import { Variantformat } from "@/graphql/generated/saf/graphql";
import { useJournalposterQuery } from "~/api/journalpost-hooks";
import { AsyncErrorMelding } from "~/components/async-error-melding/AsyncErrorMelding";
import { CenteredLoader } from "~/components/centered-loader/CenteredLoader";
import { hentDokumenterMedTilgang } from "~/components/dokument-oversikt/dokument-oversikt.utils";
import { HttpProblemAlert } from "~/components/http-problem-alert/HttpProblemAlert";
import { IValgtDokument } from "~/components/innsending/pdf-viewer/PdfViewer";
import { useOppgave } from "~/hooks/useOppgave";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { isAlert } from "~/utils/type-guards";

interface IProps {
  valgtDokument?: IValgtDokument;
  setValgtDokument: (valgtDokument: IValgtDokument) => void;
}

export function InnsendingDokumentOversikt({ valgtDokument, setValgtDokument }: IProps) {
  const { oppgave } = useOppgave();
  const { data: journalposter, error, pending } = useJournalposterQuery(oppgave.journalpostIder);
  const førsteJournalpost = useMemo(() => {
    const journalpost = journalposter[0];
    return !isAlert(journalpost) ? journalpost : undefined;
  }, [journalposter]);

  useEffect(() => {
    if (pending || error || valgtDokument || !førsteJournalpost?.dokumenter) {
      return;
    }

    const førsteDokument = førsteJournalpost.dokumenter[0];
    if (førsteDokument) {
      setValgtDokument({
        journalpostId: førsteJournalpost.journalpostId,
        dokumentInfoId: førsteDokument.dokumentInfoId,
        variantFormat: Variantformat.Arkiv,
      });
    }
  }, [error, førsteJournalpost, pending, setValgtDokument, valgtDokument]);

  if (pending) {
    return <CenteredLoader size={"large"} loadingText={"Henter dokumenter"} />;
  }

  if (error) {
    return (
      <AsyncErrorMelding
        tittel={"En feil oppsto når vi skulle hente ut dokumentene 🤖"}
        feilmelding={error.message}
      />
    );
  }

  return (
    <div className={"p-4"}>
      <div className={"flex flex-col gap-2"}>
        {journalposter.map((journalpost, index) => {
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
                              variant={
                                valgtDokument?.dokumentInfoId === dokument.dokumentInfoId
                                  ? "tertiary-neutral"
                                  : "tertiary"
                              }
                              onClick={() =>
                                setValgtDokument({
                                  journalpostId: journalpost?.journalpostId,
                                  dokumentInfoId: dokument.dokumentInfoId,
                                  variantFormat: variant.variantformat,
                                })
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
    </div>
  );
}
