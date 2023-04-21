import { Button, Heading, Radio, RadioGroup, Textarea } from "@navikt/ds-react";
import type { ActionArgs } from "@remix-run/node";
import { Form, useNavigation } from "@remix-run/react";
import { useState } from "react";
import invariant from "tiny-invariant";
import { svarFerdigstill } from "~/models/oppgave.server";
import type { IFerdigstill } from "~/models/oppgave.server";
import styles from "~/route-styles/mangelbrev.module.css";

export async function action({ request, params }: ActionArgs) {
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);
  const formData = await request.formData();
  const innvilget = formData.get("innvilget") as string;
  const begrunnelse = formData.get("begrunnelse") as string;
  invariant(innvilget, `må besvare om innvilget eller ikke!`);
  invariant(begrunnelse, `må gi en begrunnelse for innvilget eller ikke`);

  const body: IFerdigstill = {
    innvilget,
    begrunnelse,
  };

  const response = await svarFerdigstill(params.oppgaveId, body);

  return { response };
}

export default function SendTilFerdigstill() {
  const navigation = useNavigation();
  const isCreating = Boolean(navigation.state === "submitting");
  const [innvilgetValue, setInnvilgetValue] = useState<boolean | string>("");
  const [begrunnelsesValue, setBegrunnelsesValue] = useState<string>("");

  return (
    <div className={styles.container}>
      <Form method={"post"}>
        <Heading size={"large"} level={"1"}>
          Ferdigstill
        </Heading>

        <RadioGroup
          name="innvilget"
          legend="Er kravene oppfylt?"
          onChange={(value) => setInnvilgetValue(value)}
          size="small"
          value={innvilgetValue}
        >
          <Radio value={true}>Ja</Radio>
          <Radio value={false}>Nei</Radio>
        </RadioGroup>
        <Textarea
          name="begrunnelse"
          label={"Begrunnelse"}
          value={begrunnelsesValue}
          onChange={(event) => setBegrunnelsesValue(event.currentTarget.value)}
        ></Textarea>

        <div className={styles.buttonContainer}>
          <Button type="submit" disabled={isCreating}>
            {isCreating ? "Lagrer..." : "Send til ferdigstill"}
          </Button>
        </div>
      </Form>
    </div>
  );
}