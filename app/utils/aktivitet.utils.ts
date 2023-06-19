import { parse, toSeconds } from "iso8601-duration";
import type {
  IAktivitet,
  IRapporteringsperiode,
  TAktivitetstype,
} from "~/models/rapporteringsperiode.server";

function hentAktiviteter(periode: IRapporteringsperiode, typeAktivitet: TAktivitetstype) {
  return periode.dager
    .map((dag) => {
      return dag.aktiviteter.filter((aktivitet) => aktivitet.type === typeAktivitet);
    })
    .flat();
}

export function hentAktiviteterITimer(
  periode: IRapporteringsperiode,
  typeAktivitet: TAktivitetstype
) {
  const aktuelleAktiviteter: IAktivitet[] = hentAktiviteter(periode, typeAktivitet);

  const aktiviteterISekunder = aktuelleAktiviteter.map((aktivitet) => {
    return toSeconds(parse(aktivitet.timer));
  });

  if (aktiviteterISekunder.length > 0) {
    const sekunderTotalt = aktiviteterISekunder.reduce((partialSum, a) => partialSum + a, 0);
    const tilTimer = sekunderTotalt / 3600;
    return tilTimer;
  } else {
    return "0";
  }
}