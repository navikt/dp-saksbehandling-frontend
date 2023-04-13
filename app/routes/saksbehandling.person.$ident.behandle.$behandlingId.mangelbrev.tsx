import { BodyLong, Button, Heading } from "@navikt/ds-react";
import { Form } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
import QuillEditor from "../components/quill-editor/QuillEditor.client";

import styles from "../route-styles/mangelbrev.module.css";

export default function SendMangelbrev() {
  return (
    <div className={styles.container}>
      <Form>
        <Heading size={"large"} level={"1"}>
          Send mangelbrev
        </Heading>

        <BodyLong>Noter grunnlag for at hvilke informasjon som mangler</BodyLong>

        <ClientOnly>{() => <QuillEditor />}</ClientOnly>

        <div className={styles.buttonContainer}>
          <Button>Send mangelbrev</Button>
        </div>
      </Form>
    </div>
  );
}
