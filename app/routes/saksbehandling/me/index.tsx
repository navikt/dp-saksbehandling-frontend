import { json } from "@remix-run/node";
// @ts-ignore
import { getSession } from "@navikt/dp-auth/session";
import type { LoaderArgs } from "@remix-run/node";
const audience = "https://graph.microsoft.com/.default";

export async function loader({ request }: LoaderArgs) {
  const session = await getSession(request);
  if (!session || session.expiresIn === 0) {
    console.log("no session");
    return json({ oops: "no session" });
  }
  const apiToken = await session.apiToken(audience);
  try {
    const data = await fetch(
      "https://graph.microsoft.com/v1.0/me/?$select=onPremisesSamAccountName,givenName,displayName,mail",
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${apiToken}`,
        },
      }
    );
    const profile = await data.json();
    return json({ ...profile, expires_in: session.expires_in }, { status: 200 });
  } catch (e) {
    return json({}, { status: 500 });
  }
}
