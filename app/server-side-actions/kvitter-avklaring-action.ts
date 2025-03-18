import invariant from "tiny-invariant";

import { IAlert } from "~/context/alert-context";
import { kvitterAvklaring } from "~/models/behandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";

export async function kvitterAvklaringAction(request: Request, formData: FormData) {
  const behandlingId = formData.get("behandling-id") as string;
  const avklaringId = formData.get("avklaring-id") as string;
  const begrunnelse = formData.get("begrunnelse") as string;

  invariant(behandlingId, "behandling-id er påkrevd");
  invariant(avklaringId, "avklaring-id er påkrevd");

  const { error } = await kvitterAvklaring(request, behandlingId, avklaringId, begrunnelse);

  if (error) {
    return getHttpProblemAlert(error);
  }

  const successAlert: IAlert = {
    variant: "success",
    title: "Avklaring kvittert",
  };

  return successAlert;
}
