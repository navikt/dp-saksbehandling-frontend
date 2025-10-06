import {
  CheckmarkCircleFillIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CircleIcon,
  ExclamationmarkTriangleIcon,
  InformationSquareIcon,
  XMarkOctagonIcon,
} from "@navikt/aksel-icons";
import { Button, Heading, Timeline, TimelinePeriodProps } from "@navikt/ds-react";
import { add, sub } from "date-fns";
import { useState } from "react";
import { Link } from "react-router";

import { TidslinjeNavigering } from "~/components/tidslinje-navigering/TidslinjeNavigering";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { formaterTallMedTusenSeperator } from "~/utils/number.utils";

import { components } from "../../../openapi/behandling-typer";

export type AntallUkerITidslinje = "2" | "4" | "8" | "16" | "52";

export interface TidslinjeStartSlutt {
  start: Date;
  end: Date;
}

interface IProps {
  behandling: components["schemas"]["Behandling"];
  oppgaveId: string;
}

export function VilkårTidslinje({ behandling, oppgaveId }: IProps) {
  const sisteOpplysningDato = behandling.opplysningsgrupper
    .flatMap((gruppe) => gruppe.opplysninger)
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
    components["schemas"]["Regelsett"] | undefined
  >();

  const [vilkårOgOpplysninger, setVilkårOgOpplysninger] = useState<
    (components["schemas"]["Regelsett"] | components["schemas"]["Opplysningsgruppe"])[]
  >(behandling.vilkår);

  function oppdaterVilkårArray(regelsett: components["schemas"]["Regelsett"]) {
    if (aktivtRegelsett?.navn === regelsett.navn) {
      setAktivtRegelsett(undefined);
      setVilkårOgOpplysninger(behandling.vilkår);
      return;
    }

    setAktivtRegelsett(regelsett);

    const nyeAktiveOpplysninger = behandling.opplysningsgrupper.filter((opplysning) =>
      regelsett.opplysningTypeIder.includes(opplysning.opplysningTypeId),
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

  return (
    <div className={"p-4"}>
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
          {vilkårOgOpplysninger.map((vilkårEllerOpplysning) => {
            if (isOpplysningsgruppe(vilkårEllerOpplysning)) {
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
                  {vilkårEllerOpplysning.opplysninger.map((periode) => {
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
                        // @ts-expect-error Typefeil forsvinner i v2
                        icon={formaterOpplysningVerdi(periode.verdien)}
                      >
                        {/*// @ts-expect-error Typefeil forsvinner i v2*/}
                        {formaterOpplysningVerdi(periode.verdien)}
                      </Timeline.Period>
                    );
                  })}
                </Timeline.Row>
              );
            }

            return (
              <Timeline.Row
                key={vilkårEllerOpplysning.navn}
                label={"\u00A0"}
                onClick={() => oppdaterVilkårArray(vilkårEllerOpplysning)}
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
                {vilkårEllerOpplysning.perioder?.map((periode, index) => {
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
                      status={hentFargeForVilkårPeriode(periode.status)}
                      icon={hentIkonForTidslinjeRegelsettPeriode(periode.status)}
                    >
                      {periode.status}
                    </Timeline.Period>
                  );
                })}
              </Timeline.Row>
            );
          })}
        </Timeline>
      </div>
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
  item: components["schemas"]["Regelsett"] | components["schemas"]["Opplysningsgruppe"],
): item is components["schemas"]["Opplysningsgruppe"] {
  return (item as components["schemas"]["Opplysningsgruppe"]).opplysningTypeId !== undefined;
}
