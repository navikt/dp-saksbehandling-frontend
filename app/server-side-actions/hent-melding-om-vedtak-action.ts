import { hentMeldingOmVedtak } from "~/models/melding-om-vedtak.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";

export async function hentMeldingOmVedtakAction(request: Request, formData: FormData) {
  const behandlingId = formData.get("behandlingId") as string;
  const fornavn = formData.get("fornavn") as string;
  const mellomnavn = formData.get("mellomnavn") as string;
  const etternavn = formData.get("etternavn") as string;
  const fodselsnummer = formData.get("fodselsnummer") as string;
  const saksbehandler = formData.get("saksbehandler") as string;
  const beslutter = formData.get("beslutter") as string;

  const body = {
    fornavn,
    mellomnavn,
    etternavn,
    fodselsnummer,
    saksbehandler: saksbehandler ? JSON.parse(saksbehandler) : undefined,
    beslutter: beslutter ? JSON.parse(beslutter) : undefined,
  };

  const { data, error } = await hentMeldingOmVedtak(request, behandlingId, body);

  if (data) {
    return data;
  }

  if (error) {
    return getHttpProblemAlert(error);
  }

  throw new Error(`Uhåndtert feil i hentMeldingOmVedtak()`);
}
