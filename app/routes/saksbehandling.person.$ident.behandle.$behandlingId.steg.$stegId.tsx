import { Form, useLoaderData, useNavigation, useRouteLoaderData } from "@remix-run/react";
import { PDFLeser } from "~/components/pdf-leser/PDFLeser";

import styles from "~/route-styles/vilkaar.module.css";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { Button, Radio, RadioGroup } from "@navikt/ds-react";
import type { IBehandling, IBehandlingStegSvar } from "~/models/behandling.server";
import { svarBehandlingSteg } from "~/models/behandling.server";
import invariant from "tiny-invariant";
import { json } from "@remix-run/node";
import { useState } from "react";

export async function action({ request, params }: ActionArgs) {
  invariant(params.behandlingId, `params.behandlingId er påkrevd`);
  invariant(params.stegId, `params.stegId er påkrevd`);
  const formData = await request.formData();
  const oppfylt = formData.get(params.stegId);

  invariant(oppfylt, `oppfylt formdata er påkrevd`);
  invariant(typeof oppfylt === "string", "oppfylt must be a string");

  const svar: IBehandlingStegSvar = {
    type: "Boolean",
    svar: oppfylt,
    begrunnelse: {
      tekst: "Har itte",
      kilde: "Høggern",
    },
  };

  const response = await svarBehandlingSteg(params.behandlingId, svar, params.stegId);

  return { response };
}

export async function loader({ params }: LoaderArgs) {
  return json({ stegId: params.stegId });
}

export default function PersonBehandleVilkaar() {
  const navigation = useNavigation();
  const isCreating = Boolean(navigation.state === "submitting");
  const data = useLoaderData<typeof loader>();
  const { behandling } = useRouteLoaderData(
    "routes/saksbehandling.person.$ident.behandle.$behandlingId"
  );
  const behandling2 = behandling as IBehandling;
  const steg = behandling2.steg.find((behandlingSteg) => behandlingSteg.uuid == data.stegId);
  console.log("steg:", steg?.svar?.svar);
  const [svarValue, setSvarValue] = useState(steg?.svar?.svar || "");

  return (
    <div className={styles.container}>
      <div className={styles.faktumContainer}>
        <Form className={styles.vilkaarVurderingContainer} method="post">
          {steg && steg.svartype == "Boolean" && (
            <>
              <RadioGroup
                name={steg.uuid}
                legend="Oppfylt"
                onChange={(val: any) => setSvarValue(val)}
                size="small"
                value={svarValue}
              >
                <Radio value={"true"}>Ja</Radio>
                <Radio value={"false"}>Nei</Radio>
              </RadioGroup>
            </>
          )}
          {steg && steg.svartype != "Boolean" && <p>IKKE IMPLEMENTERT</p>}
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
