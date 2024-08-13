import { format } from "date-fns";
import { nb } from "date-fns/locale";

export function formaterNorskDato(dato: string) {
  return format(new Date(dato), "dd.MM.yyyy", {
    locale: nb,
  });
}
