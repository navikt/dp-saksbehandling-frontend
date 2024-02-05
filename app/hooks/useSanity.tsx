import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

export function useSanity() {
  const { sanityTexts } = useTypedRouteLoaderData("routes/saksbehandling");

  function hentAppTekstMedId(textId: string): string {
    return (
      sanityTexts?.apptekster.find((apptekst) => apptekst.textId === textId)?.valueText || textId
    );
  }

  return {
    hentAppTekstMedId,
  };
}
