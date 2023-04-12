import { Form, useLoaderData, useNavigation } from "@remix-run/react";
import { PDFLeser } from "~/components/pdf-leser/PDFLeser";

import { Button, TextField } from "@navikt/ds-react";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useEffect, useState } from "react";
import invariant from "tiny-invariant";
import { BehandlingStegInputDato } from "~/components/behandling-steg-input/BehandlingStegInputDato";
import type { IBehandlingStegSvar, IBehandlingStegSvartype } from "~/models/behandling.server";
import { hentBehandling, svarBehandlingSteg } from "~/models/behandling.server";
import { BehandlingStegInputBoolean } from "~/components/behandling-steg-input/BehandlingStegInputBoolean";

import styles from "~/route-styles/vilkaar.module.css";

export async function action({ request, params }: ActionArgs) {
  invariant(params.behandlingId, `params.behandlingId er påkrevd`);
  invariant(params.stegId, `params.stegId er påkrevd`);
  const formData = await request.formData();
  const skjemasvar = formData.get(params.stegId);
  const svartype = formData.get("svartype");

  console.log("skjemasvar: ", skjemasvar);
  console.log("typeof skjemasvar: ", typeof skjemasvar);

  const svar: IBehandlingStegSvar = {
    type: svartype as string,
    svar: skjemasvar?.toString() as IBehandlingStegSvartype,
    begrunnelse: {
      tekst: "Har itte",
      kilde: "Høggern",
    },
  };

  const response = await svarBehandlingSteg(params.behandlingId, svar, params.stegId);

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

export default function PersonBehandleVilkaar() {
  const navigation = useNavigation();
  const isCreating = Boolean(navigation.state === "submitting");
  const { steg } = useLoaderData<typeof loader>();
  const [svarValue, setSvarValue] = useState<IBehandlingStegSvartype>(steg?.svar?.svar ?? "");

  useEffect(() => {
    setSvarValue(steg?.svar?.svar || "");
  }, [steg]);

  return (
    <div className={styles.container}>
      <div className={styles.faktumContainer}>
        <Form className={styles.vilkaarVurderingContainer} method="post">
          {steg?.uuid}
          <input type="hidden" name="svartype" value={steg?.svartype} />
          {steg && steg.svartype == "Boolean" && (
            <BehandlingStegInputBoolean
              uuid={steg.uuid}
              legend={"Oppfylt"}
              setSvarVerdi={setSvarValue}
              verdi={svarValue as boolean | ""}
            />
          )}

          {steg && steg.svartype === "LocalDate" && (
            <BehandlingStegInputDato steg={steg} onChange={setSvarValue} />
          )}

          {steg && steg.svartype === "Int" && (
            <TextField
              name={steg.uuid}
              label="Tall:"
              defaultValue={svarValue as number}
              onChange={(e) => setSvarValue(e.currentTarget.value)}
              type="number"
            />
          )}

          {steg && steg.svartype === "String" && (
            <TextField
              name={steg.uuid}
              label="Tekst:"
              defaultValue={svarValue as string}
              onChange={(e) => setSvarValue(e.currentTarget.value)}
            />
          )}
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
