import React from "react";
import styles from "./SaksbehandlingMeny.module.css";
import { Link, useLocation } from "@remix-run/react";

export function SaksbehandlingMeny() {
  let location = useLocation();

  console.log(location);
  return (
    <div className={styles.container}>
      <Link to={`vedtak`} className={styles.linkItem}>
        Vedtak
      </Link>
      <Link to={`meldekort`} className={styles.linkItem}>
        Meldekort
      </Link>
    </div>
  );
}
