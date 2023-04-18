import { Button, Heading, Radio, RadioGroup, Textarea } from "@navikt/ds-react";
import type { ActionArgs } from "@remix-run/node";
import { Form, useNavigation } from "@remix-run/react";
import { useState } from "react";
import invariant from "tiny-invariant";
import { svarFerdigstill } from "~/models/behandling.server";
import styles from "~/route-styles/mangelbrev.module.css";

const innvilgetName = "innvilget";

export async function action({ request, params }: ActionArgs) {
  invariant(params.behandlingId, `params.behandlingId er påkrevd`);
  const formData = await request.formData();
  const skjemasvar = formData.get(innvilgetName);
  invariant(skjemasvar, `må besvare om innvilget eller ikke!`);

  const response = await svarFerdigstill(params.behandlingId, skjemasvar?.toString());

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
          name={innvilgetName}
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
