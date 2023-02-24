import { Header } from "@navikt/ds-react-internal";
import { Outlet, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getAzureSession } from "~/utils/auth.utils";
import { SaksbehandlerMeny } from "~/components/saksbehandler-meny/SaksbehandlerMeny";
import type { LoaderArgs } from "@remix-run/node";
import type { ISaksbehandler } from "~/models/saksbehandler.server";
import { logger } from "../../server/logger";
import styles from "~/index.module.css";

export async function loader({ request }: LoaderArgs) {
  const session = await getAzureSession(request);
  if (!session || session.expiresIn === 0) {
    logger.debug("no session");
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

export default function Saksbehandling() {
  const saksbehandler = useLoaderData<typeof loader>() as ISaksbehandler;
  return (
    <div>
      <Header className={styles.header}>
        <Header.Title as="h1" className={styles.pageHeader}>
          NAV Dagpenger
        </Header.Title>

        <SaksbehandlerMeny saksbehandler={saksbehandler} />
      </Header>

      <Outlet />
    </div>
  );
}
