import { format, parse } from "date-fns";
import { nb } from "date-fns/locale";

/**
 * Formaterer en dato-streng til norsk datoformat.
 *
 * @param inputDato - En `Date`-instans eller en streng i (ISO-format, f.eks. `"2021-01-31T12:00:00"`).
 * @param medKlokkeslett - Om klokkeslett skal inkluderes i formatet (valgfritt).
 * @returns En dato som streng i formatet `dd.MM.yyyy` eller `dd.MM.yyyy - HH:mm:ss`.
 *
 * @throws Kaster en feil hvis dato-strengen ikke kan konverteres til en gyldig `Date`.
 */
export function formaterTilNorskDato(inputDato: Date | string, medKlokkeslett?: boolean) {
  const dato = inputDato instanceof Date ? inputDato : new Date(inputDato);

  if (isNaN(dato.getTime())) {
    throw new Error("Ugyldig datoformat. Forventet ISO-streng, f.eks. '2021-01-31T12:00:00'.");
  }

  if (medKlokkeslett) {
    // 31.01.2021 - 12:00:00
    return format(dato, "dd.MM.yyyy - HH:mm:ss", {
      locale: nb,
    });
  }

  // 31.01.2021
  return format(dato, "dd.MM.yyyy", {
    locale: nb,
  });
}

/**
 * Formaterer en dato til et backend-vennlig format (ISO-format).
 *
 * @param inputDato - En `Date`-instans eller en streng i norsk datoformat (`dd.MM.yyyy`).
 * @param medKlokkeslett - Om klokkeslett skal inkluderes i resultatet (standard er false).
 * @returns En streng på formatet `yyyy-MM-dd` eller `yyyy-MM-dd'T'HH:mm:ss`.
 *
 * @throws Kaster en feil hvis `inputDato` er en streng som ikke følger formatet `dd.MM.yyyy`.
 */
export function formaterTilBackendDato(inputDato: Date | string, medKlokkeslett?: boolean) {
  const dato = inputDato instanceof Date ? inputDato : parse(inputDato, "dd.MM.yyyy", new Date());

  if (isNaN(dato.getTime())) {
    throw new Error("inputDato må være en Date eller en streng i formatet 'dd.MM.yyyy'");
  }

  if (medKlokkeslett) {
    // 2021-01-31T12:00:00
    return format(dato, "yyyy-MM-dd'T'HH:mm:ss", { locale: nb });
  }

  // 2021-01-31
  return format(dato, "yyyy-MM-dd", { locale: nb });
}
