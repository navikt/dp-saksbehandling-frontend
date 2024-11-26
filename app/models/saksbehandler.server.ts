import { getMicrosoftOboToken } from "~/utils/auth.utils.server";
import { getHeaders } from "~/utils/fetch.utils";
import { logger } from "~/utils/logger.utils";

export interface ISaksbehandler {
  onPremisesSamAccountName: string; // Dette er saksbehandlerIdent
  givenName: string;
  displayName: string;
  mail: string;
}

export async function getSaksbehandler(request: Request): Promise<ISaksbehandler> {
  try {
    const oboToken = await getMicrosoftOboToken(request);

    const url =
      "https://graph.microsoft.com/v1.0/me/?$select=onPremisesSamAccountName,givenName,displayName,mail";

    const data = await fetch(url, {
      headers: getHeaders(oboToken),
    });

    return await data.json();
  } catch (error: unknown) {
    logger.warn(`Klarte ikke hente saksbehandler status: 401. ${error}`);
    throw new Response("Unauthorized", { status: 401 });
  }
}
