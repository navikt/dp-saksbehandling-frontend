import { ChevronLeftIcon, ChevronRightIcon, LocationPinIcon } from "@navikt/aksel-icons";
import { Button, HStack, Spacer, ToggleGroup } from "@navikt/ds-react";
import { add, startOfWeek } from "date-fns";

import { useBehandling } from "~/hooks/useBehandling";
import {
  AntallUkerITidslinje,
  TidslinjeNavigeringState,
} from "~/hooks/useTidslinjeNavigeringState";

export function TidslinjeNavigering({
  tidslinjeStartSlutt,
  setTidslinjeStartSlutt,
  antallUkerITidslinje,
  setAntallUkerITidslinje,
}: TidslinjeNavigeringState) {
  const { sistePrøvingsdato } = useBehandling();

  const navigerTilDato = (nyStartDato: Date) => {
    const nySluttDato = add(nyStartDato, {
      weeks: parseInt(antallUkerITidslinje),
      days: 1,
    });
    setTidslinjeStartSlutt({ start: nyStartDato, end: nySluttDato });
  };

  const navigerUkeVisning = (antallUker: number) => {
    navigerTilDato(add(tidslinjeStartSlutt.start, { weeks: antallUker }));
  };

  function hoppTilPrøvingsdato(prøvingsdato: Date) {
    navigerTilDato(startOfWeek(prøvingsdato));
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
        {sistePrøvingsdato && (
          <Button
            icon={<LocationPinIcon title="Hopp til prøvingsdato" />}
            variant="secondary-neutral"
            size="small"
            onClick={() => {
              hoppTilPrøvingsdato(sistePrøvingsdato);
            }}
          />
        )}

        <Button
          icon={<ChevronLeftIcon title="Forrige periode" />}
          variant="secondary-neutral"
          size="small"
          onClick={() => {
            navigerUkeVisning(-parseInt(antallUkerITidslinje) * 0.5);
          }}
        />
        <Button
          icon={<ChevronRightIcon title="Neste periode" />}
          variant="secondary-neutral"
          size="small"
          onClick={() => {
            navigerUkeVisning(parseInt(antallUkerITidslinje) * 0.5);
          }}
        />
      </HStack>

      <ToggleGroup
        data-color="neutral"
        size="small"
        value={antallUkerITidslinje}
        onChange={(value) => {
          setAntallUkerITidslinje(value as AntallUkerITidslinje);
          setTidslinjeStartSlutt({
            start: tidslinjeStartSlutt.start,
            end: add(tidslinjeStartSlutt.start, { weeks: parseInt(value), days: 1 }),
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
