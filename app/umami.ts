export function umamiBeforeSend(type: string, payload: { url?: string }) {
  const fjernIdEtterSegment = new Set([
    "oppgave",
    "dagpenger-rett",
    "person",
    "innsending",
    "klage",
  ]);
  if (payload.url) {
    const segmenter = payload.url.split("/");
    for (let i = 0; i < segmenter.length - 1; i++) {
      if (fjernIdEtterSegment.has(segmenter[i])) {
        segmenter[i + 1] = ":id";
      }
    }
    payload.url = segmenter.join("/");
  }
  return payload;
}
