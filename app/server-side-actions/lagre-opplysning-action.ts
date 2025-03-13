import { json } from "@remix-run/node";
import invariant from "tiny-invariant";

import { IAlert } from "~/context/alert-context";
import { endreOpplysning } from "~/models/behandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.server";

export async function lagreOpplysningAction(request: Request, formData: FormData) {
  const behandlingId = formData.get("behandlingId") as string;
  const opplysningId = formData.get("opplysningId") as string;
  const opplysningDatatype = formData.get("datatype") as string;
  const verdi = formData.get("verdi") as string;

  invariant(behandlingId, "behandlingId er påkrevd");
  invariant(opplysningId, "opplysningId er påkrevd");
  invariant(verdi, "verdi er påkrevd");

  const { data, error } = await endreOpplysning(
    request,
    behandlingId,
    opplysningId,
    konverterOpplysningVerdiTilBackendVerdi(opplysningDatatype, verdi),
  );

  if (error) {
    return json(getHttpProblemAlert(error));
  }

  if (data) {
    const successAlert: IAlert = {
      variant: "success",
      title: "Opplysning lagret",
    };

    return json(successAlert);
  }
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
