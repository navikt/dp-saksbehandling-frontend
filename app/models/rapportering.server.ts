import createClient, { Middleware } from "openapi-fetch";

import { getRapporteringPersonregisterOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { getHeaders } from "~/utils/fetch.utils";

import { paths } from "../../openapi/rapportering-personregister-typer";

const middleware: Middleware = {
  async onError({ error }) {
    console.error("Feil i dp-rapportering-personregister:", error);
    return Response.json({ message: "Feil i dp-rapportering-personregister" }, { status: 200 });
  },
};

const rapporteringPersonregisterClient = createClient<paths>({
  baseUrl: getEnv("DP_RAPPORTERING_PERSONREGISTER_URL"),
});
rapporteringPersonregisterClient.use(middleware);

export async function hentRapporteringPersonId(request: Request, ident: string) {
  const onBehalfOfToken = await getRapporteringPersonregisterOboToken(request);
  const { data } = await rapporteringPersonregisterClient.POST("/hentPersonId", {
    headers: getHeaders(onBehalfOfToken),
    body: { ident },
  });

  if (data) {
    return data;
  }
}
