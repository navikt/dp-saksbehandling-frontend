import React from "react";
import type { IBruker } from "~/models/bruker.server";
import styles from "./DagpengerStatusBruker.module.css";

interface IProps {
  bruker: IBruker;
}

export function DagpengerStatusBruker(props: IProps) {
  return (
    <div className={styles.container}>
      <div>Status</div>
      <div>Dagsats</div>
      <div>Ventetid</div>
      <div>Gjenstående kvote</div>
      <div>Sanksjon</div>
      <div>Barnetillegg</div>
    </div>
  );
}
