import { CheckmarkCircleFillIcon, XMarkOctagonIcon } from "@navikt/aksel-icons";
import { BodyShort, Heading, Timeline } from "@navikt/ds-react";
import { add } from "date-fns";

import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { OpplysningerForRettighetsperiode } from "~/components/opplysinger-for-rettighetsperiode/OpplysningerForRettighetsperiode";
import { OpplysningerPåPrøvingsdato } from "~/components/opplysninger-på-prøvingsdato/OpplysningerPåPrøvingsdato";
import { TidslinjeNavigering } from "~/components/tidslinje-navigering/TidslinjeNavigering";
import { usePrøvingsdato } from "~/hooks/usePrøvingsdato";
import { useTidslinjeNavigeringState } from "~/hooks/useTidslinjeNavigeringState";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { formaterTilNorskDato } from "~/utils/dato.utils";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  behandling: components["schemas"]["BehandlingsresultatV2"];
}

export function RettPåDagpenger({ behandling }: IProps) {
  const { behandlingId, oppgaveId } = useTypeSafeParams();
  const { prøvingsdato } = usePrøvingsdato(behandling);
  const sisteRettighetPeriodeDato = behandling.rettighetsperioder
    .flatMap((periode) => periode.fraOgMed)
    .sort()
    .at(0);

  const {
    antallUkerITidslinje,
    setAntallUkerITidslinje,
    tidslinjeStartSlutt,
    setTidslinjeStartSlutt,
  } = useTidslinjeNavigeringState([], undefined, sisteRettighetPeriodeDato);

  return (
    <div className={"card flex flex-col gap-4 p-4"}>
      <div className={"flex content-center justify-between"}>
        <Heading size={"small"}>Har bruker rett på dagpenger?</Heading>
        <TidslinjeNavigering
          tidslinjeStartSlutt={tidslinjeStartSlutt}
          setTidslinjeStartSlutt={setTidslinjeStartSlutt}
          antallUkerITidslinje={antallUkerITidslinje}
          setAntallUkerITidslinje={setAntallUkerITidslinje}
        />
      </div>

      <Timeline
        startDate={tidslinjeStartSlutt.start}
        endDate={tidslinjeStartSlutt.end}
        className={"aksel--compact"}
      >
        {prøvingsdato && (
          <Timeline.Pin date={prøvingsdato}>
            <BodyShort size={"small"} weight={"semibold"}>
              Prøvingsdato
            </BodyShort>
            <BodyShort size={"small"}>{formaterTilNorskDato(prøvingsdato)}</BodyShort>
          </Timeline.Pin>
        )}

        <Timeline.Row
          label={"\u00A0"}
          icon={
            <LoadingLink
              to={`/v2/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/regelsett/Krav på dagpenger/opplysning/01990a09-0eab-7957-b88f-14484a50e194`}
            >
              Rett på dagpenger
            </LoadingLink>
          }
        >
          {/* TODO: Følg datastrukturen ved å bruke "løpende rett på dagpenger"-opplysningen i stedet for rettighetsperioder? */}
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

      {prøvingsdato && (
        <OpplysningerPåPrøvingsdato behandling={behandling} prøvingsdato={prøvingsdato} />
      )}

      {behandling.rettighetsperioder.map((rettighetsperiode, index) => (
        <OpplysningerForRettighetsperiode
          key={index}
          index={index}
          rettighetsperiode={rettighetsperiode}
          opplysninger={behandling.opplysninger}
        />
      ))}
    </div>
  );
}
