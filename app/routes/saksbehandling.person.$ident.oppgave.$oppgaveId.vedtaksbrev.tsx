import { Button, Heading } from "@navikt/ds-react";
import type { ActionArgs } from "@remix-run/node";
import { Form, useLoaderData, useNavigation, useRouteError } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
import invariant from "tiny-invariant";
import QuillEditor from "~/components/quill-editor/QuillEditor.client";
import { endreStatus, hentOppgave } from "~/models/oppgave.server";
import styles from "~/route-styles/vedtaksbrev.module.css";
import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";

interface IMetadata {
  tilstand: string;
  muligeTilstander: string[];
}

export async function action({ request, params }: ActionArgs) {
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);
  const nyTilstand = "Innstilt";
  const formData = await request.formData();
  const metadata = formData.get("metadata");
  if (typeof metadata !== "string") {
    throw new Error("input er ikke en string");
  }
  const parsedMetadata: IMetadata = JSON.parse(metadata);
  if (!parsedMetadata.muligeTilstander.includes(nyTilstand)) {
    throw new Error(
      `Kan ikke sende videre til to-trinns behandling, status på oppgaven er: ${
        parsedMetadata.tilstand
      } og mulige statusen den kan endres til per nå er kun: ${parsedMetadata.muligeTilstander.join(
        ", "
      )}`
    );
  }

  const response = await endreStatus(params.oppgaveId, nyTilstand);

  return { response };
}

export async function loader({ params }: LoaderArgs) {
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);

  const oppgave = await hentOppgave(params.oppgaveId);
  invariant(oppgave, `Fant ikke behandling med id: ${params.oppgaveId}`);
  const metadata = { tilstand: oppgave.tilstand, muligeTilstander: oppgave.muligeTilstander };

  return json({ metadata });
}

export default function SendMangelbrev() {
  const { metadata } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isCreating = Boolean(navigation.state === "submitting");

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
export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
