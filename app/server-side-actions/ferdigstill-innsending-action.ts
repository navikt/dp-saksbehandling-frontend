import { parseFormData, validationError } from "@rvf/react-router";
import { ActionFunctionArgs, redirect } from "react-router";

import { components } from "@/openapi/saksbehandling-typer";
import { IAlert } from "~/context/alert-context";
import { ferdigstillInnsending } from "~/models/saksbehandling.server";
import { commitSession, getSession } from "~/sessions";
import { formaterTilBackendDato } from "~/utils/dato.utils";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentTekstForFerdigstilling } from "~/utils/tekst.utils";
import { hentValideringForFerdigstillOppgave } from "~/utils/validering.util";

export async function ferdigstillInnsendingAction(
  request: Request,
  params: ActionFunctionArgs["params"],
  formData: FormData,
) {
  const validertSkjema = await parseFormData(
    formData,
    hentValideringForFerdigstillOppgave("ferdigstill-innsending"),
  );

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const data = validertSkjema.data;

  const body: components["schemas"]["FerdigstillInnsendingRequest"] = {
    sakId: data.sakId,
    behandlingsvariant: data.behandlingsvariant === "INGEN" ? undefined : data.behandlingsvariant,
    vurdering: data.vurdering,
    nyOppgave:
      data.behandlingsvariant === "OPPFOLGING"
        ? {
            tittel: data.tittel,
            aarsak: data.årsak,
            beskrivelse: data.beskrivelse,
            frist: data.frist ? formaterTilBackendDato(data.frist) : undefined,
            beholdOppgaven: data.tildelSammeSaksbehandler === true,
          }
        : undefined,
  };

  const { error } = await ferdigstillInnsending(request, body, data.behandlingId);

  if (error) {
    return getHttpProblemAlert(error);
  }

  const successAlert: IAlert = {
    variant: "success",
    title: hentTekstForFerdigstilling(data.behandlingsvariant, "ferdigstill-innsending"),
  };

  const session = await getSession(request.headers.get("Cookie"));
  session.flash("alert", successAlert);

  return redirect(`/oppgave/${params.oppgaveId}/fullfort-oppgave`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
