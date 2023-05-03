import { Button } from "@navikt/ds-react";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useLocation, useNavigation } from "@remix-run/react";
import { ValidatedForm, validationError } from "remix-validated-form";
import invariant from "tiny-invariant";
import { Input } from "~/components/behandling-steg-input/BehandlingStegInput";
import { PDFLeser } from "~/components/pdf-leser/PDFLeser";
import type { BehandlingStegSvartype, IBehandlingStegSvar } from "~/models/oppgave.server";
import { hentOppgave, svarOppgaveSteg } from "~/models/oppgave.server";
import { useMatchesData } from "~/utils/loader-data.utils";
import { hentValideringRegler, validerOgParseMetadata } from "~/utils/validering.util";

import styles from "~/route-styles/vilkaar.module.css";

export async function action({ request, params }: ActionArgs) {
  invariant(params.stegId, `params.stegId er påkrevd`);
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);

  const formData = await request.formData();

  const metaData = validerOgParseMetadata<Metadata>(formData, "metadata");

  const validering = await hentValideringRegler(metaData.svartype, params.stegId).validate(
    formData
  );

  // Skjema valideres i client side, men hvis javascript er disabled så må vi kjøre validering i server side også
  if (validering.error) {
    return validationError(validering.error);
  }

  const svar: IBehandlingStegSvar = {
    type: metaData.svartype,
    svar: validering.submittedData[params.stegId],
    begrunnelse: {
      tekst: validering.submittedData.begrunnelse,
    },
  };

  const response = await svarOppgaveSteg(params.oppgaveId, svar, params.stegId);

  return { response };
}

export async function loader({ params }: LoaderArgs) {
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);

  const oppgave = await hentOppgave(params.oppgaveId);
  invariant(oppgave, `Fant ikke behandling med id: ${params.oppgaveId}`);

  const steg = oppgave.steg.find((steg) => steg.uuid === params.stegId);
  invariant(steg, `Fant ikke steg med id: ${params.stedId}`);

  return json({ steg });
}

interface Metadata {
  svartype: BehandlingStegSvartype;
}

export default function PersonBehandleVilkaar() {
  const { steg } = useLoaderData<typeof loader>();
  const personIdentLoader = useMatchesData("routes/saksbehandling.person.$ident");
  const dokumentOversiktMetadata = personIdentLoader?.dokumentOversiktMetadata as any[];

  const location = useLocation();
  const navigation = useNavigation();
  const isCreating = Boolean(navigation.state === "submitting");

  console.log("SAF: ", dokumentOversiktMetadata);

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
          />
          <Input
            verdi={steg?.svar?.begrunnelse?.tekst}
            name="begrunnelse"
            svartype="String"
            label="Begrunnelse"
          />

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
