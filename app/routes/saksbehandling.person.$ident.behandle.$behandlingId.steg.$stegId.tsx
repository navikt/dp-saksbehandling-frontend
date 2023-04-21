import { Button } from "@navikt/ds-react";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useLocation, useNavigation } from "@remix-run/react";
import { ValidatedForm, validationError } from "remix-validated-form";
import invariant from "tiny-invariant";
import { Input } from "~/components/behandling-steg-input/BehandlingStegInput";
import { PDFLeser } from "~/components/pdf-leser/PDFLeser";
import {
  type BehandlingStegSvartype,
  type IBehandlingStegSvar,
  hentBehandling,
  svarBehandlingSteg,
} from "~/models/behandling.server";
import { hentValideringRegler, validerOgParseMetadata } from "~/utils/validering.util";

import styles from "~/route-styles/vilkaar.module.css";

export async function action({ request, params }: ActionArgs) {
  invariant(params.stegId, `params.stegId er påkrevd`);
  invariant(params.behandlingId, `params.behandlingId er påkrevd`);

  const formData = await request.formData();
  const metaData = validerOgParseMetadata<Metadata>(formData, "metadata");

  const validering = await hentValideringRegler(metaData.svartype, params.stegId).validate(
    formData
  );

  console.log(validering);
  // Skjema valideres i client side, men hvis javascript er disabled så må vi kjøre validering i server side også
  if (validering.error) {
    return validationError(validering.error);
  }

  const svar: IBehandlingStegSvar = {
    type: metaData.svartype,
    svar: validering.submittedData[params.stegId],
    begrunnelse: {
      tekst: validering.submittedData.begrunnelse,
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
  const { steg } = useLoaderData<typeof loader>();
  const location = useLocation();
  const navigation = useNavigation();
  const isCreating = Boolean(navigation.state === "submitting");

  const metadata: Metadata = {
    svartype: steg?.svartype,
  };

  return (
    <div className={styles.container}>
      <div className={styles.faktumContainer}>
        <ValidatedForm
          validator={hentValideringRegler(steg.svartype, steg.uuid)}
          method="post"
          key={location.key}
        >
          <input type="hidden" name="metadata" value={JSON.stringify(metadata)} />
          <Input
            uuid={steg.uuid}
            name={steg.uuid}
            verdi={steg?.svar?.svar}
            svartype={steg.svartype}
          />
          <Input svartype="String" name="begrunnelse" label="Begrunnelse" uuid={steg.uuid} />

          <Button type="submit" disabled={isCreating}>
            {isCreating ? "Lagrer..." : "Lagre"}
          </Button>
        </ValidatedForm>
      </div>

      <div className={styles.dokumentContainer}>
        <PDFLeser />
      </div>
    </div>
  );
}
