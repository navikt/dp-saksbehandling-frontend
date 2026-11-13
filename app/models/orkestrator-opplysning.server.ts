import createClient from "openapi-fetch";

import { getSoknadOrkestratorOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { handleError } from "~/utils/error-response.utils";
import { getHeaders } from "~/utils/fetch.utils";

import { paths } from "../../openapi/soknad-orkestrator-typer";

const orkestratorClient = createClient<paths>({ baseUrl: getEnv("DP_SOKNAD_ORKESTRATOR_URL") });

export async function hentOrkestratorLandListe(request: Request) {
  const onBehalfOfToken = await getSoknadOrkestratorOboToken(request);

  const { data, error, response } = await orkestratorClient.GET("/land", {
    headers: getHeaders(onBehalfOfToken),
  });

  if (data) {
    return data;
  }

  handleError(error, response, "Uhåndtert feil i hentOrkestratorLandListe()");
}
