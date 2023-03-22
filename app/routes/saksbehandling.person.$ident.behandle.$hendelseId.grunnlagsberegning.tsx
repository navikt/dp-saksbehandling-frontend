import { BodyLong, Heading } from "@navikt/ds-react";
import { Form } from "@remix-run/react";
import styles from "~/route-styles/mangelbrev.module.css";

export default function SendMangelbrev() {
  return (
    <div className={styles.container}>
      <Form>
        <Heading size={"large"} level={"1"}>
          Beregn grunnlag
        </Heading>

        <BodyLong>Todo: Hvordan skal denne se ut?</BodyLong>
      </Form>
    </div>
  );
}
