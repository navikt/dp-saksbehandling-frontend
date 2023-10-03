import { Header } from "@navikt/ds-react-internal";
import { Link, Outlet } from "@remix-run/react";
import { HeaderMeny } from "~/components/header-meny/HeaderMeny";
import { getEnv } from "~/utils/env.utils";
import { useSanity } from "~/hooks/useSanity";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import styles from "~/index.module.css";

export default function Saksbehandling() {
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const { hentAppTekstMedId } = useSanity();

  return (
    <>
      <Header className={styles.header}>
        <Link to={getEnv("BASE_PATH")} className={styles.headerLogo}>
          <Header.Title as="h1" className={styles.pageHeader}>
            {hentAppTekstMedId("side-header")}
          </Header.Title>
        </Link>

        <HeaderMeny saksbehandler={saksbehandler} />
      </Header>

      <Outlet />
    </>
  );
}
