import createClient from "openapi-fetch";

import { getMeldingOmVedtakOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { handleHttpProblem } from "~/utils/error-response.utils";
import { getHeaders } from "~/utils/fetch.utils";

import { components, paths } from "../../openapi/melding-om-vedtak-typer";

const meldingOmVedtakClient = createClient<paths>({ baseUrl: getEnv("DP_MELDING_OM_VEDTAK_URL") });

export async function hentMeldingOmVedtak(
  request: Request,
  behandlingId: string,
  body: components["schemas"]["MeldingOmVedtakData"],
) {
  const onBehalfOfToken = await getMeldingOmVedtakOboToken(request);
  const { data, error, response } = await meldingOmVedtakClient.POST(
    "/melding-om-vedtak/{behandlingId}/html",
    {
      headers: getHeaders(onBehalfOfToken),
      body: { ...body },
      params: {
        path: { behandlingId },
      },
    },
  );

  if (data) {
    return data;
  }

  if (error) {
    handleHttpProblem(error);
  }

  throw new Error(
    `Uhåndtert feil i hentMeldingOmVedtak(). ${response.status} - ${response.statusText}`,
  );
}

export async function lagreUtvidetBeskrivelse(
  request: Request,
  behandlingId: string,
  brevblokkId: string,
  utvidetBeskrivelse: string,
) {
  const onBehalfOfToken = await getMeldingOmVedtakOboToken(request);
  return await meldingOmVedtakClient.PUT(
    "/melding-om-vedtak/{behandlingId}/{brevblokkId}/utvidet-beskrivelse-json",
    {
      headers: getHeaders(onBehalfOfToken),
      body: { tekst: utvidetBeskrivelse },
      params: {
        path: { behandlingId, brevblokkId },
      },
    },
  );
}
