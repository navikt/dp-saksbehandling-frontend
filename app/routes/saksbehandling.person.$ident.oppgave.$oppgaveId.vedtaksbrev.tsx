import { Button, Heading } from "@navikt/ds-react";
import type { ActionArgs } from "@remix-run/node";
import { Form, useLoaderData, useNavigation } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
import invariant from "tiny-invariant";
import QuillEditor from "~/components/quill-editor/QuillEditor.client";
import { endreStatus, hentOppgave } from "~/models/oppgave.server";
import styles from "~/route-styles/vedtaksbrev.module.css";
import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";

export async function action({ request, params }: ActionArgs) {
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);
  const nyTilstand = "Innstilt";
  const formData = await request.formData();
  const muligeTilstander = formData.get("muligeTilstander");
  if (typeof muligeTilstander !== "string") {
    throw new Error("input er ikke en string");
  }

  const body = {
    nyTilstand,
  };

  const response = await endreStatus(params.oppgaveId, body);

  return { response };
}

export async function loader({ params }: LoaderArgs) {
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);

  const oppgave = await hentOppgave(params.oppgaveId);
  invariant(oppgave, `Fant ikke behandling med id: ${params.oppgaveId}`);

  return json({ oppgave });
}

export default function SendMangelbrev() {
  const { oppgave } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isCreating = Boolean(navigation.state === "submitting");
  console.log("Tilstand: ", oppgave.tilstand);
  console.log("Mulige tilstander: ", oppgave.muligeTilstander);
  const metadata = { tilstand: oppgave.tilstand, muligeTilstander: oppgave.muligeTilstander };

  return (
    <div className={styles.container}>
      <Form method="post">
        <Heading size={"large"} level={"1"}>
          Lag mangelbrev
        </Heading>
        <input name="metadata" type="hidden" value={JSON.stringify(metadata)} />

        <ClientOnly>{() => <QuillEditor />}</ClientOnly>

        <div className={styles.buttonContainer}>
          <Button type="submit" disabled={isCreating}>
            {isCreating ? "Lagrer..." : "Send til to-trinns kontroll"}
          </Button>
        </div>
      </Form>
    </div>
  );
}
