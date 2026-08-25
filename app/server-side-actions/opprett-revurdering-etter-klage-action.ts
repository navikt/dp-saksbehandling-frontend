import { parseFormData, validationError } from "@rvf/react-router";

import { IAlert } from "~/context/alert-context";
import { opprettRevurderingEtterKlage } from "~/models/behandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForOpprettRevurderingEtterKlage } from "~/utils/validering.util";

export async function opprettRevurderingEtterKlageAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(
    formData,
    hentValideringForOpprettRevurderingEtterKlage(),
  );

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { personIdent, klageId } = validertSkjema.data;
  const { data, error } = await opprettRevurderingEtterKlage(
    request,
    personIdent,
    klageId,
    "Førsteinstans",
  );

  if (data) {
    const successAlert: IAlert = {
      variant: "success",
      title: `Behandling med id ${data.behandlingId} opprettet`,
    };

    return successAlert;
  }

  if (error) {
    return getHttpProblemAlert(error);
  }

  throw new Error(`Uhåndtert feil i opprettRevurderingEtterKlageAction()`);
}
