import { Button, Heading } from "@navikt/ds-react";
import { Form } from "@remix-run/react";
import styles from "../route-styles/mangelbrev.module.css";

export default function SendTilToTrinnskontroll() {
  return (
    <div className={styles.container}>
      <Form>
        <Heading size={"large"} level={"1"}>
          To Trinnskontroll
        </Heading>

        <div className={styles.buttonContainer}>
          <Button>Send til to trinnskontroll</Button>
        </div>
      </Form>
    </div>
  );
}
