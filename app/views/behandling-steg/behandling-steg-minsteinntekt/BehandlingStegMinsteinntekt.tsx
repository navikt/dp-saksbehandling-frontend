import { type IProps } from "~/views/behandling-steg/BehandlingSteg";
import { Alert, BodyLong, Button, Heading, Loader } from "@navikt/ds-react";
import { hentValideringRegler } from "~/utils/validering.util";
import { BehandlingStegInputSelect } from "~/components/behandling-steg-input/BehandlingStegInputSelect";
import { ValidatedForm } from "remix-validated-form";
import type { Metadata } from "~/routes/saksbehandling.oppgave.$oppgaveId.steg.$stegUuid";
import { BehandlingStegInputDato } from "~/components/behandling-steg-input/BehandlingStegInputDato";
import { BehandlingStegLagretAv } from "~/components/behandling-steg-lagret-av/BehandlingStegLagretAv";
import { useEffect, useState } from "react";
import type { IMinsteinntekstData } from "~/views/behandling-steg/behandling-steg-minsteinntekt/minsteinntektMockdata";
import { InntektTabell } from "~/components/inntekt-tabell/InntektTabell";
import { BehandlingStegGenerell } from "~/views/behandling-steg/BehandlingStegGenerell";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import type { INetworkResponse } from "~/utils/types";
import { isNetworkResponseWaiting, isNetworkResponseSuccess } from "~/utils/type-guards";

async function getMinsteinntekt(oppgaveId: string): Promise<INetworkResponse> {
  const response = await fetch(`/saksbehandling/api/hent-minsteinntekt/${oppgaveId}`);

  if (!response.ok) {
    return {
      status: "error",
      error: { statusCode: response.status, statusText: response.statusText },
    };
  }

  return await response.json();
}

export function BehandlingStegMinsteinntekt(props: IProps) {
  const { steg } = props;
  const { oppgave } = useTypedRouteLoaderData("routes/saksbehandling.oppgave.$oppgaveId");
  const [manuellBehandling, setManuellBehandling] = useState(() => false);
  const [minsteInntektResponse, setMinsteInntektResponse] = useState<
    INetworkResponse<IMinsteinntekstData | void> | undefined
  >();

  async function oppdaterMinsteInntektResponse(oppgaveId: string) {
    setMinsteInntektResponse(undefined);
    setMinsteInntektResponse(await getMinsteinntekt(oppgaveId));
  }
  useEffect(() => {
    oppdaterMinsteInntektResponse(oppgave.uuid);
  }, [oppgave.uuid]);

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

      {!minsteInntektResponse && <Loader />}

      {!manuellBehandling && isNetworkResponseWaiting(minsteInntektResponse) && (
        <>
          <Alert variant={"warning"}>
            Systemet beregner fortsatt forslag til minsteinntektsvurdering
          </Alert>
          <Button variant="secondary" onClick={() => oppdaterMinsteInntektResponse(oppgave.uuid)}>
            Se om forslaget er klart
          </Button>
          <Button variant="secondary" onClick={() => setManuellBehandling(true)}>
            Register manuelt i stedet
          </Button>
        </>
      )}

      {!manuellBehandling &&
        isNetworkResponseSuccess<IMinsteinntekstData>(minsteInntektResponse) &&
        minsteInntektResponse.data && (
          <>
            <ValidatedForm
              key={"readonly-greier, trenger egentlig ikke validatedform"} // Keyen gjør at React refresher alt. Uten den kan svaret noen ganger bli igjen når neste steg vises.
              validator={hentValideringRegler(steg.svartype, steg.id, steg.uuid)}
              method="post"
            >
              <input name="metadata" type="hidden" value={JSON.stringify(metadata)} />

              <BehandlingStegInputSelect
                placeholder="Regel brukt"
                options={[{ text: "Ordinær", value: minsteInntektResponse.data.regel }]}
                name={"Bruk uuid til koblingen mot utregning"}
                svartype={"String"}
                label={"Regel"}
                verdi={minsteInntektResponse.data.regel}
                readonly={true}
              />

              <BehandlingStegInputDato
                name={"virkningsdato"}
                label={"Virkningsdato (hardkodet)"}
                verdi={minsteInntektResponse.data.virkningsdato}
                readonly={true}
                svartype={"LocalDate"}
              />
            </ValidatedForm>
            <BodyLong>
              Gjeldende grunnbeløp på virkningstidspunkt: <br />
              1.5G: TALL TALL TALL <br />
              3G: TALL TALL TALL
            </BodyLong>

            <InntektTabell inntekter={minsteInntektResponse.data.inntekter} />
            <BehandlingStegLagretAv steg={steg} />

            {minsteInntektResponse.data.vilkaarOppfylt && (
              <Alert variant={"success"}>Vilkåret om minste arbeidsinntekt er oppfylt</Alert>
            )}

            {!minsteInntektResponse.data.vilkaarOppfylt && (
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
