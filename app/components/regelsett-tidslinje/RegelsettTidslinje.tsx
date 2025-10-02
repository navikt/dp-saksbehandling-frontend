import {
  CheckmarkCircleFillIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CircleIcon,
  ExclamationmarkTriangleIcon,
  InformationSquareIcon,
  XMarkOctagonIcon,
} from "@navikt/aksel-icons";
import {
  Button,
  HStack,
  Spacer,
  Timeline,
  TimelinePeriodProps,
  ToggleGroup,
} from "@navikt/ds-react";
import { add, sub } from "date-fns";
import { useState } from "react";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { formaterTallMedTusenSeperator } from "~/utils/number.utils";

import { components } from "../../../openapi/behandling-typer";

type AntallUkerITidslinje = "2" | "4" | "8" | "16" | "52";

export function RegelsettTidslinje() {
  const { behandling } = useTypedRouteLoaderData(
    "routes/oppgave.$oppgaveId.dagpenger-rett.$behandlingId.behandle",
  );
  const sisteOpplysningDato = behandling.opplysningsgrupper
    .flatMap((gruppe) => gruppe.opplysninger)
    .map((opplysning) => opplysning.gyldigFraOgMed)
    .filter((dato) => dato !== null && dato !== undefined)
    .sort()
    .at(0);
  const [antallUkerITidslinje, setAntallUkerITidslinje] = useState<AntallUkerITidslinje>("4");
  const [tidslinjeStartSlutt, setTidslinjeStartSlutt] = useState<{
    start: Date;
    end: Date;
  }>({
    start: new Date(sisteOpplysningDato ?? new Date()),
    end: add(new Date(sisteOpplysningDato ?? new Date()), { weeks: 2 }),
  });
  const [aktivtRegelsett, setAktivtRegelsett] = useState<
    components["schemas"]["Regelsett"] | undefined
  >();
  const aktiveOpplysninger = behandling.opplysningsgrupper.filter((opplysning) =>
    aktivtRegelsett?.opplysningTypeIder.includes(opplysning.opplysningTypeId),
  );
  const regelsett = [...behandling.vilkår, ...behandling.fastsettelser];

  function navigerTilbakeITidslinje(antallUker: number) {
    const nyStartDato = sub(tidslinjeStartSlutt.start, { weeks: antallUker });
    const nySluttDato = add(nyStartDato, { weeks: parseInt(antallUkerITidslinje) });
    setTidslinjeStartSlutt({ start: nyStartDato, end: nySluttDato });
  }

  function navigerFremITidslinje(antallUker: number) {
    const nyStartDato = add(tidslinjeStartSlutt.start, { weeks: antallUker });
    const nySluttDato = add(nyStartDato, { weeks: parseInt(antallUkerITidslinje) });
    setTidslinjeStartSlutt({ start: nyStartDato, end: nySluttDato });
  }

  return (
    <div className={"p-4"}>
      <div className={"card p-4"}>
        <HStack
          className={"mb-2"}
          gap="space-8"
          align="center"
          aria-controls="timeline-dynamic"
          id="timeline-toolbar"
        >
          <Spacer />
          <HStack gap="space-2" align="center">
            <Button
              icon={<ChevronLeftIcon title="Forrige periode" />}
              variant="secondary-neutral"
              size="small"
              onClick={() => {
                navigerTilbakeITidslinje(parseInt(antallUkerITidslinje) * 0.25);
              }}
            />
            <Button
              icon={<ChevronRightIcon title="Neste periode" />}
              variant="secondary-neutral"
              size="small"
              onClick={() => {
                navigerFremITidslinje(parseInt(antallUkerITidslinje) * 0.25);
              }}
            />
          </HStack>

          <ToggleGroup
            variant="neutral"
            size="small"
            value={antallUkerITidslinje}
            onChange={(value) => {
              setAntallUkerITidslinje(value as AntallUkerITidslinje);
              setTidslinjeStartSlutt({
                start: tidslinjeStartSlutt.start,
                end: add(tidslinjeStartSlutt.start, { weeks: parseInt(value) }),
              });
            }}
          >
            <ToggleGroup.Item value="2" label="2 uker" />
            <ToggleGroup.Item value="4" label="4 uker" />
            <ToggleGroup.Item value="8" label="8 uker" />
            <ToggleGroup.Item value="16" label="16 uker" />
            <ToggleGroup.Item value="52" label="52 uker" />
          </ToggleGroup>
        </HStack>

        <Timeline
          startDate={tidslinjeStartSlutt.start}
          endDate={tidslinjeStartSlutt.end}
          className={"aksel--compact"}
        >
          <>
            {regelsett.map((sett) => {
              return (
                <Timeline.Row
                  key={sett.navn}
                  label={sett.navn}
                  icon={<ChevronUpIcon />}
                  onClick={() => setAktivtRegelsett(sett)}
                >
                  {sett.perioder?.map((periode, index) => {
                    const start = periode.gyldigFraOgMed
                      ? new Date(periode.gyldigFraOgMed)
                      : sub(new Date(), { years: 1 });

                    const slutt = periode.gyldigTilOgMed
                      ? new Date(periode.gyldigTilOgMed)
                      : add(new Date(), { years: 1 });

                    return (
                      <Timeline.Period
                        key={index}
                        start={start}
                        end={slutt}
                        status={hentFargeForVilkårPeriode(periode.status)}
                        icon={hentIkonForTidslinjePeriodeOpplysning(periode.status)}
                      >
                        {periode.status}
                      </Timeline.Period>
                    );
                  })}
                </Timeline.Row>
              );
            })}

            {aktiveOpplysninger.map((opplysning) => {
              return (
                <Timeline.Row key={opplysning.opplysningTypeId} label={opplysning.navn}>
                  {opplysning.opplysninger.map((periode) => {
                    const start = periode.gyldigFraOgMed
                      ? new Date(periode.gyldigFraOgMed)
                      : sub(new Date(), { years: 1 });

                    const slutt = periode.gyldigTilOgMed
                      ? new Date(periode.gyldigTilOgMed)
                      : add(new Date(), { years: 1 });

                    return (
                      <Timeline.Period
                        key={periode.id}
                        start={start}
                        end={slutt}
                        status={"info"}
                        icon={
                          periode.verdien
                            ? formaterOpplysningVerdi(periode.verdien)
                            : periode.verdien
                        }
                      >
                        {periode.verdien
                          ? formaterOpplysningVerdi(periode.verdien)
                          : periode.verdien}
                      </Timeline.Period>
                    );
                  })}
                </Timeline.Row>
              );
            })}
          </>
        </Timeline>
      </div>

      {/*<Timeline*/}
      {/*  startDate={tidslinjeStartSlutt.start}*/}
      {/*  endDate={tidslinjeStartSlutt.end}*/}
      {/*  className={"aksel--compact"}*/}
      {/*>*/}
      {/*  {aktiveOpplysninger.map((opplysning) => {*/}
      {/*    return (*/}
      {/*      <Timeline.Row key={opplysning.opplysningTypeId} label={opplysning.navn}>*/}
      {/*        {opplysning.opplysninger.map((periode) => {*/}
      {/*          const start = periode.gyldigFraOgMed*/}
      {/*            ? new Date(periode.gyldigFraOgMed)*/}
      {/*            : sub(new Date(), { years: 1 });*/}

      {/*          const slutt = periode.gyldigTilOgMed*/}
      {/*            ? new Date(periode.gyldigTilOgMed)*/}
      {/*            : add(new Date(), { years: 1 });*/}

      {/*          return (*/}
      {/*            <Timeline.Period*/}
      {/*              key={periode.id}*/}
      {/*              start={start}*/}
      {/*              end={slutt}*/}
      {/*              status={"info"}*/}
      {/*              icon={*/}
      {/*                periode.verdien ? formaterOpplysningVerdi(periode.verdien) : periode.verdien*/}
      {/*              }*/}
      {/*            >*/}
      {/*              {periode.verdien ? formaterOpplysningVerdi(periode.verdien) : periode.verdien}*/}
      {/*            </Timeline.Period>*/}
      {/*          );*/}
      {/*        })}*/}
      {/*      </Timeline.Row>*/}
      {/*    );*/}
      {/*  })}*/}
      {/*</Timeline>*/}
    </div>
  );
}

