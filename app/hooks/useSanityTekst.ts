import { useRouteLoaderData } from "@remix-run/react";
import type { IRootLoader } from "~/root";
import type { ISanityFaktum, ISanitySvaralternativ } from "../sanity/sanity.types";

export function useSanityTekst() {
  const { sanityTexts } = useRouteLoaderData("root") as IRootLoader;

  function hentFaktumTekstMedId(faktumTekstId: string): ISanityFaktum | undefined {
    const tekst = sanityTexts.fakta.find((faktum) => faktum.textId === faktumTekstId);

    return tekst;
  }

  function hentSvaralternativTekstMedId(
    svaralternativeId: string
  ): ISanitySvaralternativ | undefined {
    const tekst = sanityTexts?.svaralternativer.find(
      (svaralternativ) => svaralternativ.textId === svaralternativeId
    );

    return tekst;
  }

  return { hentFaktumTekstMedId, hentSvaralternativTekstMedId };
}
