import { Header } from "@navikt/ds-react-internal";
import { Link, Outlet, useRouteLoaderData } from "@remix-run/react";
import { HeaderMeny } from "~/components/header-meny/HeaderMeny";
import { BASE_PATH } from "~/constants";
import type { ISaksbehandler } from "~/models/saksbehandler.server";

import styles from "~/index.module.css";

export default function Saksbehandling() {
  const { saksbehandler } = useRouteLoaderData("root") as { saksbehandler: ISaksbehandler };

  return (
    <>
      <Header className={styles.header}>
        <Link to={BASE_PATH} className={styles.headerLogo}>
          <Header.Title as="h1" className={styles.pageHeader}>
            NAV Dagpenger
          </Header.Title>
        </Link>

        <HeaderMeny saksbehandler={saksbehandler} />
      </Header>

      <Outlet />
    </>
  );
}
