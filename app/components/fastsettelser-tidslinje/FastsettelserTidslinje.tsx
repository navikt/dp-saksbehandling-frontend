import { Accordion, Heading } from "@navikt/ds-react";
import { useState } from "react";

import { TidslinjeNavigering } from "~/components/tidslinje-navigering/TidslinjeNavigering";
import { useTidslinjeNavigeringState } from "~/hooks/useTidslinjeNavigeringState";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { isDefined } from "~/utils/type-guards";

import { components } from "../../../openapi/behandling-typer";
import { OpplysningerTidslinje } from "../v2/opplysninger-tidslinje/OpplysningerTidslinje";

interface IProps {
  behandling: components["schemas"]["Behandling"];
}

export function FastsettelserTidslinje({ behandling }: IProps) {
  const { oppgaveId } = useTypeSafeParams();
  const tidslinjeState = useTidslinjeNavigeringState(behandling.opplysninger);

  const [aktivtRegelsett, setAktivtRegelsett] = useState<
    components["schemas"]["VurderingsresultatV2"] | undefined
  >();

  const aktiveOpplysninger = behandling.opplysninger.filter((opplysning) =>
    aktivtRegelsett?.opplysninger.includes(opplysning.opplysningTypeId),
  );

  const prøvingsdato = behandling.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === "0194881f-91d1-7df2-ba1d-4533f37fcc76",
  );

  const pins = prøvingsdato?.perioder
    .map((periode) => {
      if (periode.verdi.datatype === "dato") {
        return { date: new Date(periode.verdi.verdi), label: "Prøvingsdato" };
      }
    })
    .filter(isDefined);

  return (
    <div className={"card p-4"}>
      <div className={"flex content-center justify-between"}>
        <Heading size={"small"}>Resultat fra regelmotor</Heading>
        <TidslinjeNavigering
          tidslinjeStartSlutt={tidslinjeState.tidslinjeStartSlutt}
          setTidslinjeStartSlutt={tidslinjeState.setTidslinjeStartSlutt}
          antallUkerITidslinje={tidslinjeState.antallUkerITidslinje}
          setAntallUkerITidslinje={tidslinjeState.setAntallUkerITidslinje}
        />
      </div>

      <Accordion size={"small"} className={"aksel--compact"}>
        {behandling.fastsettelser
          .filter((fastsettelse) => fastsettelse.opplysninger.length > 0)
          .map((fastsettelse) => (
            <Accordion.Item key={fastsettelse.id} open={aktivtRegelsett?.id === fastsettelse.id}>
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
                <OpplysningerTidslinje
                  opplysninger={aktiveOpplysninger}
                  medLenkeTilOpplysning={true}
                  opplysningGrunnUrl={`/oppgave/${oppgaveId}/dagpenger-rett/${behandling.behandlingId}/regelsett/${aktivtRegelsett?.id}/opplysning`}
                  pins={pins}
                  eksternTidslinjeNavigeringState={tidslinjeState}
                />
              </Accordion.Content>
            </Accordion.Item>
          ))}
      </Accordion>
    </div>
  );
}
