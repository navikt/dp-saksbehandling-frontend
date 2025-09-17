import { IAlert } from "~/context/alert-context";
import { rekjorBehandling } from "~/models/behandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";

export async function rekjorBehandlingAction(request: Request, formData: FormData) {
  const behandlingId = formData.get("behandlingId") as string;
  const ident = formData.get("ident") as string;

  if (!behandlingId) {
    throw new Error("Mangler behandlingId");
  }

  if (!ident) {
    throw new Error("Mangler ident");
  }
  const { error } = await rekjorBehandling(request, behandlingId, ident, []);

  if (error) {
    return getHttpProblemAlert(error);
  }

  const successAlert: IAlert = {
    variant: "success",
    title: "Behandling er kjørt på nytt",
  };

  return successAlert;
}
