import invariant from "tiny-invariant";
import { endreOpplysning } from "~/models/behandling.server";
import { json } from "@remix-run/node";

export async function lagreOpplysning(request: Request, formData: FormData) {
  const behandlingId = formData.get("behandlingId") as string;
  const opplysningId = formData.get("opplysningId") as string;
  const verdi = formData.get("verdi") as string;

  invariant(behandlingId, "behandlingId er påkrevd");
  invariant(opplysningId, "opplysningId er påkrevd");
  invariant(verdi, "verdi er påkrevd");

  console.log(verdi);

  const nyBehandling = await endreOpplysning(request, behandlingId, opplysningId, verdi);

  return json(nyBehandling);
}
