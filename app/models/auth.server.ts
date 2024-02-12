import type { SessionWithOboProvider } from "@navikt/oasis";
import { getAzureSession } from "~/utils/auth.utils.server";
import { getHeaders } from "~/utils/fetch.utils";

export interface ISaksbehandler {
  onPremisesSamAccountName: string;
  givenName: string;
  displayName: string;
  mail: string;
}

export async function getSaksbehandler(session: SessionWithOboProvider): Promise<ISaksbehandler> {
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
