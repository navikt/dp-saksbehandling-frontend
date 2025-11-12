import { PadlockLockedIcon } from "@navikt/aksel-icons";
import { BodyShort, Detail, Heading, HStack, Tag, Timeline } from "@navikt/ds-react";
import classnames from "classnames";
import { add, sub } from "date-fns";
import { components } from "openapi/behandling-typer";
import { useParams } from "react-router";

import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { TidslinjeNavigering } from "~/components/tidslinje-navigering/TidslinjeNavigering";
import {
  hentFargeForOpplysningPeriode,
  hentIkonForOpplysningPeriode,
} from "~/components/vilkår-tidslinje/VilkårTidslinje";
import { useOppgave } from "~/hooks/useOppgave";
import {
  TidslinjeNavigeringState,
  useTidslinjeNavigeringState,
} from "~/hooks/useTidslinjeNavigeringState";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { formaterOpplysningFormål, formaterOpplysningVerdiV2 } from "~/utils/opplysning.utils";

interface TimelinePin {
  date: Date;
  label: string;
}

interface IProps {
  opplysninger: components["schemas"]["OpplysningsgruppeV2"][];
  fremhevØverstTidslinjeRad?: boolean;
  tittel?: string;
  regelsettHjemmel?: string;
  opplysningKilde?: components["schemas"]["Formål"];
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
  const dagensDato = new Date();
  const { readonly } = useOppgave();
  const { opplysningId } = useParams();

  return (
    <>
      {props.tittel && props.regelsettHjemmel && props.opplysningKilde && (
        <>
          <div className={`flex content-center justify-between`}>
            <div>
              <div className={"flex items-center gap-1"}>
                {readonly ||
                  (props.opplysninger.length === 1 && !props.opplysninger[0].redigerbar && (
                    <PadlockLockedIcon aria-label={"Opplysning er ikke redigerbar"} />
                  ))}
                <Heading size={"small"}>{props.tittel}</Heading>
              </div>

              <Detail textColor="subtle">{props.regelsettHjemmel}</Detail>
            </div>

            <BodyShort size={"small"}>
              Opplysning hentet fra:{" "}
              <Tag size={"small"} variant={"warning"} className={"ml-1"}>
                {formaterOpplysningFormål(props.opplysningKilde)}
              </Tag>
            </BodyShort>
          </div>

          {!props.eksternTidslinjeNavigeringState && (
            <TidslinjeNavigering
              tidslinjeStartSlutt={tidslinjeStartSlutt}
              setTidslinjeStartSlutt={setTidslinjeStartSlutt}
              antallUkerITidslinje={antallUkerITidslinje}
              setAntallUkerITidslinje={setAntallUkerITidslinje}
            />
          )}
        </>
      )}

      {props.tittel && !props.regelsettHjemmel && (
        <div className={`flex content-center justify-between`}>
          <div className={"flex items-center gap-1"}>
            {readonly ||
              (props.opplysninger.length === 1 && !props.opplysninger[0].redigerbar && (
                <PadlockLockedIcon aria-label={"Opplysning er ikke redigerbar"} />
              ))}
            <Heading size={"small"}>{props.tittel}</Heading>
          </div>

          {!props.eksternTidslinjeNavigeringState && (
            <TidslinjeNavigering
              tidslinjeStartSlutt={tidslinjeStartSlutt}
              setTidslinjeStartSlutt={setTidslinjeStartSlutt}
              antallUkerITidslinje={antallUkerITidslinje}
              setAntallUkerITidslinje={setAntallUkerITidslinje}
            />
          )}
        </div>
      )}

      <Timeline
        startDate={tidslinjeStartSlutt.start}
        endDate={tidslinjeStartSlutt.end}
        className={classnames("aksel--compact", {
          "aksel-timeline--first-row-highlight": props.fremhevØverstTidslinjeRad,
        })}
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
                <HStack wrap={false} gap="space-2" align="center" className={"overflow-hidden"}>
                  {(readonly || !opplysning.redigerbar) && (
                    <div>
                      <PadlockLockedIcon fontSize="1rem" />
                    </div>
                  )}
                  <div className={"overflow-hidden"}>
                    <LoadingLink
                      className={
                        opplysningId === opplysning.opplysningTypeId ? "font-bold" : undefined
                      }
                      tittelPåHover={opplysning.navn}
                      to={`${props.opplysningGrunnUrl}/${opplysning.opplysningTypeId}`}
                    >
                      {opplysning.navn}
                    </LoadingLink>
                  </div>
                </HStack>
              )
            }
          >
            {opplysning.perioder.map((periode, index) => {
              const start = periode.gyldigFraOgMed
                ? new Date(periode.gyldigFraOgMed)
                : sub(dagensDato, { years: 1 });

              const slutt = periode.gyldigTilOgMed
                ? new Date(periode.gyldigTilOgMed)
                : add(dagensDato, { years: 1 });

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
