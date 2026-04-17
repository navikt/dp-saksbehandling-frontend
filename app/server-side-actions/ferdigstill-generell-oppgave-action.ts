import { parseFormData, validationError } from "@rvf/react-router";
import { components } from "openapi/saksbehandling-typer";
import { ActionFunctionArgs, redirect } from "react-router";

import { IAlert } from "~/context/alert-context";
import { ferdigstillGenerellOppgave } from "~/models/saksbehandling.server";
import { commitSession, getSession } from "~/sessions";
import { formaterTilBackendDato } from "~/utils/dato.utils";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import {
  hentValideringForFerdigstillGenerellOppgave,
  NyBehandlingType,
} from "~/utils/validering.util";

export async function ferdigstillGenerellOppgaveAction(
  request: Request,
  params: ActionFunctionArgs["params"],
  formData: FormData,
) {
  const validertSkjema = await parseFormData(
    formData,
    hentValideringForFerdigstillGenerellOppgave(),
  );

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { data } = validertSkjema;

  const body: components["schemas"]["FerdigstillGenerellOppgaveRequest"] = {
    sakId: data.sakId,
    vurdering: data.vurdering,
    behandlingsvariant: data.behandlingsvariant === "INGEN" ? undefined : data.behandlingsvariant,
  };

  if (data.behandlingsvariant === "GENERELL_OPPGAVE") {
    body.nyOppgave = {
      tittel: data.nyOppgaveTittel,
      aarsak: data.nyOppgaveEmneknagg,
      beskrivelse: data.nyOppgaveBeskrivelse,
      frist: data.nyOppgaveFrist ? formaterTilBackendDato(data.nyOppgaveFrist) : undefined,
      beholdOppgaven: data.nyOppgaveTildelSammeSaksbehandler,
    };
  }

  const { error } = await ferdigstillGenerellOppgave(request, data.behandlingId, body);

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
    case "GENERELL_OPPGAVE":
      return "Oppgave ferdigstilt, ny generell oppgave opprettet ✅";
  }
}
