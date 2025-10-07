import createClient from "openapi-fetch";

import { getMeldingOmVedtakOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { getHttpProblemAlert, handleHttpProblem } from "~/utils/error-response.utils";
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
    // 501 error skal ut til saksbehandler sånn at gosys brev kan velges, alle andre feil skal kastes
    if (error.status === 501) {
      return getHttpProblemAlert(error, "warn", "warning");
    }

    handleHttpProblem(error, "warn");
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

export async function lagreBrevVariant(
  request: Request,
  behandlingId: string,
  brevVariant: components["schemas"]["BrevVariant"],
) {
  const onBehalfOfToken = await getMeldingOmVedtakOboToken(request);
  return await meldingOmVedtakClient.PUT("/melding-om-vedtak/{behandlingId}/brev-variant", {
    headers: getHeaders(onBehalfOfToken),
    body: { brevVariant },
    params: {
      path: { behandlingId },
    },
  });
}
