import { ChevronLeftIcon, ChevronRightIcon } from "@navikt/aksel-icons";
import { Button, HStack, Spacer, ToggleGroup } from "@navikt/ds-react";
import { add, sub } from "date-fns";

import {
  AntallUkerITidslinje,
  TidslinjeStartSlutt,
} from "~/components/vilkår-tidslinje/VilkårTidslinje";

interface IProps {
  tidslinjeStartSlutt: TidslinjeStartSlutt;
  setTidslinjeStartSlutt: (verdi: TidslinjeStartSlutt) => void;
  antallUkerITidslinje: AntallUkerITidslinje;
  setAntallUkerITidslinje: (verdi: AntallUkerITidslinje) => void;
}

export function TidslinjeNavigering({
  tidslinjeStartSlutt,
  setTidslinjeStartSlutt,
  antallUkerITidslinje,
  setAntallUkerITidslinje,
}: IProps) {
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
  );
}
