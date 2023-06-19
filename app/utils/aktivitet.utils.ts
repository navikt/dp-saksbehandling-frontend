import parseISO from "date-fns/parseISO";
import type {
  IAktivitet,
  IRapporteringsperiode,
  TAktivitetstype,
} from "~/models/rapporteringsperiode.server";

export function hentAktivitetOppsummert(
  periode: IRapporteringsperiode,
  typeAktivitet: TAktivitetstype
) {
  const aktuelleAktiviteter: IAktivitet[] = periode.dager
    .map((dag) => {
      return dag.aktiviteter.filter((aktivitet) => aktivitet.type === typeAktivitet);
    })
    .flat();

  console.log("Aktyelle aktiviteter", aktuelleAktiviteter);

  const durations = aktuelleAktiviteter.map((aktivitet) => {
    console.log("aktivitet", aktivitet);
    return parseISO(aktivitet.timer);
  });

  console.log(durations);
  if (durations.length > 0) {
    console.log("Gjør noe kalkuleringer her");
  } else {
    return "0";
  }
}
