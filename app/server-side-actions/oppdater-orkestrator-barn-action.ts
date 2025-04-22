import { format, parse } from "date-fns";
import { components } from "openapi/soknad-orkestrator-typer";

import { IAlert } from "~/context/alert-context";
import { oppdaterOrkestratorBarn } from "~/models/orkestrator-opplysning.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";

export async function oppdaterOrkestratorBarnAction(request: Request, formData: FormData) {
  const soknadId = formData.get("soknadId") as string;
  const opplysningId = formData.get("opplysningId") as string;
  const behandlingId = formData.get("behandlingId") as string;
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

  console.log(`🔥 oppholdssted :`, oppholdssted);

  const oppdatertBarn: components["schemas"]["OppdatertBarnRequest"] = {
    opplysningId,
    behandlingId,
    oppdatertBarn: {
      barnId,
      fornavnOgMellomnavn,
      etternavn,
      fodselsdato: format(parse(fodselsdato, "dd.MM.yyyy", new Date()), "yyyy-MM-dd"),
      oppholdssted,
      forsorgerBarnet: forsorgerBarnet === "true",
      kvalifisererTilBarnetillegg: kvalifisererTilBarnetillegg === "true",
      barnetilleggFom: format(parse(barnetilleggFom, "dd.MM.yyyy", new Date()), "yyyy-MM-dd"),
      barnetilleggTom: format(parse(barnetilleggTom, "dd.MM.yyyy", new Date()), "yyyy-MM-dd"),
      begrunnelse,
    },
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
