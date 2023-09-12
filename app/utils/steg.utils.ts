import { type TBehandlingStegSvartype } from "~/models/oppgave.server";

export function hentFormattertSvar(svar: string, svartype: TBehandlingStegSvartype) {
  switch (svartype) {
    case "Double": {
      return svar.replace(/,/g, ".");
    }

    case "LocalDate": {
      return svar.split(".").reverse().join("-");
    }

    default: {
      return svar;
    }
  }
}

export function parseMetadata<T>(skjemaData: FormData, key: string): T {
  const inputVerdi = skjemaData.get(key);

  // Alle inputfelt sin value er enten string eller File blob
  if (typeof inputVerdi !== "string") {
    throw new Error("input er ikke en string");
  }

  return JSON.parse(inputVerdi);
}
