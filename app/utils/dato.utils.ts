import { format } from "date-fns";
import { nb } from "date-fns/locale";

export function formaterNorskDato(dato: string, medKlokkeslett?: boolean) {
  // 1. januar 2021 - 12:00:00
  if (medKlokkeslett) {
    return format(new Date(dato), "dd.MM.yyyy - HH:mm:ss", {
      locale: nb,
    });
  }

  // 1. januar 2021
  return format(new Date(dato), "dd.MM.yyyy", {
    locale: nb,
  });
}

export function formaterNorskDatoITekst(dato: string) {
  // 1. januar 2021
  return format(new Date(dato), "d. MMMM yyyy", { locale: nb });
}
