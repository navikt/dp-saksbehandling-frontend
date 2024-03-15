import { format } from "date-fns";
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

export function formaterNorskDato(dato: string) {
  return format(new Date(dato), "dd.MM.yyyy", {
    locale: nb,
  });
}
