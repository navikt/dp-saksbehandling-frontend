import { ValidatedForm } from "remix-validated-form";
import { type Metadata } from "~/routes/saksbehandling.oppgave.$oppgaveId.steg.$stegUuid";
import { hentValideringRegler } from "~/utils/validering.util";
import { Input } from "~/components/behandling-steg-input/BehandlingStegInput";
import type { IStegTekst } from "~/tekster/stegTekster";
import { hentStegTekst } from "~/tekster/stegTekster";
import { Button } from "@navikt/ds-react";
import { type IBehandlingStegProps } from "./BehandlingSteg";
import {
  BehandlingStegInputSelect,
  type IOptions,
} from "~/components/behandling-steg-input/BehandlingStegInputSelect";
import { BehandlingStegLagretAv } from "~/components/behandling-steg-lagret-av/BehandlingStegLagretAv";
import { useLocation, useNavigation } from "@remix-run/react";

export function BehandlingStegPeriode(props: IBehandlingStegProps) {
  const { steg, readonly } = props;

  const location = useLocation();
  const navigation = useNavigation();
  const isSubmitting = Boolean(navigation.state === "submitting");

  const metadata: Metadata = {
    svartype: steg.svartype,
    id: steg.id,
  };

  const defaultStegTekst: IStegTekst = {
    id: steg.id,
    label: steg.id,
    begrunnelse: "Begrunnelse",
    hjelpetekst: { label: "", begrunnelse: "" },
  };

  const stegTekst = hentStegTekst(steg.id) ?? defaultStegTekst;

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
      key={location.key} // Keyen gjør at React refresher alt. Uten den kan svaret noen ganger bli igjen når neste steg vises.
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
        description={stegTekst.hjelpetekst.label}
        verdi={steg?.svar?.svar}
        readonly={readonly}
      />

      <Input
        verdi={steg?.svar?.begrunnelse?.tekst}
        name="begrunnelse"
        svartype="String"
        label={stegTekst.begrunnelse}
        description={stegTekst.hjelpetekst.begrunnelse}
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
