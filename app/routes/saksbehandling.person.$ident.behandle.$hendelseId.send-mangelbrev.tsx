import React from "react";
import { Form } from "@remix-run/react";
import styles from "~/route-styles/behandle.module.css";
import { BodyLong, Button, Heading, Textarea } from "@navikt/ds-react";

export default function SendMangelbrev() {
  return (
    <div className={styles.container}>
      <Form className={styles.vilkaarVurderingContainer}>
        <Heading size={"small"} level={"3"}>
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
