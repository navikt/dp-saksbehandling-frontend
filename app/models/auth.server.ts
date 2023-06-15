import { getAzureSession } from "~/utils/auth.utils.server";
import { logger } from "../../server/logger";
import { mockSaksbehandler } from "../../mock-data/mock-saksbehandler";
import type { ISaksbehandler } from "~/models/saksbehandler.server";

export async function authorizeUser(request: Request): Promise<ISaksbehandler> {
  const session = await getAzureSession(request);

  // Wonderwall tar seg av session, hvis vi ikke har en session kjører vi uten sidecar og skal være i dev
  if (!session || session.expiresIn === 0) {
    logger.debug("no session, mocker saksbehandler");
    return mockSaksbehandler;
  }

  try {
    const oboToken = await session.apiToken("https://graph.microsoft.com/.default");
    const data = await fetch(
      "https://graph.microsoft.com/v1.0/me/?$select=onPremisesSamAccountName,givenName,displayName,mail",
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${oboToken}`,
        },
      }
    );

    return await data.json();
  } catch (e) {
    throw new Response("Unauthorized", { status: 401 });
  }
}
