import { Alert, Button, Heading, Textarea } from "@navikt/ds-react";
import { json, type ActionArgs } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import invariant from "tiny-invariant";
import { sendMelding } from "~/models/dagsats-beregning.server";
import styles from "../route-styles/dagsats-og-beregning.module.css";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const jsonInput = formData.get("iver-json") as string;

  invariant(jsonInput, `JSON er påkrevd`);

  const response = await sendMelding(jsonInput, request);

  return json({ successful: response.ok });
}

export default function PersonOversiktDagsatsOgBeregningSide() {
  const navigation = useNavigation();
  const isCreating = Boolean(navigation.state === "submitting");
  const data = useActionData<typeof action>();

  return (
    <div className={styles.kontainer}>
      <Heading level="1" size="large" spacing>
        Team Iver ❤️
      </Heading>
      <Form method="post" className={styles.skjema}>
        <Textarea
          label="JSON"
          id="iver-json"
          name="iver-json"
          className={styles.tekstfelt}
        ></Textarea>
        <Button type="submit" disabled={isCreating}>
          {isCreating ? "Sender inn..." : "Send inn"}
        </Button>
      </Form>

      {data && data.successful && !isCreating && (
        <Alert variant="success" inline>
          Det ble sendt inn OK!
        </Alert>
      )}

      {data && !data.successful && !isCreating && (
        <Alert variant="error" inline>
          Det skjedde en feil :/
        </Alert>
      )}
    </div>
  );
}

export function ErrorBoundary({ error }: any) {
  console.error(error);
  return (
    <div className={styles.kontainer}>
      <Heading level="1" size="large" spacing>
        Team Iver ❤️
      </Heading>
      <Alert variant="error" inline>
        Noe skjedde som ble virkelig feil!
      </Alert>
    </div>
  );
}
