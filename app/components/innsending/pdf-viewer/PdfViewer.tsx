interface IProps {
  valgtDokument: string;
}

export function PdfViewer({ valgtDokument }: IProps) {
  return (
    <div className="card h-full min-h-screen p-4">
      <embed src={valgtDokument} type="application/pdf" width="100%" height="100%" />
    </div>
  );
}
