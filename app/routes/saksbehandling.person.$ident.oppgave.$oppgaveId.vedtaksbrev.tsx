import { Button, Heading } from "@navikt/ds-react";
import { Form, useLoaderData, useNavigation, useRouteError } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
import invariant from "tiny-invariant";
import QuillEditor from "~/components/quill-editor/QuillEditor.client";
import { endreStatus, hentOppgave } from "~/models/oppgave.server";
import styles from "~/route-styles/vedtaksbrev.module.css";
import { json } from "@remix-run/node";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { validerOgParseMetadata } from "~/utils/validering.util";
import { erGyldigTilstand } from "~/utils/type-guards";

interface IMetadata {
  tilstand: string;
  muligeTilstander: string[];
}

export async function action({ request, params }: ActionArgs) {
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);
  const formData = await request.formData();
  const metaData = validerOgParseMetadata<IMetadata>(formData, "metadata");
  const nyTilstand = formData.get("ny-tilstand");

  // Alle inputfelt sin value er enten string eller File blob
  if (typeof nyTilstand !== "string") {
    throw new Error("input er ikke en string");
  }
  console.log(metaData);

  if (!metaData.muligeTilstander.includes(nyTilstand)) {
    throw new Response(
      `Kan ikke endre status til ${nyTilstand} , status på oppgaven er: ${
        metaData.tilstand
      } og mulige statusen den kan endres til per nå er kun: ${metaData.muligeTilstander.join(
        ", ",
      )}`,
      { status: 400 },
    );
  }

  if (erGyldigTilstand(nyTilstand)) {
    const response = await endreStatus(params.oppgaveId, nyTilstand);
    return { response };
  }

  throw new Response(
    `${nyTilstand} er ikke gyldig tilstand for oppgave med oppgaveId: ${nyTilstand}`,
  );
}

export async function loader({ params }: LoaderArgs) {
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);

  const oppgave = await hentOppgave(params.oppgaveId);
  invariant(oppgave, `Fant ikke behandling med id: ${params.oppgaveId}`);
  const metadata = { tilstand: oppgave.tilstand, muligeTilstander: oppgave.muligeTilstander };

  return json({ metadata });
}

export default function SendVedtaksbrev() {
  const { metadata } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isCreating = Boolean(navigation.state === "submitting");

  return (
    <div className={styles.container}>
      <Form method="post">
        <Heading size={"large"} level={"1"}>
          Lag vedtaksbrev
        </Heading>
        <input name="metadata" type="hidden" value={JSON.stringify(metadata)} />
        <input name="ny-tilstand" type="hidden" value="Innstilt" />

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
