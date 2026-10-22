import { Accordion, Heading } from "@navikt/ds-react";
import { useSearchParams } from "react-router";

import { OpplysningPerioderTabell } from "~/components/opplysning-perioder-tabell/OpplysningPerioderTabell";
import { TidslinjeNavigering } from "~/components/tidslinje-navigering/TidslinjeNavigering";
import { useBehandling } from "~/hooks/useBehandling";
import { useTidslinjeNavigeringState } from "~/hooks/useTidslinjeNavigeringState";
import { skalViseRegelsett } from "~/utils/behandling.utils";
import { skalViseOpplysning } from "~/utils/opplysning.utils";

import { components } from "../../../openapi/behandling-typer";
import { OpplysningerTidslinje } from "../opplysninger-tidslinje/OpplysningerTidslinje";

export function FastsettelserTidslinje() {
  const { behandling, prøvingsdatoOpplysning, visArvedeOpplysninger } = useBehandling();
  const tidslinjeState = useTidslinjeNavigeringState(behandling);
  const [searchParams, setSearchParams] = useSearchParams();
  const valgtOpplysningId = searchParams.get("opplysning");

  const pins = prøvingsdatoOpplysning?.perioder
    .map((periode) => {
      if (periode.verdi.datatype === "dato") {
        return { date: new Date(periode.verdi.verdi), label: "Prøvingsdato" };
      }
    })
    .filter((pin): pin is { date: Date; label: string } => pin !== undefined);

  const fastsettelserSomSkalVises = behandling.fastsettelser.filter((fastsettelse) =>
    skalViseRegelsett(fastsettelse, behandling.opplysninger, visArvedeOpplysninger),
  );
  const aktivtRegelsett = fastsettelserSomSkalVises.find((fastsettelse) =>
    fastsettelse.opplysninger.includes(valgtOpplysningId ?? ""),
  );

  function hentOpplysninger(regelsett: components["schemas"]["Regelsett"]) {
    return behandling.opplysninger.filter(
      (opplysning) =>
        regelsett.opplysninger.includes(opplysning.opplysningTypeId) &&
        skalViseOpplysning(opplysning, visArvedeOpplysninger),
    );
  }

  function opplysningSearch(opplysningId?: string) {
    const params = new URLSearchParams(searchParams);
    if (opplysningId) {
      params.set("opplysning", opplysningId);
    } else {
      params.delete("opplysning");
    }
    return params;
  }

  function toggleRegelsett(regelsett: components["schemas"]["Regelsett"]) {
    const opplysningId =
      aktivtRegelsett?.id === regelsett.id
        ? undefined
        : hentOpplysninger(regelsett)[0]?.opplysningTypeId;
    setSearchParams(opplysningSearch(opplysningId), { preventScrollReset: true });
  }

  if (fastsettelserSomSkalVises.length === 0) {
    return null;
  }

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
        {fastsettelserSomSkalVises.map((fastsettelse) => {
          const opplysninger = hentOpplysninger(fastsettelse);
          const erUtvidet = aktivtRegelsett?.id === fastsettelse.id;
          const valgtOpplysning = opplysninger.find(
            (opplysning) => opplysning.opplysningTypeId === valgtOpplysningId,
          );

          return (
            <Accordion.Item key={fastsettelse.id} open={erUtvidet}>
              <Accordion.Header onClick={() => toggleRegelsett(fastsettelse)}>
                {fastsettelse.navn}
              </Accordion.Header>
              <Accordion.Content>
                <OpplysningerTidslinje
                  opplysninger={opplysninger}
                  medLenkeTilOpplysning={true}
                  opplysningUrlBuilder={(opplysningId) =>
                    `?${opplysningSearch(opplysningId).toString()}`
                  }
                  pins={pins}
                  eksternTidslinjeNavigeringState={tidslinjeState}
                  relevantForResultat={fastsettelse.relevantForResultat}
                />
                {valgtOpplysning && (
                  <div className="mt-4">
                    <OpplysningPerioderTabell
                      opplysning={valgtOpplysning}
                      regelsettId={fastsettelse.id}
                    />
                  </div>
                )}
              </Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
}
