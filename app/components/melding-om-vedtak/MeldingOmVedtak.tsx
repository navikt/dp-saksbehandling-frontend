import { UtvidedeBeskrivelser } from "~/components/utvidede-beskrivelser/UtvidedeBeskrivelser";
import { MeldingOmVedtakPreview } from "~/components/melding-om-vedtak-preview/MeldingOmVedtakPreview";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { useMeldingOmVedtakTekst } from "~/hooks/useMeldingOmVedtakTekst";
import styles from "./MeldingOmVedtak.module.css";

export function MeldingOmVedtak() {
  const { utvidedeBeskrivelser } = useMeldingOmVedtakTekst();
  const { oppgave, behandling, sanityBrevBlokker, meldingOmVedtak } = useTypedRouteLoaderData(
    "routes/oppgave.$oppgaveId",
  );

  return (
    <div className={styles.container}>
      <UtvidedeBeskrivelser brevBlokker={sanityBrevBlokker} />

      <div className={styles.previewContainer}>
        <MeldingOmVedtakPreview
          utvidedeBeskrivelser={utvidedeBeskrivelser}
          oppgave={oppgave}
          behandling={behandling}
          sanityBrevBlokker={sanityBrevBlokker}
          meldingOmVedtakOpplysninger={meldingOmVedtak.opplysninger}
        />
      </div>
    </div>
  );
}
