import { json } from "@remix-run/node";

import { oppdaterOrkestratorBarn } from "~/models/orkestrator-opplysning.server";
import { logger } from "~/utils/logger.utils";

export async function oppdaterOrkestratorBarnAction(request: Request, formData: FormData) {
  const soknadId = formData.get("soknadId") as string;
  const barnId = formData.get("barnId");
  const fornavnOgMellomnavn = formData.get("fornavnOgMellomnavn");
  const etternavn = formData.get("etternavn");
  const fødselsdato = formData.get("fødselsdato");
  const oppholdssted = formData.get("oppholdssted");
  const forsørgerBarnet = formData.get("forsørgerBarnet");
  const kvalifisererTilBarnetillegg = formData.get("kvalifisererTilBarnetillegg");
  const barnetilleggFom = formData.get("barnetilleggFom");
  const barnetilleggTom = formData.get("barnetilleggTom");
  const begrunnelse = formData.get("begrunnelse");

  const oppdatertBarnOpplysning = JSON.stringify({
    barnId,
    fornavnOgMellomnavn,
    etternavn,
    fødselsdato,
    oppholdssted,
    forsørgerBarnet,
    kvalifisererTilBarnetillegg,
    barnetilleggFom,
    barnetilleggTom,
    begrunnelse,
  });

  if (!barnId) {
    throw new Error("Mangler barnId");
  }

  if (!soknadId) {
    throw new Error("Mangler soknadId");
  }

  const response = await oppdaterOrkestratorBarn(request, soknadId, oppdatertBarnOpplysning);

  if (!response.ok) {
    logger.warn(`${response.status} - Feil ved kall til ${response.url}`);
    return json({});
  }

  return json(response);
}
