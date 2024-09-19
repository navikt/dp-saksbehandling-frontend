import { FritekstEditor } from "~/components/fritekt-editor/FritekstEditor";
import { MeldingOmVedtakPreview } from "~/components/melding-om-vedtak-preview/MeldingOmVedtakPreview";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { useMeldingOmVedtakTekst } from "~/hooks/useMeldingOmVedtakTekst";
import styles from "./MeldingOmVedtak.module.css";

export function MeldingOmVedtak() {
  const { utvidetBeskrivelser } = useMeldingOmVedtakTekst();
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const { oppgave, behandling, sanityBrevBlokker, meldingOmVedtakOpplysninger } =
    useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  return (
    <div className={styles.container}>
      <FritekstEditor brevBlokker={sanityBrevBlokker} />

      <div className={styles.previewContainer}>
        <MeldingOmVedtakPreview
          utvidetBeskrivelser={utvidetBeskrivelser}
          saksbehandler={saksbehandler}
          oppgave={oppgave}
          behandling={behandling}
          sanityBrevBlokker={sanityBrevBlokker}
          meldingOmVedtakOpplysninger={meldingOmVedtakOpplysninger}
        />
      </div>
    </div>
  );
}
