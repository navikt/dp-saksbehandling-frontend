import createClient from "openapi-fetch";

import { getRapporteringPersonregisterOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { handleHttpProblem } from "~/utils/error-response.utils";
import { getHeaders } from "~/utils/fetch.utils";

import { paths } from "../../openapi/rapportering-personregister-typer";

const rapporteringPersonregisterClient = createClient<paths>({
  baseUrl: getEnv("DP_RAPPORTERING_PERSONREGISTER_URL"),
});

export async function hentRapporteringPersonId(request: Request, ident: string) {
  const onBehalfOfToken = await getRapporteringPersonregisterOboToken(request);
  const { data, error, response } = await rapporteringPersonregisterClient.POST("/hentPersonId", {
    headers: getHeaders(onBehalfOfToken),
    body: { ident },
  });

  if (data) {
    return data;
  }

  if (error) {
    handleHttpProblem(error);
  }

  throw new Error(
    `Uhåndtert feil i hentRapporteringPersonId(). ${response.status} - ${response.statusText}`,
  );
}
