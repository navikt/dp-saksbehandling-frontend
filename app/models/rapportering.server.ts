import createClient, { Middleware } from "openapi-fetch";

import { getDpMeldekortOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { getHeaders } from "~/utils/fetch.utils";

import { paths } from "../../openapi/dp-meldekort-typer";

const middleware: Middleware = {
  async onError({ error }) {
    console.error("Feil i dp-meldekort:", error);
    return Response.json({ message: "Feil i dp-meldekort" }, { status: 200 });
  },
};

const dpMeldekortClient = createClient<paths>({
  baseUrl: getEnv("DP_MELDEKORT_URL"),
});
dpMeldekortClient.use(middleware);

export async function hentRapporteringPersonId(request: Request, ident: string) {
  try {
    const onBehalfOfToken = await getDpMeldekortOboToken(request);
    const { data, error } = await dpMeldekortClient.POST("/hentPersonId", {
      headers: getHeaders(onBehalfOfToken),
      body: { ident },
    });

    if (error) {
      console.error("Feil ved henting av personId fra dp-meldekort:", error);
      return null;
    }

    if (data) {
      return data;
    }

    return null;
  } catch (e) {
    console.error("Feil ved henting av personId fra dp-meldekort:", e);
    return null;
  }
}
