import { components } from "openapi/soknad-orkestrator-typer";

import { IAlert } from "~/context/alert-context";
import { oppdaterOrkestratorBarn } from "~/models/orkestrator-opplysning.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";

export async function oppdaterOrkestratorBarnAction(request: Request, formData: FormData) {
  const soknadId = formData.get("soknadId") as string;
  const barnId = formData.get("barnId") as string;
  const fornavnOgMellomnavn = formData.get("fornavnOgMellomnavn") as string;
  const etternavn = formData.get("etternavn") as string;
  const fodselsdato = formData.get("fodselsdato") as string;
  const oppholdssted = formData.get("oppholdssted") as string;
  const forsorgerBarnet = formData.get("forsorgerBarnet") as string;
  const kvalifisererTilBarnetillegg = formData.get("kvalifisererTilBarnetillegg") as string;
  const barnetilleggFom = formData.get("barnetilleggFom") as string;
  const barnetilleggTom = formData.get("barnetilleggTom") as string;
  const begrunnelse = formData.get("begrunnelse") as string;

  const oppdatertBarn: components["schemas"]["OppdatertBarnRequest"] = {
    barnId,
    fornavnOgMellomnavn,
    etternavn,
    fodselsdato,
    oppholdssted,
    forsorgerBarnet: Boolean(forsorgerBarnet),
    kvalifisererTilBarnetillegg: Boolean(kvalifisererTilBarnetillegg),
    barnetilleggFom,
    barnetilleggTom,
    begrunnelse,
  };

  if (!barnId) {
    throw new Error("Mangler barnId");
  }

  if (!soknadId) {
    throw new Error("Mangler soknadId");
  }

  const { error } = await oppdaterOrkestratorBarn(request, soknadId, oppdatertBarn);

  if (error) {
    return getHttpProblemAlert(error);
  }

  const successAlert: IAlert = {
    variant: "success",
    title: "Barneopplysninger er oppdatert, kjør behandling på nytt",
  };

  return successAlert;
}
