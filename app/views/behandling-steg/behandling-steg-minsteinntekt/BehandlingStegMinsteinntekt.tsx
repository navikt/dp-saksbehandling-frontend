import { type IProps } from "~/views/behandling-steg/BehandlingSteg";
import { Alert, BodyLong, Button, Heading } from "@navikt/ds-react";
import { hentValideringRegler } from "~/utils/validering.util";
import { BehandlingStegInputSelect } from "~/components/behandling-steg-input/BehandlingStegInputSelect";
import { ValidatedForm } from "remix-validated-form";
import type { Metadata } from "~/routes/saksbehandling.oppgave.$oppgaveId.steg.$stegId";
import { BehandlingStegInputDato } from "~/components/behandling-steg-input/BehandlingStegInputDato";
import { BehandlingStegLagretAv } from "~/components/behandling-steg-lagret-av/BehandlingStegLagretAv";
import { useState } from "react";
import { minsteinntektMockdata } from "~/views/behandling-steg/behandling-steg-minsteinntekt/minsteinntektMockdata";
import { InntektTabell } from "~/components/inntekt-tabell/InntektTabell";
import { BehandlingStegGenerell } from "~/views/behandling-steg/BehandlingStegGenerell";

export function BehandlingStegMinsteinntekt(props: IProps) {
  const { steg } = props;
  const [manuellBehandling, setManuellBehandling] = useState(() => false);

  const metadata: Metadata = {
    svartype: steg.svartype,
    id: steg.id,
  };

  return (
    <>
      <Heading size="large">Vurder vilkår om minste arbeidsinntekt</Heading>

      <BodyLong>
        Hatt en brutto arbeidsinntekt som minst svarer til 1,5 ganger grunnbeløpet siste 12
        månedene, eller 3 ganger grunnbeløpet siste 36 månedene.
      </BodyLong>

      {!manuellBehandling && (
        <>
          <ValidatedForm
            key={"readonly-greier, trenger egentlig ikke validatedform"} // Keyen gjør at React refresher alt. Uten den kan svaret noen ganger bli igjen når neste steg vises.
            validator={hentValideringRegler(steg.svartype, steg.id, steg.uuid)}
            method="post"
          >
            <input name="metadata" type="hidden" value={JSON.stringify(metadata)} />

            <BehandlingStegInputSelect
              placeholder="Regel brukt"
              options={[{ text: "Ordinær", value: minsteinntektMockdata.regel }]}
              name={"Bruk uuid til koblingen mot utregning"}
              svartype={"String"}
              label={"Regel"}
              verdi={minsteinntektMockdata.regel}
              readonly={true}
            />

            <BehandlingStegInputDato
              name={"virkningsdato"}
              label={"Virkningsdato (hardkodet)"}
              verdi={minsteinntektMockdata.virkningsdato}
              readonly={true}
              svartype={"LocalDate"}
            />
          </ValidatedForm>
          <BodyLong>
            Gjeldende grunnbeløp på virkningstidspunkt: <br />
            1.5G: TALL TALL TALL <br />
            3G: TALL TALL TALL
          </BodyLong>

          <InntektTabell inntekter={minsteinntektMockdata.inntekter} />
          <BehandlingStegLagretAv steg={steg} />

          {minsteinntektMockdata.vilkaarOppfylt && (
            <Alert variant={"success"}>Vilkåret om minste arbeidsinntekt er oppfylt</Alert>
          )}

          {!minsteinntektMockdata.vilkaarOppfylt && (
            <Alert variant={"error"}>Vilkåret om minste arbeidsinntekt er ikke oppfylt</Alert>
          )}

          <div className={"knapperad"}>
            <Button
              variant="primary"
              onClick={() => console.log("BEEP BOP! Bruker maskinell beregning!")}
            >
              Dette stemmer!
            </Button>
            <Button variant="secondary" onClick={() => setManuellBehandling(true)}>
              Register manuelt i stedet
            </Button>
          </div>
        </>
      )}

      {manuellBehandling && (
        <>
          <Alert variant={"warning"}>Manuell overstyring</Alert>
          <Button variant="secondary" onClick={() => setManuellBehandling(false)}>
            Se automatisk forslag
          </Button>
          <BehandlingStegGenerell {...props} />
        </>
      )}
    </>
  );
}
