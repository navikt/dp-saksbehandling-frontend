import { CheckmarkIcon, ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from "@navikt/aksel-icons";
import {
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
import { Dispatch, SetStateAction, useState } from "react";

import { IAktivPeriode } from "~/components/opplysning-gruppe-redigering/OpplysningGruppeRedigering";
import { formaterOpplysningVerdi } from "~/components/opplysning-linje/OpplysningLinje";
import { formaterTilNorskDato } from "~/utils/dato.utils";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  opplysningGruppe: components["schemas"]["Opplysningsgruppe"];
  aktivPeriode: IAktivPeriode;
  setAktivPeriode: Dispatch<SetStateAction<IAktivPeriode>>;
}

type TidslinjeMaanedVisning = "2" | "4" | "8";

export function OpplysningTidslinje({ opplysningGruppe, aktivPeriode, setAktivPeriode }: IProps) {
  const [antallMaanederITidslinje, setAntallMaanederITidslinje] =
    useState<TidslinjeMaanedVisning>("2");

  const [tidslinjeStartSlutt, setTidslinjeStartSlutt] = useState<{
    start: Date;
    end: Date;
  }>({
    start: new Date(aktivPeriode.opplysning.gyldigFraOgMed ?? new Date()),
    end: add(new Date(aktivPeriode.opplysning.gyldigFraOgMed ?? new Date()), { months: 2 }),
  });

  function navigerTilbakeITidslinje(antallMaaneder: number) {
    const nyStartDato = sub(tidslinjeStartSlutt.start, { months: antallMaaneder });
    const nySluttDato = add(nyStartDato, { months: parseInt(antallMaanederITidslinje) });
    setTidslinjeStartSlutt({ start: nyStartDato, end: nySluttDato });
  }

  function navigerFremITidslinje(antallMaaneder: number) {
    const nyStartDato = add(tidslinjeStartSlutt.start, { months: antallMaaneder });
    const nySluttDato = add(nyStartDato, { months: parseInt(antallMaanederITidslinje) });
    setTidslinjeStartSlutt({ start: nyStartDato, end: nySluttDato });
  }

  console.log(tidslinjeStartSlutt);

  return (
    <Provider locale={nb} translations={{ Timeline: { dayFormat: "MMM d" } }}>
      <Timeline
        className={"mt-8 mb-2"}
        startDate={tidslinjeStartSlutt.start}
        endDate={tidslinjeStartSlutt.end}
      >
        <Timeline.Row label={""}>
          {opplysningGruppe.opplysninger.map((opplysning, index) => (
            <Timeline.Period
              key={opplysning.opplysningTypeId}
              start={opplysning.gyldigFraOgMed ? new Date(opplysning.gyldigFraOgMed) : new Date()}
              end={
                opplysning.gyldigTilOgMed
                  ? new Date(opplysning.gyldigTilOgMed)
                  : add(new Date(), { days: 14 })
              }
              placement={"bottom"}
              status={hentFargeForTidslinjePeriodeOpplysning(opplysning)}
              icon={hentIkonForTIdslinjePeriodeOpplysning(opplysning)}
              statusLabel={opplysning.navn}
              onSelectPeriod={() => setAktivPeriode({ opplysning, periodeNummer: index + 1 })}
              isActive={aktivPeriode?.opplysning.id === opplysning.id}
              id={opplysning.id}
            >
              <Detail textColor={"subtle"}>Periode: {index + 1}</Detail>
              <Detail textColor={"subtle"}>
                {`${formaterTilNorskDato(opplysning.gyldigFraOgMed ? opplysning.gyldigFraOgMed : new Date())} - ${opplysning.gyldigTilOgMed ? formaterTilNorskDato(opplysning.gyldigTilOgMed) : "♾️"}`}
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
              /**
               * We move the window with 50% the total width to make it easier
               * to navigate through the timeline.
               * This is a design choice, and can be adjusted to fit your needs.
               */
              navigerTilbakeITidslinje(parseInt(antallMaanederITidslinje) * 0.5);
            }}
          />
          <Button
            icon={<ChevronRightIcon title="Neste periode" />}
            variant="secondary-neutral"
            size="small"
            onClick={() => {
              navigerFremITidslinje(parseInt(antallMaanederITidslinje) * 0.5);
            }}
          />
        </HStack>

        <ToggleGroup
          variant="neutral"
          size="small"
          value={antallMaanederITidslinje}
          onChange={(value) => {
            setAntallMaanederITidslinje(value as TidslinjeMaanedVisning);
            setTidslinjeStartSlutt({
              start: tidslinjeStartSlutt.start,
              end: add(tidslinjeStartSlutt.start, { months: parseInt(value) }),
            });
          }}
        >
          <ToggleGroup.Item value="2" label="2 mnd" />
          <ToggleGroup.Item value="4" label="4 mnd" />
          <ToggleGroup.Item value="8" label="8 mnd" />
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
