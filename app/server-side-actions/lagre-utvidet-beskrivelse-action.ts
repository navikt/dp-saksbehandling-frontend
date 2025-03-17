import { lagreUtvidetBeskrivelse } from "~/models/melding-om-vedtak.server";
import { getHttpProblemAlert } from "~/utils/error-response.server";

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

  const { data, error } = await lagreUtvidetBeskrivelse(
    request,
    behandlingId,
    brevblokkId,
    utvidetBeskrivelse,
  );

  if (error) {
    return getHttpProblemAlert(error);
  }

  if (data) {
    return data;
  }

  throw new Error(`Uhåndtert feil i lagreUtvidetBeskrivelseAction()`);
}
