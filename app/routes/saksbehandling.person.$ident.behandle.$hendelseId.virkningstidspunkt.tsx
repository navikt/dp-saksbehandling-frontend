import { BodyLong, Heading } from "@navikt/ds-react";
import { Form } from "@remix-run/react";
import styles from "~/route-styles/mangelbrev.module.css";

export default function SendMangelbrev() {
  return (
    <div className={styles.container}>
      <Form>
        <Heading size={"large"} level={"1"}>
          Sett virkningstidspunkt
        </Heading>

        <BodyLong>Todo: implementer en kalender for å velge tidspunkt</BodyLong>
      </Form>
    </div>
  );
}
