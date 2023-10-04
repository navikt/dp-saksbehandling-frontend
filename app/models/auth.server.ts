import type { SessionWithOboProvider } from "@navikt/dp-auth";
import { getAzureSession } from "~/utils/auth.utils.server";
import { getHeaders } from "~/utils/fetch.utils";
import { mockSaksbehandler } from "../../mock-data/mock-saksbehandler";
import { logger } from "../../server/logger";

export interface ISaksbehandler {
  onPremisesSamAccountName: string;
  givenName: string;
  displayName: string;
  mail: string;
}

export async function getSaksbehandler(session: SessionWithOboProvider): Promise<ISaksbehandler> {
  // Wonderwall tar seg av session, hvis vi ikke har en session kjører vi uten sidecar og skal være i dev
  if (!session || session.expiresIn === 0) {
    logger.debug("no session, mocker saksbehandler");
    return mockSaksbehandler;
  }

  try {
    const onBehalfOfToken = await session.apiToken("https://graph.microsoft.com/.default");
    const url =
      "https://graph.microsoft.com/v1.0/me/?$select=onPremisesSamAccountName,givenName,displayName,mail";

    const data = await fetch(url, {
      headers: getHeaders(onBehalfOfToken),
    });

    return await data.json();
  } catch (e) {
    throw new Response("Unauthorized", { status: 401 });
  }
}

export async function getSession(request: Request) {
  const session = await getAzureSession(request);

  if (!session) {
    throw new Response(null, { status: 500, statusText: "Feil ved henting av sesjon" });
  }
  return session;
}
