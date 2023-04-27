import { Button, Heading } from "@navikt/ds-react";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useLoaderData, useNavigation } from "@remix-run/react";
import invariant from "tiny-invariant";
import { endreStatus, hentOppgave } from "~/models/oppgave.server";
import styles from "~/route-styles/mangelbrev.module.css";

interface IMetadata {
  tilstand: string;
  muligeTilstander: string[];
}

export async function action({ request, params }: ActionArgs) {
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);
  const nyTilstand = "Vedtak";
  const formData = await request.formData();
  const metadata = formData.get("metadata");
  if (typeof metadata !== "string") {
    throw new Error("input er ikke en string");
  }
  const parsedMetadata: IMetadata = JSON.parse(metadata);
  if (!parsedMetadata.muligeTilstander.includes(nyTilstand)) {
    throw new Error(
      `Kan ikke godkjenne fra innstilt til vedtak, status på oppgaven er: ${
        parsedMetadata.tilstand
      } og mulige statuser kan endres til per nå er kun: ${parsedMetadata.muligeTilstander.join(
        ", "
      )}`
    );
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
  const metadata = { tilstand: oppgave.tilstand, muligeTilstander: oppgave.muligeTilstander };

  return json({ metadata });
}

export default function SendGodkjennVedtak() {
  const { metadata } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isCreating = Boolean(navigation.state === "submitting");

  return (
    <div className={styles.container}>
      <Form method="post">
        <Heading size={"large"} level={"1"}>
          Godkjenne vedtak
        </Heading>

        <input name="metadata" type="hidden" value={JSON.stringify(metadata)} />

        <div className={styles.buttonContainer}>
          <Button type="submit" disabled={isCreating}>
            {isCreating ? "Lagrer..." : "Godkjenn vedtak"}
          </Button>
        </div>
      </Form>
    </div>
  );
}
