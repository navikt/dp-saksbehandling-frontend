import { ActionFunctionArgs, redirect } from "react-router";
import invariant from "tiny-invariant";

import { ferdigstillBehandlingKlage } from "~/models/saksbehandling.server";
import { getErrorAlert } from "~/utils/error-response.utils";

export async function ferdigstillBehandlingKlageAction(
  request: Request,
  params: ActionFunctionArgs["params"],
  formData: FormData,
) {
  const behandlingId = formData.get("behandlingId") as string;
  invariant(behandlingId, "behandlingId er påkrevd");
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");

  const { error, response } = await ferdigstillBehandlingKlage(request, behandlingId);

  if (error) {
    return getErrorAlert(error, response);
  }

  return redirect(`/oppgave/${params.oppgaveId}/klage/${behandlingId}/behandling-ferdig`);
}
