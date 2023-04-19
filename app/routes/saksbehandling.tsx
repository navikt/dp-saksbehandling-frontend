import { Header } from "@navikt/ds-react-internal";
import { Link, Outlet } from "@remix-run/react";
import { HeaderMeny } from "~/components/header-meny/HeaderMeny";
import { GetLoaderSaksbehandler } from "~/utils/loader-data.utils";

import styles from "~/index.module.css";
import { BASE_PATH } from "~/constants";

export default function Saksbehandling() {
  const saksbehandler = GetLoaderSaksbehandler();

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
