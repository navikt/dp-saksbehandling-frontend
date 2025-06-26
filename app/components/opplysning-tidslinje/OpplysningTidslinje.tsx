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

import { IAktivOpplysning } from "~/components/opplysning-gruppe-redigering/OpplysningGruppeRedigering";
import { formaterOpplysningVerdi } from "~/components/opplysning-linje/OpplysningLinje";
import { formaterTilNorskDato } from "~/utils/dato.utils";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  opplysningGruppe: components["schemas"]["Opplysningsgruppe"];
  aktivPeriode?: IAktivOpplysning;
  setAktivPeriode: Dispatch<SetStateAction<IAktivOpplysning | undefined>>;
}

type AntallUkerITidslinje = "2" | "4" | "8";

export function OpplysningTidslinje({ opplysningGruppe, aktivPeriode, setAktivPeriode }: IProps) {
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
        className={"max-w mt-8 mb-2"}
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
                  : add(new Date(), { weeks: 2 })
              }
              placement={"bottom"}
              status={hentFargeForTidslinjePeriodeOpplysning(opplysning)}
              icon={hentIkonForTIdslinjePeriodeOpplysning(opplysning)}
              statusLabel={opplysning.navn}
              onSelectPeriod={() => setAktivPeriode({ opplysning, periodeNummer: index })}
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
