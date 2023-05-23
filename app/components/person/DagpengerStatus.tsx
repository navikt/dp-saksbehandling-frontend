import { Detail, Heading } from "@navikt/ds-react";

import styles from "./DagpengerStatus.module.css";

export function DagpengerStatus() {
  return (
    <div className={styles.kontainer}>
      <div>
        Status
        <Heading level="3" size="small">
          Ordninær søknad om dagpenger
        </Heading>
      </div>

      <div>
        <Detail>Dagsats</Detail>
        <strong>Kr 1200</strong>
      </div>

      <div>
        <Detail>Ventetid</Detail>
        <strong>3 dager</strong>
      </div>

      <div>
        <Detail>Gjenstående kvote</Detail>
        <strong>210 dager</strong>
      </div>

      <div>
        <Detail>Saksjon</Detail>
        <strong>Ingen</strong>
      </div>

      <div>
        <Detail>Barnetillegg</Detail>
        <strong>Ingen</strong>
      </div>
    </div>
  );
}
