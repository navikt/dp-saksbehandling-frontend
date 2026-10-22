import { ExternalLinkIcon, PadlockLockedIcon } from "@navikt/aksel-icons";
import { BodyShort, Detail, HStack, InlineMessage, Link, Timeline } from "@navikt/ds-react";
import classnames from "classnames";
import { add, sub } from "date-fns";
import { useParams } from "react-router";

import { components } from "@/openapi/behandling-typer";
import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { TidslinjeNavigering } from "~/components/tidslinje-navigering/TidslinjeNavigering";
import { useBehandling } from "~/hooks/useBehandling";
import { useOppgave } from "~/hooks/useOppgave";
import {
  TidslinjeNavigeringState,
  useTidslinjeNavigeringState,
} from "~/hooks/useTidslinjeNavigeringState";
import { hentRapporteringPersonId } from "~/models/rapportering.server";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { getEnv } from "~/utils/env.utils";
import { formaterOpplysningVerdi, skalViseOpplysning } from "~/utils/opplysning.utils";
import { isTekstVerdi } from "~/utils/type-guards";

import { OpplysningerTittel } from "../opplysninger-tittel/OpplysningerTittel";

interface TimelinePin {
  date: Date;
  label: string;
}

interface IProps {
  opplysninger: components["schemas"]["RedigerbareOpplysninger"][];
  fremhevØverstTidslinjeRad?: boolean;
  tittel?: string;
  regelsettHjemmel?: string;
  opplysningKilde?: components["schemas"]["Formål"];
  redigertAvSaksbehandler?: boolean;
  medLenkeTilOpplysning?: boolean;
  opplysningGrunnUrl?: string;
  pins?: TimelinePin[];
  eksternTidslinjeNavigeringState?: TidslinjeNavigeringState;
  rapporteringPersonIdPromise?: Promise<Awaited<ReturnType<typeof hentRapporteringPersonId>>>;
  visAllePerioder?: boolean;
  relevantForResultat?: boolean;
  førsteFraOgMedDato?: string;
}

export function OpplysningerTidslinje(props: IProps) {
  const { behandling, visArvedeOpplysninger } = useBehandling();
  const {
    antallUkerITidslinje,
    setAntallUkerITidslinje,
    tidslinjeStartSlutt,
    setTidslinjeStartSlutt,
  } = useTidslinjeNavigeringState(
    behandling,
    props.eksternTidslinjeNavigeringState,
    props.førsteFraOgMedDato,
  );
  const dagensDato = new Date();
  const { readonly } = useOppgave();
  const { opplysningId } = useParams();

  const opplysningerSomSkalVises = props.visAllePerioder
    ? props.opplysninger
    : props.opplysninger.filter((opplysning) =>
        skalViseOpplysning(opplysning, visArvedeOpplysninger),
      );

  if (opplysningerSomSkalVises.length === 0) {
    return (
      <InlineMessage status="warning">
        Ingen opplysninger i denne behandlingen. Trykk på &#34;Vis arvede opplysninger&#34; for å se
        opplysninger fra tidligere behandlinger
      </InlineMessage>
    );
  }

  return (
    <>
      {props.tittel && (
        <div className="flex flex-col gap-4">
          <OpplysningerTittel
            readonly={readonly}
            opplysninger={props.opplysninger}
            redigertAvSaksbehandler={!!props.redigertAvSaksbehandler}
            regelsettHjemmel={props.regelsettHjemmel}
            opplysningKilde={props.opplysningKilde}
            tittel={props.tittel}
            rapporteringPersonIdPromise={props.rapporteringPersonIdPromise}
          />
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

        {opplysningerSomSkalVises.map((opplysning) => (
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
                        opplysningId === opplysning.opplysningTypeId ? "font-ax-bold" : undefined
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
                  status="info"
                  icon={formaterOpplysningVerdi(periode.verdi)}
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
                      {opplysning.datatype === "inntekt" && isTekstVerdi(periode.verdi) && (
                        <Link
                          href={`${getEnv("DP_INNTEKT_REDIGERING_FRONTEND_URL")}/inntektId/${periode.verdi.verdi}?opplysningId=${opplysning.opplysningTypeId}&behandlingId=${behandling.behandlingId}`}
                          target="_blank"
                        >
                          Inntektsredigering <ExternalLinkIcon aria-hidden />
                        </Link>
                      )}
                      {opplysning.datatype !== "inntekt" && (
                        <BodyShort size={"small"}>
                          {formaterOpplysningVerdi(periode.verdi)}
                        </BodyShort>
                      )}
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
