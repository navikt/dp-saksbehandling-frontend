import {
  CheckmarkCircleFillIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  PadlockLockedIcon,
  XMarkOctagonIcon,
} from "@navikt/aksel-icons";
import {
  BodyShort,
  Detail,
  Heading,
  HStack,
  Timeline,
  TimelinePeriodProps,
} from "@navikt/ds-react";
import classnames from "classnames";
import { add, sub } from "date-fns";
import { useState } from "react";

import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { TidslinjeNavigering } from "~/components/tidslinje-navigering/TidslinjeNavigering";
import { useOppgave } from "~/hooks/useOppgave";
import { useTidslinjeNavigeringState } from "~/hooks/useTidslinjeNavigeringState";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { logger } from "~/utils/logger.utils";
import { formaterTallMedTusenSeperator } from "~/utils/number.utils";
import { formaterOpplysningEnhet, formaterOpplysningVerdi } from "~/utils/opplysning.utils";
import { isDatoVerdi, isOpplysningsgruppe } from "~/utils/type-guards";

import { components } from "../../../openapi/behandling-typer";
import styles from "./VilkårTidslinje.module.css";

interface IProps {
  behandling: components["schemas"]["Behandling"];
}

export function VilkårTidslinje({ behandling }: IProps) {
  const { oppgaveId } = useTypeSafeParams();
  const { readonly } = useOppgave();
  const {
    antallUkerITidslinje,
    setAntallUkerITidslinje,
    tidslinjeStartSlutt,
    setTidslinjeStartSlutt,
  } = useTidslinjeNavigeringState(behandling.opplysninger);
  const [aktivtRegelsett, setAktivtRegelsett] = useState<
    components["schemas"]["Regelsett"] | undefined
  >();

  const [vilkårOgOpplysninger, setVilkårOgOpplysninger] = useState<
    (components["schemas"]["Regelsett"] | components["schemas"]["RedigerbareOpplysninger"])[]
  >(behandling.vilkår);

  function oppdaterVilkårArray(regelsett: components["schemas"]["Regelsett"]) {
    if (aktivtRegelsett?.navn === regelsett.navn) {
      setAktivtRegelsett(undefined);
      setVilkårOgOpplysninger(behandling.vilkår);
      return;
    }

    setAktivtRegelsett(regelsett);

    const nyeAktiveOpplysninger = behandling.opplysninger.filter((opplysning) =>
      regelsett.opplysninger.includes(opplysning.opplysningTypeId),
    );

    const index =
      behandling.vilkår.findIndex((vilkår) => vilkår.navn === regelsett.navn) ??
      behandling.vilkår.length - 1;

    const oppdatertData = [
      ...behandling.vilkår.slice(0, index + 1),
      ...nyeAktiveOpplysninger.reverse(),
      ...behandling.vilkår.slice(index + 1),
    ];

    setVilkårOgOpplysninger(oppdatertData);
  }

  const prøvingsdato = behandling.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === "0194881f-91d1-7df2-ba1d-4533f37fcc76",
  );

  return (
    <div className={"card p-4"}>
      <div className={"flex content-center justify-between"}>
        <Heading size={"small"}>Vilkårsvurderinger</Heading>
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
        {prøvingsdato?.perioder?.map((periode) => {
          if (isDatoVerdi(periode.verdi)) {
            return (
              <Timeline.Pin key={periode.id} date={new Date(periode.verdi.verdi)}>
                <BodyShort size={"small"} weight={"semibold"}>
                  Prøvingsdato
                </BodyShort>
                <BodyShort size={"small"}>{formaterTilNorskDato(periode.verdi.verdi)}</BodyShort>
              </Timeline.Pin>
            );
          }
        })}

        {vilkårOgOpplysninger.map((vilkårEllerOpplysning, index) => {
          if (isOpplysningsgruppe(vilkårEllerOpplysning)) {
            if (!vilkårEllerOpplysning.synlig) {
              return;
            }

            return (
              <Timeline.Row
                key={vilkårEllerOpplysning.opplysningTypeId}
                label={"\u00A0"}
                icon={
                  <HStack
                    wrap={false}
                    gap="space-2"
                    align="center"
                    className={"ml-11 overflow-hidden"}
                  >
                    {(readonly || !vilkårEllerOpplysning.redigerbar) && (
                      <div>
                        <PadlockLockedIcon fontSize="1rem" />
                      </div>
                    )}
                    <div className={"overflow-hidden"}>
                      <LoadingLink
                        tittelPåHover={vilkårEllerOpplysning.navn}
                        to={`/oppgave/${oppgaveId}/dagpenger-rett/${behandling.behandlingId}/regelsett/${aktivtRegelsett?.id}/opplysning/${vilkårEllerOpplysning.opplysningTypeId}`}
                      >
                        {vilkårEllerOpplysning.navn}
                      </LoadingLink>
                    </div>
                  </HStack>
                }
              >
                {vilkårEllerOpplysning.perioder.map((periode) => {
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
                      status={hentFargeForOpplysningPeriode(periode.verdi)}
                      icon={hentIkonForOpplysningPeriode(periode.verdi)}
                    >
                      {formaterOpplysningVerdi(periode.verdi)}
                    </Timeline.Period>
                  );
                })}
              </Timeline.Row>
            );
          }

          const hovedOpplysning = behandling.opplysninger.find(
            (opplysning) => opplysning.opplysningTypeId === vilkårEllerOpplysning.opplysningTypeId,
          );

          if (!hovedOpplysning) {
            logger.warn(
              `Fant ikke hovedopplysning med id ${vilkårEllerOpplysning.opplysningTypeId} for vilkår ${vilkårEllerOpplysning.navn}`,
            );

            // TODO Denne skal jo bort når ting funker
            return null;
          }

          return (
            <Timeline.Row
              key={vilkårEllerOpplysning.id}
              label={"\u00A0"}
              icon={
                <div className={"w-full"}>
                  <button
                    type={"button"}
                    className={classnames(styles.vilkårButton, {
                      siste: index === vilkårOgOpplysninger.length - 1,
                    })}
                    title={vilkårEllerOpplysning.navn}
                    aria-expanded={aktivtRegelsett?.id === vilkårEllerOpplysning.id}
                    onClick={() => oppdaterVilkårArray(vilkårEllerOpplysning)}
                  >
                    <span className={styles.vilkårButtonIconWrapper}>
                      {aktivtRegelsett?.id === vilkårEllerOpplysning.id ? (
                        <ChevronUpIcon className={styles.vilkårButtonIconChevron} />
                      ) : (
                        <ChevronDownIcon className={styles.vilkårButtonIconChevron} />
                      )}
                    </span>
                    <span className={styles.vilkårButtonIconChevron}>
                      {vilkårEllerOpplysning.navn}
                    </span>
                  </button>
                </div>
              }
            >
              {hovedOpplysning.perioder.map((periode, index) => {
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
                    status={hentFargeForOpplysningPeriode(
                      periode.verdi,
                      vilkårEllerOpplysning.relevantForResultat,
                    )}
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
                          {formaterOpplysningVerdi(periode.verdi)}
                        </BodyShort>
                      </div>
                    </div>
                  </Timeline.Period>
                );
              })}
            </Timeline.Row>
          );
        })}
      </Timeline>
    </div>
  );
}

