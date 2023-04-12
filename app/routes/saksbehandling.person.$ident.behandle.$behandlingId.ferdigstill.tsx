import { Button, Heading } from "@navikt/ds-react";
import { Form } from "@remix-run/react";
import styles from "~/route-styles/mangelbrev.module.css";

export default function SendTilFerdigstill() {
  return (
    <div className={styles.container}>
      <Form>
        <Heading size={"large"} level={"1"}>
          Ferdigstill
        </Heading>

        <div className={styles.buttonContainer}>
          <Button>Send til ferdigstill</Button>
        </div>
      </Form>
    </div>
  );
}
