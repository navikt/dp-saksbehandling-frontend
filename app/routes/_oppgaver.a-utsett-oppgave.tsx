import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { utsettOppgave } from "~/models/oppgave.server";
import { logger } from "~/utils/logger.utils";
import type { IAlertResponse } from "~/context/alert-context";
import { formaterNorskDato } from "~/utils/dato.utils";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const oppgaveId = formData.get("oppgaveId") as string;
  const utsettTilDato = formData.get("utsettTilDato") as string;
  const beholdOppgave = formData.has("beholdOppgave");

  if (!oppgaveId) {
    throw new Error("Mangler oppgaveId");
  }

  const utsettResponse = await utsettOppgave(request, oppgaveId, utsettTilDato, beholdOppgave);

  if (utsettResponse.ok) {
    return json<IAlertResponse>({
      alert: true,
      httpCode: utsettResponse.status,
      message: `Oppgave utsatt til ${formaterNorskDato(utsettTilDato)}`,
    });
  }

  logger.warn(`${utsettResponse.status} - Feil ved kall til ${utsettResponse.url}`);

  return json<IAlertResponse>({
    alert: true,
    httpCode: utsettResponse.status,
    message: utsettResponse.statusText,
  });
}
