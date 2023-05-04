import { Search } from "@navikt/ds-react";
import { Link } from "@remix-run/react";
import { HeaderUtloggingMeny } from "~/components/header-meny/HeaderUtloggingMeny";
import { BASE_PATH } from "~/constants";
import type { ISaksbehandler } from "~/models/saksbehandler.server";
import styles from "./HeaderMeny.module.css";

interface IProps {
  saksbehandler: ISaksbehandler;
}

export function HeaderMeny({ saksbehandler }: IProps) {
  return (
    <div className={styles.container}>
      <form data-theme="dark" className={styles.search}>
        <Search label="Søk alle NAV sine sider" variant="secondary" size={"small"} />
      </form>

      <Link to={BASE_PATH} className={styles.linkItem} data-testid={"benken-menu-button"}>
        Benken
      </Link>

      <HeaderUtloggingMeny saksbehandler={saksbehandler} />
    </div>
  );
}
