import { format } from "date-fns";
import nbLocale from "date-fns/locale/nb";

export function hentFormattertDato(dato: string) {
  return format(new Date(dato), "dd. MMMM yyyy", {
    locale: nbLocale,
  });
}
