import type { IBehandling } from "~/models/behandling.server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getSanityBrevBlokkIderForVedtak(behandling: IBehandling): string[] {
  const brevBlokkIder: string[] = [];
  const kravPaaDagpenger = behandling.opplysning.find((o) => o.navn === "Krav på dagpenger")?.verdi;
  const oppfyllerMinsteinntekt = behandling.opplysning.find(
    (o) => o.navn === "Krav til minsteinntekt",
  )?.verdi;

  if (!kravPaaDagpenger) {
    brevBlokkIder.push("brev.blokk.vedtak-avslag");
  }

  if (!kravPaaDagpenger && !oppfyllerMinsteinntekt) {
    brevBlokkIder.push("brev.blokk.begrunnelse-avslag-minsteinntekt");
  }

  //statiske blokker
  brevBlokkIder.push("brev.blokk.rett-til-aa-klage");
  brevBlokkIder.push("brev.blokk.rett-til-innsyn");
  brevBlokkIder.push("brev.blokk.sporsmaal");

  return brevBlokkIder;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getSanityBrevBlokkIderForVedtakVedlegg(behandling: IBehandling): string[] {
  const brevBlokkIder: string[] = [];
  const kravPaaDagpenger = behandling.opplysning.find((o) => o.navn === "Krav på dagpenger")?.verdi;

  if (kravPaaDagpenger) {
    brevBlokkIder.push("brev.blokk.vedlegg-innvilget-orientering");
    brevBlokkIder.push("brev.blokk.vedlegg-veiledning-fra-nav");
    brevBlokkIder.push("brev.blokk.vedlegg-innvilget-plikter-og-rettigheter");
  } else {
    brevBlokkIder.push("brev.blokk.vedlegg-avslag-orientering");
    brevBlokkIder.push("brev.blokk.vedlegg-veiledning-fra-nav");
    brevBlokkIder.push("brev.blokk.vedlegg-avslag-klage");
  }

  return brevBlokkIder;
}
