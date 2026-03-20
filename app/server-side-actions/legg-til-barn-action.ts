import { parseFormData, validationError } from "@rvf/react-router";
import { components } from "openapi/soknad-orkestrator-typer";
import { ActionFunctionArgs, redirect } from "react-router";

import { leggTilBarn } from "~/models/orkestrator-opplysning.server";
import { formaterTilBackendDato } from "~/utils/dato.utils";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForNyttBarn } from "~/utils/validering.util";

export async function leggTilBarnAction(
  request: Request,
  params: ActionFunctionArgs["params"],
  formData: FormData,
) {
  const validertSkjema = await parseFormData(formData, hentValideringForNyttBarn());
  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const skjemadata = validertSkjema.data;

  const requestBody: components["schemas"]["BarnRequest"] = {
    behandlingId: skjemadata.behandlingId,
    barn: {
      fornavnOgMellomnavn: skjemadata.fornavnOgMellomnavn,
      etternavn: skjemadata.etternavn,
      fodselsdato: formaterTilBackendDato(skjemadata.fodselsdato),
      oppholdssted: skjemadata.oppholdssted,
      forsorgerBarnet: skjemadata.forsorgerBarnet,
      kvalifisererTilBarnetillegg: skjemadata.kvalifisererTilBarnetillegg,
      barnetilleggFom: skjemadata.barnetilleggFom
        ? formaterTilBackendDato(skjemadata.barnetilleggFom)
        : undefined,
      barnetilleggTom: skjemadata.barnetilleggTom
        ? formaterTilBackendDato(skjemadata.barnetilleggTom)
        : undefined,
      begrunnelse: skjemadata.begrunnelse,
    },
  };

  const { error } = await leggTilBarn(request, skjemadata.soknadBarnId, requestBody);

  if (error) {
    return getHttpProblemAlert(error);
  }

  return redirect(
    `/oppgave/${params.oppgaveId}/dagpenger-rett/${params.behandlingId}/rediger-barn/${skjemadata.soknadBarnId}`,
  );
}
