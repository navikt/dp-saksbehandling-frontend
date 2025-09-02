import { IAlert } from "~/context/alert-context";
import { IMeldingOmVedtakKilde } from "~/context/melding-om-vedtak-context";
import { lagreMeldingOmVedtak } from "~/models/saksbehandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";

export async function lagreMeldingOmVedtakKildeAction(request: Request, formData: FormData) {
  const oppgaveId = formData.get("oppgave-id") as string;
  const meldingOmVedtakKilde = formData.get("melding-om-vedtak-kilde") as IMeldingOmVedtakKilde;

  if (meldingOmVedtakKilde == null) {
    throw new Error("Mangler kilde for melding om vedtak");
  }

  if (!oppgaveId) {
    throw new Error("Mangler oppgaveId");
  }

  const { response, error } = await lagreMeldingOmVedtak(request, oppgaveId, meldingOmVedtakKilde);

  if (error) {
    return getHttpProblemAlert(error);
  }

  if (response.status == 204) {
    const successAlert: IAlert = {
      variant: "success",
      title: "Kilde for melding om vedtak lagret",
    };
    return successAlert;
  }

  throw new Error(`Uhåndtert feil i lagreMeldingOmVedtakKildeAction(): ${response.status}`);
}
