import { Button, Heading, Textarea } from "@navikt/ds-react";
import { type ActionArgs } from "@remix-run/node";
import { Form, useNavigation } from "@remix-run/react";
import invariant from "tiny-invariant";
import { sendMelding } from "~/models/dagsats-beregning.server";
import styles from "../route-styles/dagsats-og-beregning.module.css";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const json = formData.get("iver-json") as string;

  invariant(json, `JSON er påkrevd`);

  const data = JSON.parse(json);
  const response = await sendMelding(data, request);

  return { response };
}

export default function PersonOversiktDagsatsOgBeregningSide() {
  const navigation = useNavigation();
  const isCreating = Boolean(navigation.state === "submitting");
  return (
    <div className={styles.kontainer}>
      <Heading level="1" size="large" spacing>
        Team Iver ❤️
      </Heading>
      <Form method="post">
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
    </div>
  );
}
