import { parseFormData, validationError } from "@rvf/react-router";
import { redirect } from "react-router";

import { IAlert } from "~/context/alert-context";
import { flyttBehandlingTilNySak } from "~/models/saksbehandling.server";
import { commitSession, getSession } from "~/sessions";
import { getErrorAlert } from "~/utils/error-response.utils";
import { hentValideringForFlyttBehandlingTilNySak } from "~/utils/validering.util";

export async function flyttBehandlingTilNySakAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(formData, hentValideringForFlyttBehandlingTilNySak());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { behandlingId, personIdent, personUuid } = validertSkjema.data;
  const { error, response } = await flyttBehandlingTilNySak(request, behandlingId, personIdent);

  if (error) {
    return getErrorAlert(error, response);
  }

  const successAlert: IAlert = {
    variant: "success",
    title: "Behandling flyttet til ny sak ✅",
  };

  const session = await getSession(request.headers.get("Cookie"));
  session.flash("alert", successAlert);

  return redirect(`/person/${personUuid}/oversikt`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
