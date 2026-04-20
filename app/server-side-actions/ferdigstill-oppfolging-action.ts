import { parseFormData, validationError } from "@rvf/react-router";
import { components } from "openapi/saksbehandling-typer";
import { ActionFunctionArgs, redirect } from "react-router";

import { IAlert } from "~/context/alert-context";
import { ferdigstillOppfolging } from "~/models/saksbehandling.server";
import { commitSession, getSession } from "~/sessions";
import { formaterTilBackendDato } from "~/utils/dato.utils";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForFerdigstillOppfolging, NyBehandlingType } from "~/utils/validering.util";

export async function ferdigstillOppfolgingAction(
  request: Request,
  params: ActionFunctionArgs["params"],
  formData: FormData,
) {
  const validertSkjema = await parseFormData(formData, hentValideringForFerdigstillOppfolging());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { data } = validertSkjema;

  const body: components["schemas"]["FerdigstillOppfolgingRequest"] = {
    sakId: data.sakId,
    vurdering: data.vurdering,
    behandlingsvariant: data.behandlingsvariant === "INGEN" ? undefined : data.behandlingsvariant,
  };

  if (data.behandlingsvariant === "OPPFOLGING") {
    body.nyOppgave = {
      tittel: data.nyOppgaveTittel,
      aarsak: data.nyOppgaveEmneknagg,
      beskrivelse: data.nyOppgaveBeskrivelse,
      frist: data.nyOppgaveFrist ? formaterTilBackendDato(data.nyOppgaveFrist) : undefined,
      beholdOppgaven: data.nyOppgaveTildelSammeSaksbehandler,
    };
  }

  const { error } = await ferdigstillOppfolging(request, data.behandlingId, body);

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

function hentTekstForFerdigstilling(variant: NyBehandlingType) {
  switch (variant) {
    case "INGEN":
      return "Oppgave ferdigstilt ✅";
    case "RETT_TIL_DAGPENGER_MANUELL":
      return "Oppgave ferdigstilt, ny behandling opprettet ✅";
    case "RETT_TIL_DAGPENGER_REVURDERING":
      return "Oppgave ferdigstilt, ny behandling opprettet ✅";
    case "KLAGE":
      return "Oppgave ferdigstilt, ny klage opprettet ✅";
    case "OPPFOLGING":
      return "Oppgave ferdigstilt, ny oppfølging opprettet ✅";
  }
}
