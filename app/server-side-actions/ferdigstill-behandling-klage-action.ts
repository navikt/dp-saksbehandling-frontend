import { ActionFunctionArgs, redirect } from "react-router";
import invariant from "tiny-invariant";

import { ferdigstillBehandlingKlage } from "~/models/saksbehandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";

export async function ferdigstillBehandlingKlageAction(
  request: Request,
  params: ActionFunctionArgs["params"],
  formData: FormData,
) {
  const behandlingId = formData.get("behandlingId") as string;
  invariant(behandlingId, "behandlingId er påkrevd");
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");

  const { error } = await ferdigstillBehandlingKlage(request, behandlingId);

  if (error) {
    return getHttpProblemAlert(error);
  }

  return redirect(`/oppgave/${params.oppgaveId}/klage/${behandlingId}/behandling-ferdig`);
}
