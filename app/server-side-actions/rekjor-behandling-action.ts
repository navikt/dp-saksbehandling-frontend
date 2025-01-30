import { json } from "@remix-run/node";

import { rekjorBehandling } from "~/models/behandling.server";
import { getAlertMessage } from "~/utils/alert-message.utils";
import { logger } from "~/utils/logger.utils";

export async function rekjorBehandlingAction(request: Request, formData: FormData) {
  const behandlingId = formData.get("behandlingId") as string;
  const ident = formData.get("ident") as string;

  if (!behandlingId) {
    throw new Error("Mangler behandlingId");
  }

  if (!ident) {
    throw new Error("Mangler ident");
  }

  const response = await rekjorBehandling(request, behandlingId, ident);
  const alert = getAlertMessage({ name: "rekjor-behandling", httpCode: response.status });

  if (!response.ok) {
    logger.warn(`${response.status} - Feil ved kall til ${response.url}`);
    return json(alert);
  }

  return json(alert);
}
