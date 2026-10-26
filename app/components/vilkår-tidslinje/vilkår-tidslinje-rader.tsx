import {
  CheckmarkCircleFillIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CircleSlashIcon,
  PadlockLockedIcon,
  XMarkOctagonIcon,
} from "@navikt/aksel-icons";
import { BodyShort, Detail, HStack, Link, Timeline, TimelinePeriodProps } from "@navikt/ds-react";
import classnames from "classnames";
import { add, sub } from "date-fns";
import { Link as RouterLink } from "react-router";

import { components } from "@/openapi/behandling-typer";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { formaterOpplysningVerdi } from "~/utils/opplysning.utils";

import styles from "./VilkårTidslinje.module.css";

type Opplysning = components["schemas"]["RedigerbareOpplysninger"];
type Regelsett = components["schemas"]["Regelsett"];

export function renderOpplysningRad({
  opplysning,
  valgt,
  readonly,
  search,
}: {
  opplysning: Opplysning;
  valgt: boolean;
  readonly: boolean;
  search: string;
}) {
  return (
    <Timeline.Row
      key={opplysning.opplysningTypeId}
      label={"\u00A0"}
      icon={
        <HStack wrap={false} gap="space-2" align="center" className="ml-11 overflow-hidden">
          {(readonly || !opplysning.redigerbar) && (
            <div>
              <PadlockLockedIcon fontSize="1rem" />
            </div>
          )}
          <div className="overflow-hidden">
            <Link
              as={RouterLink}
              title={opplysning.navn}
              className={valgt ? "font-ax-bold" : undefined}
              aria-current={valgt ? "true" : undefined}
              preventScrollReset
              to={search}
            >
              {opplysning.navn}
            </Link>
          </div>
        </HStack>
      }
    >
      {opplysning.perioder.map((periode) => (
        <Timeline.Period
          key={periode.id}
          start={
            periode.gyldigFraOgMed
              ? new Date(periode.gyldigFraOgMed)
              : sub(new Date(), { years: 1 })
          }
          end={
            periode.gyldigTilOgMed
              ? new Date(periode.gyldigTilOgMed)
              : add(new Date(), { years: 1 })
          }
          status="info"
          icon={formaterOpplysningVerdi(periode.verdi)}
        >
          {formaterOpplysningVerdi(periode.verdi)}
        </Timeline.Period>
      ))}
    </Timeline.Row>
  );
}

export function renderVilkårRad({
  regelsett,
  hovedOpplysning,
  utvidet,
  siste,
  onToggle,
}: {
  regelsett: Regelsett;
  hovedOpplysning: Opplysning;
  utvidet: boolean;
  siste: boolean;
  onToggle: () => void;
}) {
  return (
    <Timeline.Row
      key={regelsett.id}
      label={"\u00A0"}
      icon={
        <div className="w-full">
          <button
            type="button"
            className={classnames(styles.vilkårButton, { siste })}
            title={regelsett.navn}
            aria-expanded={utvidet}
            onClick={onToggle}
          >
            <span className={styles.vilkårButtonIconWrapper}>
              {utvidet ? (
                <ChevronUpIcon className={styles.vilkårButtonIconChevron} />
              ) : (
                <ChevronDownIcon className={styles.vilkårButtonIconChevron} />
              )}
            </span>
            <span className={styles.vilkårButtonIconChevron}>{regelsett.navn}</span>
          </button>
        </div>
      }
    >
      {hovedOpplysning.perioder.map((periode) => (
        <Timeline.Period
          key={periode.id}
          start={
            periode.gyldigFraOgMed
              ? new Date(periode.gyldigFraOgMed)
              : sub(new Date(), { years: 1 })
          }
          end={
            periode.gyldigTilOgMed
              ? new Date(periode.gyldigTilOgMed)
              : add(new Date(), { years: 1 })
          }
          status={hentFargeForOpplysningPeriode(periode.verdi, regelsett.relevantForResultat)}
          icon={hentIkonForOpplysningPeriode(periode.verdi, regelsett.relevantForResultat)}
        >
          <div className="flex flex-col gap-1">
            {regelsett.relevantForResultat === false && (
              <HStack gap="space-2" align="center">
                <CircleSlashIcon aria-hidden />
                <Detail textColor="subtle" className="translate-y-px">
                  Ikke relevant
                </Detail>
              </HStack>
            )}
            <div className="flex gap-4">
              <div>
                <Detail textColor="subtle">Fra og med</Detail>
                <BodyShort size="small">
                  {periode.gyldigFraOgMed ? formaterTilNorskDato(periode.gyldigFraOgMed) : "--"}
                </BodyShort>
              </div>
              <div>
                <Detail textColor="subtle">Til og med</Detail>
                <BodyShort size="small">
                  {periode.gyldigTilOgMed ? formaterTilNorskDato(periode.gyldigTilOgMed) : "--"}
                </BodyShort>
              </div>
              <div>
                <Detail textColor="subtle">Verdi</Detail>
                <BodyShort size="small">{formaterOpplysningVerdi(periode.verdi)}</BodyShort>
              </div>
            </div>
          </div>
        </Timeline.Period>
      ))}
    </Timeline.Row>
  );
}

export function hentIkonForOpplysningPeriode(
  opplysningsverdi: components["schemas"]["Opplysningsverdi"],
  relevantForResultat?: boolean,
) {
  if (relevantForResultat === false) {
    return <CircleSlashIcon />;
  }
  if (opplysningsverdi.datatype === "boolsk") {
    return opplysningsverdi.verdi ? <CheckmarkCircleFillIcon /> : <XMarkOctagonIcon />;
  }
  return formaterOpplysningVerdi(opplysningsverdi);
}

export function hentFargeForOpplysningPeriode(
  opplysningsverdi: components["schemas"]["Opplysningsverdi"],
  relevantForResultat?: boolean,
): TimelinePeriodProps["status"] {
  if (relevantForResultat === false) {
    return "neutral";
  }
  if (opplysningsverdi.datatype === "boolsk") {
    return opplysningsverdi.verdi ? "success" : "danger";
  }
  return "info";
}
