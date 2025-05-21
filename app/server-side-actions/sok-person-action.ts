import { parseFormData, validationError } from "@rvf/react-router";
import { redirect } from "react-router";

import { hentPerson } from "~/models/saksbehandling.server";
import { hentValideringForPersonIdent } from "~/utils/validering.util";

export async function sokPersonAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(formData, hentValideringForPersonIdent());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { personIdent } = validertSkjema.data;
  const person = await hentPerson(request, personIdent);

  return redirect(`/person/${person.id}/oversikt`);
}
