import { Alert, Button, Heading } from "@navikt/ds-react";
import {
  Form,
  useActionData,
  useNavigation,
  useRouteError,
  useRouteLoaderData,
} from "@remix-run/react";
import { json, type ActionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { endreStatus } from "~/models/oppgave.server";
import styles from "~/route-styles/vedtaksbrev.module.css";
import { erGyldigTilstand } from "~/utils/type-guards";
import { validerOgParseMetadata } from "~/utils/validering.util";
import { type ISaksbehandlingsOppgaveLoader } from "./saksbehandling.person.$ident.oppgave.$oppgaveId";

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

  const kanEndreTilstanden =
    erGyldigTilstand(nyTilstand) && metaData.muligeTilstander.includes(nyTilstand);

  if (kanEndreTilstanden) {
    const response = await endreStatus(params.oppgaveId, nyTilstand, request);

    if (response.ok) {
      return json({ endret: true, nyTilstand });
    } else {
      throw new Response(
        `Klarte ikke endre tilstand fra ${metaData.tilstand} til ${nyTilstand}. Backend feilet.`,
        {
          status: 500,
        },
      );
    }
  } else {
    throw new Response(
      `${nyTilstand} er ikke gyldig tilstand for oppgave med oppgaveId: ${params.oppgaveId} og med muligeTilstander ${metaData.muligeTilstander}`,
      {
        status: 500,
      },
    );
  }
}

export default function SendVedtaksbrev() {
  const { oppgave } = useRouteLoaderData(
    "routes/saksbehandling.person.$ident.oppgave.$oppgaveId",
  ) as ISaksbehandlingsOppgaveLoader;
  const postData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isCreating = Boolean(navigation.state === "submitting");

  const metadata = { tilstand: oppgave.tilstand, muligeTilstander: oppgave.muligeTilstander };
  const sendtTilToTrinnsKontroll =
    (postData && postData.endret) || metadata.tilstand === "Innstilt";

  return (
    <div className={styles.container}>
      <Heading size={"large"} level={"1"}>
        Lag vedtaksbrev
      </Heading>

      {sendtTilToTrinnsKontroll && (
        <Alert variant="success" className="my-4">
          Sendt til to-trinnskontroll
        </Alert>
      )}

      <Form method="post">
        <input name="metadata" type="hidden" value={JSON.stringify(metadata)} />
        <input name="ny-tilstand" type="hidden" value="Innstilt" />

        <p>Her skulle det vært noe opplastingsfunksjonalitet for et håndskrevet vedtaksbrev?</p>

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
