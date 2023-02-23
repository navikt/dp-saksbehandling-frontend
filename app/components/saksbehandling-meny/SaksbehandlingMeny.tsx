import React from "react";
import styles from "./SaksbehandlingMeny.module.css";
import { Link, useLocation } from "@remix-run/react";
import type { IBruker } from "~/models/bruker.server";

interface IProps {
  bruker: IBruker;
}

export function SaksbehandlingMeny({ bruker }: IProps) {
  let location = useLocation();

  console.log(location);
  return (
    <div className={styles.container}>
      <Link to={`/saksbehandling/bruker/${bruker.ident}/vedtak`} className={styles.linkItem}>
        Vedtak
      </Link>
      <Link to={`/saksbehandling/bruker/${bruker.ident}/meldekort`} className={styles.linkItem}>
        Meldekort
      </Link>
    </div>
  );
}
