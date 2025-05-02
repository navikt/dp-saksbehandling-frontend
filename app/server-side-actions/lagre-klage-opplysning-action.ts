import invariant from "tiny-invariant";

import { IAlert } from "~/context/alert-context";
import { lagreKlageOpplysning } from "~/models/saksbehandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";

import { components } from "../../openapi/saksbehandling-typer";

export async function lagreKlageOpplysningAction(request: Request, formData: FormData) {
  const behandlingId = formData.get("behandlingId") as string;
  const opplysningId = formData.get("opplysningId") as string;
  const verdi = formData.get("verdi") as string; //TODO Fix type for å håndtere multiselect
  const type = formData.get("datatype") as components["schemas"]["KlageOpplysningType"];

  invariant(behandlingId, "behandlingId er påkrevd");
  invariant(opplysningId, "opplysningId er påkrevd");
  invariant(verdi, "verdi er påkrevd");

  const oppdatertKlageOpplysning = konverterOpplysningVerdiTilBackendVerdi(type, verdi);

  const { response, error } = await lagreKlageOpplysning(
    request,
    behandlingId,
    opplysningId,
    oppdatertKlageOpplysning,
  );

  if (error) {
    return getHttpProblemAlert(error);
  }

  if (response.ok) {
    const successAlert: IAlert = {
      variant: "success",
      title: "Opplysning lagret",
    };

    return successAlert;
  }

  throw new Error(`Uhåndtert feil i lagreKlageOpplysningAction()`);
}

function konverterOpplysningVerdiTilBackendVerdi(
  opplysningDatatype: components["schemas"]["KlageOpplysningType"],
  verdi: string,
): components["schemas"]["OppdaterKlageOpplysning"] {
  switch (opplysningDatatype) {
    case "TEKST":
      return {
        type: "TEKST",
        verdi: verdi,
      };

    case "LISTEVALG":
      return {
        type: "LISTEVALG",
        verdi: verdi,
      };

    case "FLER_LISTEVALG":
      return {
        type: "FLER_LISTEVALG",
        verdi: JSON.parse(verdi),
      };

    case "DATO": {
      const [dag, maaned, aar] = verdi.split(".");
      const backendVerdi = `${aar}-${maaned}-${dag}`;
      return {
        type: "DATO",
        verdi: backendVerdi,
      };
    }

    case "BOOLSK":
      return { type: "BOOLSK", verdi: verdi === "Ja" };
  }
}
