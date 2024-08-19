import { format } from "date-fns";
import { nb } from "date-fns/locale";

export function formaterNorskDato(dato: string, medKlokkeslett?: boolean) {
  if (medKlokkeslett) {
    return format(new Date(dato), "dd.MM.yyyy - HH:mm:ss", {
      locale: nb,
    });
  }

  return format(new Date(dato), "dd.MM.yyyy", {
    locale: nb,
  });
}
