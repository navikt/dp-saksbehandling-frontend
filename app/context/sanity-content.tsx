import { createContext, type PropsWithChildren, useContext } from "react";
import type {
  ISanityAppTekst,
  ISanityFaktum,
  ISanityInfoside,
  ISanitySvaralternativ,
  ISanityTexts,
} from "~/sanity/sanity.types";

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
    return context?.fakta.find((faktum) => faktum.textId === textId);
  }

  function hentSvaralternativTekstMedId(textId: string): ISanitySvaralternativ | undefined {
    return context?.svaralternativer.find((svaralternativ) => svaralternativ.textId === textId);
  }

  return {
    hentFaktumTekstMedId,
    hentSvaralternativTekstMedId,
  };
}

function useSanity() {
  const context = useContext(SanityContext);
  if (context === undefined) {
    throw new Error("useSanity must be used within a SanityProvider");
  }

  function getAppTekst(textId: string): string {
    return context?.apptekster.find((apptekst) => apptekst.textId === textId)?.valueText || textId;
  }

  function getInfosideTekst(slug: string): ISanityInfoside | undefined {
    return context?.infosider.find((side) => {
      return side.slug === slug;
    });
  }

  return {
    getAppTekst,
    getInfosideTekst,
  };
}

export { SanityProvider, useSanity, useSanityTekst };
