import createClient from "openapi-fetch";

import { getMeldingOmVedtakOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { getHeaders } from "~/utils/fetch.utils";

import { components, paths } from "../../openapi/melding-om-vedtak-typer";

export interface IMeldingOmVedtak {
  html: string;
  utvidedeBeskrivelser: IUtvidetBeskrivelse[];
}

export interface IUtvidetBeskrivelse {
  brevblokkId: string;
  tekst: string;
  sistEndretTidspunkt?: string;
  tittel?: string;
}

export interface ILagreUtvidetBeskrivelseResponse {
  sistEndretTidspunkt: string;
}

export interface IMeldingOmVedtakBody {
  fornavn: string;
  mellomnavn?: string;
  etternavn: string;
  fodselsnummer: string;
  saksbehandler?: components["schemas"]["Behandler"];
  beslutter?: components["schemas"]["Behandler"];
}

const meldingOmVedtakClient = createClient<paths>({ baseUrl: getEnv("DP_MELDING_OM_VEDTAK_URL") });

export async function hentMeldingOmVedtak(
  request: Request,
  behandlingId: string,
  body: components["schemas"]["MeldingOmVedtakData"],
) {
  const onBehalfOfToken = await getMeldingOmVedtakOboToken(request);
  return await meldingOmVedtakClient.POST("/melding-om-vedtak/{behandlingId}/html", {
    headers: getHeaders(onBehalfOfToken),
    body: { ...body },
    params: {
      path: { behandlingId },
    },
  });
}

export async function lagreUtvidetBeskrivelse(
  request: Request,
  behandlingId: string,
  brevblokkId: string,
  utvidetBeskrivelse: string,
) {
  const onBehalfOfToken = await getMeldingOmVedtakOboToken(request);
  return await meldingOmVedtakClient.PUT(
    "/melding-om-vedtak/{behandlingId}/{brevblokkId}/utvidet-beskrivelse",
    {
      headers: getHeaders(onBehalfOfToken),
      body: utvidetBeskrivelse,
      params: {
        path: { behandlingId, brevblokkId },
      },
    },
  );
}
