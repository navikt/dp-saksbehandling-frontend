import { json } from "@remix-run/node";

import { lagreVurdering } from "~/models/behandling.server";

export async function lagreVurderingAction(request: Request, formData: FormData) {
  const behandlingId = formData.get("behandlingId") as string;
  const opplysningId = formData.get("opplysningId") as string;
  const begrunnelse = formData.get("begrunnelse") as string;

  const response = await lagreVurdering(request, behandlingId, opplysningId, begrunnelse);

  return json(response);
}
