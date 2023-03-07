import React from "react";
import type { ISaksbehandler } from "~/models/saksbehandler.server";
import { Search } from "@navikt/ds-react";
import { SaksbehandlerUtloggingMeny } from "~/components/saksbehandler-meny/SaksbehandlerUtloggingMeny";
import { Link } from "@remix-run/react";
import styles from "./SaksbehandlerMeny.module.css";

interface IProps {
  saksbehandler: ISaksbehandler;
}

export const basePath = "/saksbehandling";

export function SaksbehandlerMeny({ saksbehandler }: IProps) {
  return (
    <div className={styles.container}>
      <form data-theme="dark" className={styles.search}>
        <Search label="Søk alle NAV sine sider" variant="secondary" size={"small"} />
      </form>

      <Link to={`${basePath}`} className={styles.linkItem}>
        Benken
      </Link>
      <Link
        to={`${basePath}/mine-saker`}
        className={styles.linkItem}
        data-testid="mine-saker-menu-button"
      >
        Mine Saker
      </Link>
      <Link to={`${basePath}/admin`} className={styles.linkItem} data-testid="admin-menu-button">
        Admin
      </Link>

      <SaksbehandlerUtloggingMeny saksbehandler={saksbehandler} />
    </div>
  );
}
