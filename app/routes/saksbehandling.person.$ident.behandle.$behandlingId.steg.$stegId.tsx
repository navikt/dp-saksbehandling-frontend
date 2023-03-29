import { Form, useNavigation } from "@remix-run/react";
import { PDFLeser } from "~/components/pdf-leser/PDFLeser";

import styles from "~/route-styles/vilkaar.module.css";
import type { ActionArgs } from "@remix-run/node";
import { Button, Radio, RadioGroup } from "@navikt/ds-react";
import type { IBehandlingStegSvar } from "~/models/behandling.server";
import { svarBehandlingSteg } from "~/models/behandling.server";
import { invariant } from "@remix-run/router";

export async function action({ request, params }: ActionArgs) {
  invariant(params.behandlingId, `params.behandlingId er påkrevd`);
  invariant(params.stegId, `params.stegId er påkrevd`);
  const formData = await request.formData();
  const oppfylt = formData.get("oppfylt");

  invariant(oppfylt, `oppfylt formdata er påkrevd`);
  invariant(typeof oppfylt === "string", "oppfylt must be a string");

  const svar: IBehandlingStegSvar = {
    type: "Boolean",
    svar: oppfylt === "ja",
    begrunnelse: {
      tekst: "Har itte",
      kilde: "Høggern",
    },
  };

  const response = await svarBehandlingSteg(params.behandlingId, svar, params.stegId);

  return { response };
}

export default function PersonBehandleVilkaar() {
  const navigation = useNavigation();
  const isCreating = Boolean(navigation.state === "submitting");

  return (
    <div className={styles.container}>
      <div className={styles.faktumContainer}>
        <Form className={styles.vilkaarVurderingContainer} method="post">
          <RadioGroup
            name="oppfylt"
            legend="Oppfylt"
            // onChange={(val: any) => handleChange(val)}
            size="small"
          >
            <Radio value={"ja"}>Ja</Radio>
            <Radio value={"nei"}>Nei</Radio>
          </RadioGroup>
          <Button type="submit" disabled={isCreating}>
            {isCreating ? "Lagrer..." : "Lagre"}
          </Button>
        </Form>
      </div>

      <div className={styles.dokumentContainer}>
        <PDFLeser />
      </div>
    </div>
  );
}
