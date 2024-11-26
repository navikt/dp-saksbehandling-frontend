import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import invariant from "tiny-invariant";

import { endreOpplysning } from "~/models/behandling.server";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const behandlingId = formData.get("behandlingId") as string;
  const opplysningId = formData.get("opplysningId") as string;
  const verdi = formData.get("verdi") as string;

  invariant(behandlingId, "behandlingId er påkrevd");
  invariant(opplysningId, "opplysningId er påkrevd");
  invariant(verdi, "verdi er påkrevd");

  const nyBehandling = await endreOpplysning(request, behandlingId, opplysningId, verdi);

  return json(nyBehandling);
}
