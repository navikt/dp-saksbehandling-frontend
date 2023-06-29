import { parse, serialize } from "tinyduration";
import { type IAktivitet, type TAktivitetstype } from "~/models/aktivitet.server";
import type {
  IRapporteringsperiode,
  IRapporteringsperiodeDag,
} from "~/models/rapporteringsperiode.server";

function hentAktiviteter(periode: IRapporteringsperiode, typeAktivitet: TAktivitetstype) {
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
  typeAktivitet: TAktivitetstype
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

export function hentAktivitetITimer(dag: IRapporteringsperiodeDag, typeAktivitet: TAktivitetstype) {
  const aktuelleAktiviteter: IAktivitet[] = dag.aktiviteter.filter(
    (aktivitet) => aktivitet.type === typeAktivitet
  );

  const aktiviteterISekunder = aktuelleAktiviteter.map((aktivitet) => {
    return aktivitetISekunder(aktivitet);
  });

  if (aktiviteterISekunder.length > 0) {
    const sekunderTotalt = aktiviteterISekunder.reduce((partialSum, a) => partialSum + a, 0);
    const timer = sekunderTotalt / 3600;
    return norskDesimal(timer.toString());
  } else {
    return 0;
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
