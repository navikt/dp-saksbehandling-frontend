import { JournalpostResponse } from "~/api/journalpost";
import { isDefined } from "~/utils/type-guards";

export type Journalpost = Exclude<JournalpostResponse, { variant: string }>;

export function hentDokumenterMedTilgang(journalpost: Journalpost) {
  return journalpost?.dokumenter
    ?.map((dokument) => {
      if (!dokument) return null;

      const dokumentvarianterMedTilgang = dokument.dokumentvarianter.filter(
        (variant) => variant?.saksbehandlerHarTilgang && variant?.variantformat !== "ORIGINAL",
      );

      if (dokumentvarianterMedTilgang.length === 0) return null;
      return { ...dokument, dokumentvarianter: dokumentvarianterMedTilgang };
    })
    .filter(isDefined);
}
