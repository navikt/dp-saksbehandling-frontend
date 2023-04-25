import { Button, Heading } from "@navikt/ds-react";
import { ActionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
import invariant from "tiny-invariant";
import QuillEditor from "~/components/quill-editor/QuillEditor.client";
import { endreStatus } from "~/models/oppgave.server";
import styles from "~/route-styles/vedtaksbrev.module.css";

export async function action({ request, params }: ActionArgs) {
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);
  const nyTilstand = "Innstilt";

  const body = {
    nyTilstand,
  };

  const response = await endreStatus(params.oppgaveId, body);

  return { response };
}

export default function SendMangelbrev() {
  return (
    <div className={styles.container}>
      <Form>
        <Heading size={"large"} level={"1"}>
          Lag mangelbrev
        </Heading>

        <ClientOnly>{() => <QuillEditor />}</ClientOnly>

        <div className={styles.buttonContainer}>
          <Button>Send til to-trinns kontroll</Button>
        </div>
      </Form>
    </div>
  );
}
