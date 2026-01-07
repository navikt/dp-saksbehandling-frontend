import { useEffect, useState } from "react";

import { PdfViewer } from "~/components/innsending/pdf-viewer/PdfViewer";
import { hentJournalpost } from "~/models/saf.server";
import { IValgtDokument } from "~/routes/oppgave.$oppgaveId.innsending.$behandlingId";
import { logger } from "~/utils/logger.utils";
import { isAlert, isDefined } from "~/utils/type-guards";

import type { JournalpostQuery } from "../../../graphql/generated/saf/graphql";

interface IProps {
  journalposter: Awaited<ReturnType<typeof hentJournalpost>>[];
}

const VEDTAK_BREVKODE = "NAV-DAGPENGER-VEDTAK";

function MeldingOmVedtakPDF({ journalposter }: IProps) {
  const [dokument, setDokument] = useState<IValgtDokument | null>(null);

  useEffect(() => {
    hentDokument();
  }, [journalposter]);

  async function hentDokument() {
    const vedtakJournalpost = journalposter
      .filter(
        (journalpost): journalpost is NonNullable<JournalpostQuery["journalpost"]> =>
          isDefined(journalpost) && !isAlert(journalpost),
      )
      .find((journalpost) =>
        journalpost.dokumenter?.some((dokument) => dokument?.brevkode === VEDTAK_BREVKODE),
      );

    if (!vedtakJournalpost) {
      return;
    }

    const vedtakDokument = vedtakJournalpost.dokumenter?.find(
      (dok) => dok?.brevkode === VEDTAK_BREVKODE,
    );

    if (!vedtakDokument?.dokumentInfoId) {
      return;
    }

    const url = `/api/hent-dokument/${vedtakJournalpost.journalpostId}/${vedtakDokument.dokumentInfoId}/ARKIV`;
    const response = await fetch(url);

    if (!response.ok) {
      logger.error(`Feil ved kall til ${url}`);
      return;
    }

    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    setDokument({
      blobUrl,
      dokumentId: vedtakDokument.dokumentInfoId,
    });
  }

  if (!dokument) {
    return <div>Fant ingen vedtak PDF</div>;
  }

  return <PdfViewer valgtDokument={dokument} />;
}

export default MeldingOmVedtakPDF;
