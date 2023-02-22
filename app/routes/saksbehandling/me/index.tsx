import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getAzureSession } from "~/utils/auth.utils";

export async function loader({ request }: LoaderArgs) {
  const session = await getAzureSession(request);
  if (!session || session.expiresIn === 0) {
    console.log("no session");
    return json({ oops: "no session" });
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
    const profile = await data.json();
    return json({ ...profile, expires_in: session.expiresIn }, { status: 200 });
  } catch (e) {
    return json({}, { status: 500 });
  }
}
