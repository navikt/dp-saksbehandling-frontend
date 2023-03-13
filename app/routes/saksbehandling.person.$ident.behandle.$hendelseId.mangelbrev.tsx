import { BodyLong, Button, Heading, Textarea } from "@navikt/ds-react";
import { Form } from "@remix-run/react";
import styles from "~/route-styles/mangelbrev.module.css";

export default function SendMangelbrev() {
  return (
    <div className={styles.container}>
      <Form>
        <Heading size={"large"} level={"1"}>
          Send mangelbrev
        </Heading>

        <BodyLong>Noter grunnlag for at hvilke informasjon som mangler</BodyLong>

        <Textarea label={""} />

        <div className={styles.buttonContainer}>
          <Button>Send mangelbrev</Button>
        </div>
      </Form>
    </div>
  );
}
