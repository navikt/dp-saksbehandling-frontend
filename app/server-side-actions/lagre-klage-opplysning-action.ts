import invariant from "tiny-invariant";

import { IAlert } from "~/context/alert-context";
import { lagreKlageOpplysning } from "~/models/saksbehandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";

import { components } from "../../openapi/saksbehandling-typer";

export async function lagreKlageOpplysningAction(request: Request, formData: FormData) {
  const oppgaveId = formData.get("oppgave-id") as string;
  const opplysningId = formData.get("opplysning-id") as string;
  const verdi = formData.get("verdi") as string;
  const opplysningDatatype = formData.get(
    "datatype",
  ) as components["schemas"]["KlageOpplysning"]["type"];

  invariant(oppgaveId, "oppgaveId er påkrevd");
  invariant(opplysningId, "opplysningId er påkrevd");
  invariant(verdi, "verdi er påkrevd");

  const { response, error } = await lagreKlageOpplysning(
    request,
    oppgaveId,
    opplysningId,
    verdi,
    // @ts-expect-error TODO Fix miss match mellom _ og - i openapi spec
    opplysningDatatype,
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
