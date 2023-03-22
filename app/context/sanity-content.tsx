import { createContext, useContext, type PropsWithChildren } from "react";
import type { ISanityFaktum, ISanitySvaralternativ, ISanityTexts } from "~/sanity/sanity.types";

export const SanityContext = createContext<ISanityTexts | undefined>(undefined);

interface IProps {
  initialState: ISanityTexts;
}

function SanityProvider(props: PropsWithChildren<IProps>) {
  return (
    <SanityContext.Provider value={props.initialState}>{props.children}</SanityContext.Provider>
  );
}

function useSanityTekst() {
  const context = useContext(SanityContext);
  if (context === undefined) {
    throw new Error("useSanity must be used within a SanityProvider");
  }

  function hentFaktumTekstMedId(textId: string): ISanityFaktum | undefined {
    const faktumTekst = context?.fakta.find((faktum) => faktum.textId === textId);

    return faktumTekst;
  }

  function hentSvaralternativTekstMedId(textId: string): ISanitySvaralternativ | undefined {
    const svarAlternativTekst = context?.svaralternativer.find(
      (svaralternativ) => svaralternativ.textId === textId
    );

    return svarAlternativTekst;
  }

  return {
    hentFaktumTekstMedId,
    hentSvaralternativTekstMedId,
  };
}

export { SanityProvider, useSanityTekst };
