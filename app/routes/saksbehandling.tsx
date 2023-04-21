import { Header } from "@navikt/ds-react-internal";
import { Link, Outlet } from "@remix-run/react";
import { HeaderMeny } from "~/components/header-meny/HeaderMeny";
import type { ISaksbehandler } from "~/models/saksbehandler.server";
import { useMatchesData } from "~/utils/loader-data.utils";

import { BASE_PATH } from "~/constants";
import styles from "~/index.module.css";

export default function Saksbehandling() {
  const data = useMatchesData("root");

  return (
    <>
      <Header className={styles.header}>
        <Link to={BASE_PATH} className={styles.headerLogo}>
          <Header.Title as="h1" className={styles.pageHeader}>
            NAV Dagpenger
          </Header.Title>
        </Link>

        <HeaderMeny saksbehandler={data?.saksbehandler as ISaksbehandler} />
      </Header>

      <Outlet />
    </>
  );
}
