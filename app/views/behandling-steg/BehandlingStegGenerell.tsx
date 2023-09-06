import { ValidatedForm } from "remix-validated-form";
import { type Metadata } from "~/routes/saksbehandling.oppgave.$oppgaveId.steg.$stegId";
import { hentValideringRegler } from "~/utils/validering.util";
import { Input } from "../../components/behandling-steg-input/BehandlingStegInput";
import { hentStegTekst } from "~/tekster/stegTekster";
import { Button } from "@navikt/ds-react";
import { type IProps } from "./BehandlingSteg";
import { BehandlingStegLagretAv } from "~/components/behandling-steg-lagret-av/BehandlingStegLagretAv";

export function BehandlingStegGenerell(props: IProps) {
  const { steg, readonly, isSubmitting } = props;

  const metadata: Metadata = {
    svartype: steg.svartype,
    id: steg.id,
  };

  const stegTekst = hentStegTekst(steg.id) || { label: steg.id, begrunnelse: "Begrunnelse" };

  return (
    <ValidatedForm
      validator={hentValideringRegler(steg.svartype, steg.id, steg.uuid)}
      method="post"
    >
      <input name="metadata" type="hidden" value={JSON.stringify(metadata)} />

      <Input
        name={steg.uuid}
        svartype={steg.svartype}
        verdi={steg?.svar?.svar}
        label={stegTekst.label}
        readonly={readonly}
      />

      <Input
        verdi={steg?.svar?.begrunnelse?.tekst}
        name="begrunnelse"
        svartype="String"
        label={stegTekst.begrunnelse}
        readonly={readonly}
        textarea
      />

      <BehandlingStegLagretAv steg={steg} />

      {!readonly && (
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Lagrer..." : "Lagre"}
        </Button>
      )}
    </ValidatedForm>
  );
}
