import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useNavigation, useParams, useRouteLoaderData } from "@remix-run/react";
import { validationError } from "remix-validated-form";
import invariant from "tiny-invariant";
import { PDFLeser } from "~/components/pdf-leser/PDFLeser";
import type {
  IBehandlingStegSvar,
  IOppgave,
  TBehandlingStegSvartype,
} from "~/models/oppgave.server";
import { svarOppgaveSteg } from "~/models/oppgave.server";
import {
  hentFormattertSvar,
  hentValideringRegler,
  validerOgParseMetadata,
} from "~/utils/validering.util";
import { BehandlingSteg } from "~/views/behandling-steg/BehandlingSteg";

import styles from "~/route-styles/stegvisning.module.css";

export async function action({ request, params }: ActionArgs) {
  invariant(params.stegId, `params.stegId er påkrevd`);
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);

  const formData = await request.formData();
  const metaData = validerOgParseMetadata<Metadata>(formData, "metadata");

  const validering = await hentValideringRegler(
    metaData.svartype,
    metaData.id,
    params.stegId,
  ).validate(formData);

  // Skjema valideres i client side, men hvis javascript er disabled så må vi kjøre validering i server side også
  if (validering.error) {
    return validationError(validering.error);
  }

  const svar: IBehandlingStegSvar = {
    type: metaData.svartype,
    svar: hentFormattertSvar(validering.submittedData[params.stegId], metaData.svartype),
    begrunnelse: {
      tekst: validering.submittedData.begrunnelse,
    },
  };

  const response = await svarOppgaveSteg(params.oppgaveId, svar, params.stegId, request);

  if (response.ok) {
    return json({ response });
  } else {
    throw new Response(null, { status: 500, statusText: "Klarte ikke lagre svar på steg" });
  }
}

export interface Metadata {
  svartype: TBehandlingStegSvartype;
  id: string;
}

export default function PersonBehandleVilkaar() {
  const { oppgave } = useRouteLoaderData(`routes/saksbehandling.oppgave.$oppgaveId`) as {
    oppgave: IOppgave;
  };
  const readonly = oppgave.tilstand !== "TilBehandling";
  const navigation = useNavigation();
  const isSubmitting = Boolean(navigation.state === "submitting");
  const { stegId } = useParams();
  const steg = oppgave.steg.find((steg) => steg.uuid === stegId);

  if (!steg) {
    throw new Response(null, {
      status: 500,
      statusText: `Fant ikke steg med id: ${stegId}`,
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.faktumContainer}>
        <BehandlingSteg steg={steg} readonly={readonly} isSubmitting={isSubmitting} />
      </div>

      <div className={styles.dokumentContainer}>
        <PDFLeser />
      </div>
    </div>
  );
}
