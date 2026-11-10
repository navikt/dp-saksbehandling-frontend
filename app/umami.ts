declare global {
  interface Window {
    umamiBeforeSend: typeof umamiBeforeSend;
  }
}

export function umamiBeforeSend(type: string, payload: { url?: string }) {
  const fjernIdEtterSegment = new Set([
    "oppgave",
    "dagpenger-rett",
    "person",
    "innsending",
    "klage",
    "tilbakekreving",
    "oppfolging",
    "barneliste",
  ]);
  if (payload.url) {
    const segmenter = payload.url.split("/");
    for (let i = 0; i < segmenter.length - 1; i++) {
      if (!fjernIdEtterSegment.has(segmenter[i])) {
        continue;
      }

      if (segmenter[i] === "barneliste" && segmenter[i + 1] === "ny") {
        continue;
      }

      segmenter[i + 1] = ":id";
    }
    payload.url = segmenter.join("/");
  }
  return payload;
}

export function installUmamiBeforeSend() {
  if (typeof window !== "undefined") {
    window.umamiBeforeSend = umamiBeforeSend;
  }
}

installUmamiBeforeSend();
