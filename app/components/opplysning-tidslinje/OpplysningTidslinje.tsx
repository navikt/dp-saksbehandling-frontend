import { CheckmarkIcon, ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from "@navikt/aksel-icons";
import {
  BodyShort,
  Button,
  Detail,
  HStack,
  Provider,
  Spacer,
  Timeline,
  TimelinePeriodProps,
  ToggleGroup,
} from "@navikt/ds-react";
import { nb } from "@navikt/ds-react/locales";
import { add, sub } from "date-fns";
import { useMemo, useState } from "react";

import { formaterTilNorskDato, isSameDayOrAfter, isSameDayOrBefore } from "~/utils/dato.utils";
import { formaterOpplysningVerdi } from "~/utils/opplysning.utils";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  opplysningGruppe: components["schemas"]["Opplysningsgruppe"];
  behandling: components["schemas"]["Behandling"] | undefined;
  aktivPeriode?: components["schemas"]["Opplysning"];
  setAktivPeriode: (opplysning: components["schemas"]["Opplysning"] | undefined) => void;
}

type AntallUkerITidslinje = "2" | "4" | "8";

export function OpplysningTidslinje({
  opplysningGruppe,
  behandling,
  aktivPeriode,
  setAktivPeriode,
}: IProps) {
  const sisteOpplysningDato =
    opplysningGruppe.opplysninger[opplysningGruppe.opplysninger.length - 1].gyldigFraOgMed;
  const [antallUkerITidslinje, setAntallUkerITidslinje] = useState<AntallUkerITidslinje>("4");
  const [tidslinjeStartSlutt, setTidslinjeStartSlutt] = useState<{
    start: Date;
    end: Date;
  }>({
    start: new Date(sisteOpplysningDato ?? new Date()),
    end: add(new Date(sisteOpplysningDato ?? new Date()), { weeks: 2 }),
  });

  const tidslinjePins = useMemo(
    () =>
      behandling?.tidslinje?.filter((hendelse) => {
        const hendelseDato = new Date(hendelse.dato);
        return (
          isSameDayOrAfter(hendelseDato, tidslinjeStartSlutt.start) &&
          isSameDayOrBefore(hendelseDato, tidslinjeStartSlutt.end)
        );
      }),
    [behandling, tidslinjeStartSlutt],
  );

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
    <Provider locale={nb} translations={{ Timeline: { dayFormat: "MMM d" } }}>
      <Timeline
        className={"mt-8 mb-2 max-w-full overflow-x-clip"}
        startDate={tidslinjeStartSlutt.start}
        endDate={tidslinjeStartSlutt.end}
      >
        {tidslinjePins?.map((hendelse, index) => (
          <Timeline.Pin date={new Date(hendelse.dato)} key={index}>
            <BodyShort size={"small"}>{hendelse.hendelse}</BodyShort>
            <BodyShort size={"small"}>{formaterTilNorskDato(hendelse.dato)}</BodyShort>
          </Timeline.Pin>
        ))}

        <Timeline.Row label={""}>
          {opplysningGruppe.opplysninger.map((opplysning, index) => (
            <Timeline.Period
              key={opplysning.opplysningTypeId}
              start={beregnStartDato(opplysning, parseInt(antallUkerITidslinje))}
              end={beregnSluttDato(opplysning, parseInt(antallUkerITidslinje))}
              placement={"bottom"}
              status={hentFargeForTidslinjePeriodeOpplysning(opplysning)}
              icon={hentIkonForTIdslinjePeriodeOpplysning(opplysning)}
              statusLabel={opplysning.navn}
              onSelectPeriod={() => setAktivPeriode(opplysning)}
              isActive={aktivPeriode?.id === opplysning.id}
              id={opplysning.id}
            >
              <Detail textColor={"subtle"}>Periode: {index + 1}</Detail>
              <Detail textColor={"subtle"}>
                {`${opplysning.gyldigFraOgMed ? formaterTilNorskDato(opplysning.gyldigFraOgMed) : "Ikke satt"} - ${opplysning.gyldigTilOgMed ? formaterTilNorskDato(opplysning.gyldigTilOgMed) : "Ikke satt"}`}
              </Detail>
              {formaterOpplysningVerdi(opplysning)}
            </Timeline.Period>
          ))}
        </Timeline.Row>
      </Timeline>

      <HStack gap="space-8" align="center" aria-controls="timeline-dynamic" id="timeline-toolbar">
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
        </ToggleGroup>
      </HStack>
    </Provider>
  );
}

function hentFargeForTidslinjePeriodeOpplysning(
  opplysning: components["schemas"]["Opplysning"],
): TimelinePeriodProps["status"] {
  switch (opplysning.datatype) {
    case "boolsk":
      return opplysning.verdi === "true" ? "success" : "danger";
    default:
      return "info";
  }
}

function hentIkonForTIdslinjePeriodeOpplysning(opplysning: components["schemas"]["Opplysning"]) {
  switch (opplysning.datatype) {
    case "boolsk":
      return opplysning.verdi === "true" ? <CheckmarkIcon /> : <XMarkIcon />;
    default:
      break;
  }
}

function beregnStartDato(
  opplysning: components["schemas"]["Opplysning"],
  antallUkerITidslinje: number,
): Date {
  if (opplysning.gyldigFraOgMed) {
    return new Date(opplysning.gyldigFraOgMed);
  }

  if (opplysning.gyldigTilOgMed) {
    return sub(new Date(opplysning.gyldigTilOgMed), { days: 5 });
  }

  return sub(Date(), { weeks: antallUkerITidslinje / 2 });
}

function beregnSluttDato(
  opplysning: components["schemas"]["Opplysning"],
  antallUkerITidslinje: number,
): Date {
  if (opplysning.gyldigTilOgMed) {
    return new Date(opplysning.gyldigTilOgMed);
  }

  return add(new Date(), { weeks: antallUkerITidslinje / 2 });
}
