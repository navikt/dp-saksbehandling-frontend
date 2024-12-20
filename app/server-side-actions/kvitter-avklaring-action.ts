import invariant from "tiny-invariant";

import { kvitterAvklaring } from "~/models/behandling.server";
import { getAlertMessage } from "~/utils/alert-message.utils";
import { logger } from "~/utils/logger.utils";

export async function kvitterAvklaringAction(request: Request, formData: FormData) {
  const behandlingId = formData.get("behandling-id") as string;
  const avklaringId = formData.get("avklaring-id") as string;

  invariant(behandlingId, "behandling-id er påkrevd");
  invariant(avklaringId, "avklaring-id er påkrevd");

  const response = await kvitterAvklaring(request, behandlingId, avklaringId);

  if (!response.ok) {
    logger.warn(`${response.status} - Feil ved kall til ${response.url}`);
  }

  return getAlertMessage({ name: "kvitter-avklaring", httpCode: response.status });
}
