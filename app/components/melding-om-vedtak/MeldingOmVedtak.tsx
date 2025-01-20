import { MeldingOmVedtakPreview } from "~/components/melding-om-vedtak-preview/MeldingOmVedtakPreview";
import { UtvidedeBeskrivelser } from "~/components/utvidede-beskrivelser/UtvidedeBeskrivelser";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

import styles from "./MeldingOmVedtak.module.css";

export function MeldingOmVedtak({ readOnly }: { readOnly?: boolean }) {
  const { meldingOmVedtak } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  if (!meldingOmVedtak) {
    return null;
  }

  return (
    <div className={styles.container}>
      <UtvidedeBeskrivelser
        utvidetBeskrivelser={meldingOmVedtak.utvidedeBeskrivelser}
        readOnly={readOnly}
      />

      <div className={styles.previewContainer}>
        <MeldingOmVedtakPreview meldingOmVedtak={meldingOmVedtak} />
      </div>
    </div>
  );
}
