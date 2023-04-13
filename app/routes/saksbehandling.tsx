import { Header } from "@navikt/ds-react-internal";
import { isRouteErrorResponse, Outlet, useLoaderData, useRouteError } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getAzureSession } from "~/utils/auth.utils";
import { HeaderMeny } from "~/components/header-meny/HeaderMeny";
import type { LoaderArgs } from "@remix-run/node";
import type { ISaksbehandler } from "~/models/saksbehandler.server";
import { logger } from "../../server/logger";
import styles from "~/index.module.css";
import { mockSaksbehandler } from "../../mock-data/mock-saksbehandler";

export async function loader({ request }: LoaderArgs) {
  console.log("Kjører loader() i saksbehandling");
  const session = await getAzureSession(request);
  //wonderwall tar seg av session, hvis vi ikke har en session kjører vi uten sidecar og skal være i dev
  if (!session || session.expiresIn === 0) {
    logger.debug("no session, mocker saksbehandler");
    return json(mockSaksbehandler);
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
    const saksbehandler = await data.json();
    return json({ ...saksbehandler, expires_in: session.expiresIn }, { status: 200 });
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

        <HeaderMeny saksbehandler={saksbehandler} />
      </Header>

      <Outlet />
    </div>
  );
}

export function ErrorBoundary() {
  let error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
