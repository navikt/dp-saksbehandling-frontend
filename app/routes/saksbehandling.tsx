import { Header } from "@navikt/ds-react-internal";
import { isRouteErrorResponse, Outlet, useLoaderData, useRouteError } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { HeaderMeny } from "~/components/header-meny/HeaderMeny";
import styles from "~/index.module.css";
import { authorizeUser } from "~/models/auth.server";

export async function loader({ request }: LoaderArgs) {
  console.log("Kjører loader() i saksbehandling");
  const saksbehandler = await authorizeUser(request);

  return json({ saksbehandler });
}

export default function Saksbehandling() {
  const { saksbehandler } = useLoaderData<typeof loader>();

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
