import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import { Variantformat } from "@/graphql/generated/saf/graphql";
import { AsyncErrorMelding } from "~/components/async-error-melding/AsyncErrorMelding";
import { CenteredLoader } from "~/components/centered-loader/CenteredLoader";

export interface IValgtDokument {
  journalpostId: string;
  dokumentInfoId: string;
  variantFormat: Variantformat;
}

interface IProps {
  valgtDokument: IValgtDokument;
}

export function PdfViewer({ valgtDokument }: IProps) {
  const { journalpostId, dokumentInfoId, variantFormat } = valgtDokument;
  const { data, error, isPending } = useQuery({
    queryKey: ["dokument", journalpostId, dokumentInfoId, variantFormat],
    queryFn: () => fetchDokumentBlobUrl(valgtDokument),
  });

  useEffect(() => {
    return () => {
      if (data) {
        window.URL.revokeObjectURL(data);
      }
    };
  }, [data]);

  return (
    <div className="card h-full min-h-screen p-4">
      {isPending && <CenteredLoader size={"large"} loadingText={"Henter dokument"} />}
      {error && (
        <AsyncErrorMelding
          tittel={"En feil oppsto når vi skulle hente dokumentet"}
          feilmelding={error.message}
        />
      )}
      {data && <embed src={data} type="application/pdf" width="100%" height="100%" />}
    </div>
  );
}

async function fetchDokumentBlobUrl(valgtDokument: IValgtDokument) {
  const url = `/api/hent-dokument/${valgtDokument.journalpostId}/${valgtDokument.dokumentInfoId}/${valgtDokument.variantFormat}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Feil ved kall til ${url}`);
  }

  const blob = await response.blob();
  return window.URL.createObjectURL(blob);
}
