import { Button, Textarea } from "@navikt/ds-react";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useLoaderData, useNavigation } from "@remix-run/react";
import { useEffect, useState } from "react";
import invariant from "tiny-invariant";
import { PDFLeser } from "~/components/pdf-leser/PDFLeser";
import type { BehandlingStegSvartype, IBehandlingStegSvar } from "~/models/behandling.server";
import { hentBehandling, svarBehandlingSteg } from "~/models/behandling.server";

import { BehandlingStegInput } from "~/components/behandling-steg-input/BehandlingStegInput";
import styles from "~/route-styles/vilkaar.module.css";
import { validerOgParseMetadata, validerSkjemaData } from "~/utils/validering.util";

export async function action({ request, params }: ActionArgs) {
  invariant(params.stegId, `params.stegId er påkrevd`);
  invariant(params.behandlingId, `params.behandlingId er påkrevd`);

  const formData = await request.formData();
  const skjemasvar = validerSkjemaData(formData, params.stegId);
  const begrunnelse = validerSkjemaData(formData, "begrunnelse");
  const metaData = validerOgParseMetadata<Metadata>(formData, "metadata");

  const svar: IBehandlingStegSvar = {
    type: metaData.svartype,
    svar: skjemasvar,
    begrunnelse: {
      tekst: begrunnelse,
      kilde: "Saksbehandler",
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
  invariant(steg, `Fant ikke steg med id: ${params.stedId}`);

  return json({ steg });
}

interface Metadata {
  svartype: BehandlingStegSvartype;
}

export default function PersonBehandleVilkaar() {
  const navigation = useNavigation();
  const isCreating = Boolean(navigation.state === "submitting");
  const { steg } = useLoaderData<typeof loader>();
  const [svarVerdi, setSvarVerdi] = useState<string>(steg?.svar?.svar ?? "");
  const [begrunnelseTekst, setBegrunnelseTekst] = useState<string>(
    steg?.svar?.begrunnelse?.tekst ?? ""
  );

  const metadata: Metadata = {
    svartype: steg?.svartype,
  };

  useEffect(() => {
    setSvarVerdi(steg?.svar?.svar || "");
    setBegrunnelseTekst(steg?.svar?.begrunnelse?.tekst || "");
  }, [steg]);

  return (
    <div className={styles.container}>
      <div className={styles.faktumContainer}>
        <Form className={styles.vilkaarVurderingContainer} method="post">
          {steg?.uuid}
          <input type="hidden" name="metadata" value={JSON.stringify(metadata)} />

          <BehandlingStegInput steg={steg} svarVerdi={svarVerdi} setSvarVerdi={setSvarVerdi} />

          <Textarea
            name="begrunnelse"
            label="Begrunnelse:"
            resize={true}
            defaultValue={begrunnelseTekst}
            onChange={(event) => setBegrunnelseTekst(event.currentTarget.value)}
          />

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
