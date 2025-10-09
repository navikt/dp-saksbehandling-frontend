import { CheckmarkCircleFillIcon, XMarkOctagonIcon } from "@navikt/aksel-icons";
import { DatePicker, Heading, Timeline, useDatepicker } from "@navikt/ds-react";
import { add } from "date-fns";
import { useState } from "react";

import { TidslinjeNavigering } from "~/components/tidslinje-navigering/TidslinjeNavigering";
import {
  AntallUkerITidslinje,
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
    start: new Date(sisteRettighetPeriodeDato ?? new Date()),
    end: add(new Date(sisteRettighetPeriodeDato ?? new Date()), { weeks: 2 }),
  });

  const { datepickerProps, inputProps } = useDatepicker({
    onDateChange: console.info,
  });

  return (
    <div className={"card p-4"}>
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
    </div>
  );
}
