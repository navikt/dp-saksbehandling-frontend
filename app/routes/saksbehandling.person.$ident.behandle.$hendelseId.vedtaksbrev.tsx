import { Button, Heading, Textarea } from "@navikt/ds-react";
import { Form } from "@remix-run/react";
import styles from "~/route-styles/vedtaksbrev.module.css";

export default function SendMangelbrev() {
  return (
    <div className={styles.container}>
      <Form>
        <Heading size={"large"} level={"1"}>
          Lag mangelbrev
        </Heading>

        <Textarea label={""} />

        <div className={styles.buttonContainer}>
          <Button>Lag vedtaksbrev</Button>
        </div>
      </Form>
    </div>
  );
}
