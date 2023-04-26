import { Button, Heading } from "@navikt/ds-react";
import { Form } from "@remix-run/react";
import styles from "~/route-styles/mangelbrev.module.css";

export default function SendGodkjennVedtak() {
  return (
    <div className={styles.container}>
      <Form>
        <Heading size={"large"} level={"1"}>
          Godkjenne vedtak
        </Heading>

        <div className={styles.buttonContainer}>
          <Button>Godkjenn vedtak</Button>
        </div>
      </Form>
    </div>
  );
}
