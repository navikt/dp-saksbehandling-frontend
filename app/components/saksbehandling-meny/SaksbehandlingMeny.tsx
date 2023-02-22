import React from "react";
import styles from "./SaksbehandlingMeny.module.css";
import { Link } from "@remix-run/react";
import type { IBruker } from "~/models/bruker.server";

interface IProps {
  bruker: IBruker;
}

export function SaksbehandlingMeny({ bruker }: IProps) {
  return (
    <div className={styles.container}>
      <Link to={`/saksbehandling/bruker/${bruker.ident}/vedtak`}> Vedtak</Link>
    </div>
  );
}
