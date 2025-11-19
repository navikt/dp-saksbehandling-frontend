import { IValgtDokument } from "~/routes/oppgave.$oppgaveId.innsending.$behandlingId";

interface IProps {
  valgtDokument: IValgtDokument;
}

export function PdfViewer({ valgtDokument }: IProps) {
  return (
    <div className="card h-full min-h-screen p-4">
      <embed src={valgtDokument.blobUrl} type="application/pdf" width="100%" height="100%" />
    </div>
  );
}
