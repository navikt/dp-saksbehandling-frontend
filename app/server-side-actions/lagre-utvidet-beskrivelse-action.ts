import { json } from "@remix-run/node";

import { lagreUtvidetBeskrivelse } from "~/models/melding-om-vedtak.server";

export async function lagreUtvidetBeskrivelseAction(request: Request, formData: FormData) {
  const brevblokkId = formData.get("brevblokk-id") as string;
  const behandlingId = formData.get("behandling-id") as string;
  const utvidetBeskrivelse = formData.get("utvidet-beskrivelse") as string;

  if (!brevblokkId) {
    throw new Error("Mangler brevblokkId");
  }

  if (!behandlingId) {
    throw new Error("Mangler behandlingId");
  }

  const response = await lagreUtvidetBeskrivelse(
    request,
    behandlingId,
    brevblokkId,
    utvidetBeskrivelse,
  );

  return json(response);
}
