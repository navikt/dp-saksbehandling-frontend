import { json } from "@remix-run/node";
import invariant from "tiny-invariant";

import { kvitterAvklaring } from "~/models/behandling.server";
import { getAlertMessage } from "~/utils/alert-message.utils";
import { logger } from "~/utils/logger.utils";

export async function kvitterAvklaringAction(request: Request, formData: FormData) {
  const behandlingId = formData.get("behandling-id") as string;
  const avklaringId = formData.get("avklaring-id") as string;
  const begrunnelse = formData.get("begrunnelse") as string;

  invariant(behandlingId, "behandling-id er påkrevd");
  invariant(avklaringId, "avklaring-id er påkrevd");

  const response = await kvitterAvklaring(request, behandlingId, avklaringId, begrunnelse);

  if (!response.ok) {
    logger.warn(`${response.status} - Feil ved kall til ${response.url}`);
  }

  const alert = getAlertMessage({ name: "kvitter-avklaring", httpCode: response.status });
  return json(alert);
}
