import { Button, Heading } from "@navikt/ds-react";
import { Form } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
import QuillEditor from "~/components/quill-editor/QuillEditor.client";
import styles from "~/route-styles/vedtaksbrev.module.css";

export default function SendMangelbrev() {
  return (
    <div className={styles.container}>
      <Form>
        <Heading size={"large"} level={"1"}>
          Lag mangelbrev
        </Heading>

        <ClientOnly>{() => <QuillEditor />}</ClientOnly>

        <div className={styles.buttonContainer}>
          <Button>Lag vedtaksbrev</Button>
        </div>
      </Form>
    </div>
  );
}
