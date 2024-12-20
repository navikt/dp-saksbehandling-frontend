import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";

import { ferdigstillOppgave, ferdigstillOppgaveMedArenaBrev } from "~/models/oppgave.server";
import { commitSession, getSession } from "~/sessions";
import { getAlertMessage } from "~/utils/alert-message.utils";
import { logger } from "~/utils/logger.utils";

export async function fattVedtakAction(
  request: Request,
  params: ActionFunctionArgs["params"],
  formData: FormData,
) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");

  const brevIArena = (formData.get("send-brev-i-arena") as string) === "true";
  const meldingOmVedtakHtml = formData.get("melding-om-vedtak-html") as string;
  const session = await getSession(request.headers.get("Cookie"));

  let response;
  let alert;

  if (brevIArena) {
    response = await ferdigstillOppgaveMedArenaBrev(request, params.oppgaveId);
    alert = getAlertMessage({
      name: "ferdigstill-oppgave-brev-i-arena",
      httpCode: response.status,
    });
  } else {
    invariant(meldingOmVedtakHtml, "meldingOmVedtakHtml er påkrevd");
    response = await ferdigstillOppgave(request, params.oppgaveId, meldingOmVedtakHtml);
    alert = getAlertMessage({ name: "ferdigstill-oppgave", httpCode: response.status });
  }

  if (!response.ok) {
    logger.warn(`${response.status} - Feil ved kall til ${response.url}`);
    return json(alert);
  }

  session.flash("alert", alert);
  return redirect(`/oppgave/${params.oppgaveId}/se/fullfort-oppgave`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
