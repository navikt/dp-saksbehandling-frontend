import type { Duration } from "tinyduration";
import { parse, serialize } from "tinyduration";
import { type IAktivitet, type TAktivitetType } from "~/models/aktivitet.server";
import type {
  IRapporteringsperiode,
  IRapporteringsperiodeDag,
} from "~/models/rapporteringsperiode.server";

function hentAktiviteter(periode: IRapporteringsperiode, typeAktivitet: TAktivitetType) {
  return periode.dager
    .map((dag) => {
      return dag.aktiviteter.filter((aktivitet) => aktivitet.type === typeAktivitet);
    })
    .flat();
}

function aktivitetISekunder(aktivitet: IAktivitet) {
  const duration: Duration = parse(aktivitet.timer);

  const timer = duration.hours || 0;
  const minutter = duration.minutes || 0;
  const sekunder = duration.seconds || 0;

  return timer * 3600 + minutter * 60 + sekunder;
}

export function norskDesimal(tid: string) {
  return tid.replace(/\./g, ",");
}

export function hentAllAktivitetITimer(
  periode: IRapporteringsperiode,
  typeAktivitet: TAktivitetType,
) {
  const aktuelleAktiviteter: IAktivitet[] = hentAktiviteter(periode, typeAktivitet);

  const aktiviteterISekunder = aktuelleAktiviteter.map((aktivitet) => {
    return aktivitetISekunder(aktivitet);
  });

  if (aktiviteterISekunder.length > 0) {
    const sekunderTotalt = aktiviteterISekunder.reduce((partialSum, a) => partialSum + a, 0);
    const timer = sekunderTotalt / 3600;
    return norskDesimal(timer.toString());
  } else {
    return "0";
  }
}

export function hentAktivitetITimer(dag: IRapporteringsperiodeDag, typeAktivitet: TAktivitetType) {
  const aktuelleAktiviteter: IAktivitet[] = dag.aktiviteter.filter(
    (aktivitet) => aktivitet.type === typeAktivitet,
  );

  const aktiviteterISekunder = aktuelleAktiviteter.map((aktivitet) => {
    return aktivitetISekunder(aktivitet);
  });

  if (aktiviteterISekunder.length > 0) {
    const sekunderTotalt = aktiviteterISekunder.reduce((partialSum, a) => partialSum + a, 0);
    const timer = sekunderTotalt / 3600;
    return norskDesimal(timer.toString());
  } else {
    return "0";
  }
}

export function timerTilDuration(tid: string) {
  const tidsdel = tid.replace(/\./g, ",").split(",");
  const timer = parseInt(tidsdel[0]) || 0;
  const minutter = parseInt(tidsdel[1]) || 0;

  return serialize({
    hours: timer,
    minutes: minutter * 6,
  });
}

export function hentAktivitetIDager(dag: IRapporteringsperiodeDag, typeAktivitet: TAktivitetType) {
  const timerAsString = hentAktivitetITimer(dag, typeAktivitet);
  const timer = Math.floor(parseInt(timerAsString) / 24);

  return norskDesimal(timer.toString());
}

export function hentAllAktivitetIDager(
  periode: IRapporteringsperiode,
  typeAktivitet: TAktivitetType,
) {
  const sumAntallTimer = periode.dager.reduce((partialSum, dag) => {
    const timer = hentAktivitetIDager(dag, typeAktivitet);
    return partialSum + parseFloat(timer);
  }, 0);

  return norskDesimal(sumAntallTimer.toString());
}
