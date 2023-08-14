import { BodyLong, Button, Heading } from "@navikt/ds-react";
import type { ActionArgs } from "@remix-run/node";
import { Form, useNavigation, useRouteError, useRouteLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { endreStatus } from "~/models/oppgave.server";
import styles from "~/route-styles/mangelbrev.module.css";
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
  const nyTilstand = formData.get("ny-tilstand");

  // Alle inputfelt sin value er enten string eller File blob
  if (typeof nyTilstand !== "string") {
    throw new Error("input er ikke en string");
  }
  const metaData = validerOgParseMetadata<IMetadata>(formData, "metadata");
  console.log(metaData);

  if (!metaData.muligeTilstander.includes(nyTilstand)) {
    throw new Response(
      `Kan ikke sende videre til tilstand ${nyTilstand}, status på oppgaven er: ${
        metaData.tilstand
      } og mulige statusen den kan endres til per nå er kun: ${metaData.muligeTilstander.join(
        ", ",
      )}`,
      { status: 400 },
    );
  }

  if (erGyldigTilstand(nyTilstand)) {
    const response = await endreStatus(params.oppgaveId, nyTilstand, request);
    return { response };
  }

  throw new Response(
    `${nyTilstand} er ikke gyldig tilstand for oppgave med oppgaveId: ${nyTilstand}`,
  );
}

export default function SendMangelbrev() {
  const { oppgave } = useRouteLoaderData(
    "routes/saksbehandling.oppgave.$oppgaveId",
  ) as ISaksbehandlingsOppgaveLoader;

  const metadata = { tilstand: oppgave.tilstand, muligeTilstander: oppgave.muligeTilstander };
  const navigation = useNavigation();
  const isCreating = Boolean(navigation.state === "submitting");
  return (
    <div className={styles.container}>
      <Form method="post">
        <Heading size={"large"} level={"1"}>
          Send mangelbrev
        </Heading>
        <input name="metadata" type="hidden" value={JSON.stringify(metadata)} />
        <input name="ny-tilstand" type="hidden" value="VentPåMangelbrev" />

        <BodyLong>Noter grunnlag for at hvilke informasjon som mangler</BodyLong>

        <p>Her skulle det vært noe opplastingsfunksjonalitet</p>

        <div className={styles.buttonContainer}>
          <Button type="submit" disabled={isCreating}>
            {isCreating ? "Lagrer..." : "Send mangelbrev"}
          </Button>
        </div>
      </Form>
      <Form method="post">
        <input name="metadata" type="hidden" value={JSON.stringify(metadata)} />
        <input name="ny-tilstand" type="hidden" value="TilBehandling" />

        <div className={styles.buttonContainer}>
          <Button type="submit" disabled={isCreating}>
            {isCreating ? "Lagrer..." : "Tilbake til behandling igjen"}
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
