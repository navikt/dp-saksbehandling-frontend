import { format } from "date-fns";
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
