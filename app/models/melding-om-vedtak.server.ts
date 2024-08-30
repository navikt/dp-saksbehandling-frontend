import { getMeldingOmVedtakOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { getHeaders } from "~/utils/fetch.utils";
import { handleErrorResponse } from "~/utils/error-response.server";

export interface IMeldingOmVedtak {
  brevblokkIder: string[];
  opplysninger: IBrevOpplysning[];
}

interface IBrevOpplysning {
  tekstId: string;
  datatype: string;
  verdi: string;
}

export async function hentMeldingOmVedtak(
  request: Request,
  behandlingId: string,
): Promise<IMeldingOmVedtak> {
  const onBehalfOfToken = await getMeldingOmVedtakOboToken(request);

  const url = `${getEnv("DP_MELDING_OM_VEDTAK_URL")}/melding-om-vedtak/${behandlingId}`;
  const response = await fetch(url, {
    method: "GET",
    headers: getHeaders(onBehalfOfToken),
  });

  if (!response.ok) {
    handleErrorResponse(response);
  }

  return await response.json();
}
