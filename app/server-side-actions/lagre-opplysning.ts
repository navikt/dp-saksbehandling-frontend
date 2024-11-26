import { json } from "@remix-run/node";
import invariant from "tiny-invariant";

import { endreOpplysning } from "~/models/behandling.server";

export async function lagreOpplysning(request: Request, formData: FormData) {
  const behandlingId = formData.get("behandlingId") as string;
  const opplysningId = formData.get("opplysningId") as string;
  const opplysningDatatype = formData.get("datatype") as string;
  const verdi = formData.get("verdi") as string;

  invariant(behandlingId, "behandlingId er påkrevd");
  invariant(opplysningId, "opplysningId er påkrevd");
  invariant(verdi, "verdi er påkrevd");

  const nyBehandling = await endreOpplysning(
    request,
    behandlingId,
    opplysningId,
    konverterOpplysningVerdiTilBackendVerdi(opplysningDatatype, verdi),
  );

  return json(nyBehandling);
}

function konverterOpplysningVerdiTilBackendVerdi(opplysningDatatype: string, verdi: string) {
  switch (opplysningDatatype) {
    case "dato": {
      const [dag, maaned, aar] = verdi.split(".");
      return `${aar}-${maaned}-${dag}`;
    }

    case "desimaltall":
    case "penger":
      return verdi.replace(",", ".");

    default:
      return verdi;
  }
}
