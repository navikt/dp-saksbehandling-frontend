import { Fragment } from "react";

import { KlageOpplysning } from "~/components/klage-opplysning/KlageOpplysning";
import { MeldingOmVedtakPreview } from "~/components/melding-om-vedtak-preview/MeldingOmVedtakPreview";
import { hentKlage } from "~/models/saksbehandling.server";

import styles from "./KlageUtfall.module.css";

interface IProps {
  klage: Awaited<ReturnType<typeof hentKlage>>;
  readonly?: boolean;
}

export function KlageUtfall({ klage, readonly }: IProps) {
  return (
    <div className={styles.utfallContainer}>
      <div>
        {klage.utfallOpplysninger.map((opplysning) => (
          <Fragment key={opplysning.opplysningId}>
            <KlageOpplysning
              opplysning={opplysning}
              behandlingId={klage.behandlingId}
              readonly={readonly}
              visningType={"vertikal"}
            />
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