function formaterOpplysningVerdi(opplysningsverdi: components["schemas"]["Opplysningsverdi"]) {
  switch (opplysningsverdi.datatype) {
    case "tekst":
      return opplysningsverdi.verdi;
    case "inntekt":
      return `${opplysningsverdi.verdi} inntekt`;
    case "dato":
      return formaterTilNorskDato(opplysningsverdi.verdi);
    case "heltall":
      return formaterTallMedTusenSeperator(opplysningsverdi.verdi);
    case "desimaltall":
      return formaterTallMedTusenSeperator(opplysningsverdi.verdi);
    case "penger":
      return `${formaterTallMedTusenSeperator(opplysningsverdi.verdi)} kr`;
    case "ulid":
      return `${opplysningsverdi.verdi} ulid`;
    case "boolsk":
      return opplysningsverdi.verdi ? "Ja" : "Nei";
    case "periode":
      return `${formaterTilNorskDato(opplysningsverdi.fom)} - ${formaterTilNorskDato(opplysningsverdi.tom)}`;
    case "barn":
      return `${opplysningsverdi.verdi} barn`;
  }
}

function hentFargeForVilkårPeriode(
  status: components["schemas"]["Status"],
): TimelinePeriodProps["status"] {
  switch (status) {
    case "Oppfylt":
      return "success";
    case "HarAvklaring":
      return "warning";
    case "IkkeOppfylt":
      return "danger";
    case "Info":
      return "info";
    case "IkkeRelevant":
      return "neutral";

    default:
      return "info";
  }
}

function hentIkonForTidslinjePeriodeOpplysning(status: components["schemas"]["Status"]) {
  switch (status) {
    case "Oppfylt":
      return <CheckmarkCircleFillIcon />;
    case "HarAvklaring":
      return <ExclamationmarkTriangleIcon />;
    case "IkkeOppfylt":
      return <XMarkOctagonIcon />;
    case "Info":
      return <InformationSquareIcon />;
    case "IkkeRelevant":
      return <CircleIcon />;
    default:
      return <span>Mangler ikon for status</span>;
  }
}
