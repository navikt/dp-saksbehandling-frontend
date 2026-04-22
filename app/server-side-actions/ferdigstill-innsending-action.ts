import { parseFormData, validationError } from "@rvf/react-router";
import { components } from "openapi/saksbehandling-typer";
import { ActionFunctionArgs, redirect } from "react-router";

import { IAlert } from "~/context/alert-context";
import { ferdigstillInnsending } from "~/models/saksbehandling.server";
import { commitSession, getSession } from "~/sessions";
import { formaterTilBackendDato } from "~/utils/dato.utils";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForFerdigstillInnsending, NyBehandlingType } from "~/utils/validering.util";

export async function ferdigstillInnsendingAction(
  request: Request,
  params: ActionFunctionArgs["params"],
  formData: FormData,
) {
  const validertSkjema = await parseFormData(formData, hentValideringForFerdigstillInnsending());

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
    title: hentTekstForFerdigstilling(data.behandlingsvariant),
  };

  const session = await getSession(request.headers.get("Cookie"));
  session.flash("alert", successAlert);

  return redirect(`/oppgave/${params.oppgaveId}/fullfort-oppgave`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

function hentTekstForFerdigstilling(nyBehandlingType: NyBehandlingType) {
  switch (nyBehandlingType) {
    case "RETT_TIL_DAGPENGER_MANUELL":
      return "Innsending ferdigstilt, ny behandling opprettet ✅";
    case "RETT_TIL_DAGPENGER_REVURDERING":
      return "Innsending ferdigstilt, ny behandling opprettet ✅";
    case "KLAGE":
      return "Innsending ferdigstilt, ny klage opprettet ✅";
    case "OPPFOLGING":
      return "Innsending ferdigstilt, ny oppfølging opprettet ✅";
    case "INGEN":
      return "Innsending ferdigstilt ✅";
  }
}