export function hentIkonForOpplysningPeriode(
  opplysningsverdi: components["schemas"]["Opplysningsverdi"],
) {
  switch (opplysningsverdi.datatype) {
    case "tekst":
      return opplysningsverdi.verdi;
    case "inntekt":
      return `${opplysningsverdi.verdi} inntekt`;
    case "dato":
      return formaterTilNorskDato(opplysningsverdi.verdi);
    case "heltall":
      return `${formaterTallMedTusenSeperator(opplysningsverdi.verdi)} ${formaterOpplysningEnhet(opplysningsverdi.enhet)}`;
    case "desimaltall":
      return `${formaterTallMedTusenSeperator(opplysningsverdi.verdi)} ${formaterOpplysningEnhet(opplysningsverdi.enhet)}`;
    case "penger":
      return `${formaterTallMedTusenSeperator(opplysningsverdi.verdi)} kr`;
    case "ulid":
      return `${opplysningsverdi.verdi} ulid`;
    case "boolsk":
      return opplysningsverdi.verdi ? <CheckmarkCircleFillIcon /> : <XMarkOctagonIcon />;
    case "periode":
      return `${formaterTilNorskDato(opplysningsverdi.fom)} - ${formaterTilNorskDato(opplysningsverdi.tom)}`;
    case "barn":
      return `${opplysningsverdi.verdi} barn`;
  }
}

export function hentFargeForOpplysningPeriode(
  opplysningsverdi: components["schemas"]["Opplysningsverdi"],
  relevantForResultat?: boolean,
): TimelinePeriodProps["status"] {
  if (relevantForResultat === false) {
    return "neutral";
  }

  switch (opplysningsverdi.datatype) {
    case "boolsk":
      return opplysningsverdi.verdi ? "success" : "danger";
    default:
      return "info";
  }
}
