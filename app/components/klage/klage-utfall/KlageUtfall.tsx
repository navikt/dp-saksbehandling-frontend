import { Button } from "@navikt/ds-react";

import { KlageOpplysning } from "~/components/klage/klage-opplysning/KlageOpplysning";
import { hentKlage } from "~/models/saksbehandling.server";

import styles from "./KlageUtfall.module.css";

interface IProps {
  klage: Awaited<ReturnType<typeof hentKlage>>;
  readonly?: boolean;
  setAktivTab: (tab: string) => void;
}

export function KlageUtfall({ klage, readonly, setAktivTab }: IProps) {
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
      <div>
        <Button
          variant="primary"
          size="small"
          className="mt-4"
          disabled={readonly}
          onClick={() => setAktivTab("melding-om-vedtak")}
        >
          Skriv melding om vedtak
        </Button>
      </div>
    </div>
  );
}
