import { getHeaders } from "~/utils/fetch.utils";
import { getMicrosoftOboToken } from "~/utils/auth.utils.server";
import { logger } from "~/utils/logger.utils";
import { cache } from "~/utils/cache.utils";

export interface ISaksbehandler {
  onPremisesSamAccountName: string; // Dette er saksbehandlerIdent
  givenName: string;
  displayName: string;
  mail: string;
}

export async function getSaksbehandler(request: Request): Promise<ISaksbehandler> {
  const saksbehandler = cache.get<ISaksbehandler>("saksbehandler");

  if (saksbehandler !== undefined) {
    return saksbehandler;
  }

  try {
    const oboToken = await getMicrosoftOboToken(request);

    const url =
      "https://graph.microsoft.com/v1.0/me/?$select=onPremisesSamAccountName,givenName,displayName,mail";

    const data = await fetch(url, {
      headers: getHeaders(oboToken),
    });

    const saksbehandler = await data.json();
    // cache saksbehandler for 12 timer
    cache.set<ISaksbehandler>("saksbehandler", saksbehandler, 60 * 60 * 12);
    return saksbehandler;
  } catch (e) {
    logger.warn(`Klarte ikke hente saksbehandler status: 401`);
    throw new Response("Unauthorized", { status: 401 });
  }
}
