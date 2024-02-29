import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { HeaderMeny } from "~/components/header-meny/HeaderMeny";
import { getEnv } from "~/utils/env.utils";
import styles from "~/index.module.css";
import { getSaksbehandler, getSession } from "~/models/auth.server";
import { hentOppgaver } from "~/models/oppgave.server";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { InternalHeader } from "@navikt/ds-react";

// Hindrer loader til å kjøre på nytt etter action funksjon
export const shouldRevalidate = () => false;

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request);

  const [saksbehandler, oppgaver] = await Promise.all([
    getSaksbehandler(session),
    hentOppgaver(session),
  ]);

  return json({
    saksbehandler,
    oppgaver,
  });
}

export default function Saksbehandling() {
  const { saksbehandler } = useLoaderData<typeof loader>();

  return (
    <>
      <InternalHeader className={styles.header}>
        <Link to={getEnv("BASE_PATH")} className={styles.headerLogo}>
          <InternalHeader.Title as="h1" className={styles.pageHeader}>
            NAV Dagpenger
          </InternalHeader.Title>
        </Link>

        <HeaderMeny saksbehandler={saksbehandler} />
      </InternalHeader>
      <Outlet />
    </>
  );
}
