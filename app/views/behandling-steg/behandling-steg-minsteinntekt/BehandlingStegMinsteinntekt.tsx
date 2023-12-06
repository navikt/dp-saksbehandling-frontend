import { type IProps } from "~/views/behandling-steg/BehandlingSteg";
import { Alert, BodyLong, BodyShort, Button, Heading, Link, Loader } from "@navikt/ds-react";
import { hentValideringRegler } from "~/utils/validering.util";
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

async function getGrunnbeloep(dato: string): Promise<INetworkResponse> {
  //iso 8601
  const response = await fetch(`https://g.nav.no/api/v1/grunnbeloep?${dato}`);

  if (!response.ok) {
    return {
      status: "error",
      error: { statusCode: response.status, statusText: response.statusText },
    };
  }

  return { status: "success", data: await response.json() };
}

interface IGrunnbeloep {
  //{"dato":"2023-05-01","grunnbeloep":118620,"grunnbeloepPerMaaned":9885,"gjennomsnittPerAar":116239,"omregningsfaktor":1.064076,"virkningstidspunktForMinsteinntekt":"2023-05-26"}
  dato: string;
  grunnbeloep: number;
  grunnbeloepPerMaaned: number;
  gjennomsnittPerAar: number;
  inntektPomregningsfaktorerioder: number;
  virkningstidspunktForMinsteinntekt: string;
}

export function BehandlingStegMinsteinntekt(props: IProps) {
  const { steg } = props;
  const { oppgave } = useTypedRouteLoaderData("routes/saksbehandling.oppgave.$oppgaveId");
  const [manuellBehandling, setManuellBehandling] = useState(() => false);
  const [minsteInntektResponse, setMinsteInntektResponse] = useState<
    INetworkResponse<IMinsteinntekstData | void> | undefined
  >();
  //midlertidig hack for å se om vi ønsker å vise grunnbeløp i vurderingen, bør følge med i datagrunnlag til vurderingsreferansen på minsteinntekt
  const [grunnbeloepResponse, setGrunnbeloepResponse] = useState<
    INetworkResponse<IGrunnbeloep | void> | undefined
  >();

  async function oppdaterMinsteInntektResponse(oppgaveId: string) {
    setMinsteInntektResponse(undefined);
    const response: INetworkResponse<IMinsteinntekstData | void> =
      await getMinsteinntekt(oppgaveId);
    setMinsteInntektResponse(response);
    if (isNetworkResponseSuccess<IMinsteinntekstData>(response) && response.data) {
      setGrunnbeloepResponse(await getGrunnbeloep(response.data.virkningsdato));
    }
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
            <BodyLong>
              I første omgang mangler man både informasjon om inntektsmåneder, regler anvendt,
              grunnbeløp brukt osv. Det bør være en god diskusjon rundt hva man faktisk trenger og
              ønsker herfra. :)
            </BodyLong>
            <ValidatedForm
              key={"readonly-greier, trenger egentlig ikke validatedform"} // Keyen gjør at React refresher alt. Uten den kan svaret noen ganger bli igjen når neste steg vises.
              validator={hentValideringRegler(steg.svartype, steg.id, steg.uuid)}
              method="post"
            >
              <input name="metadata" type="hidden" value={JSON.stringify(metadata)} />

              <BehandlingStegInputDato
                name={"virkningsdato"}
                label={"Virkningstidspunkt brukt"}
                verdi={minsteInntektResponse.data.virkningsdato}
                readonly={true}
                svartype={"LocalDate"}
              />
            </ValidatedForm>
            {isNetworkResponseSuccess<IGrunnbeloep>(grunnbeloepResponse) &&
              grunnbeloepResponse.data && (
                <>
                  <BodyShort>
                    1.5 G på virkningstidspunktet:{" "}
                    {(grunnbeloepResponse.data.grunnbeloep * 1.5).toLocaleString("no-nb")}
                  </BodyShort>
                  <BodyShort>
                    3 G på virkningstidspunktet:{" "}
                    {(grunnbeloepResponse.data.grunnbeloep * 3).toLocaleString("no-nb")}
                  </BodyShort>
                </>
              )}

            <InntektTabell inntekter={minsteInntektResponse.data.inntektPerioder} />
            <Link href={`#dummy-lenke-til-redigering/${minsteInntektResponse.data.inntektId}`}>
              Endre opplysninger om inntekt
            </Link>
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
