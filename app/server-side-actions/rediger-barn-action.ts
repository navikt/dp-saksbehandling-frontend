import { parseFormData, validationError } from "@rvf/react-router";
import { components } from "openapi/soknad-orkestrator-typer";
import { ActionFunctionArgs } from "react-router";

import { IAlert } from "~/context/alert-context";
import { redigerBarn } from "~/models/orkestrator-opplysning.server";
import { formaterTilBackendDato } from "~/utils/dato.utils";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForRedigeringBarn } from "~/utils/validering.util";

export async function redigerBarnAction(
  request: Request,
  params: ActionFunctionArgs["params"],
  formData: FormData,
) {
  const validertSkjema = await parseFormData(formData, hentValideringForRedigeringBarn());

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

  const soknadbarnId = params.barnId!;
  const { error } = await redigerBarn(request, soknadbarnId, skjemadata.barnId, requestBody);

  if (error) {
    return getHttpProblemAlert(error);
  }

  const successAlert: IAlert = {
    variant: "success",
    title: "Barneopplysninger er oppdatert",
  };

  return successAlert;
}
