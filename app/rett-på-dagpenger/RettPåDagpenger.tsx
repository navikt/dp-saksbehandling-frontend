import { CheckmarkCircleFillIcon, XMarkOctagonIcon } from "@navikt/aksel-icons";
import { BodyShort, DatePicker, Heading, Timeline, useDatepicker } from "@navikt/ds-react";
import { add, sub } from "date-fns";
import { useState } from "react";

import { TidslinjeNavigering } from "~/components/tidslinje-navigering/TidslinjeNavigering";
import {
  AntallUkerITidslinje,
  formaterOpplysningVerdi,
  TidslinjeStartSlutt,
} from "~/components/vilkår-tidslinje/VilkårTidslinje";

import { components } from "../../openapi/behandling-typer";

interface IProps {
  behandling: components["schemas"]["BehandlingsresultatV2"];
}

export function RettPåDagpenger({ behandling }: IProps) {
  const sisteRettighetPeriodeDato = behandling.rettighetsperioder
    .flatMap((periode) => periode.fraOgMed)
    .sort()
    .at(0);

  const [antallUkerITidslinje, setAntallUkerITidslinje] = useState<AntallUkerITidslinje>("4");
  const [tidslinjeStartSlutt, setTidslinjeStartSlutt] = useState<TidslinjeStartSlutt>({
    start: sisteRettighetPeriodeDato
      ? sub(new Date(sisteRettighetPeriodeDato), { days: 1 })
      : new Date(),
    end: add(new Date(sisteRettighetPeriodeDato ?? new Date()), { weeks: 2 }),
  });

  const { datepickerProps, inputProps, selectedDay } = useDatepicker({
    onDateChange: console.info,
  });

  const prøvingsdatoVerdi = behandling.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === "0194881f-91d1-7df2-ba1d-4533f37fcc76",
  )?.perioder[0].verdi;
  const prøvingsdato =
    prøvingsdatoVerdi && prøvingsdatoVerdi.datatype === "dato"
      ? prøvingsdatoVerdi.verdi
      : undefined;

  const opplysningeneViBryrOssOm = [
    { id: "0194881f-91d1-7df2-ba1d-4533f37fcc76", label: "Vurdert fra" },
    { id: "0194881f-9435-72a8-b1ce-9575cbc2a767", label: "Arbeidstid før tap" },
    { id: "0194881f-9444-7a73-a458-0af81c034d8b", label: "Rettighetstype" },
    { id: "0194881f-943d-77a7-969c-147999f15459", label: "Stønadsperiode" },
    { id: "0194881f-943f-78d9-b874-00a4944c54ef", label: "Egenandel" },
    { id: "0194881f-9435-72a8-b1ce-9575cbc2a764", label: "Beregnet basert på" },
    { id: "0194881f-9435-72a8-b1ce-9575cbc2a765", label: "Beregnet basert på" },
    { id: "0194881f-9435-72a8-b1ce-9575cbc2a766", label: "Beregnet basert på" },
    // TODO: Inntektsgrunnlag, hvordan finne riktig?
    // TODO: Rettighetsperioder, må kanskje utledes på en annen måte?
  ];

  return (
    <div className={"card flex flex-col gap-4 p-4"}>
      <Heading size={"medium"}>Har bruker rett på dagpenger?</Heading>

      <DatePicker {...datepickerProps}>
        <DatePicker.Input {...inputProps} label="Vurder retten fra" size={"small"} />
      </DatePicker>

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
        {selectedDay && (
          <Timeline.Pin date={selectedDay}>
            <BodyShort weight={"semibold"}>Innvilgelsesdato</BodyShort>
          </Timeline.Pin>
        )}

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
          {opplysningeneViBryrOssOm.map(({ id, label }) => (
            <OpplysningVerdiPåPrøvingstidspunkt
              key={id}
              label={label}
              behandling={behandling}
              opplysningTypeId={id}
              prøvingsdato={prøvingsdato}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

function erDatoInnenforPeriode(dato: string, fraOgMed?: string | null, tilOgMed?: string | null) {
  if (fraOgMed && tilOgMed) {
    return dato >= fraOgMed && dato <= tilOgMed;
  }
  if (fraOgMed && !tilOgMed) {
    return dato >= fraOgMed;
  }
  if (!fraOgMed && tilOgMed) {
    return dato <= tilOgMed;
  }
  return true;
}

function hentVerdierForOpplysning(
  behandling: components["schemas"]["BehandlingsresultatV2"],
  opplysningTypeId: string,
  prøvingsdato?: string,
): components["schemas"]["Opplysningsverdi"][] | undefined {
  const verdier = behandling.opplysninger
    .find((opplysning) => opplysning.opplysningTypeId === opplysningTypeId)
    ?.perioder.filter((periode) =>
      erDatoInnenforPeriode(prøvingsdato ?? "", periode.gyldigFraOgMed, periode.gyldigTilOgMed),
    )
    .map((periode) => periode.verdi);
  return verdier;
}

function OpplysningVerdiPåPrøvingstidspunkt(props: {
  label: string;
  behandling: components["schemas"]["BehandlingsresultatV2"];
  opplysningTypeId: string;
  prøvingsdato?: string;
}) {
  const verdier = hentVerdierForOpplysning(
    props.behandling,
    props.opplysningTypeId,
    props.prøvingsdato,
  );
  if (!verdier) {
    return;
  }

  // TODO: kjip spesialhåndtering, og kanskje vi trenger flere? :(
  const ignorerHvisFalse = [
    "0194881f-9435-72a8-b1ce-9575cbc2a764",
    "0194881f-9435-72a8-b1ce-9575cbc2a765",
    "0194881f-9435-72a8-b1ce-9575cbc2a766",
  ];
  if (
    ignorerHvisFalse.includes(props.opplysningTypeId) &&
    verdier.every((v) => "verdi" in v && v.verdi === false)
  ) {
    return;
  }

  return (
    <div className="flex flex-col gap-1">
      <BodyShort size={"small"} weight={"semibold"}>
        {props.label}
      </BodyShort>
      <BodyShort size={"small"}>
        {verdier?.map((verdi) => formaterOpplysningVerdi(verdi)).join(", ")}
      </BodyShort>
    </div>
  );
}
