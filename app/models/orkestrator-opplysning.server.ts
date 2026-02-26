import createClient from "openapi-fetch";

import { getSoknadOrkestratorOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { handleHttpProblem } from "~/utils/error-response.utils";
import { getHeaders } from "~/utils/fetch.utils";

import { components, paths } from "../../openapi/soknad-orkestrator-typer";

const orkestratorClient = createClient<paths>({ baseUrl: getEnv("DP_SOKNAD_ORKESTRATOR_URL") });

export async function hentBarn(request: Request, soknadbarnId: string) {
  const onBehalfOfToken = await getSoknadOrkestratorOboToken(request);

  const { response, data, error } = await orkestratorClient.GET(
    "/opplysninger/barn/{soknadbarnId}",
    {
      headers: getHeaders(onBehalfOfToken),
      params: {
        path: { soknadbarnId },
      },
    },
  );

  if (data) {
    return data;
  }

  if (error) {
    handleHttpProblem(error);
  }

  throw new Error(`Uhåndtert feil i hentBarn(). ${response.status} - ${response.statusText}`);
}

export async function redigerBarn(
  request: Request,
  requestBody: components["schemas"]["OppdatertBarnRequest"],
) {
  const onBehalfOfToken = await getSoknadOrkestratorOboToken(request);

  return await orkestratorClient.PUT("/opplysninger/barn/{soknadbarnId}", {
    headers: getHeaders(onBehalfOfToken),
    body: { ...requestBody },
    params: {
      path: { soknadbarnId: requestBody.oppdatertBarn.barnId },
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
