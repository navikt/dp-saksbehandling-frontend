import { ValidatedForm } from "remix-validated-form";
import { type Metadata } from "~/routes/saksbehandling.oppgave.$oppgaveId.steg.$stegId";
import { hentValideringRegler } from "~/utils/validering.util";
import { Input } from "../../components/behandling-steg-input/BehandlingStegInput";
import { hentStegTekst } from "~/tekster/stegTekster";
import { Button } from "@navikt/ds-react";
import { type IProps } from "./BehandlingSteg";
import {
  BehandlingStegInputSelect,
  type IOptions,
} from "~/components/behandling-steg-input/BehandlingStegInputSelect";
import { BehandlingStegLagretAv } from "~/components/behandling-steg-lagret-av/BehandlingStegLagretAv";
import { useNavigation } from "@remix-run/react";

export function BehandlingStegPeriode(props: IProps) {
  const { steg, readonly } = props;

  const navigation = useNavigation();
  const isSubmitting = Boolean(navigation.state === "submitting");

  const metadata: Metadata = {
    svartype: steg.svartype,
    id: steg.id,
  };

  const stegTekst = hentStegTekst(steg.id) || { label: steg.id, begrunnelse: "Begrunnelse" };

  const perioder: IOptions[] = [
    {
      text: "26",
      value: "26",
    },

    {
      text: "52",
      value: "52",
    },

    {
      text: "104",
      value: "104",
    },
  ];

  return (
    <ValidatedForm
      validator={hentValideringRegler(steg.svartype, steg.id, steg.uuid)}
      method="post"
    >
      <input name="metadata" type="hidden" value={JSON.stringify(metadata)} />

      <BehandlingStegInputSelect
        placeholder="Velg støndadsperiode"
        options={perioder}
        name={steg.uuid}
        svartype={steg.svartype}
        label={stegTekst.label}
        verdi={steg?.svar?.svar}
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
