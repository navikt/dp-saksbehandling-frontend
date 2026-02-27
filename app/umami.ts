export const FJERN_ID_ETTER_SEGMENT = new Set([
  "oppgave",
  "dagpenger-rett",
  "person",
  "innsending",
  "klage",
]);

export function umamiBeforeSend(type: string, payload: { url?: string }) {
  if (payload.url) {
    const segmenter = payload.url.split("/");
    for (let i = 0; i < segmenter.length - 1; i++) {
      if (FJERN_ID_ETTER_SEGMENT.has(segmenter[i])) {
        segmenter[i + 1] = ":id";
      }
    }
    payload.url = segmenter.join("/");
  }
  return payload;
}

if (typeof window !== "undefined") {
  // @ts-expect-error - setter egendefinert umami property på window
  window.umamiBeforeSend = umamiBeforeSend;
}
