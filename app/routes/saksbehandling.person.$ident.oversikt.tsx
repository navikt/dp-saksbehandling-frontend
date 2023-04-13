import { Button, Detail, Heading } from "@navikt/ds-react";
import { Link } from "@remix-run/react";
import { DagpengerTidslinje } from "~/components/dagpenger-tidslinje/DagpengerTidslinje";
import styles from "~/route-styles/person.module.css";

export default function Person() {
  return (
    <>
      <div className={styles.oppgaveBanner}>
        <Heading level="3" size="small">
          Ordninær søknad om dagpenger
        </Heading>

        <div>
          <Detail> Søknadstidspunkt</Detail>
          <strong>12.11.22</strong>
        </div>

        <div>
          <Detail> Manuell behandling</Detail>
          <strong>4 vilkår</strong>
        </div>

        <div>
          <Detail>Antatt utfall </Detail>
          <strong>Avslag</strong>
        </div>

        <Link to="#">
          <Button> Behandle </Button>
        </Link>
      </div>

      <div>
        <DagpengerTidslinje />
      </div>
    </>
  );
}
