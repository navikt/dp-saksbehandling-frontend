import { lagreVurdering } from "~/models/behandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";

export async function lagreVurderingAction(request: Request, formData: FormData) {
  const behandlingId = formData.get("behandlingId") as string;
  const opplysningId = formData.get("opplysningId") as string;
  const begrunnelse = formData.get("begrunnelse") as string;

  const { error, response } = await lagreVurdering(
    request,
    behandlingId,
    opplysningId,
    begrunnelse,
  );

  if (error) {
    return getHttpProblemAlert(error);
  }

  return response;
}
