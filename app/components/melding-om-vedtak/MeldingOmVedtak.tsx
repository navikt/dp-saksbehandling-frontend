import { UtvidetBeskrivelser } from "~/components/utvidet-beskrivelser/UtvidetBeskrivelser";
import { MeldingOmVedtakPreview } from "~/components/melding-om-vedtak-preview/MeldingOmVedtakPreview";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { useMeldingOmVedtakTekst } from "~/hooks/useMeldingOmVedtakTekst";
import styles from "./MeldingOmVedtak.module.css";

export function MeldingOmVedtak() {
  const { utvidetBeskrivelser } = useMeldingOmVedtakTekst();
  const { oppgave, behandling, sanityBrevBlokker, meldingOmVedtak } = useTypedRouteLoaderData(
    "routes/oppgave.$oppgaveId",
  );

  return (
    <div className={styles.container}>
      <UtvidetBeskrivelser brevBlokker={sanityBrevBlokker} />

      <div className={styles.previewContainer}>
        <MeldingOmVedtakPreview
          utvidetBeskrivelser={utvidetBeskrivelser}
          oppgave={oppgave}
          behandling={behandling}
          sanityBrevBlokker={sanityBrevBlokker}
          meldingOmVedtakOpplysninger={meldingOmVedtak.opplysninger}
        />
      </div>
    </div>
  );
}
