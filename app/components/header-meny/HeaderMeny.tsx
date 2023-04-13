import React from "react";
import type { ISaksbehandler } from "../../models/saksbehandler.server";
import { Search } from "@navikt/ds-react";
import { HeaderUtloggingMeny } from "../../components/header-meny/HeaderUtloggingMeny";
import { Link } from "@remix-run/react";
import styles from "./HeaderMeny.module.css";

interface IProps {
  saksbehandler: ISaksbehandler;
}

export const basePath = "/saksbehandling";

export function HeaderMeny({ saksbehandler }: IProps) {
  return (
    <div className={styles.container}>
      <form data-theme="dark" className={styles.search}>
        <Search label="Søk alle NAV sine sider" variant="secondary" size={"small"} />
      </form>

      <Link to={`${basePath}`} className={styles.linkItem}>
        Benken
      </Link>

      <HeaderUtloggingMeny saksbehandler={saksbehandler} />
    </div>
  );
}
