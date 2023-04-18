import { Button, Heading, Radio, RadioGroup } from "@navikt/ds-react";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { useState } from "react";
import invariant from "tiny-invariant";
import { svarFerdigstill } from "~/models/behandling.server";
import styles from "~/route-styles/mangelbrev.module.css";

export async function action({ request, params }: ActionArgs) {
  invariant(params.behandlingId, `params.behandlingId er påkrevd`);
  const formData = await request.formData();
  const skjemasvar: boolean | undefined = formData.get("innvilget");

  const response = await svarFerdigstill(params.behandlingId, skjemasvar);

  return { response };
}

export async function loader({ params }: LoaderArgs) {
  console.log("Kjører loader() i saksbehandling.person.$ident.behandle.$behandlingId.steg.$stegId");
  invariant(params.behandlingId, `params.behandlingId er påkrevd`);
  const behandling = await hentBehandling(params.behandlingId);
  invariant(behandling, `Fant ikke behandling med id: ${params.behandlingId}`);

  const steg = behandling.steg.find((steg) => steg.uuid === params.stegId);

  return json({ steg });
}

export default function SendTilFerdigstill() {
  const [svarValue, setSvarValue] = useState<boolean | undefined>(undefined);

  return (
    <div className={styles.container}>
      <Form>
        <Heading size={"large"} level={"1"}>
          Ferdigstill
        </Heading>

        <RadioGroup
          name="innvilget"
          legend="Oppfylt"
          onChange={(value) => setSvarValue(value)}
          size="small"
          value={svarValue}
        >
          <Radio value={true}>Ja</Radio>
          <Radio value={false}>Nei</Radio>
        </RadioGroup>

        <div className={styles.buttonContainer}>
          <Button>Send til ferdigstill</Button>
        </div>
      </Form>
    </div>
  );
}
