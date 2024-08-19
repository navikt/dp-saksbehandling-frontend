import { useLoaderData } from "@remix-run/react";
import type { loader } from "~/routes/oppgave.$oppgaveId.melding-om-vedtak";
import { FritekstEditor } from "~/components/fritekt-editor/FritekstEditor";
import { MeldingOmVedtakPreview } from "~/components/melding-om-vedtak-preview/MeldingOmVedtakPreview";
import styles from "./MeldingOmVedtak.module.css";

export function MeldingOmVedtak() {
  const { sanityBrevBlokker } = useLoaderData<typeof loader>();

  return (
    <div className={styles.container}>
      <FritekstEditor brevBlokker={sanityBrevBlokker} />

      <div className={styles.previewContainer}>
        <MeldingOmVedtakPreview />
      </div>
    </div>
  );
}
