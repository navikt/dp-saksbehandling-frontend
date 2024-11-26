import { MeldingOmVedtakPreview } from "~/components/melding-om-vedtak-preview/MeldingOmVedtakPreview";
import { UtvidedeBeskrivelser } from "~/components/utvidede-beskrivelser/UtvidedeBeskrivelser";
import { useMeldingOmVedtakTekst } from "~/hooks/useMeldingOmVedtakTekst";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

import styles from "./MeldingOmVedtak.module.css";

export function MeldingOmVedtak({ readOnly }: { readOnly?: boolean }) {
  const { utvidedeBeskrivelser } = useMeldingOmVedtakTekst();
  const { oppgave, behandling, sanityBrevBlokker, meldingOmVedtak } = useTypedRouteLoaderData(
    "routes/oppgave.$oppgaveId",
  );

  return (
    <div className={styles.container}>
      <UtvidedeBeskrivelser brevBlokker={sanityBrevBlokker} readOnly={readOnly} />

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
