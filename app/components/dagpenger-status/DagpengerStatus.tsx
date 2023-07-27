import { Detail, Heading } from "@navikt/ds-react";

import styles from "./DagpengerStatus.module.css";

export function DagpengerStatus() {
  return (
    <div className={styles.kontainer}>
      <div>
        <Detail>Status</Detail>
        <Heading level="3" size="xsmall">
          ?
        </Heading>
      </div>
      <div>
        <Detail>Dagsats</Detail>
        <strong>?</strong>
      </div>
      <div>
        <Detail>Ventetid</Detail>
        <strong>?</strong>
      </div>
      <div>
        <Detail>Gjenstående kvote</Detail>
        <strong>?</strong>
      </div>
      <div>
        <Detail>Sanksjon</Detail>
        <strong>?</strong>
      </div>
      <div>
        <Detail>Barnetillegg</Detail>
        <strong>?</strong>
      </div>
    </div>
  );
}
