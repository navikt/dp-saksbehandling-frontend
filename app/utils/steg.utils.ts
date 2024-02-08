export function parseSkjemadata<T>(skjemadata: FormData, key: string): T {
  const skjemaVerdi = skjemadata.get(key);

  // SkjemaVerdi sin value er enten string eller File blob
  if (typeof skjemaVerdi !== "string") {
    throw new Error("input er ikke en string");
  }

  return JSON.parse(skjemaVerdi);
}
