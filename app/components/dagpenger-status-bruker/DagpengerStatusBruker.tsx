import React from "react";
import { Detail, Label } from "@navikt/ds-react";
import type { IBruker } from "~/models/bruker.server";
import styles from "./DagpengerStatusBruker.module.css";

interface IProps {
  bruker: IBruker;
}

export function DagpengerStatusBruker(props: IProps) {
  return (
    <div className={styles.container}>
      <div>
        <Detail>Status</Detail>
        <Label size="small">Løpende periode, ordinære dagpenger</Label>
      </div>

      <div>
        <Detail>Dagsats</Detail>
        <Label size="small">Kr 1200</Label>
      </div>
      <div>
        <Detail>Ventetid</Detail>
        <Label size="small">3 dager</Label>
      </div>
      <div>
        <Detail>Gjenstående kvote</Detail>
        <Label size="small">210 dager</Label>
      </div>
      <div>
        <Detail>Sanksjon</Detail>
        <Label size="small">ingen</Label>
      </div>
      <div>
        <Detail>Barnetillegg</Detail>
        <Label size="small">ingen</Label>
      </div>
    </div>
  );
}
