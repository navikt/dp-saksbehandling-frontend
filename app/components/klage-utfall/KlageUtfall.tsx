import { KlageOpplysning } from "~/components/klage-opplysning/KlageOpplysning";
import { hentKlage } from "~/models/saksbehandling.server";

import styles from "./KlageUtfall.module.css";

interface IProps {
  klage: Awaited<ReturnType<typeof hentKlage>>;
  readonly?: boolean;
}

export function KlageUtfall({ klage, readonly }: IProps) {
  return (
    <div className={styles.utfallContainer}>
      {klage.utfallOpplysninger.map((opplysning) => (
        <KlageOpplysning
          key={opplysning.opplysningId}
          opplysning={opplysning}
          behandlingId={klage.behandlingId}
          readonly={readonly}
          visningType={"vertikal"}
        />
      ))}
    </div>
  );
}
