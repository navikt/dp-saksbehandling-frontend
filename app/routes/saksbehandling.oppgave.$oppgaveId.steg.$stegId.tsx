import { BodyShort, Button } from "@navikt/ds-react";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useLocation, useNavigation, useRouteLoaderData } from "@remix-run/react";
import { ValidatedForm, validationError } from "remix-validated-form";
import invariant from "tiny-invariant";
import { Input } from "~/components/behandling-steg-input/BehandlingStegInput";
import { PDFLeser } from "~/components/pdf-leser/PDFLeser";
import type { IBehandlingStegSvar, TBehandlingStegSvartype } from "~/models/oppgave.server";
import { hentOppgave, svarOppgaveSteg } from "~/models/oppgave.server";
import { hentFormattertDato } from "~/utils/dato.utils";
import {
  hentFormattertSvar,
  hentValideringRegler,
  validerOgParseMetadata,
} from "~/utils/validering.util";

import styles from "~/route-styles/stegvisning.module.css";

export async function action({ request, params }: ActionArgs) {
  invariant(params.stegId, `params.stegId er påkrevd`);
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);

  const formData = await request.formData();
  const metaData = validerOgParseMetadata<Metadata>(formData, "metadata");

  const validering = await hentValideringRegler(metaData.svartype, params.stegId).validate(
    formData,
  );

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

export async function loader({ params, request }: LoaderArgs) {
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);

  const oppgave = await hentOppgave(params.oppgaveId, request);

  if (!oppgave) {
    throw new Response(null, {
      status: 500,
      statusText: `Fant ikke oppgave med id: ${params.oppgaveId}`,
    });
  }

  const steg = oppgave.steg.find((steg) => steg.uuid === params.stegId);

  if (!steg) {
    throw new Response(null, {
      status: 500,
      statusText: `Fant ikke steg med id: ${params.stegId}`,
    });
  }

  return json({ steg });
}

interface Metadata {
  svartype: TBehandlingStegSvartype;
}

export default function PersonBehandleVilkaar() {
  const { steg } = useLoaderData<typeof loader>();
  const { oppgave } = useRouteLoaderData(`routes/saksbehandling.oppgave.$oppgaveId`);
  const readonly = oppgave.tilstand !== "TilBehandling";
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
          key={location.key}
          validator={hentValideringRegler(steg.svartype, steg.uuid)}
          method="post"
        >
          <input name="metadata" type="hidden" value={JSON.stringify(metadata)} />
          <Input
            name={steg.uuid}
            svartype={steg.svartype}
            verdi={steg?.svar?.svar}
            label={steg.id}
            readonly={readonly}
          />
          <Input
            verdi={steg?.svar?.begrunnelse?.tekst}
            name="begrunnelse"
            svartype="String"
            label="Begrunnelse"
            readonly={readonly}
          />
          {steg?.svar?.begrunnelse?.kilde === "Saksbehandler" && steg.svar.begrunnelse.utført && (
            <BodyShort>
              Sist endret: {hentFormattertDato(steg.svar.begrunnelse.utført, true)} av:{" "}
              {steg.svar.begrunnelse.utførtAv?.ident}
            </BodyShort>
          )}
          {!readonly && (
            <Button type="submit" disabled={isCreating}>
              {isCreating ? "Lagrer..." : "Lagre"}
            </Button>
          )}
        </ValidatedForm>
      </div>

      <div className={styles.dokumentContainer}>
        <PDFLeser />
      </div>
    </div>
  );
}
