import { Header } from "@navikt/ds-react-internal";
import { Outlet } from "@remix-run/react";

import styles from "~/index.module.css";

export default function Saksbehandling() {
  return (
    <div>
      <Header>
        <Header.Title as="h1" className={styles.pageHeader}>
          NAV Dagpenger
        </Header.Title>
      </Header>

      <Outlet />
    </div>
  );
}
