import {
  CheckmarkCircleFillIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CircleIcon,
  ExclamationmarkTriangleIcon,
  InformationSquareIcon,
  XMarkOctagonIcon,
} from "@navikt/aksel-icons";
import {
  BodyShort,
  Button,
  Detail,
  Heading,
  Timeline,
  TimelinePeriodProps,
} from "@navikt/ds-react";
import { add, sub } from "date-fns";
import { useState } from "react";
import { Link } from "react-router";

import { TidslinjeNavigering } from "~/components/tidslinje-navigering/TidslinjeNavigering";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { logger } from "~/utils/logger.utils";
import { formaterTallMedTusenSeperator } from "~/utils/number.utils";

import { components } from "../../../openapi/behandling-typer";

export type AntallUkerITidslinje = "2" | "4" | "8" | "16" | "52";

export interface TidslinjeStartSlutt {
  start: Date;
  end: Date;
}

interface IProps {
  behandling: components["schemas"]["BehandlingsresultatV2"];
  oppgaveId: string;
}

export function VilkårTidslinje({ behandling, oppgaveId }: IProps) {
  const sisteOpplysningDato = behandling.opplysninger
    .flatMap((gruppe) => gruppe.perioder)
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

  const [vilkårOgOpplysninger, setVilkårOgOpplysninger] = useState<
    (components["schemas"]["VurderingsresultatV2"] | components["schemas"]["OpplysningsgruppeV2"])[]
  >(behandling.vilkår);

  function oppdaterVilkårArray(regelsett: components["schemas"]["VurderingsresultatV2"]) {
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
      ...nyeAktiveOpplysninger,
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
        <Heading size={"medium"}>Vilkårsvurderinger</Heading>
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
        {prøvingsdato?.perioder.map((periode) => {
          if (periode.verdi.datatype === "dato") {
            return (
              <Timeline.Pin key={periode.id} date={new Date(periode.verdi.verdi)}>
                <BodyShort weight={"semibold"}>Prøvingsdato</BodyShort>
                <BodyShort>
                  {periode.gyldigFraOgMed ? periode.gyldigFraOgMed : "--"} –{" "}
                  {periode.gyldigTilOgMed ? periode.gyldigTilOgMed : "--"}
                </BodyShort>
              </Timeline.Pin>
            );
          }
        })}

        {vilkårOgOpplysninger.map((vilkårEllerOpplysning) => {
          if (isOpplysningsgruppe(vilkårEllerOpplysning)) {
            if (!vilkårEllerOpplysning.synlig) {
              return;
            }

            return (
              <Timeline.Row
                key={vilkårEllerOpplysning.opplysningTypeId}
                label={"\u00A0"}
                icon={
                  <Link
                    to={`/v2/oppgave/${oppgaveId}/dagpenger-rett/${behandling.behandlingId}/regelsett/${aktivtRegelsett?.navn}/opplysning/${vilkårEllerOpplysning.opplysningTypeId}`}
                    className={"ml-6"}
                  >
                    {vilkårEllerOpplysning.navn}
                  </Link>
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
            logger.error(
              `Fant ikke hovedopplysning med id ${vilkårEllerOpplysning.opplysningTypeId} for vilkår ${vilkårEllerOpplysning.navn}`,
            );

            // TODO Denne skal jo bort når ting funker
            return (
              <Timeline.Row
                key={vilkårEllerOpplysning.navn}
                label={`Mangler opplysning for vilkår`}
              >
                <Timeline.Period
                  start={sub(new Date(), { days: 10 })}
                  end={add(new Date(), { days: 10 })}
                >
                  Fant ikke hovedopplysning med id:{" "}
                  {vilkårEllerOpplysning.opplysningTypeId ?? "har ikke opplysningTypeId"} for vilkår{" "}
                  {vilkårEllerOpplysning.navn}
                </Timeline.Period>
              </Timeline.Row>
            );
          }

          return (
            <Timeline.Row
              key={vilkårEllerOpplysning.navn}
              label={"\u00A0"}
              // onClick={() => oppdaterVilkårArray(vilkårEllerOpplysning)}
              icon={
                <Button
                  variant={
                    vilkårEllerOpplysning.navn === aktivtRegelsett?.navn
                      ? "primary"
                      : "tertiary-neutral"
                  }
                  icon={
                    aktivtRegelsett?.navn === vilkårEllerOpplysning.navn ? (
                      <ChevronUpIcon />
                    ) : (
                      <ChevronDownIcon />
                    )
                  }
                  onClick={() => oppdaterVilkårArray(vilkårEllerOpplysning)}
                  size="xsmall"
                >
                  {vilkårEllerOpplysning.navn}
                </Button>
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

export function formaterOpplysningVerdi(
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
      return formaterTallMedTusenSeperator(opplysningsverdi.verdi);
    case "desimaltall":
      return formaterTallMedTusenSeperator(opplysningsverdi.verdi);
    case "penger":
      return `${formaterTallMedTusenSeperator(opplysningsverdi.verdi)} kr`;
    case "ulid":
      return `${opplysningsverdi.verdi} ulid`;
    case "boolsk":
      return opplysningsverdi.verdi ? "Ja" : "Nei";
    case "periode":
      return `${formaterTilNorskDato(opplysningsverdi.fom)} - ${formaterTilNorskDato(opplysningsverdi.tom)}`;
    case "barn":
      return `${opplysningsverdi.verdi} barn`;
  }
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
      return formaterTallMedTusenSeperator(opplysningsverdi.verdi);
    case "desimaltall":
      return formaterTallMedTusenSeperator(opplysningsverdi.verdi);
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
): TimelinePeriodProps["status"] {
  switch (opplysningsverdi.datatype) {
    case "boolsk":
      return opplysningsverdi.verdi ? "success" : "danger";
    default:
      return "info";
  }
}

export function hentFargeForVilkårPeriode(
  status: components["schemas"]["Status"],
): TimelinePeriodProps["status"] {
  switch (status) {
    case "Oppfylt":
      return "success";
    case "HarAvklaring":
      return "warning";
    case "IkkeOppfylt":
      return "danger";
    case "Info":
      return "info";
    case "IkkeRelevant":
      return "neutral";

    default:
      return "info";
  }
}

export function hentIkonForTidslinjeRegelsettPeriode(status: components["schemas"]["Status"]) {
  switch (status) {
    case "Oppfylt":
      return <CheckmarkCircleFillIcon />;
    case "HarAvklaring":
      return <ExclamationmarkTriangleIcon />;
    case "IkkeOppfylt":
      return <XMarkOctagonIcon />;
    case "Info":
      return <InformationSquareIcon />;
    case "IkkeRelevant":
      return <CircleIcon />;
    default:
      return <span>Mangler ikon for status</span>;
  }
}

function isOpplysningsgruppe(
  value: unknown,
): value is components["schemas"]["OpplysningsgruppeV2"] {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const obj = value as Record<string, unknown>;

  return (
    typeof obj.opplysningTypeId === "string" &&
    typeof obj.navn === "string" &&
    typeof obj.datatype === "string" &&
    typeof obj.synlig === "boolean" &&
    (obj.redigerbar === undefined || typeof obj.redigerbar === "boolean") &&
    (obj.redigertAvSaksbehandler === undefined ||
      typeof obj.redigertAvSaksbehandler === "boolean") &&
    Array.isArray(obj.perioder)
  );
}
