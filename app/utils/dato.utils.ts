import { format, getISOWeek } from "date-fns";
import { nb } from "date-fns/locale";

export function hentFormattertDato(dato: string, medKlokkeslett?: boolean) {
  if (medKlokkeslett) {
    return format(new Date(dato), "d. MMMM yyyy, HH:mm", {
      locale: nb,
    });
  }

  return format(new Date(dato), "d. MMMM yyyy", {
    locale: nb,
  });
}

export function formaterPeriodeTilUkenummer(fraOgMed: string, tilOgMed: string) {
  const startUkenummer = getISOWeek(new Date(fraOgMed));
  const sluttUkenummer = getISOWeek(new Date(tilOgMed));

  return `${startUkenummer} - ${sluttUkenummer}`;
}
