import { parseFormData, validationError } from "@rvf/react-router";
import { redirect } from "react-router";

import { sokPerson } from "~/models/saksbehandling.server";
import { hentValideringForPersonIdent } from "~/utils/validering.util";

export async function sokPersonAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(formData, hentValideringForPersonIdent());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { personIdent } = validertSkjema.data;

  if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(personIdent)) {
    return redirect(`/dagpenger-rett/${personIdent}`);
  }

  const personResponse = await sokPerson(request, personIdent);

  return redirect(`/person/${personResponse.id}/oversikt`);
}
