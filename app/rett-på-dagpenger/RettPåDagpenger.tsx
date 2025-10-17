import { CheckmarkCircleFillIcon, XMarkOctagonIcon } from "@navikt/aksel-icons";
import { BodyShort, Heading, Timeline } from "@navikt/ds-react";
import { add } from "date-fns";

import { TidslinjeNavigering } from "~/components/tidslinje-navigering/TidslinjeNavigering";
import { useTidslinjeNavigeringState } from "~/hooks/useTidslinjeNavigeringState";
import { PrøvingsdatoInput } from "~/rett-på-dagpenger/PørvingsdatoInput";
import { formaterTilNorskDato } from "~/utils/dato.utils";

import { components } from "../../openapi/behandling-typer";
import { OpplysningVerdiForPeriode } from "./OpplysningVerdiForPeriode";
import { OpplysningVerdiPåPrøvingstidspunkt } from "./OpplysningVerdiPåPrøvingstidspunkt";

interface IProps {
  behandling: components["schemas"]["BehandlingsresultatV2"];
}

const generelleOpplysninger = [
  { id: "0194881f-91d1-7df2-ba1d-4533f37fcc76", label: "Vurdert fra" },
  { id: "0194881f-9435-72a8-b1ce-9575cbc2a767", label: "Arbeidstid før tap" },
  { id: "0194881f-9444-7a73-a458-0af81c034d8b", label: "Rettighetstype" },
  { id: "0194881f-943d-77a7-969c-147999f15459", label: "Stønadsperiode" },
  { id: "0194881f-943f-78d9-b874-00a4944c54ef", label: "Egenandel" },
  { id: "0194881f-9410-7481-b263-4606fdd10cba", label: "Beregnet basert på" },
  { id: "0194881f-9410-7481-b263-4606fdd10cbd", label: "Inntektsgrunnlag" },
];

const rettighetsperiodeOpplysninger = [
  { id: "0194881f-9444-7a73-a458-0af81c034d8b", label: "Rettighetstype" },
  { id: "0194881f-9435-72a8-b1ce-9575cbc2a76b", label: "Ny arbeidstid per uke" },
  { id: "0194881f-9434-79e8-a64d-1a23cc5d86eb", label: "Samordnet dagssats uten barnetillegg" },
  { id: "0194881f-9428-74d5-b160-f63a4c61a24d", label: "Samordnet dagssats med barnetillegg" },
  { id: "0194881f-9445-734c-a7ee-045edf29b523", label: "Godkjent unntak for utdanning" },
];

export function RettPåDagpenger({ behandling }: IProps) {
  const sisteRettighetPeriodeDato = behandling.rettighetsperioder
    .flatMap((periode) => periode.fraOgMed)
    .sort()
    .at(0);

  const {
    antallUkerITidslinje,
    setAntallUkerITidslinje,
    tidslinjeStartSlutt,
    setTidslinjeStartSlutt,
  } = useTidslinjeNavigeringState([], undefined, sisteRettighetPeriodeDato);

  const prøvingsdatoOpplysning = behandling.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === "0194881f-91d1-7df2-ba1d-4533f37fcc76",
  );
  const prøvingsdatoOpplysningPeriode = prøvingsdatoOpplysning?.perioder[0];

  return (
    <div className={"card flex flex-col gap-4 p-4"}>
      <Heading size={"medium"}>Har bruker rett på dagpenger?</Heading>

      {prøvingsdatoOpplysningPeriode && (
        <PrøvingsdatoInput
          behandlingId={behandling.behandlingId}
          prøvingsdatoOpplysning={prøvingsdatoOpplysning}
        />
      )}

      <TidslinjeNavigering
        tidslinjeStartSlutt={tidslinjeStartSlutt}
        setTidslinjeStartSlutt={setTidslinjeStartSlutt}
        antallUkerITidslinje={antallUkerITidslinje}
        setAntallUkerITidslinje={setAntallUkerITidslinje}
      />

      <Timeline
        startDate={tidslinjeStartSlutt.start}
        endDate={tidslinjeStartSlutt.end}
        className={"aksel--compact"}
      >
        <Timeline.Row label={"Rett til dagpenger"}>
          {behandling.rettighetsperioder.map((periode, index) => (
            <Timeline.Period
              key={index}
              start={new Date(periode.fraOgMed)}
              end={periode.tilOgMed ? new Date(periode.tilOgMed) : add(new Date(), { years: 1 })}
              status={periode.harRett ? "success" : "danger"}
              icon={periode.harRett ? <CheckmarkCircleFillIcon /> : <XMarkOctagonIcon />}
            >
              {periode.harRett}
            </Timeline.Period>
          ))}
        </Timeline.Row>
      </Timeline>

      <div className={"card card-sunken p-4"}>
        <Heading size={"small"}>Generelt</Heading>
        <section className="grid grid-cols-4 gap-2">
          {generelleOpplysninger.map(({ id, label }) => (
            <OpplysningVerdiPåPrøvingstidspunkt
              key={id}
              label={label}
              opplysninger={behandling.opplysninger}
              opplysningTypeId={id}
              prøvingsdato={prøvingsdatoOpplysningPeriode.verdi.verdi}
            />
          ))}
          <div className="flex flex-col gap-1">
            <BodyShort size={"small"} weight={"semibold"}>
              Rettighetsperioder
            </BodyShort>
            <BodyShort size={"small"}>
              {behandling.rettighetsperioder.length} periode
              {behandling.rettighetsperioder.length !== 1 ? "r" : ""}
            </BodyShort>
          </div>
        </section>
      </div>

      {behandling.rettighetsperioder.map((periode, index) => (
        <div key={index} className={"card card-sunken p-4"}>
          <Heading size={"small"}>Rettighetsperiode {index + 1}</Heading>
          <section className="grid grid-cols-4 gap-2">
            <div className="flex flex-col gap-1">
              <BodyShort size={"small"} weight={"semibold"}>
                Rett på dagpenger
              </BodyShort>
              <BodyShort size={"small"}>{periode.harRett ? "Ja" : "Nei"}</BodyShort>
            </div>

            <div className="flex flex-col gap-1">
              <BodyShort size={"small"} weight={"semibold"}>
                Fra og med
              </BodyShort>
              <BodyShort size={"small"}>{formaterTilNorskDato(periode.fraOgMed)}</BodyShort>
            </div>

            <div className="flex flex-col gap-1">
              <BodyShort size={"small"} weight={"semibold"}>
                Til og med
              </BodyShort>
              <BodyShort size={"small"}>
                {periode.tilOgMed ? formaterTilNorskDato(periode.tilOgMed) : "--"}
              </BodyShort>
            </div>

            {rettighetsperiodeOpplysninger.map(({ id, label }) => (
              <OpplysningVerdiForPeriode
                key={id}
                label={label}
                opplysninger={behandling.opplysninger}
                opplysningTypeId={id}
                rettighetsperiode={periode}
              />
            ))}
          </section>
        </div>
      ))}
    </div>
  );
}
