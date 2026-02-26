import { parseFormData, validationError } from "@rvf/react-router";
import { components } from "openapi/soknad-orkestrator-typer";

import { IAlert } from "~/context/alert-context";
import { redigerBarn } from "~/models/orkestrator-opplysning.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForRedigeringBarn } from "~/utils/validering.util";

export async function redigerBarnAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(formData, hentValideringForRedigeringBarn());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const skjemadata = validertSkjema.data;

  const requestBody: components["schemas"]["OppdatertBarnRequest"] = {
    behandlingId: skjemadata.behandlingId,
    opplysningId: skjemadata.opplysningTypeId,
    oppdatertBarn: {
      barnId: skjemadata.barnId,
      fornavnOgMellomnavn: skjemadata.fornavnOgMellomnavn,
      etternavn: skjemadata.etternavn,
      fodselsdato: skjemadata.fodselsdato,
      oppholdssted: skjemadata.oppholdssted,
      forsorgerBarnet: skjemadata.forsorgerBarnet,
      kvalifisererTilBarnetillegg: skjemadata.kvalifisererTilBarnetillegg,
      barnetilleggFom: skjemadata.barnetilleggFom,
      barnetilleggTom: skjemadata.barnetilleggTom,
      begrunnelse: skjemadata.begrunnelse,
    },
  };

  const { error } = await redigerBarn(request, requestBody);

  if (error) {
    return getHttpProblemAlert(error);
  }

  const successAlert: IAlert = {
    variant: "success",
    title: "Barneopplysninger er oppdatert",
  };

  return successAlert;
}
