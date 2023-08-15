import { Button, Heading } from "@navikt/ds-react";
import type { ActionArgs } from "@remix-run/node";
import { Form, useNavigation, useRouteError } from "@remix-run/react";
import invariant from "tiny-invariant";
import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { endreStatus } from "~/models/oppgave.server";
import { erGyldigTilstand } from "~/utils/type-guards";
import styles from "~/route-styles/mangelbrev.module.css";

export async function action({ request, params }: ActionArgs) {
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);
  const formData = await request.formData();
  const nyTilstand = formData.get("ny-tilstand");

  if (typeof nyTilstand !== "string") {
    throw new Error("input er ikke en string");
  }

  if (erGyldigTilstand(nyTilstand)) {
    const response = await endreStatus(params.oppgaveId, nyTilstand, request);
    return { response };
  }

  throw new Response(
    `${nyTilstand} er ikke gyldig tilstand for oppgave med oppgaveId: ${nyTilstand}`,
  );
}

export default function VurderSaksbehandling() {
  const navigation = useNavigation();
  const isCreating = Boolean(navigation.state === "submitting");

  return (
    <div className={styles.container}>
      <Heading size={"large"} level={"1"}>
        Vurder saksbehandling
      </Heading>

      <div className={styles.formContainer}>
        <Form method="post">
          <input name="ny-tilstand" type="hidden" value="Vedtak" />

          <Button type="submit" disabled={isCreating}>
            {isCreating ? "Lagrer..." : "Godkjenn vedtak"}
          </Button>
        </Form>

        <Form method="post">
          <input name="ny-tilstand" type="hidden" value="TilBehandling" />

          <Button type="submit" variant="secondary" disabled={isCreating}>
            {isCreating ? "Lagrer..." : "Send tilbake til saksbehandler"}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
