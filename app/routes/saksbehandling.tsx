import { Header } from "@navikt/ds-react-internal";
import { Outlet } from "@remix-run/react";
import { HeaderMeny } from "~/components/header-meny/HeaderMeny";
import styles from "~/index.module.css";
import { GetLoaderSaksbehandler } from "~/utils/loader-data.utils";

export default function Saksbehandling() {
  const saksbehandler = GetLoaderSaksbehandler();

  return (
    <>
      <Header className={styles.header}>
        <Header.Title as="h1" className={styles.pageHeader}>
          NAV Dagpenger
        </Header.Title>

        <HeaderMeny saksbehandler={saksbehandler} />
      </Header>

      <Outlet />
    </>
  );
}
