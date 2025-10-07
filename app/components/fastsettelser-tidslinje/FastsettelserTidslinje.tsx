import { Accordion, Heading, Timeline } from "@navikt/ds-react";
import { add, sub } from "date-fns";
import { useState } from "react";
import { Link } from "react-router";

import { TidslinjeNavigering } from "~/components/tidslinje-navigering/TidslinjeNavigering";
import {
  AntallUkerITidslinje,
  formaterOpplysningVerdi,
  TidslinjeStartSlutt,
} from "~/components/vilkår-tidslinje/VilkårTidslinje";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  behandling: components["schemas"]["BehandlingsresultatV2"];
  oppgaveId: string;
}

export function FastsettelserTidslinje({ behandling, oppgaveId }: IProps) {
  const sisteOpplysningDato = behandling.opplysninger
    .flatMap((opplysning) => opplysning.perioder)
    .map((opplysning) => opplysning.gyldigFraOgMed)
    .filter((dato) => dato !== null && dato !== undefined)
    .sort()
    .at(0);
  const [antallUkerITidslinje, setAntallUkerITidslinje] = useState<AntallUkerITidslinje>("4");
  const [tidslinjeStartSlutt, setTidslinjeStartSlutt] = useState<TidslinjeStartSlutt>({
    start: new Date(sisteOpplysningDato ?? new Date()),
    end: add(new Date(sisteOpplysningDato ?? new Date()), { weeks: 2 }),
  });
  const [aktivtRegelsett, setAktivtRegelsett] = useState<
    components["schemas"]["VurderingsresultatV2"] | undefined
  >();

  const aktiveOpplysninger = behandling.opplysninger.filter((opplysning) =>
    aktivtRegelsett?.perioder
      ?.flatMap((periode) => periode.opplysningsTypeId)
      .includes(opplysning.opplysningTypeId),
  );

  return (
    <div className={"card p-4"}>
      <div className={"flex content-center justify-between"}>
        <Heading size={"medium"}>Fastsettelser</Heading>
        <TidslinjeNavigering
          tidslinjeStartSlutt={tidslinjeStartSlutt}
          setTidslinjeStartSlutt={setTidslinjeStartSlutt}
          antallUkerITidslinje={antallUkerITidslinje}
          setAntallUkerITidslinje={setAntallUkerITidslinje}
        />
      </div>

      <Accordion size={"small"} className={"accordion--subtil"}>
        {behandling.fastsettelser.map((fastsettelse) => (
          <Accordion.Item
            key={fastsettelse.navn}
            open={aktivtRegelsett?.navn === fastsettelse.navn}
          >
            <Accordion.Header
              onClick={() =>
                aktivtRegelsett?.navn === fastsettelse.navn
                  ? setAktivtRegelsett(undefined)
                  : setAktivtRegelsett(fastsettelse)
              }
            >
              {fastsettelse.navn}
            </Accordion.Header>
            <Accordion.Content>
              <Timeline
                startDate={tidslinjeStartSlutt.start}
                endDate={tidslinjeStartSlutt.end}
                className={"aksel--compact"}
              >
                {aktiveOpplysninger.map((opplysning) => {
                  return (
                    <Timeline.Row
                      key={opplysning.opplysningTypeId}
                      label={"\u00A0"}
                      icon={
                        <Link
                          to={`/v2/oppgave/${oppgaveId}/dagpenger-rett/${behandling.behandlingId}/regelsett/${aktivtRegelsett?.navn}/opplysning/${opplysning.opplysningTypeId}`}
                          className={"ml-6"}
                        >
                          {opplysning.navn}
                        </Link>
                      }
                    >
                      {opplysning.perioder.map((periode) => {
                        const start = periode.gyldigFraOgMed
                          ? new Date(periode.gyldigFraOgMed)
                          : sub(new Date(), { years: 1 });

                        const slutt = periode.gyldigTilOgMed
                          ? new Date(periode.gyldigTilOgMed)
                          : add(new Date(), { years: 1 });

                        return (
                          <Timeline.Period
                            key={periode.id}
                            start={start}
                            end={slutt}
                            status={"info"}
                            icon={formaterOpplysningVerdi(periode.verdi)}
                          >
                            {formaterOpplysningVerdi(periode.verdi)}
                          </Timeline.Period>
                        );
                      })}
                    </Timeline.Row>
                  );
                })}
              </Timeline>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}
