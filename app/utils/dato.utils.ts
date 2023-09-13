import { format, getISOWeek } from "date-fns";
import nbLocale from "date-fns/locale/nb";

export function hentFormattertDato(dato: string, medKlokkeslett?: boolean) {
  if (medKlokkeslett) {
    return format(new Date(dato), "d. MMMM yyyy, HH:mm", {
      locale: nbLocale,
    });
  }

  return format(new Date(dato), "d. MMMM yyyy", {
    locale: nbLocale,
  });
}

export function formaterPeriodeTilUkenummer(fraOgMed: string, tilOgMed: string) {
  const startUkenummer = getISOWeek(new Date(fraOgMed));
  const sluttUkenummer = getISOWeek(new Date(tilOgMed));

  return `${startUkenummer} - ${sluttUkenummer}`;
}
