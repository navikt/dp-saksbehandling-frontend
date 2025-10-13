import { BodyShort, Detail, Timeline } from "@navikt/ds-react";
import { add, sub } from "date-fns";
import { components } from "openapi/behandling-typer";
import { Link } from "react-router";

import { TidslinjeNavigering } from "~/components/tidslinje-navigering/TidslinjeNavigering";
import {
  hentFargeForOpplysningPeriode,
  hentIkonForOpplysningPeriode,
} from "~/components/vilkår-tidslinje/VilkårTidslinje";
import {
  TidslinjeNavigeringState,
  useTidslinjeNavigeringState,
} from "~/hooks/useTidslinjeNavigeringState";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { formaterOpplysningVerdiV2 } from "~/utils/opplysning.utils";

interface TimelinePin {
  date: Date;
  label: string;
}

interface IProps {
  opplysninger: components["schemas"]["OpplysningsgruppeV2"][];
  medLenkeTilOpplysning?: boolean;
  opplysningGrunnUrl?: string;
  pins?: TimelinePin[];
  eksternTidslinjeNavigeringState?: TidslinjeNavigeringState;
}

export function OpplysningerTidslinje(props: IProps) {
  const {
    antallUkerITidslinje,
    setAntallUkerITidslinje,
    tidslinjeStartSlutt,
    setTidslinjeStartSlutt,
  } = useTidslinjeNavigeringState(props.opplysninger, props.eksternTidslinjeNavigeringState);

  return (
    <>
      {!props.eksternTidslinjeNavigeringState && (
        <TidslinjeNavigering
          tidslinjeStartSlutt={tidslinjeStartSlutt}
          setTidslinjeStartSlutt={setTidslinjeStartSlutt}
          antallUkerITidslinje={antallUkerITidslinje}
          setAntallUkerITidslinje={setAntallUkerITidslinje}
        />
      )}

      <Timeline
        startDate={tidslinjeStartSlutt.start}
        endDate={tidslinjeStartSlutt.end}
        className={"aksel--compact"}
      >
        {props.pins &&
          props.pins.map((pin) => (
            <Timeline.Pin key={pin.label} date={pin.date}>
              <BodyShort weight={"semibold"}>{pin.label}</BodyShort>
              <BodyShort>{formaterTilNorskDato(pin.date)}</BodyShort>
            </Timeline.Pin>
          ))}

        {props.opplysninger.map((opplysning) => (
          <Timeline.Row
            key={opplysning.opplysningTypeId}
            label={props.medLenkeTilOpplysning ? "\u00A0" : ""}
            icon={
              props.medLenkeTilOpplysning &&
              props.opplysningGrunnUrl && (
                <Link
                  to={`${props.opplysningGrunnUrl}/${opplysning.opplysningTypeId}`}
                  className={"ml-6"}
                >
                  {opplysning.navn}
                </Link>
              )
            }
          >
            {opplysning.perioder.map((periode, index) => {
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
                  status={hentFargeForOpplysningPeriode(periode.verdi)}
                  icon={hentIkonForOpplysningPeriode(periode.verdi)}
                >
                  <div className={"flex gap-4"}>
                    <div>
                      <Detail textColor={"subtle"}>Fra og med</Detail>
                      <BodyShort size={"small"}>
                        {periode.gyldigFraOgMed
                          ? formaterTilNorskDato(periode.gyldigFraOgMed)
                          : "--"}
                      </BodyShort>
                    </div>
                    <div>
                      <Detail textColor={"subtle"}>Til og med</Detail>
                      <BodyShort size={"small"}>
                        {periode.gyldigTilOgMed
                          ? formaterTilNorskDato(periode.gyldigTilOgMed)
                          : "--"}
                      </BodyShort>
                    </div>
                    <div>
                      <Detail textColor={"subtle"}>Verdi</Detail>
                      <BodyShort size={"small"}>
                        {formaterOpplysningVerdiV2(periode.verdi)}
                      </BodyShort>
                    </div>
                  </div>
                </Timeline.Period>
              );
            })}
          </Timeline.Row>
        ))}
      </Timeline>
    </>
  );
}
