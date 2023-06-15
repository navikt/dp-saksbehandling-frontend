import { Button, Textarea } from "@navikt/ds-react";
import { type ActionArgs } from "@remix-run/node";
import { Form, useNavigation } from "@remix-run/react";
import invariant from "tiny-invariant";
import { sendMelding } from "~/models/dagsats-beregning.server";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const json = formData.get("iver-json") as string;

  invariant(json, `JSON er påkrevd`);

  console.log("Kommer vi hit?");

  const data = JSON.parse(json);
  console.log(data);

  const response = await sendMelding(data, request);

  return { response };
}

export default function PersonOversiktDagsatsOgBeregningSide() {
  const navigation = useNavigation();
  const isCreating = Boolean(navigation.state === "submitting");
  return (
    <>
      Dagsats og beregning
      <Form method="post">
        <Textarea label="JSON" id="iver-json" name="iver-json"></Textarea>
        <Button type="submit" disabled={isCreating}>
          {isCreating ? "Sender inn..." : "Send inn"}
        </Button>
      </Form>
    </>
  );
}
