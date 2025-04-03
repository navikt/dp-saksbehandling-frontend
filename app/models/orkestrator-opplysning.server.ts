import createClient from "openapi-fetch";

import { getSoknadOrkestratorOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { handleHttpProblem } from "~/utils/error-response.utils";
import { getHeaders } from "~/utils/fetch.utils";

import { components, paths } from "../../openapi/soknad-orkestrator-typer";

const orkestratorClient = createClient<paths>({ baseUrl: getEnv("DP_SOKNAD_ORKESTRATOR_URL") });

export async function hentOrkestratorBarn(request: Request, soknadId: string) {
  const onBehalfOfToken = await getSoknadOrkestratorOboToken(request);

  const { response, data, error } = await orkestratorClient.GET("/opplysninger/{soknadId}/barn", {
    headers: getHeaders(onBehalfOfToken),
    params: {
      path: { soknadId },
    },
  });

  if (data) {
    return data;
  }

  if (error) {
    handleHttpProblem(error);
  }

  throw new Error(
    `Uhåndtert feil i hentOrkestratorBarn(). ${response.status} - ${response.statusText}`,
  );
}

export async function oppdaterOrkestratorBarn(
  request: Request,
  soknadId: string,
  oppdatertBarn: components["schemas"]["OppdatertBarnRequest"],
) {
  const onBehalfOfToken = await getSoknadOrkestratorOboToken(request);

  return await orkestratorClient.PUT("/opplysninger/{soknadId}/barn/oppdater", {
    headers: getHeaders(onBehalfOfToken),
    body: { ...oppdatertBarn },
    params: {
      path: { soknadId },
    },
  });
}

export async function hentOrkestratorLandListe(request: Request) {
  const onBehalfOfToken = await getSoknadOrkestratorOboToken(request);

  const { data, error } = await orkestratorClient.GET("/land", {
    headers: getHeaders(onBehalfOfToken),
  });

  if (data) {
    return data;
  }

  if (error) {
    handleHttpProblem(error);
  }

  throw new Error(`Uhåndtert feil i hentOppgaver(). 500 - Internal Server Error`);
}
