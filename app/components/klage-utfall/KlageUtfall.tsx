import { Fragment } from "react";

import { KlageOpplysning } from "~/components/klage-opplysning/KlageOpplysning";
import { MeldingOmVedtakPreview } from "~/components/melding-om-vedtak-preview/MeldingOmVedtakPreview";
import { hentKlage } from "~/models/saksbehandling.server";

import styles from "./KlageUtfall.module.css";

interface IProps {
  klage: Awaited<ReturnType<typeof hentKlage>>;
}

export function KlageUtfall({ klage }: IProps) {
  return (
    <div className={styles.utfallContainer}>
      <div>
        {klage.utfallOpplysninger.map((opplysning) => (
          <Fragment key={opplysning.opplysningId}>
            {opplysning.navn}
            <KlageOpplysning opplysning={opplysning} behandlingId={klage.behandlingId} />
          </Fragment>
        ))}
      </div>

      <MeldingOmVedtakPreview
        html={klage.meldingOmVedtak.html}
        utvidedeBeskrivelser={klage.meldingOmVedtak.utvidedeBeskrivelser}
      />
    </div>
  );
}
